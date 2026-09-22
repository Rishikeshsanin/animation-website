import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Copy,
  Github,
  Grid2X2,
  Moon,
  Play,
  RefreshCw,
  Search,
  SlidersHorizontal,
  Sun,
  X,
  Zap,
} from 'lucide-react'
import {
  animations,
  buildAnimationCss,
  buildCodeSnippet,
  categories,
  type AnimationLesson,
} from './data/animations'
import { bootstrapLessons, fundamentals, type BootstrapLesson } from './data/bootstrapLessons'

const easingOptions = [
  { label: 'Smooth', value: 'cubic-bezier(.2,.8,.2,1)' },
  { label: 'Spring', value: 'cubic-bezier(.34,1.56,.64,1)' },
  { label: 'Ease out', value: 'ease-out' },
  { label: 'Ease in-out', value: 'ease-in-out' },
  { label: 'Linear', value: 'linear' },
]

const navItems = [
  ['Learn', '#learn'],
  ['Library', '#library'],
  ['Bootstrap', '#bootstrap'],
  ['Playground', '#playground'],
]

function DemoShape({ animation }: { animation: AnimationLesson }) {
  if (animation.demoShape === 'text') return <span className="demo-text">Motion</span>
  if (animation.demoShape === 'dot') return <span className="demo-dot" />
  if (animation.demoShape === 'ring') return <span className="demo-ring" />
  if (animation.demoShape === 'button') {
    return <span className="demo-button">Explore <ArrowUpRight size={13} /></span>
  }
  if (animation.demoShape === 'card') {
    return (
      <span className="demo-card">
        <span className="demo-card-media" />
        <span className="demo-card-line demo-card-line-lg" />
        <span className="demo-card-line" />
      </span>
    )
  }
  if (animation.demoShape === 'pill') {
    return <span className="demo-pill"><i /> Active</span>
  }
  if (animation.demoShape === 'icon') {
    return <span className="demo-icon"><ArrowUpRight size={22} /></span>
  }
  return (
    <span className="demo-box">
      <span />
    </span>
  )
}

function getMotionProperties(animation: AnimationLesson) {
  const source = animation.frames
  const candidates = [
    ['transform', 'Transform'],
    ['opacity', 'Opacity'],
    ['filter', 'Filter'],
    ['clip-path', 'Clip path'],
    ['box-shadow', 'Shadow'],
    ['border-radius', 'Radius'],
    ['letter-spacing', 'Tracking'],
  ] as const
  return candidates.filter(([property]) => source.includes(property)).map(([, label]) => label)
}

