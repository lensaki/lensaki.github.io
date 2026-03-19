/* ================================================================
   PORTFOLIO — script.js
   
   HOW TO EDIT YOUR PROJECTS:
   Find the PROJECTS object below and edit each entry.
   - title, stack, overview, details, outcomes: plain text / HTML
   - images: array of { src, caption } — use "" for placeholder
   - links: array of { label, url, style: "filled"|"outline" }
   - num: display number like "01"
   
   To ADD a project:
   1. Add a new key/object to PROJECTS below
   2. Add a matching .project-card in index.html with data-project="your-key"
   ================================================================ */

'use strict';

/* ── PROJECT DATA ────────────────────────────────────────────── */
const PROJECTS = {

  'rtos': {
    num: '01',
    title: 'UDP Communicator',
    stack: 'C · ARM Cortex-M4 · STM32 · RTOS',
    overview: `A minimal preemptive real-time operating system scheduler written entirely from scratch in C, targeting the ARM Cortex-M4 architecture on STM32 hardware. The scheduler implements priority-based task switching using a fixed-size task control block (TCB) array and a simple round-robin tie-breaking policy.`,
    // EDIT: Add real image paths in src. Leave src: "" to show a placeholder.
    images: [
      { src: '', caption: 'Task Control Block architecture diagram' },
      { src: '', caption: 'Context switch timing on oscilloscope' },
      { src: '', caption: 'Priority queue visualization' },
    ],
    details: `<ul>
      <li>Context switch implemented via PendSV exception handler with full register save/restore</li>
      <li>Sub-microsecond switch latency verified with logic analyzer (avg 800ns at 100MHz)</li>
      <li>Supports up to 16 concurrent tasks with configurable stack sizes</li>
      <li>Tick-based preemption using SysTick timer at 1kHz default rate</li>
      <li>Mutex and semaphore primitives with priority inheritance</li>
    </ul>`,
    outcomes: `<ul>
      <li>Successfully runs 8 concurrent sensor-polling tasks on STM32F4</li>
      <li>Deterministic worst-case latency under 2μs across all tested workloads</li>
      <li>Codebase under 600 lines — intentionally minimal and auditable</li>
      <li>Used as the runtime for the Autonomous Line Follower project</li>
    </ul>`,
    links: [
      { label: 'GitHub', url: '#', style: 'filled' },  // EDIT: real URL
      { label: 'Technical Write-up', url: '#', style: 'outline' }, // EDIT or remove
    ]
  },

  'fpga-dsp': {
    num: '02',
    title: 'FPGA Audio DSP',
    stack: 'VHDL · Xilinx Vivado · Nexys A7 · UART',
    overview: `A real-time audio effects processor implemented on a Xilinx FPGA using VHDL. The system takes PCM audio input, applies a configurable FIR (Finite Impulse Response) filter, and outputs the processed audio in real time — with no host CPU involvement during operation.`,
    images: [
      { src: '', caption: 'Block diagram: I2S → FIR → Output' },
      { src: '', caption: 'FPGA resource utilization report' },
      { src: '', caption: 'Frequency response before / after filtering' },
    ],
    details: `<ul>
      <li>32-tap FIR filter with configurable coefficients loaded over UART at runtime</li>
      <li>I2S audio interface for input and output at 44.1 kHz / 24-bit</li>
      <li>Parallel multiply-accumulate pipeline achieves 1-sample latency</li>
      <li>UART command parser for live coefficient updates without re-synthesis</li>
      <li>BRAM-based coefficient storage — no external memory required</li>
    </ul>`,
    outcomes: `<ul>
      <li>Measurable THD+N below 0.01% at full-scale sine input</li>
      <li>Filter cutoff adjustable in real time with no audio dropout</li>
      <li>Fits within 15% of Nexys A7 LUT and DSP resources</li>
      <li>Validated against MATLAB reference model with identical output bits</li>
    </ul>`,
    links: [
      { label: 'GitHub', url: '#', style: 'filled' },
    ]
  },

  'line-follower': {
    num: '03',
    title: 'Autonomous Line Follower',
    stack: 'C++ · STM32 · SPI · PID · KiCad PCB',
    overview: `A two-wheeled autonomous robot that follows a line at high speed using a custom 8-sensor IR array and a PID motor control loop. The project spans hardware PCB design, embedded firmware, and real-time control — all integrated on a custom board designed in KiCad.`,
    images: [
      { src: '', caption: 'Custom PCB top layer — sensor array and MCU' },
      { src: '', caption: 'Robot on test track — 0.8m/s steady state' },
      { src: '', caption: 'PID tuning response curves' },
    ],
    details: `<ul>
      <li>8-sensor TCRT5000 IR array sampled at 2kHz via SPI ADC</li>
      <li>Weighted centroid algorithm computes track position error in real time</li>
      <li>Adaptive PID: derivative gain scales with detected curvature for smooth cornering</li>
      <li>Dual DRV8835 H-bridge motor drivers with PWM speed control</li>
      <li>2-layer custom PCB with integrated power regulation and debug UART</li>
    </ul>`,
    outcomes: `<ul>
      <li>Stable line tracking at 0.8 m/s on a 3cm-wide track</li>
      <li>Lap time improved 35% over baseline PID through adaptive gain</li>
      <li>First place finish at university autonomous systems competition</li>
      <li>Full schematics and Gerber files available in the repository</li>
    </ul>`,
    links: [
      { label: 'GitHub', url: '#', style: 'filled' },
      { label: 'PCB Files', url: '#', style: 'outline' },
    ]
  },

  'cv-pipeline': {
    num: '04',
    title: 'Embedded CV Pipeline',
    stack: 'C++ · OpenCV · Python · Raspberry Pi 4 · Linux',
    overview: `A lightweight real-time object detection pipeline ported from a desktop reference implementation to run efficiently on Raspberry Pi 4. The work focused on memory layout, CPU cache behavior, and smart frame scheduling to reduce inference latency without sacrificing accuracy.`,
    images: [
      { src: '', caption: 'Inference time breakdown by pipeline stage' },
      { src: '', caption: 'Detection output on test sequence' },
      { src: '', caption: 'Memory-mapped I/O setup for DMA camera capture' },
    ],
    details: `<ul>
      <li>Custom C++ preprocessing: resize, normalize, color-space convert in a single pass</li>
      <li>Memory-mapped camera buffer avoids copy overhead from V4L2 capture</li>
      <li>Adaptive frame-skip: skip processing when inter-frame diff is below threshold</li>
      <li>Quantized ONNX model (INT8) for 4× throughput on Pi 4's NEON units</li>
      <li>Python orchestration layer for runtime config and visualization</li>
    </ul>`,
    outcomes: `<ul>
      <li>Inference latency reduced from 210ms to 126ms (40% improvement)</li>
      <li>CPU utilization dropped from 92% to 61% steady-state</li>
      <li>Detection accuracy within 1.2% mAP of full-precision baseline</li>
      <li>Runs at 7+ FPS stable on Pi 4 with headless Linux</li>
    </ul>`,
    links: [
      { label: 'GitHub', url: '#', style: 'filled' },
      { label: 'Demo Video', url: '#', style: 'outline' },
    ]
  },

};

