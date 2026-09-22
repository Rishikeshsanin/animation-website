export type BootstrapLesson = {
  id: string
  title: string
  description: string
  concept: string
  code: string
  badge: string
}

export const bootstrapLessons: BootstrapLesson[] = [
  {
    id: 'carousel',
    title: 'Carousel',
    badge: 'Slides',
    description: 'Cycle through images or content using slide or fade transitions.',
    concept: 'Bootstrap Carousel combines a .carousel container, .carousel-inner, .carousel-item slides, optional indicators, and previous/next controls.',
    code: `<div id="demoCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button data-bs-target="#demoCarousel" data-bs-slide-to="0" class="active"></button>
    <button data-bs-target="#demoCarousel" data-bs-slide-to="1"></button>
  </div>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="slide-1.jpg" class="d-block w-100" alt="Slide 1">
    </div>
    <div class="carousel-item">
      <img src="slide-2.jpg" class="d-block w-100" alt="Slide 2">
    </div>
  </div>

  <button class="carousel-control-prev" data-bs-target="#demoCarousel" data-bs-slide="prev">‹</button>
  <button class="carousel-control-next" data-bs-target="#demoCarousel" data-bs-slide="next">›</button>
</div>`,
  },
  {
    id: 'carousel-fade',
    title: 'Carousel Fade',
    badge: 'Fade',
    description: 'Swap the default horizontal slide for a cross-fade.',
    concept: 'Add .carousel-fade to the carousel root. Bootstrap changes the transition behavior without changing your markup structure.',
    code: `<div id="fadeCarousel"
  class="carousel slide carousel-fade"
  data-bs-ride="carousel">
  ...
</div>`,
  },
  {
    id: 'collapse',
    title: 'Collapse',
    badge: 'Height',
    description: 'Expand and hide content with an animated height transition.',
    concept: 'A trigger points to a .collapse element by id. Bootstrap animates the height between hidden and expanded states.',
    code: `<button class="btn btn-primary"
  data-bs-toggle="collapse"
  data-bs-target="#details">
  Toggle details
</button>

<div class="collapse" id="details">
  <div class="card card-body">
    Hidden content revealed with motion.
  </div>
</div>`,
  },
  {
    id: 'accordion',
    title: 'Accordion',
    badge: 'Disclosure',
    description: 'Build grouped expandable panels with coordinated collapse motion.',
    concept: 'Accordion is a structured set of collapse components. data-bs-parent keeps one item open at a time.',
    code: `<div class="accordion" id="faq">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button"
        data-bs-toggle="collapse"
        data-bs-target="#answerOne">
        What is CSS animation?
      </button>
    </h2>
    <div id="answerOne"
      class="accordion-collapse collapse show"
      data-bs-parent="#faq">
      <div class="accordion-body">...</div>
    </div>
  </div>
</div>`,
  },
  {
    id: 'modal',
    title: 'Modal',
    badge: 'Overlay',
    description: 'Animate a dialog over the current page using Bootstrap’s modal system.',
    concept: 'The modal backdrop fades in while .modal-dialog transitions into view. Add .modal-dialog-centered when you want vertical centering.',
    code: `<button data-bs-toggle="modal" data-bs-target="#demoModal">
  Open modal
</button>

<div class="modal fade" id="demoModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>`,
  },
  {
    id: 'offcanvas',
    title: 'Offcanvas',
    badge: 'Slide',
    description: 'Slide navigation or utility content in from a screen edge.',
    concept: 'Choose the entry edge using .offcanvas-start, .offcanvas-end, .offcanvas-top, or .offcanvas-bottom.',
    code: `<button data-bs-toggle="offcanvas" data-bs-target="#menu">
  Open menu
</button>

<div class="offcanvas offcanvas-end" id="menu">
  <div class="offcanvas-header">...</div>
  <div class="offcanvas-body">...</div>
</div>`,
  },
  {
    id: 'toast',
    title: 'Toast',
    badge: 'Notify',
    description: 'Show lightweight notifications with fade transitions.',
    concept: 'Toasts are compact status messages. Bootstrap handles show/hide classes and opacity transitions.',
    code: `<div class="toast show" role="alert">
  <div class="toast-header">
    <strong class="me-auto">MotionLab</strong>
  </div>
  <div class="toast-body">
    Animation copied!
  </div>
</div>`,
  },
  {
    id: 'dropdown',
    title: 'Dropdown',
    badge: 'Menu',
    description: 'Reveal contextual menus from buttons or navigation items.',
    concept: 'Bootstrap toggles the .show state and positions the menu. You can combine it with custom CSS transitions for richer motion.',
    code: `<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle"
    data-bs-toggle="dropdown">
    Animations
  </button>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Fade</a></li>
    <li><a class="dropdown-item" href="#">Bounce</a></li>
  </ul>
</div>`,
  },
  {
    id: 'alert',
    title: 'Dismissible Alert',
    badge: 'Dismiss',
    description: 'Fade alerts away when the user dismisses them.',
    concept: 'Use .fade and .show with .alert-dismissible. Bootstrap removes the visible state before dismissing the component.',
    code: `<div class="alert alert-success alert-dismissible fade show">
  Saved successfully.
  <button class="btn-close" data-bs-dismiss="alert"></button>
</div>`,
  },
]

export const fundamentals = [
  {
    step: '01',
    title: 'Transition',
    description: 'Animate a property when its value changes.',
    code: '.button { transition: transform 250ms ease; }',
  },
  {
    step: '02',
    title: 'Transform',
    description: 'Move, scale, rotate or skew without affecting document flow.',
    code: '.button:hover { transform: translateY(-4px) scale(1.03); }',
  },
  {
    step: '03',
    title: '@keyframes',
    description: 'Define multiple moments in a custom animation timeline.',
    code: '@keyframes pulse { 50% { transform: scale(1.08); } }',
  },
  {
    step: '04',
    title: 'animation',
    description: 'Connect your keyframes to an element and control timing.',
    code: '.badge { animation: pulse 1s ease infinite; }',
  },
]
