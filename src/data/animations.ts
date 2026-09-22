export type AnimationCategory =
  | 'Entrances'
  | 'Exits'
  | 'Attention'
  | 'Transforms'
  | 'Text'
  | 'Loaders'
  | 'Backgrounds'

export type AnimationLesson = {
  id: string
  title: string
  category: AnimationCategory
  description: string
  frames: string
  duration?: number
  easing?: string
  iterations?: string
  demoShape?: 'box' | 'text' | 'dot' | 'ring'
  code?: string
}

const make = (
  id: string,
  title: string,
  category: AnimationCategory,
  description: string,
  frames: string,
  options: Partial<Omit<AnimationLesson, 'id' | 'title' | 'category' | 'description' | 'frames'>> = {},
): AnimationLesson => ({
  id,
  title,
  category,
  description,
  frames,
  duration: 850,
  easing: 'cubic-bezier(.2,.8,.2,1)',
  iterations: '1',
  demoShape: 'box',
  ...options,
})

export const animations: AnimationLesson[] = [
  // Entrances
  make('fade-in', 'Fade In', 'Entrances', 'Brings an element in by increasing opacity from 0 to 1.', 'from{opacity:0}to{opacity:1}'),
  make('fade-in-up', 'Fade In Up', 'Entrances', 'Fades in while moving upward from below.', 'from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:translateY(0)}'),
  make('fade-in-down', 'Fade In Down', 'Entrances', 'Fades in while dropping into its resting position.', 'from{opacity:0;transform:translateY(-34px)}to{opacity:1;transform:translateY(0)}'),
  make('fade-in-left', 'Fade In Left', 'Entrances', 'Fades in while sliding from the left.', 'from{opacity:0;transform:translateX(-42px)}to{opacity:1;transform:translateX(0)}'),
  make('fade-in-right', 'Fade In Right', 'Entrances', 'Fades in while sliding from the right.', 'from{opacity:0;transform:translateX(42px)}to{opacity:1;transform:translateX(0)}'),
  make('zoom-in', 'Zoom In', 'Entrances', 'Scales an element up from a smaller size.', 'from{opacity:0;transform:scale(.72)}to{opacity:1;transform:scale(1)}'),
  make('zoom-in-soft', 'Soft Zoom In', 'Entrances', 'A gentle scale entrance for cards and media.', 'from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}', { duration: 1100 }),
  make('pop-in', 'Pop In', 'Entrances', 'Overshoots slightly for a playful arrival.', '0%{opacity:0;transform:scale(.55)}70%{opacity:1;transform:scale(1.08)}100%{transform:scale(1)}'),
  make('rotate-in', 'Rotate In', 'Entrances', 'Combines rotation, scale and opacity.', 'from{opacity:0;transform:rotate(-18deg) scale(.78)}to{opacity:1;transform:rotate(0) scale(1)}'),
  make('flip-in-x', 'Flip In X', 'Entrances', 'Flips around the X axis into view.', 'from{opacity:0;transform:perspective(700px) rotateX(80deg)}to{opacity:1;transform:perspective(700px) rotateX(0)}'),
  make('flip-in-y', 'Flip In Y', 'Entrances', 'Flips around the Y axis into view.', 'from{opacity:0;transform:perspective(700px) rotateY(80deg)}to{opacity:1;transform:perspective(700px) rotateY(0)}'),
  make('blur-in', 'Blur In', 'Entrances', 'Sharpens an element from a soft blur.', 'from{opacity:0;filter:blur(14px);transform:scale(.96)}to{opacity:1;filter:blur(0);transform:scale(1)}'),
  make('clip-reveal', 'Clip Reveal', 'Entrances', 'Reveals content using a moving clip-path.', 'from{clip-path:inset(0 100% 0 0);opacity:.2}to{clip-path:inset(0 0 0 0);opacity:1}'),
  make('drop-in', 'Drop In', 'Entrances', 'Drops from above with a small squash on landing.', '0%{opacity:0;transform:translateY(-70px) scaleY(1.1)}70%{opacity:1;transform:translateY(8px) scaleY(.94)}100%{transform:translateY(0) scaleY(1)}'),
  make('rise-in', 'Rise In', 'Entrances', 'Rises smoothly from below with a subtle scale.', 'from{opacity:0;transform:translateY(54px) scale(.94)}to{opacity:1;transform:translateY(0) scale(1)}'),
  make('swoop-in', 'Swoop In', 'Entrances', 'Enters diagonally with a rotational swoop.', 'from{opacity:0;transform:translate(-55px,45px) rotate(-10deg)}to{opacity:1;transform:translate(0,0) rotate(0)}'),

  // Exits
  make('fade-out', 'Fade Out', 'Exits', 'Removes an element by fading its opacity to zero.', 'from{opacity:1}to{opacity:0}'),
  make('fade-out-up', 'Fade Out Up', 'Exits', 'Fades while moving upward.', 'from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-40px)}'),
  make('fade-out-down', 'Fade Out Down', 'Exits', 'Fades while moving downward.', 'from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(40px)}'),
  make('zoom-out', 'Zoom Out', 'Exits', 'Shrinks an element away.', 'from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.65)}'),
  make('slide-out-left', 'Slide Out Left', 'Exits', 'Moves content out to the left edge.', 'from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-70px)}'),
  make('slide-out-right', 'Slide Out Right', 'Exits', 'Moves content out to the right edge.', 'from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(70px)}'),
  make('spin-out', 'Spin Out', 'Exits', 'Rotates and scales away at the same time.', 'from{opacity:1;transform:rotate(0) scale(1)}to{opacity:0;transform:rotate(180deg) scale(.35)}'),
  make('blur-out', 'Blur Out', 'Exits', 'Dissolves the element into blur.', 'from{opacity:1;filter:blur(0)}to{opacity:0;filter:blur(15px);transform:scale(1.06)}'),

  // Attention
  make('pulse', 'Pulse', 'Attention', 'A subtle scale pulse for status and CTA emphasis.', '0%,100%{transform:scale(1)}50%{transform:scale(1.12)}', { iterations: 'infinite', duration: 900 }),
  make('heartbeat', 'Heartbeat', 'Attention', 'Two quick pulses that mimic a heartbeat.', '0%,100%{transform:scale(1)}14%{transform:scale(1.16)}28%{transform:scale(1)}42%{transform:scale(1.12)}70%{transform:scale(1)}', { iterations: 'infinite', duration: 1200 }),
  make('bounce', 'Bounce', 'Attention', 'Bounces vertically with decreasing height.', '0%,20%,53%,80%,100%{transform:translateY(0)}40%,43%{transform:translateY(-28px)}70%{transform:translateY(-14px)}90%{transform:translateY(-5px)}', { duration: 1100 }),
  make('shake-x', 'Shake X', 'Attention', 'Shakes horizontally to indicate an error or rejection.', '0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-10px)}40%,80%{transform:translateX(10px)}'),
  make('shake-y', 'Shake Y', 'Attention', 'Shakes vertically for playful attention.', '0%,100%{transform:translateY(0)}20%,60%{transform:translateY(-8px)}40%,80%{transform:translateY(8px)}'),
  make('wobble', 'Wobble', 'Attention', 'Combines translation and rotation around the center.', '0%,100%{transform:none}15%{transform:translateX(-22px) rotate(-5deg)}30%{transform:translateX(16px) rotate(4deg)}45%{transform:translateX(-12px) rotate(-3deg)}60%{transform:translateX(7px) rotate(2deg)}75%{transform:translateX(-3px) rotate(-1deg)}'),
  make('swing', 'Swing', 'Attention', 'Swings around the top center like a hanging sign.', '20%{transform:rotate(13deg)}40%{transform:rotate(-9deg)}60%{transform:rotate(5deg)}80%{transform:rotate(-3deg)}100%{transform:rotate(0)}'),
  make('tada', 'Tada', 'Attention', 'A celebratory scale-and-rotate effect.', '0%{transform:scale(1)}10%,20%{transform:scale(.9) rotate(-3deg)}30%,50%,70%,90%{transform:scale(1.1) rotate(3deg)}40%,60%,80%{transform:scale(1.1) rotate(-3deg)}100%{transform:scale(1) rotate(0)}'),
  make('rubber-band', 'Rubber Band', 'Attention', 'Stretches and compresses with elastic energy.', '0%,100%{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}'),
  make('jello', 'Jello', 'Attention', 'Skews on alternating axes to create a jelly feel.', '0%,100%{transform:none}22%{transform:skewX(-12.5deg) skewY(-12.5deg)}33%{transform:skewX(6.25deg) skewY(6.25deg)}44%{transform:skewX(-3.1deg) skewY(-3.1deg)}55%{transform:skewX(1.6deg) skewY(1.6deg)}66%{transform:skewX(-.8deg) skewY(-.8deg)}'),
  make('flash', 'Flash', 'Attention', 'Flashes opacity on and off.', '0%,50%,100%{opacity:1}25%,75%{opacity:.15}', { duration: 900 }),
  make('float', 'Float', 'Attention', 'Loops a gentle floating motion.', '0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}', { iterations: 'infinite', duration: 1800 }),
  make('bob', 'Bob', 'Attention', 'Small continuous vertical bob.', '0%,100%{transform:translateY(-4px)}50%{transform:translateY(7px)}', { iterations: 'infinite', duration: 1200 }),
  make('breath', 'Breathing', 'Attention', 'Slowly scales and fades like calm breathing.', '0%,100%{transform:scale(.96);opacity:.72}50%{transform:scale(1.08);opacity:1}', { iterations: 'infinite', duration: 2400 }),
  make('glow-pulse', 'Glow Pulse', 'Attention', 'Pulses a soft glow around the element.', '0%,100%{box-shadow:0 0 0 rgba(125,92,255,0)}50%{box-shadow:0 0 34px rgba(125,92,255,.7)}', { iterations: 'infinite', duration: 1400 }),
  make('spin-pop', 'Spin Pop', 'Attention', 'Spins once while popping larger.', '0%{transform:rotate(0) scale(.86)}70%{transform:rotate(320deg) scale(1.13)}100%{transform:rotate(360deg) scale(1)}'),

  // Transforms
  make('rotate-360', 'Rotate 360', 'Transforms', 'Completes a full rotation.', 'from{transform:rotate(0)}to{transform:rotate(360deg)}', { iterations: 'infinite', duration: 1800, easing: 'linear' }),
  make('flip-x', 'Flip X', 'Transforms', 'Flips around the horizontal axis.', '0%{transform:perspective(650px) rotateX(0)}100%{transform:perspective(650px) rotateX(360deg)}'),
  make('flip-y', 'Flip Y', 'Transforms', 'Flips around the vertical axis.', '0%{transform:perspective(650px) rotateY(0)}100%{transform:perspective(650px) rotateY(360deg)}'),
  make('skew', 'Skew', 'Transforms', 'Tilts the element by skewing its X axis.', '0%,100%{transform:skewX(0)}50%{transform:skewX(-16deg)}'),
  make('stretch-x', 'Stretch X', 'Transforms', 'Stretches horizontally and returns.', '0%,100%{transform:scaleX(1)}50%{transform:scaleX(1.45)}'),
  make('stretch-y', 'Stretch Y', 'Transforms', 'Stretches vertically and returns.', '0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.45)}'),
  make('tilt', 'Perspective Tilt', 'Transforms', 'Uses 3D perspective with combined X/Y rotation.', '0%,100%{transform:perspective(600px) rotateX(0) rotateY(0)}50%{transform:perspective(600px) rotateX(18deg) rotateY(-22deg)}'),
  make('orbit', 'Orbit', 'Transforms', 'Moves around a circular-looking path using rotation and translation.', 'from{transform:rotate(0) translateX(28px) rotate(0)}to{transform:rotate(360deg) translateX(28px) rotate(-360deg)}', { iterations: 'infinite', duration: 1900, easing: 'linear', demoShape: 'dot' }),
  make('pendulum', 'Pendulum', 'Transforms', 'Swings from the top using transform-origin.', '0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}', { iterations: 'infinite', duration: 1500 }),
  make('squash', 'Squash & Stretch', 'Transforms', 'Compresses one axis while expanding the other.', '0%,100%{transform:scale(1,1)}35%{transform:scale(1.25,.76)}70%{transform:scale(.9,1.14)}'),
  make('diagonal', 'Diagonal Move', 'Transforms', 'Travels diagonally and returns.', '0%,100%{transform:translate(0,0)}50%{transform:translate(34px,-24px)}'),
  make('perspective-push', 'Perspective Push', 'Transforms', 'Moves away in Z-space using perspective.', '0%,100%{transform:perspective(600px) translateZ(0)}50%{transform:perspective(600px) translateZ(-180px) rotateY(12deg)}'),

  // Text
  make('text-rise', 'Text Rise', 'Text', 'Text rises in with opacity.', 'from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}', { demoShape: 'text' }),
  make('letter-space', 'Letter Spacing', 'Text', 'Animates tracking from wide to normal.', 'from{letter-spacing:.65em;opacity:0}to{letter-spacing:.08em;opacity:1}', { demoShape: 'text', duration: 1100 }),
  make('text-blur', 'Text Blur', 'Text', 'Brings blurred text into crisp focus.', 'from{filter:blur(10px);opacity:0}to{filter:blur(0);opacity:1}', { demoShape: 'text' }),
  make('text-pop', 'Text Pop', 'Text', 'Pops text forward with overshoot.', '0%{opacity:0;transform:scale(.6)}75%{opacity:1;transform:scale(1.12)}100%{transform:scale(1)}', { demoShape: 'text' }),
  make('text-swing', 'Text Swing', 'Text', 'Rotates text around a top anchor.', '0%,100%{transform:rotate(0)}25%{transform:rotate(5deg)}75%{transform:rotate(-5deg)}', { demoShape: 'text', iterations: 'infinite', duration: 1400 }),
  make('text-wave', 'Text Wave', 'Text', 'Makes the word gently wave as a whole.', '0%,100%{transform:translateY(0) skewX(0)}50%{transform:translateY(-10px) skewX(-5deg)}', { demoShape: 'text', iterations: 'infinite', duration: 1200 }),
  make('text-flicker', 'Text Flicker', 'Text', 'Creates a neon-style flicker.', '0%,18%,22%,25%,53%,57%,100%{opacity:1;text-shadow:0 0 18px rgba(91,225,255,.7)}20%,24%,55%{opacity:.35;text-shadow:none}', { demoShape: 'text', duration: 1700 }),
  make('text-slide-mask', 'Masked Text Reveal', 'Text', 'Reveals text from left to right using clipping.', 'from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0 0 0)}', { demoShape: 'text', duration: 1200 }),
  make('text-tilt', 'Text Tilt', 'Text', 'Adds a crisp perspective tilt.', '0%,100%{transform:perspective(400px) rotateX(0)}50%{transform:perspective(400px) rotateX(28deg)}', { demoShape: 'text' }),
  make('text-breathe', 'Text Breathe', 'Text', 'Slowly expands and softens text.', '0%,100%{transform:scale(1);opacity:.65}50%{transform:scale(1.08);opacity:1}', { demoShape: 'text', iterations: 'infinite', duration: 2200 }),

  // Loaders
  make('loader-spin', 'Classic Spinner', 'Loaders', 'A continuous rotating ring.', 'to{transform:rotate(360deg)}', { demoShape: 'ring', iterations: 'infinite', duration: 850, easing: 'linear' }),
  make('loader-pulse', 'Pulse Loader', 'Loaders', 'A dot expands and fades repeatedly.', '0%{transform:scale(.6);opacity:.45}50%{transform:scale(1.25);opacity:1}100%{transform:scale(.6);opacity:.45}', { demoShape: 'dot', iterations: 'infinite', duration: 900 }),
  make('loader-bounce', 'Bounce Loader', 'Loaders', 'A compact bouncing loading indicator.', '0%,100%{transform:translateY(5px)}50%{transform:translateY(-15px)}', { demoShape: 'dot', iterations: 'infinite', duration: 700 }),
  make('loader-squish', 'Squish Loader', 'Loaders', 'Alternates between horizontal and vertical stretch.', '0%,100%{transform:scale(1.35,.65)}50%{transform:scale(.65,1.35)}', { demoShape: 'dot', iterations: 'infinite', duration: 780 }),
  make('loader-orbit', 'Orbit Loader', 'Loaders', 'A dot orbits around an invisible center.', 'from{transform:rotate(0) translateX(24px) rotate(0)}to{transform:rotate(360deg) translateX(24px) rotate(-360deg)}', { demoShape: 'dot', iterations: 'infinite', duration: 900, easing: 'linear' }),
  make('loader-flip', 'Flip Loader', 'Loaders', 'A square flips continuously in 3D.', '0%{transform:perspective(140px) rotateX(0) rotateY(0)}50%{transform:perspective(140px) rotateX(-180deg) rotateY(0)}100%{transform:perspective(140px) rotateX(-180deg) rotateY(-180deg)}', { iterations: 'infinite', duration: 1200, easing: 'ease-in-out' }),
  make('loader-grow', 'Grow Loader', 'Loaders', 'A rounded block grows and shrinks.', '0%,100%{transform:scale(.72);border-radius:50%}50%{transform:scale(1.25);border-radius:20%}', { iterations: 'infinite', duration: 900 }),
  make('loader-rotate-scale', 'Rotate Scale Loader', 'Loaders', 'Combines rotation with scale in one loop.', '0%{transform:rotate(0) scale(.7)}50%{transform:rotate(180deg) scale(1.2)}100%{transform:rotate(360deg) scale(.7)}', { iterations: 'infinite', duration: 1300, easing: 'linear' }),
  make('loader-fade', 'Fade Loader', 'Loaders', 'A minimal opacity-based loader.', '0%,100%{opacity:.25}50%{opacity:1}', { demoShape: 'dot', iterations: 'infinite', duration: 750 }),
  make('loader-radar', 'Radar Loader', 'Loaders', 'A ring scales outward while fading.', '0%{transform:scale(.45);opacity:1}100%{transform:scale(1.55);opacity:0}', { demoShape: 'ring', iterations: 'infinite', duration: 1300, easing: 'ease-out' }),

  // Backgrounds
  make('bg-hue', 'Hue Shift', 'Backgrounds', 'Cycles hue values for a color-shifting surface.', 'from{filter:hue-rotate(0deg)}to{filter:hue-rotate(360deg)}', { iterations: 'infinite', duration: 3800, easing: 'linear' }),
  make('bg-glow', 'Ambient Glow', 'Backgrounds', 'Breathes a soft glow around the demo object.', '0%,100%{box-shadow:0 0 18px rgba(91,225,255,.12)}50%{box-shadow:0 0 48px rgba(125,92,255,.75)}', { iterations: 'infinite', duration: 1800 }),
  make('bg-float', 'Floating Surface', 'Backgrounds', 'A relaxed float with a subtle rotation.', '0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-14px) rotate(2deg)}', { iterations: 'infinite', duration: 2600 }),
  make('bg-morph', 'Shape Morph', 'Backgrounds', 'Morphs border radius to create an organic blob.', '0%,100%{border-radius:28% 72% 63% 37% / 42% 38% 62% 58%}50%{border-radius:67% 33% 31% 69% / 64% 57% 43% 36%}', { iterations: 'infinite', duration: 3000 }),
  make('bg-breathe', 'Surface Breathe', 'Backgrounds', 'Scales the surface with a gentle brightness change.', '0%,100%{transform:scale(.95);filter:brightness(.85)}50%{transform:scale(1.06);filter:brightness(1.15)}', { iterations: 'infinite', duration: 2400 }),
  make('bg-spin-slow', 'Slow Spin', 'Backgrounds', 'A slow ambient rotation ideal for decorative layers.', 'from{transform:rotate(0)}to{transform:rotate(360deg)}', { iterations: 'infinite', duration: 6000, easing: 'linear' }),
  make('bg-drift', 'Drift', 'Backgrounds', 'Moves gently across both axes.', '0%,100%{transform:translate(-8px,5px)}25%{transform:translate(10px,-7px)}50%{transform:translate(15px,8px)}75%{transform:translate(-6px,-10px)}', { iterations: 'infinite', duration: 4200 }),
  make('bg-focus', 'Focus Pulse', 'Backgrounds', 'Alternates blur and sharpness for atmospheric depth.', '0%,100%{filter:blur(0) brightness(1)}50%{filter:blur(3px) brightness(1.22);transform:scale(1.05)}', { iterations: 'infinite', duration: 2600 }),
]

export const categories: Array<'All' | AnimationCategory> = [
  'All',
  'Entrances',
  'Exits',
  'Attention',
  'Transforms',
  'Text',
  'Loaders',
  'Backgrounds',
]

export const buildAnimationCss = (animation: AnimationLesson) => {
  const name = `ml-${animation.id}`
  return `@keyframes ${name}{${animation.frames}}`
}

export const buildCodeSnippet = (
  animation: AnimationLesson,
  duration = animation.duration ?? 850,
  easing = animation.easing ?? 'ease',
  iterations = animation.iterations ?? '1',
) => {
  const name = animation.id.replace(/[^a-z0-9-]/gi, '')
  return `@keyframes ${name} {
  ${animation.frames
    .replaceAll('}', '}\n  ')
    .replaceAll('{', ' {\n    ')
    .replaceAll(';', ';\n    ')
    .replace(/\n\s*}/g, '\n  }')
    .trim()}
}

.element {
  animation: ${name} ${duration}ms ${easing} 0ms ${iterations} both;
}`
}