/* ══════════════════════════════════════════════════════════════
   BELOW: APPLICATION LOGIC — edit only if you know what you're doing
   ══════════════════════════════════════════════════════════════ */

/* ── DOM REFS ────────────────────────────────────────────────── */
const mainPage    = document.getElementById('main-page');
const projectPage = document.getElementById('project-page');
const ppBack      = document.getElementById('pp-back');
const ppBreadcrumb= document.getElementById('pp-breadcrumb');
const ppNum       = document.getElementById('pp-num');
const ppTitle     = document.getElementById('pp-title');
const ppStack     = document.getElementById('pp-stack');
const ppOverview  = document.getElementById('pp-overview');
const ppDetails   = document.getElementById('pp-details');
const ppOutcomes  = document.getElementById('pp-outcomes');
const ppImages    = document.getElementById('pp-images');
const ppLinks     = document.getElementById('pp-links');
const navEl       = document.getElementById('nav');
const navLinks    = document.getElementById('nav-links');
const hamburger   = document.getElementById('nav-hamburger');
const navHomeLink = document.getElementById('nav-home-link');
const heroCanvas  = document.getElementById('hero-canvas');
const ppCanvas    = document.getElementById('pp-canvas');

/* ── MOBILE NAV ──────────────────────────────────────────────── */
hamburger.addEventListener('click', () => {
  const open = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !open);
  navLinks.classList.toggle('open', !open);
});

// Close mobile nav on link click
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
  });
});

// Close on outside tap
document.addEventListener('click', e => {
  if (!navEl.contains(e.target)) {
    hamburger.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
  }
});

/* ── NAV SCROLL ──────────────────────────────────────────────── */
const allNavLinks = navLinks.querySelectorAll('.nav-link[href^="#"]');

