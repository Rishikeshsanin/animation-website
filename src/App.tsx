import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Copy,
  Github,
  Moon,
  Play,
  RefreshCw,
  Search,
  Sparkles,
  Sun,
  WandSparkles,
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
  'ease',
  'linear',
  'ease-in',
  'ease-out',
  'ease-in-out',
  'cubic-bezier(.2,.8,.2,1)',
  'cubic-bezier(.34,1.56,.64,1)',
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
  return (
    <span className="demo-box">
      <span />
    </span>
  )
}

function AnimationCard({
  animation,
  onOpen,
}: {
  animation: AnimationLesson
  onOpen: (animation: AnimationLesson) => void
}) {
  const [key, setKey] = useState(0)
  const duration = animation.duration ?? 850

  return (
    <article className="animation-card">
      <button
        type="button"
        className="animation-preview"
        aria-label={`Replay ${animation.title}`}
        onClick={() => setKey((value) => value + 1)}
      >
        <div
          key={key}
          className="preview-object"
          style={{
            animation: `ml-${animation.id} ${duration}ms ${animation.easing ?? 'ease'} 0ms ${animation.iterations ?? '1'} both`,
          }}
        >
          <DemoShape animation={animation} />
        </div>
        <span className="preview-replay">
          <RefreshCw size={14} /> Replay
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
          Learn & copy <ArrowRight size={15} />
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
          <ChevronLeft size={18} />
        </button>
        <div className="bs-carousel-stage">
          {[0, 1, 2].map((item) => (
            <div key={item} className={`bs-slide bs-slide-${item} ${slide === item ? 'active' : ''}`}>
              <span>0{item + 1}</span>
              <strong>{['Explore motion', 'Understand timing', 'Build better UI'][item]}</strong>
            </div>
          ))}
          <div className="bs-dots">
            {[0, 1, 2].map((item) => (
              <i key={item} className={slide === item ? 'active' : ''} />
            ))}
          </div>
        </div>
        <button type="button" onClick={() => setSlide((slide + 1) % 3)} aria-label="Next slide">
          <ChevronRight size={18} />
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
          <p>Bootstrap transitions the panel height while managing visible state.</p>
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
            <span className="mini-eyebrow">Bootstrap modal</span>
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
          <button type="button" aria-label="Close panel" onClick={() => setOpen(false)}><X size={16} /></button>
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
          <CheckCircle2 size={17} />
          <span>Animation copied.</span>
          <button type="button" aria-label="Hide toast" onClick={() => setOpen(false)}><X size={14} /></button>
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
        <CheckCircle2 size={18} />
        <span>Saved successfully.</span>
        <button type="button" aria-label="Dismiss alert" onClick={() => setOpen(true)}><X size={15} /></button>
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
          Study component <ArrowRight size={15} />
        </button>
      </div>
    </article>
  )
}