function AnimationCard({
  animation,
  onOpen,
}: {
  animation: AnimationLesson
  onOpen: (animation: AnimationLesson) => void
}) {
  const cardRef = useRef<HTMLElement | null>(null)
  const [previewKey, setPreviewKey] = useState(0)
  const [inView, setInView] = useState(false)
  const duration = animation.duration ?? 900
  const loops = animation.iterations === 'infinite' ? 'infinite' : '2'
  const direction = animation.iterations === 'infinite' ? 'normal' : 'alternate'

  useEffect(() => {
    const node = cardRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          setPreviewKey((value) => value + 1)
          observer.unobserve(node)
        }
      },
      { threshold: 0.38 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const replay = () => {
    setInView(true)
    setPreviewKey((value) => value + 1)
  }

  return (
    <article
      ref={cardRef}
      className="animation-card"
      onMouseEnter={replay}
      onFocus={replay}
    >
      <button
        type="button"
        className="animation-preview"
        onClick={() => onOpen(animation)}
        aria-label={`Open ${animation.title} lesson`}
      >
        <div className="preview-topline">
          <span>{animation.level}</span>
          {animation.featured && <span className="popular-chip">Popular</span>}
        </div>

        <div
          key={previewKey}
          className="preview-object"
          style={inView ? {
            animationName: `ml-${animation.id}`,
            animationDuration: `${duration}ms`,
            animationTimingFunction: animation.easing ?? 'ease',
            animationIterationCount: loops,
            animationDirection: direction,
            animationFillMode: 'both',
          } : undefined}
        >
          <DemoShape animation={animation} />
        </div>

        <span className="preview-hint">
          <Play size={12} fill="currentColor" /> hover to replay
        </span>
      </button>

      <div className="animation-card-body">
        <div className="card-kicker">
          <span>{animation.category}</span>
          <span>{duration}ms</span>
        </div>
        <h3>{animation.title}</h3>
        <p>{animation.description}</p>
        <button className="learn-link" type="button" onClick={() => onOpen(animation)}>
          Inspect animation <ArrowRight size={14} />
        </button>
      </div>
    </article>
  )
}

function BootstrapPreview({ lesson }: { lesson: BootstrapLesson }) {
  const [open, setOpen] = useState(false)
  const [slide, setSlide] = useState(0)

  if (lesson.id === 'carousel' || lesson.id === 'carousel-fade') {
    return (
      <div className={`bs-carousel-mini ${lesson.id === 'carousel-fade' ? 'is-fade' : ''}`}>
        <button type="button" onClick={() => setSlide((slide + 2) % 3)} aria-label="Previous slide">
          <ChevronLeft size={17} />
        </button>
        <div className="bs-carousel-stage">
          {[0, 1, 2].map((item) => (
            <div key={item} className={`bs-slide bs-slide-${item} ${slide === item ? 'active' : ''}`}>
              <span>0{item + 1}</span>
              <strong>{['Explore motion', 'Understand timing', 'Build better UI'][item]}</strong>
            </div>
          ))}
          <div className="bs-dots">
            {[0, 1, 2].map((item) => <i key={item} className={slide === item ? 'active' : ''} />)}
          </div>
        </div>
        <button type="button" onClick={() => setSlide((slide + 1) % 3)} aria-label="Next slide">
          <ChevronRight size={17} />
        </button>
      </div>
    )
  }

  if (lesson.id === 'collapse' || lesson.id === 'accordion') {
    return (
      <div className="bs-collapse-mini">
        <button type="button" onClick={() => setOpen(!open)}>
          <span>{lesson.id === 'accordion' ? 'What does it animate?' : 'Toggle details'}</span>
          <span className={open ? 'rotate' : ''}>+</span>
        </button>
        <div className={`bs-collapse-content ${open ? 'open' : ''}`}>
          <p>Bootstrap transitions the panel height while managing its visible state.</p>
        </div>
      </div>
    )
  }

  if (lesson.id === 'modal') {
    return (
      <div className="bs-modal-mini">
        <button type="button" className="bs-primary" onClick={() => setOpen(true)}>Open modal</button>
        <div className={`bs-modal-layer ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          <div className="bs-modal-box" onClick={(event) => event.stopPropagation()}>
            <span>Modal</span>
            <strong>Motion with purpose.</strong>
            <button type="button" onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      </div>
    )
  }

  if (lesson.id === 'offcanvas') {
    return (
      <div className="bs-offcanvas-mini">
        <button type="button" className="bs-primary" onClick={() => setOpen(true)}>Open panel</button>
        <div className={`bs-offcanvas-sheet ${open ? 'open' : ''}`}>
          <button type="button" aria-label="Close panel" onClick={() => setOpen(false)}><X size={15} /></button>
          <strong>Offcanvas</strong>
          <span>Slides from an edge.</span>
        </div>
      </div>
    )
  }

  if (lesson.id === 'toast') {
    return (
      <div className="bs-toast-mini">
        <button type="button" className="bs-primary" onClick={() => setOpen(true)}>Show toast</button>
        <div className={`bs-toast-card ${open ? 'open' : ''}`}>
          <CheckCircle2 size={16} />
          <span>Animation copied.</span>
          <button type="button" aria-label="Hide toast" onClick={() => setOpen(false)}><X size={13} /></button>
        </div>
      </div>
    )
  }

  if (lesson.id === 'dropdown') {
    return (
      <div className="bs-dropdown-mini">
        <button type="button" className="bs-primary" onClick={() => setOpen(!open)}>Animations <span>⌄</span></button>
        <div className={`bs-dropdown-menu ${open ? 'open' : ''}`}>
          <span>Fade</span>
          <span>Bounce</span>
          <span>Flip</span>
        </div>
      </div>
    )
  }

  return (
    <div className="bs-alert-mini">
      <div className={`bs-alert-card ${open ? 'hidden' : ''}`}>
        <CheckCircle2 size={17} />
        <span>Saved successfully.</span>
        <button type="button" aria-label="Dismiss alert" onClick={() => setOpen(true)}><X size={14} /></button>
      </div>
      {open && <button type="button" className="reset-alert" onClick={() => setOpen(false)}>Reset alert</button>}
    </div>
  )
}

function BootstrapCard({
  lesson,
  onOpen,
}: {
  lesson: BootstrapLesson
  onOpen: (lesson: BootstrapLesson) => void
}) {
  return (
    <article className="bootstrap-card">
      <div className="bootstrap-preview-wrap">
        <BootstrapPreview lesson={lesson} />
      </div>
      <div className="bootstrap-card-copy">
        <span className="bootstrap-badge">{lesson.badge}</span>
        <h3>{lesson.title}</h3>
        <p>{lesson.description}</p>
        <button type="button" onClick={() => onOpen(lesson)} className="learn-link">
          Study component <ArrowRight size={14} />
        </button>
      </div>
    </article>
  )
}

function App() {
  const searchRef = useRef<HTMLInputElement | null>(null)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<(typeof categories)[number]>('All')
  const [selected, setSelected] = useState<AnimationLesson | null>(null)
  const [selectedBootstrap, setSelectedBootstrap] = useState<BootstrapLesson | null>(null)
  const [duration, setDuration] = useState(900)
  const [easing, setEasing] = useState('cubic-bezier(.2,.8,.2,1)')
  const [iterations, setIterations] = useState('1')
  const [replayKey, setReplayKey] = useState(0)
  const [copied, setCopied] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => (
    localStorage.getItem('motionlab-theme') === 'light' ? 'light' : 'dark'
  ))
  const [learned, setLearned] = useState<Set<string>>(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem('motionlab-learned') ?? '[]'))
    } catch {
      return new Set()
    }
  })
  const [playgroundId, setPlaygroundId] = useState('hover-tilt')
  const [playgroundDuration, setPlaygroundDuration] = useState(900)
  const [playgroundEasing, setPlaygroundEasing] = useState('cubic-bezier(.2,.8,.2,1)')
  const [playgroundIterations, setPlaygroundIterations] = useState('infinite')
  const [playgroundKey, setPlaygroundKey] = useState(0)
  const featured = useMemo(() => animations.filter((animation) => animation.featured), [])
  const [heroIndex, setHeroIndex] = useState(0)
  const [heroKey, setHeroKey] = useState(0)

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return animations.filter((animation) => {
      const categoryMatch = category === 'All' || animation.category === category
      const searchMatch =
        !normalized ||
        animation.title.toLowerCase().includes(normalized) ||
        animation.description.toLowerCase().includes(normalized) ||
        animation.category.toLowerCase().includes(normalized) ||
        animation.tags?.some((tag) => tag.toLowerCase().includes(normalized))
      return categoryMatch && searchMatch
    })
  }, [category, query])

  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>()
    categories.forEach((item) => {
      counts.set(item, item === 'All' ? animations.length : animations.filter((animation) => animation.category === item).length)
    })
    return counts
  }, [])

  const playgroundAnimation = animations.find((animation) => animation.id === playgroundId) ?? animations[0]
  const heroAnimation = featured[heroIndex % Math.max(featured.length, 1)] ?? animations[0]
  const progress = Math.round((learned.size / animations.length) * 100)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('motionlab-theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('motionlab-learned', JSON.stringify([...learned]))
  }, [learned])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroIndex((index) => (index + 1) % Math.max(featured.length, 1))
      setHeroKey((value) => value + 1)
    }, 2800)
    return () => window.clearInterval(timer)
  }, [featured.length])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === '/' &&
        !(event.target instanceof HTMLInputElement) &&
        !(event.target instanceof HTMLTextAreaElement) &&
        !(event.target instanceof HTMLSelectElement)
      ) {
        event.preventDefault()
        searchRef.current?.focus()
      }

      if (event.key === 'Escape') {
        setSelected(null)
        setSelectedBootstrap(null)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const shouldLock = Boolean(selected || selectedBootstrap)
    document.body.style.overflow = shouldLock ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected, selectedBootstrap])

  const openLesson = (animation: AnimationLesson) => {
    setSelected(animation)
    setDuration(animation.duration ?? 900)
    setEasing(animation.easing ?? 'ease')
    setIterations(animation.iterations ?? '1')
    setReplayKey((value) => value + 1)
  }

  const copyText = async (text: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1400)
  }

  const toggleLearned = (id: string) => {
    setLearned((current) => {
      const next = new Set(current)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const surpriseMe = () => {
    openLesson(animations[Math.floor(Math.random() * animations.length)])
  }

  const injectedKeyframes = animations.map(buildAnimationCss).join('\n')

  return (
    <>
      <style>{injectedKeyframes}</style>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="MotionLab home">
          <span className="brand-mark">M</span>
          <span>MotionLab</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>

        <div className="header-actions">
          <span className="header-count">{animations.length} motions</span>
          <button
            className="icon-button"
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="icon-button github-link" href="https://github.com/Rishikeshsanin/animation-website" target="_blank" rel="noreferrer" aria-label="GitHub repository">
            <Github size={17} />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <span className="eyebrow">Interactive motion reference</span>
            <h1>Learn motion by<br />watching it <em>move.</em></h1>
            <p>
              A practical animation library for developers. Preview effects in place,
              inspect the timing, tune the easing, then copy clean CSS into your project.
            </p>

            <div className="hero-actions">
              <a className="primary-cta" href="#library">Browse the library <ArrowRight size={16} /></a>
              <button className="secondary-cta" type="button" onClick={surpriseMe}><Zap size={16} /> Random motion</button>
            </div>

            <div className="hero-meta">
              <span><strong>{animations.length}</strong> motion recipes</span>
              <span><strong>{categories.length - 1}</strong> categories</span>
              <span><strong>{bootstrapLessons.length}</strong> Bootstrap labs</span>
            </div>
          </div>

          <div className="hero-demo">
            <div className="hero-demo-toolbar">
              <span>Live preview</span>
              <div className="hero-pager">
                <button type="button" aria-label="Previous example" onClick={() => {
                  setHeroIndex((heroIndex - 1 + featured.length) % featured.length)
                  setHeroKey((value) => value + 1)
                }}><ChevronLeft size={15} /></button>
                <button type="button" aria-label="Next example" onClick={() => {
                  setHeroIndex((heroIndex + 1) % featured.length)
                  setHeroKey((value) => value + 1)
                }}><ChevronRight size={15} /></button>
              </div>
            </div>

            <div className="hero-demo-stage">
              <div
                key={heroKey}
                className="hero-demo-object"
                style={{
                  animationName: `ml-${heroAnimation.id}`,
                  animationDuration: `${heroAnimation.duration ?? 900}ms`,
                  animationTimingFunction: heroAnimation.easing ?? 'ease',
                  animationIterationCount: heroAnimation.iterations === 'infinite' ? 'infinite' : '2',
                  animationDirection: heroAnimation.iterations === 'infinite' ? 'normal' : 'alternate',
                  animationFillMode: 'both',
                }}
              >
                <DemoShape animation={heroAnimation} />
              </div>
              <span className="hero-stage-index">0{(heroIndex % featured.length) + 1}</span>
            </div>

            <div className="hero-demo-footer">
              <div>
                <span>{heroAnimation.category}</span>
                <strong>{heroAnimation.title}</strong>
              </div>
              <button type="button" onClick={() => openLesson(heroAnimation)}>Inspect <ArrowUpRight size={14} /></button>
            </div>
          </div>
        </section>

        <section className="progress-strip section-shell" aria-label="Learning progress">
          <div>
            <span>Learning progress</span>
            <strong>{learned.size} of {animations.length} saved</strong>
          </div>
          <div className="progress-track"><span style={{ width: `${progress}%` }} /></div>
          <span>{progress}%</span>
        </section>

        <section className="learn-section section-shell" id="learn">
          <div className="section-heading split-heading">
            <div>
              <span className="section-kicker">Core model</span>
              <h2>Four ideas. Almost every CSS animation.</h2>
            </div>
            <p>Understand the primitives first, then use the library as a visual reference instead of memorizing syntax.</p>
          </div>

          <div className="fundamentals-grid">
            {fundamentals.map((item) => (
              <article className="fundamental-card" key={item.step}>
                <div className="fundamental-top">
                  <span>{item.step}</span>
                  <Code2 size={17} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <code>{item.code}</code>
              </article>
            ))}
          </div>
        </section>

        <section className="library-section section-shell" id="library">
          <div className="section-heading library-heading">
            <div>
              <span className="section-kicker">Animation library</span>
              <h2>See it first. Open it when you want the details.</h2>
            </div>
            <p>Every card previews in-place. Scroll into view or hover any example to replay it without opening anything.</p>
          </div>

          <div className="library-toolbar">
            <label className="search-box">
              <Search size={18} />
              <input
                ref={searchRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search motion, property, or use case..."
                aria-label="Search animations"
              />
              {query ? (
                <button type="button" onClick={() => setQuery('')} aria-label="Clear search"><X size={15} /></button>
              ) : (
                <kbd>/</kbd>
              )}
            </label>

            <div className="category-pills" aria-label="Animation categories">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={category === item ? 'active' : ''}
                  onClick={() => setCategory(item)}
                >
                  <span>{item}</span>
                  <small>{categoryCounts.get(item)}</small>
                </button>
              ))}
            </div>
          </div>

          <div className="results-line">
            <div><Grid2X2 size={14} /> <span>{filtered.length} results</span></div>
            <button type="button" onClick={surpriseMe}><Zap size={14} /> Surprise me</button>
          </div>

          {filtered.length > 0 ? (
            <div className="animation-grid">
              {filtered.map((animation) => (
                <AnimationCard key={animation.id} animation={animation} onOpen={openLesson} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Search size={24} />
              <h3>No matching motion.</h3>
              <p>Try a broader term or reset the filters.</p>
              <button type="button" onClick={() => { setQuery(''); setCategory('All') }}>Reset filters</button>
            </div>
          )}
        </section>

        <section className="bootstrap-section" id="bootstrap">
          <div className="section-shell">
            <div className="section-heading split-heading">
              <div>
                <span className="section-kicker">Bootstrap motion lab</span>
                <h2>Know what the component is doing—not just the class name.</h2>
              </div>
              <p>Interactive component previews with the Bootstrap markup pattern behind each transition.</p>
            </div>

            <div className="bootstrap-grid">
              {bootstrapLessons.map((lesson) => (
                <BootstrapCard key={lesson.id} lesson={lesson} onOpen={setSelectedBootstrap} />
              ))}
            </div>
          </div>
        </section>

        <section className="playground-section section-shell" id="playground">
          <div className="section-heading split-heading">
            <div>
              <span className="section-kicker">Playground</span>
              <h2>Tune the motion until it feels right.</h2>
            </div>
            <p>Change duration, easing and repetition, then copy the exact CSS you just tested.</p>
          </div>

          <div className="playground">
            <div className="playground-controls">
              <div className="control-heading"><SlidersHorizontal size={15} /> Controls</div>
              <label>
                <span>Animation</span>
                <select value={playgroundId} onChange={(event) => {
                  setPlaygroundId(event.target.value)
                  setPlaygroundKey((value) => value + 1)
                }}>
                  {animations.map((animation) => <option key={animation.id} value={animation.id}>{animation.title}</option>)}
                </select>
              </label>

              <label>
                <span>Duration <strong>{playgroundDuration}ms</strong></span>
                <input
                  type="range"
                  min="180"
                  max="3200"
                  step="20"
                  value={playgroundDuration}
                  onChange={(event) => {
                    setPlaygroundDuration(Number(event.target.value))
                    setPlaygroundKey((value) => value + 1)
                  }}
                />
              </label>

              <label>
                <span>Easing</span>
                <select value={playgroundEasing} onChange={(event) => {
                  setPlaygroundEasing(event.target.value)
                  setPlaygroundKey((value) => value + 1)
                }}>
                  {easingOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
              </label>

              <label>
                <span>Iterations</span>
                <select value={playgroundIterations} onChange={(event) => {
                  setPlaygroundIterations(event.target.value)
                  setPlaygroundKey((value) => value + 1)
                }}>
                  <option value="1">Once</option>
                  <option value="2">Twice</option>
                  <option value="3">3 times</option>
                  <option value="infinite">Loop</option>
                </select>
              </label>

              <button type="button" className="play-again" onClick={() => setPlaygroundKey((value) => value + 1)}>
                <RefreshCw size={15} /> Replay
              </button>
            </div>

            <div className="playground-stage">
              <div
                key={playgroundKey}
                className="playground-object"
                style={{
                  animation: `ml-${playgroundAnimation.id} ${playgroundDuration}ms ${playgroundEasing} 0ms ${playgroundIterations} both`,
                }}
              >
                <DemoShape animation={playgroundAnimation} />
              </div>
              <span className="stage-caption">{playgroundAnimation.category} / {playgroundAnimation.title}</span>
            </div>

            <div className="playground-code">
              <div className="code-header">
                <span><Code2 size={14} /> CSS</span>
                <button type="button" onClick={() => copyText(buildCodeSnippet(playgroundAnimation, playgroundDuration, playgroundEasing, playgroundIterations))}>
                  {copied ? <Check size={14} /> : <Copy size={14} />} {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <pre><code>{buildCodeSnippet(playgroundAnimation, playgroundDuration, playgroundEasing, playgroundIterations)}</code></pre>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a className="brand footer-brand" href="#top"><span className="brand-mark">M</span><span>MotionLab</span></a>
        <p>A visual CSS and Bootstrap motion reference.</p>
        <a href="https://github.com/Rishikeshsanin/animation-website" target="_blank" rel="noreferrer">Source <ArrowUpRight size={13} /></a>
      </footer>

      {selected && (
        <div className="lesson-overlay" role="dialog" aria-modal="true" aria-label={selected.title}>
          <button className="overlay-backdrop" type="button" aria-label="Close lesson" onClick={() => setSelected(null)} />

          <section className="lesson-inspector">
            <header className="inspector-header">
              <div className="inspector-title">
                <div className="inspector-breadcrumb">
                  <span>Library</span><i>/</i><span>{selected.category}</span>
                </div>
                <div>
                  <h2>{selected.title}</h2>
                  <span className="inspector-level">{selected.level}</span>
                </div>
              </div>
              <button className="icon-button" type="button" onClick={() => setSelected(null)} aria-label="Close lesson"><X size={18} /></button>
            </header>

            <div className="inspector-layout">
              <div className="inspector-preview-pane">
                <div className="inspector-stage">
                  <div
                    key={replayKey}
                    className="lesson-demo-object"
                    style={{
                      animation: `ml-${selected.id} ${duration}ms ${easing} 0ms ${iterations} both`,
                    }}
                  >
                    <DemoShape animation={selected} />
                  </div>

                  <div className="inspector-stage-controls">
                    <button type="button" onClick={() => setReplayKey((value) => value + 1)}>
                      <RefreshCw size={14} /> Replay
                    </button>
                    <span>{duration}ms</span>
                  </div>
                </div>

                <div className="motion-timeline">
                  <div className="timeline-labels"><span>0</span><span>50</span><span>100%</span></div>
                  <div className="timeline-track">
                    <div
                      key={`timeline-${replayKey}`}
                      className="timeline-progress"
                      style={{
                        animationDuration: `${duration}ms`,
                        animationIterationCount: iterations,
                      }}
                    />
                    <i className="timeline-tick tick-a" />
                    <i className="timeline-tick tick-b" />
                  </div>
                </div>

                <div className="inspector-description">
                  <span>What it does</span>
                  <p>{selected.description}</p>
                </div>
              </div>

              <aside className="inspector-sidebar">
                <div className="sidebar-section">
                  <div className="sidebar-section-title"><SlidersHorizontal size={14} /> Motion controls</div>

                  <label>
                    <span>Duration <strong>{duration}ms</strong></span>
                    <input type="range" min="180" max="3200" step="20" value={duration} onChange={(event) => {
                      setDuration(Number(event.target.value))
                      setReplayKey((value) => value + 1)
                    }} />
                  </label>

                  <div className="easing-grid">
                    {easingOptions.map((option) => (
                      <button
                        type="button"
                        key={option.value}
                        className={easing === option.value ? 'active' : ''}
                        onClick={() => {
                          setEasing(option.value)
                          setReplayKey((value) => value + 1)
                        }}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>

                  <label>
                    <span>Iterations</span>
                    <select value={iterations} onChange={(event) => {
                      setIterations(event.target.value)
                      setReplayKey((value) => value + 1)
                    }}>
                      <option value="1">Once</option>
                      <option value="2">Twice</option>
                      <option value="3">3 times</option>
                      <option value="infinite">Loop continuously</option>
                    </select>
                  </label>
                </div>

                <div className="sidebar-section">
                  <div className="sidebar-section-title"><BookOpen size={14} /> Motion anatomy</div>
                  <div className="property-list">
                    {getMotionProperties(selected).map((property) => <span key={property}>{property}</span>)}
                  </div>
                  <div className="motion-facts">
                    <div><span>Category</span><strong>{selected.category}</strong></div>
                    <div><span>Level</span><strong>{selected.level}</strong></div>
                    <div><span>Default timing</span><strong>{selected.duration}ms</strong></div>
                  </div>
                </div>

                <button
                  type="button"
                  className={`learned-button ${learned.has(selected.id) ? 'active' : ''}`}
                  onClick={() => toggleLearned(selected.id)}
                >
                  <CheckCircle2 size={16} />
                  {learned.has(selected.id) ? 'Saved as learned' : 'Mark as learned'}
                </button>
              </aside>
            </div>

            <div className="inspector-code">
              <div className="code-header">
                <span><Code2 size={14} /> Ready-to-use CSS</span>
                <button type="button" onClick={() => copyText(buildCodeSnippet(selected, duration, easing, iterations))}>
                  {copied ? <Check size={14} /> : <Copy size={14} />} {copied ? 'Copied' : 'Copy CSS'}
                </button>
              </div>
              <pre><code>{buildCodeSnippet(selected, duration, easing, iterations)}</code></pre>
            </div>
          </section>
        </div>
      )}

      {selectedBootstrap && (
        <div className="lesson-overlay" role="dialog" aria-modal="true" aria-label={selectedBootstrap.title}>
          <button className="overlay-backdrop" type="button" aria-label="Close lesson" onClick={() => setSelectedBootstrap(null)} />
          <section className="lesson-inspector bootstrap-inspector">
            <header className="inspector-header">
              <div className="inspector-title">
                <div className="inspector-breadcrumb"><span>Bootstrap</span><i>/</i><span>{selectedBootstrap.badge}</span></div>
                <div><h2>{selectedBootstrap.title}</h2></div>
              </div>
              <button className="icon-button" type="button" onClick={() => setSelectedBootstrap(null)} aria-label="Close lesson"><X size={18} /></button>
            </header>

            <div className="bootstrap-modal-grid">
              <div>
                <div className="bootstrap-big-preview"><BootstrapPreview lesson={selectedBootstrap} /></div>
                <div className="inspector-description">
                  <span>How it works</span>
                  <p>{selectedBootstrap.concept}</p>
                </div>
              </div>

              <div className="inspector-code bootstrap-code">
                <div className="code-header">
                  <span><Code2 size={14} /> Bootstrap markup</span>
                  <button type="button" onClick={() => copyText(selectedBootstrap.code)}>
                    {copied ? <Check size={14} /> : <Copy size={14} />} {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <pre><code>{selectedBootstrap.code}</code></pre>
              </div>
            </div>
          </section>
        </div>
      )}

      <div className={`copy-toast ${copied ? 'show' : ''}`}><Check size={14} /> Copied</div>
    </>
  )
}

export default App