window.addEventListener('scroll', () => {
  navEl.classList.toggle('scrolled', window.scrollY > 40);

  // Active link highlight
  let current = '';
  document.querySelectorAll('section[id]').forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  allNavLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}, { passive: true });

/* ── SMOOTH SCROLL ───────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

navHomeLink.addEventListener('click', e => {
  e.preventDefault();
  if (projectPage.classList.contains('open')) closeProject();
  else window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── FADE-IN OBSERVER ────────────────────────────────────────── */
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const siblings = [...entry.target.parentElement.children].filter(c => c.classList.contains('fade-in'));
    const idx = siblings.indexOf(entry.target);
    setTimeout(() => entry.target.classList.add('visible'), idx * 90);
    fadeObserver.unobserve(entry.target);
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

/* ── EXP ITEMS SLIDE IN ──────────────────────────────────────── */
const expObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (!entry.isIntersecting) return;
    const siblings = [...entry.target.parentElement.children].filter(c => c.classList.contains('exp-item'));
    const idx = siblings.indexOf(entry.target);
    setTimeout(() => {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateX(0)';
    }, idx * 110);
    expObserver.unobserve(entry.target);
  });
}, { threshold: 0.08 });

document.querySelectorAll('.exp-item').forEach(el => {
  el.style.cssText = 'opacity:0;transform:translateX(-14px);transition:opacity 0.55s cubic-bezier(0.16,1,0.3,1),transform 0.55s cubic-bezier(0.16,1,0.3,1);';
  expObserver.observe(el);
});

/* ── HERO CANVAS — retro sci-fi grid ─────────────────────────── */
function drawHeroCanvas(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;

  function resize() {
    canvas.width  = canvas.offsetWidth  * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr);
    draw();
  }

  function draw() {
    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    ctx.clearRect(0, 0, W, H);

    const inkFaint = 'rgba(26,25,22,';

    // Fine grid
    ctx.strokeStyle = inkFaint + '0.06)';
    ctx.lineWidth = 0.5;
    const gs = 28;
    for (let x = 0; x <= W; x += gs) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y <= H; y += gs) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    // Heavier grid overlay (every 5 cells)
    ctx.strokeStyle = inkFaint + '0.1)';
    ctx.lineWidth = 0.5;
    const gsBig = gs * 5;
    for (let x = 0; x <= W; x += gsBig) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y <= H; y += gsBig) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    // Circuit trace — upper right area
    ctx.strokeStyle = inkFaint + '0.18)';
    ctx.lineWidth = 0.8;
    ctx.setLineDash([]);
    const tx = W * 0.65, ty = H * 0.18;
    ctx.beginPath();
    ctx.moveTo(tx, ty);
    ctx.lineTo(tx + 80, ty);
    ctx.lineTo(tx + 80, ty + 50);
    ctx.lineTo(tx + 140, ty + 50);
    ctx.stroke();
    // Nodes
    [[tx, ty], [tx+80, ty], [tx+80, ty+50], [tx+140, ty+50]].forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.strokeStyle = inkFaint + '0.22)';
      ctx.stroke();
    });

    // Circuit trace — lower left
    ctx.strokeStyle = inkFaint + '0.15)';
    ctx.lineWidth = 0.8;
    const tx2 = W * 0.1, ty2 = H * 0.75;
    ctx.beginPath();
    ctx.moveTo(tx2, ty2);
    ctx.lineTo(tx2 + 60, ty2);
    ctx.lineTo(tx2 + 60, ty2 - 40);
    ctx.lineTo(tx2 + 100, ty2 - 40);
    ctx.stroke();
    [[tx2, ty2], [tx2+60, ty2], [tx2+60, ty2-40], [tx2+100, ty2-40]].forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x, y, 2.5, 0, Math.PI * 2);
      ctx.strokeStyle = inkFaint + '0.2)';
      ctx.stroke();
    });

    // Large guide circle (bottom right)
    ctx.beginPath();
    ctx.arc(W * 0.88, H * 0.82, 55, 0, Math.PI * 2);
    ctx.strokeStyle = inkFaint + '0.07)';
    ctx.lineWidth = 0.8;
    ctx.setLineDash([3, 4]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Target crosshair (top left area)
    const cx = W * 0.12, cy = H * 0.25, cr = 22;
    ctx.strokeStyle = inkFaint + '0.12)';
    ctx.lineWidth = 0.8;
    ctx.beginPath(); ctx.arc(cx, cy, cr, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, cy, cr * 0.4, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx - cr * 1.5, cy); ctx.lineTo(cx + cr * 1.5, cy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx, cy - cr * 1.5); ctx.lineTo(cx, cy + cr * 1.5); ctx.stroke();

    // Small mono text labels (retro readout feel)
    ctx.fillStyle = inkFaint + '0.2)';
    ctx.font = `${6 * dpr / dpr}px 'DM Mono', monospace`;
    ctx.fillText('FIELD_0', tx + 2, ty - 6);
    ctx.fillText('ICO', W * 0.85, H * 0.82 - 62);
    ctx.fillText('REF', tx2 + 2, ty2 - 46);

    // Dot scatter — upper right corner
    ctx.fillStyle = inkFaint + '0.08)';
    const seed = [{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:0,y:1},{x:2,y:1},{x:1,y:2},{x:3,y:2},{x:0,y:3},{x:2,y:3}];
    seed.forEach(({x, y}) => {
      ctx.beginPath();
      ctx.arc(W * 0.92 + x * 10, H * 0.08 + y * 10, 1.5, 0, Math.PI * 2);
      ctx.fill();
    });

    // Diagonal measurement line
    ctx.strokeStyle = inkFaint + '0.12)';
    ctx.lineWidth = 0.6;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(W * 0.75, H * 0.55);
    ctx.lineTo(W * 0.9, H * 0.72);
    ctx.stroke();
    ctx.setLineDash([]);

    // Small axis arrows
    const ax = W * 0.1, ay = H * 0.9;
    ctx.strokeStyle = inkFaint + '0.2)';
    ctx.lineWidth = 0.8;
    ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(ax + 30, ay); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(ax + 28, ay - 3); ctx.lineTo(ax + 32, ay); ctx.lineTo(ax + 28, ay + 3); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(ax, ay - 24); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(ax - 3, ay - 22); ctx.lineTo(ax, ay - 26); ctx.lineTo(ax + 3, ay - 22); ctx.stroke();
    ctx.fillStyle = inkFaint + '0.25)';
    ctx.font = '6px monospace';
    ctx.fillText('x', ax + 34, ay + 3);
    ctx.fillText('y', ax + 3, ay - 28);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });
}