function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<(typeof categories)[number]>('All')
  const [selected, setSelected] = useState<AnimationLesson | null>(null)
  const [selectedBootstrap, setSelectedBootstrap] = useState<BootstrapLesson | null>(null)
  const [duration, setDuration] = useState(850)
  const [easing, setEasing] = useState('cubic-bezier(.2,.8,.2,1)')
  const [iterations, setIterations] = useState('1')
  const [replayKey, setReplayKey] = useState(0)
  const [copied, setCopied] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('motionlab-theme')
    return saved === 'light' ? 'light' : 'dark'
  })
  const [learned, setLearned] = useState<Set<string>>(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem('motionlab-learned') ?? '[]'))
    } catch {
      return new Set()
    }
  })
  const [playgroundId, setPlaygroundId] = useState('bounce')
  const [playgroundDuration, setPlaygroundDuration] = useState(900)
  const [playgroundEasing, setPlaygroundEasing] = useState('ease')
  const [playgroundIterations, setPlaygroundIterations] = useState('infinite')
  const [playgroundKey, setPlaygroundKey] = useState(0)

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return animations.filter((animation) => {
      const categoryMatch = category === 'All' || animation.category === category
      const searchMatch =
        !normalized ||
        animation.title.toLowerCase().includes(normalized) ||
        animation.description.toLowerCase().includes(normalized) ||
        animation.category.toLowerCase().includes(normalized)
      return categoryMatch && searchMatch
    })
  }, [category, query])

  const playgroundAnimation = animations.find((animation) => animation.id === playgroundId) ?? animations[0]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('motionlab-theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('motionlab-learned', JSON.stringify([...learned]))
  }, [learned])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelected(null)
        setSelectedBootstrap(null)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const openLesson = (animation: AnimationLesson) => {
    setSelected(animation)
    setDuration(animation.duration ?? 850)
    setEasing(animation.easing ?? 'ease')
    setIterations(animation.iterations ?? '1')
    setReplayKey((value) => value + 1)
  }

  const copyText = async (text: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
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
    const random = animations[Math.floor(Math.random() * animations.length)]
    openLesson(random)
  }

  const injectedKeyframes = animations.map(buildAnimationCss).join('\n')
  const progress = Math.round((learned.size / animations.length) * 100)

  return (
    <>
      <style>{injectedKeyframes}</style>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="page-grid" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="MotionLab home">
          <span className="brand-mark"><WandSparkles size={20} /></span>
          <span>Motion<span>Lab</span></span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="icon-button github-link" href="https://github.com/Rishikeshsanin/animation-website" target="_blank" rel="noreferrer" aria-label="GitHub repository">
            <Github size={18} />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={15} /> Learn motion by seeing it</div>
            <h1>Web animation,<br /><span>finally visual.</span></h1>
            <p>
              Explore CSS motion one concept at a time. Replay it, understand it,
              change the timing, and copy the exact code when it clicks.
            </p>
            <div className="hero-actions">
              <a className="primary-cta" href="#library">Explore animations <ArrowRight size={17} /></a>
              <button className="secondary-cta" type="button" onClick={surpriseMe}><Zap size={17} /> Surprise me</button>
            </div>
            <div className="hero-proof">
              <span><strong>{animations.length}</strong> CSS lessons</span>
              <i />
              <span><strong>{bootstrapLessons.length}</strong> Bootstrap labs</span>
              <i />
              <span><strong>0</strong> setup required</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Animated code preview">
            <div className="visual-window">
              <div className="window-bar">
                <span className="traffic"><i /><i /><i /></span>
                <span>motion.css</span>
                <span className="live-chip">LIVE</span>
              </div>
              <div className="visual-stage">
                <div className="orbit-track orbit-track-one"><i /></div>
                <div className="orbit-track orbit-track-two"><i /></div>
                <div className="hero-cube"><span>M</span></div>
                <div className="float-tag tag-a">transform</div>
                <div className="float-tag tag-b">@keyframes</div>
                <div className="float-tag tag-c">cubic-bezier()</div>
              </div>
              <div className="visual-code">
                <span><b>@keyframes</b> float {'{'}</span>
                <span>&nbsp;&nbsp;50% {'{'} <em>transform</em>: translateY(-16px); {'}'}</span>
                <span>{'}'}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="progress-strip section-shell" aria-label="Learning progress">
          <div>
            <span className="progress-label">Your library progress</span>
            <strong>{learned.size} / {animations.length} learned</strong>
          </div>
          <div className="progress-track"><span style={{ width: `${progress}%` }} /></div>
          <span className="progress-percent">{progress}%</span>
        </section>

        <section className="learn-section section-shell" id="learn">
          <div className="section-heading split-heading">
            <div>
              <span className="section-kicker">Start here</span>
              <h2>The four ideas behind almost every CSS animation.</h2>
            </div>
            <p>Learn the mental model first. Then every example in the library becomes easier to read and modify.</p>
          </div>

          <div className="fundamentals-grid">
            {fundamentals.map((item) => (
              <article className="fundamental-card" key={item.step}>
                <span className="step-number">{item.step}</span>
                <div className="fundamental-icon"><Code2 size={20} /></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <code>{item.code}</code>
              </article>
            ))}
          </div>
        </section>

        <section className="library-section section-shell" id="library">
          <div className="section-heading">
            <span className="section-kicker">CSS animation library</span>
            <h2>Don’t memorize animation. <span>Play with it.</span></h2>
            <p>{animations.length} visual lessons, built to be replayed, inspected and copied.</p>
          </div>

          <div className="library-toolbar">
            <label className="search-box">
              <Search size={18} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search fade, bounce, loader..."
                aria-label="Search animations"
              />
              {query && <button type="button" onClick={() => setQuery('')} aria-label="Clear search"><X size={15} /></button>}
            </label>
            <div className="category-pills" aria-label="Animation categories">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={category === item ? 'active' : ''}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="results-line">
            <span>{filtered.length} animations</span>
            <button type="button" onClick={surpriseMe}><Zap size={14} /> Random lesson</button>
          </div>

          {filtered.length > 0 ? (
            <div className="animation-grid">
              {filtered.map((animation) => (
                <AnimationCard key={animation.id} animation={animation} onOpen={openLesson} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Search size={28} />
              <h3>No animation found.</h3>
              <p>Try another keyword or reset the category.</p>
              <button type="button" onClick={() => { setQuery(''); setCategory('All') }}>Reset filters</button>
            </div>
          )}
        </section>

        <section className="bootstrap-section" id="bootstrap">
          <div className="section-shell">
            <div className="section-heading split-heading">
              <div>
                <span className="section-kicker bootstrap-kicker">Bootstrap motion lab</span>
                <h2>Understand what Bootstrap is animating for you.</h2>
              </div>
              <p>Interactive component demos with the exact markup pattern behind each transition.</p>
            </div>

            <div className="bootstrap-grid">
              {bootstrapLessons.map((lesson) => (
                <BootstrapCard key={lesson.id} lesson={lesson} onOpen={setSelectedBootstrap} />
              ))}
            </div>
          </div>
        </section>

        <section className="playground-section section-shell" id="playground">
          <div className="section-heading">
            <span className="section-kicker">Playground</span>
            <h2>Change the values. <span>Feel the difference.</span></h2>
            <p>Use the same animation with different duration, easing and repetition settings.</p>
          </div>

          <div className="playground">
            <div className="playground-controls">
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
                  min="200"
                  max="3000"
                  step="50"
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
                  {easingOptions.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>

              <label>
                <span>Iterations</span>
                <select value={playgroundIterations} onChange={(event) => {
                  setPlaygroundIterations(event.target.value)
                  setPlaygroundKey((value) => value + 1)
                }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="infinite">Infinite</option>
                </select>
              </label>

              <button type="button" className="play-again" onClick={() => setPlaygroundKey((value) => value + 1)}>
                <Play size={16} /> Replay
              </button>
            </div>

            <div className="playground-stage">
              <span className="stage-grid" />
              <div
                key={playgroundKey}
                className="playground-object"
                style={{
                  animation: `ml-${playgroundAnimation.id} ${playgroundDuration}ms ${playgroundEasing} 0ms ${playgroundIterations} both`,
                }}
              >
                <DemoShape animation={playgroundAnimation} />
              </div>
              <span className="stage-caption">{playgroundAnimation.title}</span>
            </div>

            <div className="playground-code">
              <div className="code-header">
                <span><Code2 size={15} /> CSS</span>
                <button type="button" onClick={() => copyText(buildCodeSnippet(playgroundAnimation, playgroundDuration, playgroundEasing, playgroundIterations))}>
                  {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <pre><code>{buildCodeSnippet(playgroundAnimation, playgroundDuration, playgroundEasing, playgroundIterations)}</code></pre>
            </div>
          </div>
        </section>

        <section className="closing-section section-shell">
          <div className="closing-card">
            <div>
              <span className="section-kicker">Keep experimenting</span>
              <h2>Motion is easier when you can see every decision.</h2>
              <p>No signup. No database. Just a fast visual reference you can learn from and use in real projects.</p>
            </div>
            <a className="primary-cta" href="#library">Open the library <ArrowRight size={17} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark"><WandSparkles size={18} /></span>
          <span>Motion<span>Lab</span></span>
        </a>
        <p>Learn CSS and Bootstrap motion visually.</p>
        <a href="https://github.com/Rishikeshsanin/animation-website" target="_blank" rel="noreferrer">GitHub <ArrowRight size={14} /></a>
      </footer>

      {selected && (
        <div className="lesson-overlay" role="dialog" aria-modal="true" aria-label={selected.title}>
          <button className="overlay-backdrop" type="button" aria-label="Close lesson" onClick={() => setSelected(null)} />
          <section className="lesson-modal">
            <div className="lesson-modal-header">
              <div>
                <span className="section-kicker">{selected.category}</span>
                <h2>{selected.title}</h2>
              </div>
              <button className="icon-button" type="button" onClick={() => setSelected(null)} aria-label="Close lesson"><X size={19} /></button>
            </div>

            <div className="lesson-modal-grid">
              <div className="lesson-demo-panel">
                <div className="lesson-stage">
                  <span className="stage-grid" />
                  <div
                    key={replayKey}
                    className="lesson-demo-object"
                    style={{
                      animation: `ml-${selected.id} ${duration}ms ${easing} 0ms ${iterations} both`,
                    }}
                  >
                    <DemoShape animation={selected} />
                  </div>
                </div>
                <button className="play-again" type="button" onClick={() => setReplayKey((value) => value + 1)}>
                  <RefreshCw size={16} /> Replay animation
                </button>

                <div className="lesson-controls">
                  <label>
                    <span>Duration <strong>{duration}ms</strong></span>
                    <input type="range" min="200" max="3000" step="50" value={duration} onChange={(event) => {
                      setDuration(Number(event.target.value))
                      setReplayKey((value) => value + 1)
                    }} />
                  </label>
                  <label>
                    <span>Easing</span>
                    <select value={easing} onChange={(event) => {
                      setEasing(event.target.value)
                      setReplayKey((value) => value + 1)
                    }}>
                      {easingOptions.map((option) => <option key={option}>{option}</option>)}
                    </select>
                  </label>
                  <label>
                    <span>Iterations</span>
                    <select value={iterations} onChange={(event) => {
                      setIterations(event.target.value)
                      setReplayKey((value) => value + 1)
                    }}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="infinite">Infinite</option>
                    </select>
                  </label>
                </div>
              </div>

              <div className="lesson-copy-panel">
                <div className="explanation-card">
                  <span className="mini-eyebrow"><BookOpen size={14} /> What it does</span>
                  <p>{selected.description}</p>
                  <div className="concept-row">
                    <span>Property focus</span>
                    <strong>{selected.frames.includes('transform') ? 'transform' : selected.frames.includes('opacity') ? 'opacity' : 'visual state'}</strong>
                  </div>
                </div>

                <div className="lesson-code-card">
                  <div className="code-header">
                    <span><Code2 size={15} /> Ready-to-use CSS</span>
                    <button type="button" onClick={() => copyText(buildCodeSnippet(selected, duration, easing, iterations))}>
                      {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <pre><code>{buildCodeSnippet(selected, duration, easing, iterations)}</code></pre>
                </div>

                <button
                  type="button"
                  className={`learned-button ${learned.has(selected.id) ? 'active' : ''}`}
                  onClick={() => toggleLearned(selected.id)}
                >
                  <CheckCircle2 size={17} />
                  {learned.has(selected.id) ? 'Marked as learned' : 'Mark lesson as learned'}
                </button>
              </div>
            </div>
          </section>
        </div>
      )}

      {selectedBootstrap && (
        <div className="lesson-overlay" role="dialog" aria-modal="true" aria-label={selectedBootstrap.title}>
          <button className="overlay-backdrop" type="button" aria-label="Close lesson" onClick={() => setSelectedBootstrap(null)} />
          <section className="lesson-modal bootstrap-modal">
            <div className="lesson-modal-header">
              <div>
                <span className="section-kicker bootstrap-kicker">Bootstrap component</span>
                <h2>{selectedBootstrap.title}</h2>
              </div>
              <button className="icon-button" type="button" onClick={() => setSelectedBootstrap(null)} aria-label="Close lesson"><X size={19} /></button>
            </div>
            <div className="bootstrap-modal-grid">
              <div>
                <div className="bootstrap-big-preview">
                  <BootstrapPreview lesson={selectedBootstrap} />
                </div>
                <div className="explanation-card">
                  <span className="mini-eyebrow"><BookOpen size={14} /> How it works</span>
                  <p>{selectedBootstrap.concept}</p>
                </div>
              </div>
              <div className="lesson-code-card bootstrap-code">
                <div className="code-header">
                  <span><Code2 size={15} /> Bootstrap markup</span>
                  <button type="button" onClick={() => copyText(selectedBootstrap.code)}>
                    {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <pre><code>{selectedBootstrap.code}</code></pre>
              </div>
            </div>
          </section>
        </div>
      )}

      <div className={`copy-toast ${copied ? 'show' : ''}`}><Check size={15} /> Copied to clipboard</div>
    </>
  )
}

export default App
