export type AnimationCategory =
  | 'Entrances'
  | 'Exits'
  | 'Attention'
  | 'Transforms'
  | 'Text'
  | 'Hover'
  | 'UI'
  | 'Loaders'
  | '3D'
  | 'Backgrounds'

export type DemoShape = 'box' | 'text' | 'dot' | 'ring' | 'button' | 'card' | 'pill' | 'icon'

export type AnimationLesson = {
  id: string
  title: string
  category: AnimationCategory
  description: string
  frames: string
  duration?: number
  easing?: string
  iterations?: string
  demoShape?: DemoShape
  level?: 'Core' | 'Intermediate' | 'Advanced'
  featured?: boolean
  tags?: string[]
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
  duration: 900,
  easing: 'cubic-bezier(.2,.8,.2,1)',
  iterations: '1',
  demoShape: 'box',
  level: 'Core',
  tags: [],
  ...options,
})

export const animations: AnimationLesson[] = [
  // ENTRANCES
  make('fade-in', 'Fade In', 'Entrances', 'A clean opacity entrance for content that should arrive quietly.', 'from{opacity:0}to{opacity:1}', { tags:['opacity','reveal'] }),
  make('fade-in-up', 'Fade In Up', 'Entrances', 'Fades in while moving upward from below.', 'from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:translateY(0)}', { featured:true, tags:['slide','opacity'] }),
  make('fade-in-down', 'Fade In Down', 'Entrances', 'Fades in while dropping into its resting position.', 'from{opacity:0;transform:translateY(-34px)}to{opacity:1;transform:translateY(0)}'),
  make('fade-in-left', 'Fade In Left', 'Entrances', 'Slides in from the left with a soft fade.', 'from{opacity:0;transform:translateX(-46px)}to{opacity:1;transform:translateX(0)}'),
  make('fade-in-right', 'Fade In Right', 'Entrances', 'Slides in from the right with a soft fade.', 'from{opacity:0;transform:translateX(46px)}to{opacity:1;transform:translateX(0)}'),
  make('zoom-in', 'Zoom In', 'Entrances', 'Scales content up from a smaller size with opacity.', 'from{opacity:0;transform:scale(.7)}to{opacity:1;transform:scale(1)}'),
  make('zoom-in-soft', 'Soft Zoom', 'Entrances', 'A restrained scale entrance suited to polished cards and media.', 'from{opacity:0;transform:scale(.93)}to{opacity:1;transform:scale(1)}', { duration:1100 }),
  make('pop-in', 'Pop In', 'Entrances', 'A playful overshoot that lands at the final scale.', '0%{opacity:0;transform:scale(.5)}72%{opacity:1;transform:scale(1.09)}100%{transform:scale(1)}', { easing:'cubic-bezier(.22,1,.36,1)', featured:true }),
  make('spring-up', 'Spring Up', 'Entrances', 'Rises with a springy overshoot and a small settle.', '0%{opacity:0;transform:translateY(52px) scale(.9)}60%{opacity:1;transform:translateY(-8px) scale(1.03)}82%{transform:translateY(4px) scale(.99)}100%{transform:translateY(0) scale(1)}', { duration:1050, easing:'cubic-bezier(.2,.9,.2,1)', featured:true, level:'Intermediate' }),
  make('elastic-scale', 'Elastic Scale', 'Entrances', 'Snaps into view with elastic scale deformation.', '0%{opacity:0;transform:scale(.2,.2)}55%{opacity:1;transform:scale(1.16,.86)}72%{transform:scale(.92,1.08)}86%{transform:scale(1.04,.97)}100%{transform:scale(1)}', { duration:1150, level:'Advanced' }),
  make('rotate-in', 'Rotate In', 'Entrances', 'Combines rotation, scale and opacity for a compact reveal.', 'from{opacity:0;transform:rotate(-20deg) scale(.76)}to{opacity:1;transform:rotate(0) scale(1)}'),
  make('flip-in-x', 'Flip In X', 'Entrances', 'Flips around the horizontal axis into view.', 'from{opacity:0;transform:perspective(700px) rotateX(82deg)}to{opacity:1;transform:perspective(700px) rotateX(0)}', { level:'Intermediate' }),
  make('flip-in-y', 'Flip In Y', 'Entrances', 'Flips around the vertical axis into view.', 'from{opacity:0;transform:perspective(700px) rotateY(82deg)}to{opacity:1;transform:perspective(700px) rotateY(0)}', { level:'Intermediate' }),
  make('blur-in', 'Blur In', 'Entrances', 'Sharpens an element from a soft blur.', 'from{opacity:0;filter:blur(16px);transform:scale(.96)}to{opacity:1;filter:blur(0);transform:scale(1)}', { featured:true }),
  make('focus-pull', 'Focus Pull', 'Entrances', 'Feels like a camera pulling focus while content settles forward.', '0%{opacity:0;filter:blur(20px);transform:scale(1.12)}65%{opacity:1;filter:blur(2px);transform:scale(.985)}100%{filter:blur(0);transform:scale(1)}', { duration:1200, level:'Intermediate' }),
  make('clip-reveal', 'Clip Reveal', 'Entrances', 'Reveals content from the left using clip-path.', 'from{clip-path:inset(0 100% 0 0);opacity:.4}to{clip-path:inset(0 0 0 0);opacity:1}', { level:'Intermediate' }),
  make('wipe-up', 'Wipe Up', 'Entrances', 'Unmasks content vertically from bottom to top.', '0%{clip-path:inset(100% 0 0 0);transform:translateY(18px)}100%{clip-path:inset(0 0 0 0);transform:translateY(0)}', { duration:1000, level:'Intermediate' }),
  make('diagonal-reveal', 'Diagonal Reveal', 'Entrances', 'Cuts content into view on a diagonal mask.', '0%{opacity:0;clip-path:polygon(0 0,0 0,0 100%,0 100%)}100%{opacity:1;clip-path:polygon(0 0,100% 0,100% 100%,0 100%)}', { duration:1100, level:'Advanced' }),
  make('drop-in', 'Drop In', 'Entrances', 'Drops from above and compresses slightly on landing.', '0%{opacity:0;transform:translateY(-72px) scaleY(1.12)}68%{opacity:1;transform:translateY(8px) scaleY(.94)}100%{transform:translateY(0) scaleY(1)}', { duration:1050 }),
  make('rise-in', 'Rise In', 'Entrances', 'Rises smoothly from below with a subtle scale.', 'from{opacity:0;transform:translateY(56px) scale(.94)}to{opacity:1;transform:translateY(0) scale(1)}'),
  make('swoop-in', 'Swoop In', 'Entrances', 'Enters diagonally with a rotational swoop.', 'from{opacity:0;transform:translate(-58px,46px) rotate(-11deg)}to{opacity:1;transform:translate(0,0) rotate(0)}'),
  make('swing-in-top', 'Swing In Top', 'Entrances', 'Drops from a top hinge with perspective.', '0%{opacity:0;transform-origin:top;transform:perspective(600px) rotateX(-72deg)}100%{opacity:1;transform-origin:top;transform:perspective(600px) rotateX(0)}', { level:'Advanced', duration:1100 }),
  make('fold-in', 'Fold In', 'Entrances', 'Opens like a folded panel from the left edge.', '0%{opacity:0;transform-origin:left;transform:perspective(700px) rotateY(-88deg) scale(.92)}100%{opacity:1;transform-origin:left;transform:perspective(700px) rotateY(0) scale(1)}', { level:'Advanced', duration:1150, demoShape:'card' }),
  make('soft-land', 'Soft Land', 'Entrances', 'Floats down and settles with almost no bounce.', '0%{opacity:0;transform:translateY(-26px) scale(1.035)}72%{opacity:1;transform:translateY(3px) scale(.995)}100%{transform:translateY(0) scale(1)}', { duration:1150 }),

  // EXITS
  make('fade-out', 'Fade Out', 'Exits', 'Removes content by fading opacity to zero.', 'from{opacity:1}to{opacity:0}'),
  make('fade-out-up', 'Fade Out Up', 'Exits', 'Fades while moving upward.', 'from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-42px)}'),
  make('fade-out-down', 'Fade Out Down', 'Exits', 'Fades while moving downward.', 'from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(42px)}'),
  make('zoom-out', 'Zoom Out', 'Exits', 'Shrinks an element away cleanly.', 'from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.62)}'),
  make('slide-out-left', 'Slide Out Left', 'Exits', 'Moves content out to the left edge.', 'from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-78px)}'),
  make('slide-out-right', 'Slide Out Right', 'Exits', 'Moves content out to the right edge.', 'from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(78px)}'),
  make('spin-out', 'Spin Out', 'Exits', 'Rotates and scales away at the same time.', 'from{opacity:1;transform:rotate(0) scale(1)}to{opacity:0;transform:rotate(180deg) scale(.32)}'),
  make('blur-out', 'Blur Out', 'Exits', 'Dissolves an element into blur.', 'from{opacity:1;filter:blur(0)}to{opacity:0;filter:blur(17px);transform:scale(1.08)}'),
  make('shrink-blur', 'Shrink Blur', 'Exits', 'Pulls content inward while it loses focus.', '0%{opacity:1;filter:blur(0);transform:scale(1)}100%{opacity:0;filter:blur(14px);transform:scale(.45)}', { level:'Intermediate' }),
  make('wipe-out', 'Wipe Out', 'Exits', 'Clips content away toward the right edge.', '0%{clip-path:inset(0 0 0 0);opacity:1}100%{clip-path:inset(0 0 0 100%);opacity:.35}', { level:'Intermediate' }),
  make('fold-away', 'Fold Away', 'Exits', 'Folds a panel away in perspective.', '0%{opacity:1;transform-origin:right;transform:perspective(700px) rotateY(0)}100%{opacity:0;transform-origin:right;transform:perspective(700px) rotateY(88deg)}', { demoShape:'card', level:'Advanced' }),
  make('fall-away', 'Fall Away', 'Exits', 'Drops while rotating slightly out of frame.', '0%{opacity:1;transform:translateY(0) rotate(0)}100%{opacity:0;transform:translateY(90px) rotate(11deg) scale(.9)}', { duration:1050 }),

  // ATTENTION
  make('pulse', 'Pulse', 'Attention', 'A subtle scale pulse for status and CTA emphasis.', '0%,100%{transform:scale(1)}50%{transform:scale(1.12)}', { iterations:'infinite', duration:900 }),
  make('heartbeat', 'Heartbeat', 'Attention', 'Two quick pulses that mimic a heartbeat.', '0%,100%{transform:scale(1)}14%{transform:scale(1.16)}28%{transform:scale(1)}42%{transform:scale(1.12)}70%{transform:scale(1)}', { iterations:'infinite', duration:1200 }),
  make('bounce', 'Bounce', 'Attention', 'Bounces vertically with decreasing height.', '0%,20%,53%,80%,100%{transform:translateY(0)}40%,43%{transform:translateY(-29px)}70%{transform:translateY(-14px)}90%{transform:translateY(-5px)}', { duration:1100, featured:true }),
  make('micro-bounce', 'Micro Bounce', 'Attention', 'A tiny professional bounce for icons and compact controls.', '0%,100%{transform:translateY(0)}45%{transform:translateY(-7px)}68%{transform:translateY(2px)}', { duration:650, demoShape:'icon' }),
  make('shake-x', 'Shake X', 'Attention', 'Shakes horizontally to communicate an error.', '0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-10px)}40%,80%{transform:translateX(10px)}'),
  make('shake-y', 'Shake Y', 'Attention', 'Shakes vertically for playful attention.', '0%,100%{transform:translateY(0)}20%,60%{transform:translateY(-8px)}40%,80%{transform:translateY(8px)}'),
  make('wobble', 'Wobble', 'Attention', 'Combines translation and rotation around the center.', '0%,100%{transform:none}15%{transform:translateX(-22px) rotate(-5deg)}30%{transform:translateX(16px) rotate(4deg)}45%{transform:translateX(-12px) rotate(-3deg)}60%{transform:translateX(7px) rotate(2deg)}75%{transform:translateX(-3px) rotate(-1deg)}'),
  make('swing', 'Swing', 'Attention', 'Swings around the top center like a hanging sign.', '20%{transform:rotate(13deg)}40%{transform:rotate(-9deg)}60%{transform:rotate(5deg)}80%{transform:rotate(-3deg)}100%{transform:rotate(0)}'),
  make('tada', 'Tada', 'Attention', 'A celebratory scale-and-rotate effect.', '0%{transform:scale(1)}10%,20%{transform:scale(.9) rotate(-3deg)}30%,50%,70%,90%{transform:scale(1.1) rotate(3deg)}40%,60%,80%{transform:scale(1.1) rotate(-3deg)}100%{transform:scale(1) rotate(0)}'),
  make('rubber-band', 'Rubber Band', 'Attention', 'Stretches and compresses with elastic energy.', '0%,100%{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}', { featured:true }),
  make('jello', 'Jello', 'Attention', 'Skews on alternating axes to create a jelly feel.', '0%,100%{transform:none}22%{transform:skewX(-12.5deg) skewY(-12.5deg)}33%{transform:skewX(6.25deg) skewY(6.25deg)}44%{transform:skewX(-3.1deg) skewY(-3.1deg)}55%{transform:skewX(1.6deg) skewY(1.6deg)}66%{transform:skewX(-.8deg) skewY(-.8deg)}'),
  make('flash', 'Flash', 'Attention', 'Flashes opacity on and off.', '0%,50%,100%{opacity:1}25%,75%{opacity:.12}', { duration:900 }),
  make('float', 'Float', 'Attention', 'Loops a gentle floating motion.', '0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}', { iterations:'infinite', duration:1800 }),
  make('bob', 'Bob', 'Attention', 'A compact continuous vertical bob.', '0%,100%{transform:translateY(-4px)}50%{transform:translateY(7px)}', { iterations:'infinite', duration:1200 }),
  make('breath', 'Breathing', 'Attention', 'Slowly scales and fades like calm breathing.', '0%,100%{transform:scale(.96);opacity:.72}50%{transform:scale(1.08);opacity:1}', { iterations:'infinite', duration:2400 }),
  make('glow-pulse', 'Glow Pulse', 'Attention', 'Pulses a controlled glow around the element.', '0%,100%{box-shadow:0 0 0 rgba(124,92,255,0)}50%{box-shadow:0 0 34px rgba(124,92,255,.62)}', { iterations:'infinite', duration:1400 }),
  make('spin-pop', 'Spin Pop', 'Attention', 'Spins once while popping larger.', '0%{transform:rotate(0) scale(.86)}70%{transform:rotate(320deg) scale(1.13)}100%{transform:rotate(360deg) scale(1)}'),
  make('nudge', 'Directional Nudge', 'Attention', 'A restrained horizontal nudge for actionable UI.', '0%,100%{transform:translateX(0)}35%{transform:translateX(8px)}65%{transform:translateX(-3px)}', { duration:620, demoShape:'button' }),
  make('snap-pop', 'Snap Pop', 'Attention', 'A sharp micro-pop for badges and counters.', '0%{transform:scale(1)}35%{transform:scale(.82)}68%{transform:scale(1.16)}100%{transform:scale(1)}', { duration:520, demoShape:'pill' }),

  // TRANSFORMS
  make('rotate-360', 'Rotate 360', 'Transforms', 'Completes a full continuous rotation.', 'from{transform:rotate(0)}to{transform:rotate(360deg)}', { iterations:'infinite', duration:1800, easing:'linear' }),
  make('flip-x', 'Flip X', 'Transforms', 'Flips around the horizontal axis.', '0%{transform:perspective(650px) rotateX(0)}100%{transform:perspective(650px) rotateX(360deg)}'),
  make('flip-y', 'Flip Y', 'Transforms', 'Flips around the vertical axis.', '0%{transform:perspective(650px) rotateY(0)}100%{transform:perspective(650px) rotateY(360deg)}'),
  make('skew', 'Skew', 'Transforms', 'Tilts the element by skewing its X axis.', '0%,100%{transform:skewX(0)}50%{transform:skewX(-16deg)}'),
  make('stretch-x', 'Stretch X', 'Transforms', 'Stretches horizontally and returns.', '0%,100%{transform:scaleX(1)}50%{transform:scaleX(1.45)}'),
  make('stretch-y', 'Stretch Y', 'Transforms', 'Stretches vertically and returns.', '0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.45)}'),
  make('tilt', 'Perspective Tilt', 'Transforms', 'Uses 3D perspective with combined X/Y rotation.', '0%,100%{transform:perspective(600px) rotateX(0) rotateY(0)}50%{transform:perspective(600px) rotateX(18deg) rotateY(-22deg)}', { featured:true }),
  make('orbit', 'Orbit', 'Transforms', 'Moves around a circular-looking path using rotation and translation.', 'from{transform:rotate(0) translateX(28px) rotate(0)}to{transform:rotate(360deg) translateX(28px) rotate(-360deg)}', { iterations:'infinite', duration:1900, easing:'linear', demoShape:'dot' }),
  make('pendulum', 'Pendulum', 'Transforms', 'Swings from the top using transform-origin.', '0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}', { iterations:'infinite', duration:1500 }),
  make('squash', 'Squash & Stretch', 'Transforms', 'Compresses one axis while expanding the other.', '0%,100%{transform:scale(1,1)}35%{transform:scale(1.25,.76)}70%{transform:scale(.9,1.14)}'),
  make('diagonal', 'Diagonal Move', 'Transforms', 'Travels diagonally and returns.', '0%,100%{transform:translate(0,0)}50%{transform:translate(34px,-24px)}'),
  make('perspective-push', 'Perspective Push', 'Transforms', 'Moves away in Z-space using perspective.', '0%,100%{transform:perspective(600px) translateZ(0)}50%{transform:perspective(600px) translateZ(-180px) rotateY(12deg)}', { level:'Advanced' }),
  make('barrel-roll', 'Barrel Roll', 'Transforms', 'Rolls sideways while drifting across the stage.', '0%{transform:translateX(-32px) rotate(-180deg) scale(.82)}50%{transform:translateX(18px) rotate(40deg) scale(1.08)}100%{transform:translateX(0) rotate(0) scale(1)}', { duration:1250, level:'Intermediate' }),
  make('boomerang', 'Boomerang', 'Transforms', 'Travels out and curves visually back to its origin.', '0%,100%{transform:translate(0,0) rotate(0)}35%{transform:translate(46px,-18px) rotate(18deg)}65%{transform:translate(-18px,10px) rotate(-8deg)}', { duration:1500, iterations:'infinite' }),
  make('corkscrew', 'Corkscrew', 'Transforms', 'Twists, scales and shifts in a corkscrew-like motion.', '0%,100%{transform:rotate(0) scale(1) translateY(0)}35%{transform:rotate(130deg) scale(.68) translateY(-16px)}70%{transform:rotate(290deg) scale(1.08) translateY(5px)}', { duration:1450, level:'Advanced' }),
  make('snap-rotate', 'Snap Rotate', 'Transforms', 'Rotates through crisp quarter-turn stops.', '0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(180deg)}75%{transform:rotate(270deg)}100%{transform:rotate(360deg)}', { duration:1800, iterations:'infinite', easing:'steps(4,end)' }),

  // TEXT
  make('text-rise', 'Text Rise', 'Text', 'Text rises in with opacity.', 'from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}', { demoShape:'text' }),
  make('letter-space', 'Letter Spacing', 'Text', 'Animates tracking from wide to normal.', 'from{letter-spacing:.65em;opacity:0}to{letter-spacing:.02em;opacity:1}', { demoShape:'text', duration:1100 }),
  make('text-blur', 'Text Blur', 'Text', 'Brings blurred text into crisp focus.', 'from{filter:blur(10px);opacity:0}to{filter:blur(0);opacity:1}', { demoShape:'text' }),
  make('text-pop', 'Text Pop', 'Text', 'Pops text forward with overshoot.', '0%{opacity:0;transform:scale(.6)}75%{opacity:1;transform:scale(1.12)}100%{transform:scale(1)}', { demoShape:'text' }),
  make('text-swing', 'Text Swing', 'Text', 'Rotates text around a top anchor.', '0%,100%{transform:rotate(0)}25%{transform:rotate(5deg)}75%{transform:rotate(-5deg)}', { demoShape:'text', iterations:'infinite', duration:1400 }),
  make('text-wave', 'Text Wave', 'Text', 'Makes the word gently wave as a whole.', '0%,100%{transform:translateY(0) skewX(0)}50%{transform:translateY(-10px) skewX(-5deg)}', { demoShape:'text', iterations:'infinite', duration:1200 }),
  make('text-flicker', 'Text Flicker', 'Text', 'Creates a restrained neon-style flicker.', '0%,18%,22%,25%,53%,57%,100%{opacity:1;text-shadow:0 0 18px rgba(139,108,255,.42)}20%,24%,55%{opacity:.35;text-shadow:none}', { demoShape:'text', duration:1700 }),
  make('text-slide-mask', 'Masked Text Reveal', 'Text', 'Reveals text from left to right using clipping.', 'from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0 0 0)}', { demoShape:'text', duration:1200 }),
  make('text-tilt', 'Text Tilt', 'Text', 'Adds a crisp perspective tilt.', '0%,100%{transform:perspective(400px) rotateX(0)}50%{transform:perspective(400px) rotateX(28deg)}', { demoShape:'text' }),
  make('text-breathe', 'Text Breathe', 'Text', 'Slowly expands and softens text.', '0%,100%{transform:scale(1);opacity:.64}50%{transform:scale(1.08);opacity:1}', { demoShape:'text', iterations:'infinite', duration:2200 }),
  make('text-slam', 'Text Slam', 'Text', 'Drops text hard into place with a compact recoil.', '0%{opacity:0;transform:translateY(-48px) scale(1.25)}62%{opacity:1;transform:translateY(4px) scale(.96)}82%{transform:translateY(-2px) scale(1.02)}100%{transform:translateY(0) scale(1)}', { demoShape:'text', duration:850, featured:true }),
  make('text-zoom-blur', 'Zoom Blur Text', 'Text', 'Rushes text forward from blur into sharp focus.', '0%{opacity:0;filter:blur(12px);transform:scale(1.45)}100%{opacity:1;filter:blur(0);transform:scale(1)}', { demoShape:'text', duration:1000 }),
  make('text-flip-up', 'Flip Up Text', 'Text', 'Rotates text upward from a lower hinge.', '0%{opacity:0;transform-origin:bottom;transform:perspective(500px) rotateX(-70deg)}100%{opacity:1;transform-origin:bottom;transform:perspective(500px) rotateX(0)}', { demoShape:'text', level:'Advanced', duration:1100 }),
  make('text-drift', 'Text Drift', 'Text', 'A subtle premium drift for display words.', '0%,100%{transform:translateX(-5px);letter-spacing:.01em}50%{transform:translateX(5px);letter-spacing:.05em}', { demoShape:'text', iterations:'infinite', duration:2600 }),

  // HOVER / INTERACTION
  make('hover-lift', 'Hover Lift', 'Hover', 'Raises a control with a small scale increase.', '0%{transform:translateY(0) scale(1)}100%{transform:translateY(-8px) scale(1.035)}', { demoShape:'button', duration:320, tags:['button','microinteraction'], featured:true }),
  make('hover-press', 'Press Down', 'Hover', 'Compresses a button like a tactile press.', '0%{transform:translateY(0) scale(1)}55%{transform:translateY(2px) scale(.95)}100%{transform:translateY(0) scale(1)}', { demoShape:'button', duration:340 }),
  make('hover-tilt', 'Card Tilt', 'Hover', 'Tilts a card in perspective for depth.', '0%,100%{transform:perspective(600px) rotateX(0) rotateY(0)}50%{transform:perspective(600px) rotateX(8deg) rotateY(-11deg) translateY(-4px)}', { demoShape:'card', duration:900, level:'Intermediate', featured:true }),
  make('hover-float-card', 'Floating Card', 'Hover', 'A restrained card elevation with a smooth settle.', '0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-10px) scale(1.018)}', { demoShape:'card', iterations:'infinite', duration:1800 }),
  make('hover-glow', 'Glow Hover', 'Hover', 'Builds a controlled halo around an interactive control.', '0%,100%{box-shadow:0 0 0 rgba(124,92,255,0)}50%{box-shadow:0 0 0 7px rgba(124,92,255,.12),0 16px 38px rgba(0,0,0,.16)}', { demoShape:'button', iterations:'infinite', duration:1450 }),
  make('hover-sheen', 'Sheen Sweep', 'Hover', 'Uses a brightness sweep to mimic a polished surface pass.', '0%{filter:brightness(.86);transform:translateX(-4px)}50%{filter:brightness(1.22);transform:translateX(4px)}100%{filter:brightness(.96);transform:translateX(0)}', { demoShape:'button', duration:900, level:'Intermediate' }),
  make('hover-expand', 'Pill Expand', 'Hover', 'Expands a compact pill without feeling bouncy.', '0%{transform:scaleX(.9);opacity:.75}100%{transform:scaleX(1.08);opacity:1}', { demoShape:'pill', duration:420 }),
  make('hover-skew', 'Skew Hover', 'Hover', 'Adds attitude with a quick skew and settle.', '0%,100%{transform:skewX(0) scale(1)}50%{transform:skewX(-9deg) scale(1.04)}', { demoShape:'button', duration:600 }),
  make('hover-magnetic', 'Magnetic Pull', 'Hover', 'Suggests a magnetic cursor pull with a subtle offset.', '0%,100%{transform:translate(0,0)}35%{transform:translate(8px,-4px)}70%{transform:translate(-3px,2px)}', { demoShape:'button', duration:650 }),
  make('hover-card-pop', 'Card Pop', 'Hover', 'Lifts and rotates a card by just enough to feel tangible.', '0%,100%{transform:perspective(700px) translateY(0) rotateX(0)}50%{transform:perspective(700px) translateY(-9px) rotateX(4deg) scale(1.025)}', { demoShape:'card', duration:900 }),
  make('hover-icon-spin', 'Icon Spin', 'Hover', 'A compact icon rotation for refresh and settings actions.', '0%{transform:rotate(0) scale(1)}65%{transform:rotate(320deg) scale(1.12)}100%{transform:rotate(360deg) scale(1)}', { demoShape:'icon', duration:700 }),
  make('hover-icon-nudge', 'Icon Nudge', 'Hover', 'Moves a directional icon forward and settles it back.', '0%,100%{transform:translateX(0)}45%{transform:translateX(8px)}70%{transform:translateX(5px)}', { demoShape:'icon', duration:520 }),
  make('hover-pill-bounce', 'Pill Bounce', 'Hover', 'A friendly small bounce for tags and filter chips.', '0%,100%{transform:translateY(0) scale(1)}48%{transform:translateY(-5px) scale(1.04)}72%{transform:translateY(1px) scale(.995)}', { demoShape:'pill', duration:560 }),

  // UI MOTION
  make('ui-toast', 'Toast In', 'UI', 'Slides a toast upward with opacity and a tiny scale settle.', '0%{opacity:0;transform:translateY(22px) scale(.96)}70%{opacity:1;transform:translateY(-2px) scale(1.01)}100%{transform:translateY(0) scale(1)}', { demoShape:'card', duration:700, featured:true }),
  make('ui-modal', 'Modal Spring', 'UI', 'A modal entrance with restrained spring overshoot.', '0%{opacity:0;transform:translateY(20px) scale(.965)}70%{opacity:1;transform:translateY(-2px) scale(1.008)}100%{transform:translateY(0) scale(1)}', { demoShape:'card', duration:650 }),
  make('ui-dropdown', 'Dropdown Pop', 'UI', 'Drops a menu from its trigger with scale from the top.', '0%{opacity:0;transform-origin:top;transform:translateY(-8px) scale(.96)}100%{opacity:1;transform-origin:top;transform:translateY(0) scale(1)}', { demoShape:'card', duration:420 }),
  make('ui-tooltip', 'Tooltip Fade', 'UI', 'A subtle tooltip reveal with vertical offset.', '0%{opacity:0;transform:translateY(5px) scale(.97)}100%{opacity:1;transform:translateY(0) scale(1)}', { demoShape:'pill', duration:260 }),
  make('ui-badge-pop', 'Badge Pop', 'UI', 'Pops a compact badge for counts and unread states.', '0%{opacity:0;transform:scale(.4)}68%{opacity:1;transform:scale(1.18)}100%{transform:scale(1)}', { demoShape:'pill', duration:520 }),
  make('ui-drawer', 'Drawer Slide', 'UI', 'Slides a panel into place from the right.', '0%{opacity:.4;transform:translateX(64px)}100%{opacity:1;transform:translateX(0)}', { demoShape:'card', duration:520 }),
  make('ui-toggle', 'Toggle Snap', 'UI', 'A fast elastic snap for compact switches.', '0%{transform:translateX(-14px) scale(.9)}65%{transform:translateX(16px) scale(1.08)}100%{transform:translateX(12px) scale(1)}', { demoShape:'dot', duration:430 }),
  make('ui-success', 'Success Pop', 'UI', 'Confirms completion with a clean scale and rotation.', '0%{opacity:0;transform:scale(.45) rotate(-18deg)}72%{opacity:1;transform:scale(1.12) rotate(4deg)}100%{transform:scale(1) rotate(0)}', { demoShape:'icon', duration:650 }),
  make('ui-error', 'Error Nudge', 'UI', 'A less noisy error shake for form feedback.', '0%,100%{transform:translateX(0)}30%{transform:translateX(-7px)}55%{transform:translateX(5px)}75%{transform:translateX(-2px)}', { demoShape:'card', duration:500 }),
  make('ui-nav-indicator', 'Nav Indicator', 'UI', 'Slides a selected indicator into place.', '0%{transform:translateX(-22px) scaleX(.55);opacity:.4}100%{transform:translateX(0) scaleX(1);opacity:1}', { demoShape:'pill', duration:450 }),
  make('ui-command', 'Command Palette', 'UI', 'A quick scale-fade entrance for command surfaces.', '0%{opacity:0;filter:blur(5px);transform:translateY(-8px) scale(.98)}100%{opacity:1;filter:blur(0);transform:translateY(0) scale(1)}', { demoShape:'card', duration:420, featured:true }),
  make('ui-notification', 'Notification Peek', 'UI', 'Peeks in from an edge and settles naturally.', '0%{opacity:0;transform:translateX(36px) rotate(2deg)}72%{opacity:1;transform:translateX(-3px) rotate(-.4deg)}100%{transform:translateX(0) rotate(0)}', { demoShape:'card', duration:720 }),
  make('ui-tab-switch', 'Tab Switch', 'UI', 'Moves a selected tab surface with a small compression.', '0%{transform:translateX(-18px) scaleX(.78)}55%{transform:translateX(2px) scaleX(1.04)}100%{transform:translateX(0) scaleX(1)}', { demoShape:'pill', duration:480 }),

  // LOADERS
  make('loader-spin', 'Classic Spinner', 'Loaders', 'A continuous rotating ring.', 'to{transform:rotate(360deg)}', { demoShape:'ring', iterations:'infinite', duration:850, easing:'linear' }),
  make('loader-pulse', 'Pulse Loader', 'Loaders', 'A dot expands and fades repeatedly.', '0%{transform:scale(.6);opacity:.4}50%{transform:scale(1.25);opacity:1}100%{transform:scale(.6);opacity:.4}', { demoShape:'dot', iterations:'infinite', duration:900 }),
  make('loader-bounce', 'Bounce Loader', 'Loaders', 'A compact bouncing loading indicator.', '0%,100%{transform:translateY(5px)}50%{transform:translateY(-15px)}', { demoShape:'dot', iterations:'infinite', duration:700 }),
  make('loader-squish', 'Squish Loader', 'Loaders', 'Alternates between horizontal and vertical stretch.', '0%,100%{transform:scale(1.35,.65)}50%{transform:scale(.65,1.35)}', { demoShape:'dot', iterations:'infinite', duration:780 }),
  make('loader-orbit', 'Orbit Loader', 'Loaders', 'A dot orbits around an invisible center.', 'from{transform:rotate(0) translateX(24px) rotate(0)}to{transform:rotate(360deg) translateX(24px) rotate(-360deg)}', { demoShape:'dot', iterations:'infinite', duration:900, easing:'linear' }),
  make('loader-flip', 'Flip Loader', 'Loaders', 'A square flips continuously in 3D.', '0%{transform:perspective(140px) rotateX(0) rotateY(0)}50%{transform:perspective(140px) rotateX(-180deg) rotateY(0)}100%{transform:perspective(140px) rotateX(-180deg) rotateY(-180deg)}', { iterations:'infinite', duration:1200, easing:'ease-in-out' }),
  make('loader-grow', 'Grow Loader', 'Loaders', 'A rounded block grows and shrinks.', '0%,100%{transform:scale(.72);border-radius:50%}50%{transform:scale(1.25);border-radius:20%}', { iterations:'infinite', duration:900 }),
  make('loader-rotate-scale', 'Rotate Scale', 'Loaders', 'Combines rotation with scale in one loop.', '0%{transform:rotate(0) scale(.7)}50%{transform:rotate(180deg) scale(1.2)}100%{transform:rotate(360deg) scale(.7)}', { iterations:'infinite', duration:1300, easing:'linear' }),
  make('loader-fade', 'Fade Loader', 'Loaders', 'A minimal opacity-based loader.', '0%,100%{opacity:.25}50%{opacity:1}', { demoShape:'dot', iterations:'infinite', duration:750 }),
  make('loader-radar', 'Radar Loader', 'Loaders', 'A ring scales outward while fading.', '0%{transform:scale(.45);opacity:1}100%{transform:scale(1.55);opacity:0}', { demoShape:'ring', iterations:'infinite', duration:1300, easing:'ease-out' }),
  make('loader-breathe-ring', 'Breathing Ring', 'Loaders', 'A ring breathes with scale and opacity.', '0%,100%{transform:scale(.82);opacity:.35}50%{transform:scale(1.12);opacity:1}', { demoShape:'ring', iterations:'infinite', duration:1500 }),
  make('loader-tilt', 'Tilt Loader', 'Loaders', 'A small 3D tilt loop for loading states.', '0%,100%{transform:perspective(150px) rotateX(0) rotateY(0)}25%{transform:perspective(150px) rotateX(25deg) rotateY(0)}50%{transform:perspective(150px) rotateX(25deg) rotateY(25deg)}75%{transform:perspective(150px) rotateX(0) rotateY(25deg)}', { iterations:'infinite', duration:1600, easing:'linear' }),
  make('loader-ping', 'Ping Loader', 'Loaders', 'Pings outward and fades like a network status signal.', '0%{transform:scale(.35);opacity:1}75%,100%{transform:scale(1.6);opacity:0}', { demoShape:'ring', iterations:'infinite', duration:1200 }),

  // 3D
  make('3d-card-flip', '3D Card Flip', '3D', 'Rotates a card through a full perspective flip.', '0%{transform:perspective(700px) rotateY(0)}50%{transform:perspective(700px) rotateY(180deg) scale(.96)}100%{transform:perspective(700px) rotateY(360deg)}', { demoShape:'card', duration:1600, level:'Advanced', featured:true }),
  make('3d-door', 'Door Open', '3D', 'Rotates from a left hinge like a door opening.', '0%,100%{transform-origin:left;transform:perspective(700px) rotateY(0)}50%{transform-origin:left;transform:perspective(700px) rotateY(-68deg)}', { demoShape:'card', iterations:'infinite', duration:1900, level:'Advanced' }),
  make('3d-swing', '3D Swing', '3D', 'Swings across both perspective axes.', '0%,100%{transform:perspective(650px) rotateX(0) rotateY(0)}25%{transform:perspective(650px) rotateX(12deg) rotateY(-20deg)}75%{transform:perspective(650px) rotateX(-10deg) rotateY(18deg)}', { demoShape:'card', iterations:'infinite', duration:2200, level:'Advanced' }),
  make('3d-depth-pulse', 'Depth Pulse', '3D', 'Moves an object forward in Z-space and back.', '0%,100%{transform:perspective(700px) translateZ(0) scale(1)}50%{transform:perspective(700px) translateZ(85px) scale(1.03)}', { duration:1500, iterations:'infinite', level:'Advanced' }),
  make('3d-turntable', 'Turntable', '3D', 'Rotates a card like a product on a turntable.', 'from{transform:perspective(700px) rotateY(0) rotateX(4deg)}to{transform:perspective(700px) rotateY(360deg) rotateX(4deg)}', { demoShape:'card', iterations:'infinite', duration:3200, easing:'linear', level:'Advanced' }),
  make('3d-flip-depth', 'Flip + Depth', '3D', 'Flips while moving deeper into perspective.', '0%{transform:perspective(700px) rotateY(0) translateZ(0)}50%{transform:perspective(700px) rotateY(180deg) translateZ(-90px)}100%{transform:perspective(700px) rotateY(360deg) translateZ(0)}', { duration:1800, level:'Advanced' }),
  make('3d-tilt-loop', 'Tilt Loop', '3D', 'A calm continuous perspective orbit for showcase cards.', '0%,100%{transform:perspective(800px) rotateX(4deg) rotateY(-7deg)}50%{transform:perspective(800px) rotateX(-5deg) rotateY(8deg)}', { demoShape:'card', iterations:'infinite', duration:2800, level:'Advanced' }),
  make('3d-drop', 'Perspective Drop', '3D', 'Drops toward the viewer before settling flat.', '0%{opacity:0;transform:perspective(700px) translateZ(-220px) rotateX(18deg)}70%{opacity:1;transform:perspective(700px) translateZ(18px) rotateX(-2deg)}100%{transform:perspective(700px) translateZ(0) rotateX(0)}', { duration:1200, level:'Advanced' }),

  // BACKGROUNDS / AMBIENT
  make('bg-hue', 'Hue Shift', 'Backgrounds', 'Cycles hue values for a color-shifting surface.', 'from{filter:hue-rotate(0deg)}to{filter:hue-rotate(360deg)}', { iterations:'infinite', duration:3800, easing:'linear' }),
  make('bg-glow', 'Ambient Glow', 'Backgrounds', 'Breathes a soft glow around the demo object.', '0%,100%{box-shadow:0 0 18px rgba(139,108,255,.1)}50%{box-shadow:0 0 48px rgba(139,108,255,.48)}', { iterations:'infinite', duration:1800 }),
  make('bg-float', 'Floating Surface', 'Backgrounds', 'A relaxed float with a subtle rotation.', '0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-14px) rotate(2deg)}', { iterations:'infinite', duration:2600 }),
  make('bg-morph', 'Shape Morph', 'Backgrounds', 'Morphs border radius to create an organic blob.', '0%,100%{border-radius:28% 72% 63% 37% / 42% 38% 62% 58%}50%{border-radius:67% 33% 31% 69% / 64% 57% 43% 36%}', { iterations:'infinite', duration:3000 }),
  make('bg-breathe', 'Surface Breathe', 'Backgrounds', 'Scales the surface with a gentle brightness change.', '0%,100%{transform:scale(.95);filter:brightness(.86)}50%{transform:scale(1.06);filter:brightness(1.12)}', { iterations:'infinite', duration:2400 }),
  make('bg-spin-slow', 'Slow Spin', 'Backgrounds', 'A slow ambient rotation ideal for decorative layers.', 'from{transform:rotate(0)}to{transform:rotate(360deg)}', { iterations:'infinite', duration:6000, easing:'linear' }),
  make('bg-drift', 'Drift', 'Backgrounds', 'Moves gently across both axes.', '0%,100%{transform:translate(-8px,5px)}25%{transform:translate(10px,-7px)}50%{transform:translate(15px,8px)}75%{transform:translate(-6px,-10px)}', { iterations:'infinite', duration:4200 }),
  make('bg-focus', 'Focus Pulse', 'Backgrounds', 'Alternates blur and sharpness for atmospheric depth.', '0%,100%{filter:blur(0) brightness(1)}50%{filter:blur(3px) brightness(1.18);transform:scale(1.05)}', { iterations:'infinite', duration:2600 }),
  make('bg-float-rotate', 'Float & Rotate', 'Backgrounds', 'Combines slow vertical drift with gentle rotation.', '0%,100%{transform:translateY(8px) rotate(-5deg)}50%{transform:translateY(-10px) rotate(5deg)}', { iterations:'infinite', duration:3200 }),
  make('bg-organic', 'Organic Motion', 'Backgrounds', 'Morphs scale, rotation and shape together.', '0%,100%{transform:scale(.94) rotate(-3deg);border-radius:32% 68% 55% 45%}50%{transform:scale(1.08) rotate(4deg);border-radius:65% 35% 42% 58%}', { iterations:'infinite', duration:3600, level:'Intermediate' }),
]

export const categories: Array<'All' | AnimationCategory> = [
  'All',
  'Entrances',
  'Exits',
  'Attention',
  'Transforms',
  'Text',
  'Hover',
  'UI',
  'Loaders',
  '3D',
  'Backgrounds',
]

export const buildAnimationCss = (animation: AnimationLesson) => {
  const name = `ml-${animation.id}`
  return `@keyframes ${name}{${animation.frames}}`
}

export const buildCodeSnippet = (
  animation: AnimationLesson,
  duration = animation.duration ?? 900,
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