drawHeroCanvas(heroCanvas);

/* ── PROJECT PAGE CANVAS ─────────────────────────────────────── */
function drawProjectCanvas(canvas, projectId) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;

  canvas.width  = canvas.offsetWidth  * dpr;
  canvas.height = canvas.offsetHeight * dpr;
  ctx.scale(dpr, dpr);

  const W = canvas.offsetWidth;
  const H = canvas.offsetHeight;
  const inkFaint = 'rgba(26,25,22,';

  ctx.clearRect(0, 0, W, H);

  // Grid
  const gs = 24;
  ctx.strokeStyle = inkFaint + '0.07)';
  ctx.lineWidth = 0.5;
  for (let x = 0; x <= W; x += gs) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
  for (let y = 0; y <= H; y += gs) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }

  // Bold grid
  ctx.strokeStyle = inkFaint + '0.12)';
  const gb = gs * 4;
  for (let x = 0; x <= W; x += gb) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
  for (let y = 0; y <= H; y += gb) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }

  // Project-specific decoration
  ctx.strokeStyle = inkFaint + '0.2)';
  ctx.lineWidth = 0.9;

  if (projectId === 'rtos') {
    // Flow diagram hint
    const bx = W * 0.6, by = H * 0.2;
    [[0,0],[60,0],[120,0]].forEach(([dx,dy]) => {
      ctx.strokeRect(bx+dx, by+dy, 48, 22);
    });
    ctx.beginPath(); ctx.moveTo(bx+48, by+11); ctx.lineTo(bx+60, by+11); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(bx+108, by+11); ctx.lineTo(bx+120, by+11); ctx.stroke();
  } else if (projectId === 'fpga-dsp') {
    // Waveform
    const pts = [0,0,10,-30,20,40,30,-20,40,20,50,0,60,-35,70,25,80,-10,90,5];
    ctx.beginPath();
    for (let i = 0; i < pts.length; i += 2) {
      const px = W * 0.55 + pts[i] * 1.5;
      const py = H * 0.5 + pts[i+1];
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.stroke();
  } else if (projectId === 'line-follower') {
    const cx = W * 0.72, cy = H * 0.5;
    ctx.beginPath(); ctx.arc(cx, cy, 40, 0, Math.PI*2); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, cy, 16, 0, Math.PI*2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx, cy-40); ctx.lineTo(cx, cy-60); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx, cy+40); ctx.lineTo(cx, cy+60); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx-40, cy); ctx.lineTo(cx-60, cy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx+40, cy); ctx.lineTo(cx+60, cy); ctx.stroke();
  } else {
    // Pipeline boxes
    const by = H * 0.4;
    [[W*0.5, by], [W*0.62, by], [W*0.74, by]].forEach(([x,y], i) => {
      ctx.strokeRect(x, y, 50, 28);
      if (i < 2) { ctx.beginPath(); ctx.moveTo(x+50, y+14); ctx.lineTo(x+62, y+14); ctx.stroke(); }
    });
  }

  // Dot scatter
  ctx.fillStyle = inkFaint + '0.1)';
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 4; j++) {
      ctx.beginPath();
      ctx.arc(W * 0.05 + i * 12, H * 0.15 + j * 12, 1.5, 0, Math.PI*2);
      ctx.fill();
    }
  }
}

/* ── PROJECT PAGE OPEN/CLOSE ─────────────────────────────────── */
function openProject(id) {
  const data = PROJECTS[id];
  if (!data) return;

  // Populate content
  ppNum.textContent       = data.num;
  ppTitle.textContent     = data.title;
  ppStack.textContent     = data.stack;
  ppOverview.textContent  = data.overview;
  ppDetails.innerHTML     = data.details;
  ppOutcomes.innerHTML    = data.outcomes;
  ppBreadcrumb.textContent = `Projects / ${data.title}`;

  // Images
  ppImages.innerHTML = '';
  if (data.images && data.images.length) {
    data.images.forEach(img => {
      const slot = document.createElement('div');
      slot.className = 'pp-image-slot';
      if (img.src) {
        slot.innerHTML = `<img src="${img.src}" alt="${img.caption || ''}" loading="lazy" />`;
      } else {
        slot.innerHTML = `
          <div class="pp-image-placeholder">
            <div class="ph-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
            </div>
            <span class="ph-label">[ image slot ]</span>
          </div>`;
      }
      if (img.caption) {
        const cap = document.createElement('div');
        cap.className = 'pp-image-caption';
        cap.textContent = img.caption;
        slot.appendChild(cap);
      }
      ppImages.appendChild(slot);
    });
  }

  // Links
  ppLinks.innerHTML = '';
  if (data.links && data.links.length) {
    data.links.forEach(link => {
      const a = document.createElement('a');
      a.href = link.url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.className = `pp-link-btn ${link.style || 'outline'}`;
      a.textContent = link.label;
      ppLinks.appendChild(a);
    });
  }

  // Show page
  projectPage.removeAttribute('hidden');
  projectPage.setAttribute('aria-hidden', 'false');
  mainPage.classList.add('blurred');

  // Animate in
  requestAnimationFrame(() => {
    projectPage.classList.add('open');
    projectPage.scrollTop = 0;
  });

  // Draw canvas
  setTimeout(() => drawProjectCanvas(ppCanvas, id), 50);

  // URL state
  history.pushState({ project: id }, '', `#project/${id}`);
  document.title = `${data.title} — Len Sakimukai`;
}

function closeProject() {
  projectPage.classList.remove('open');
  mainPage.classList.remove('blurred');
  projectPage.setAttribute('aria-hidden', 'true');

  setTimeout(() => {
    projectPage.setAttribute('hidden', '');
  }, 420);

  history.pushState({}, '', window.location.pathname);
  document.title = 'Len Sakimukai'; // EDIT: your name
}

// Card click / enter
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => openProject(card.dataset.project));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openProject(card.dataset.project);
    }
  });
});

// Back button
ppBack.addEventListener('click', closeProject);

// Browser back
window.addEventListener('popstate', e => {
  if (e.state && e.state.project) openProject(e.state.project);
  else if (projectPage.classList.contains('open')) closeProject();
});

// ESC key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && projectPage.classList.contains('open')) closeProject();
});

// Handle deep-link on load (e.g., someone shares #project/rtos)
(function checkDeepLink() {
  const hash = window.location.hash;
  const match = hash.match(/^#project\/([^/]+)$/);
  if (match && PROJECTS[match[1]]) openProject(match[1]);
})();

/* ── READOUT BLINK ───────────────────────────────────────────── */
const readoutSpans = document.querySelectorAll('.hero-readout span');
if (readoutSpans.length) {
  setInterval(() => {
    const r = readoutSpans[Math.floor(Math.random() * readoutSpans.length)];
    r.style.opacity = '0.35';
    setTimeout(() => { r.style.opacity = ''; }, 160);
  }, 3200);
}
