// Khalid Bouzalmda — portfolio behavior
// Tab-based page switching + data-driven project cards & case studies.
// Add a new project by adding one object to PROJECTS below — the
// compact card, the home teaser, and the full case-study page are
// all generated from that single object, so nothing else needs editing.
//
// Note on persistence: theme choice lives in memory only for this
// session. On your own GitHub Pages deployment you can add
// localStorage.setItem('theme', …)/getItem if you want it to persist
// across visits — that restriction only applies inside Claude's own
// in-chat preview sandbox, not to the site once it's actually deployed.

var PROJECTS = [
  {
    id: "warehouse-sim",
    title: "Warehouse Congestion Simulation",
    category: "Supply Chain & Logistics · Simulation",
    date: "2025",
    featured: true,
    images: ["flexsim-warehouse.png"],
    summary: "Investigated why order lead time varied sharply at INGELEC by modeling the finished-goods picking flow in FlexSim and Python/SimPy, calibrated against real SAP data, to isolate the true bottleneck before recommending changes.",
    kpis: [
      { value: "×4.6", label: "lead-time factor, low- vs. high-congestion" },
      { value: "21.6K", label: "order lines analyzed" }
    ],
    tools: ["FlexSim", "Python", "SimPy", "Streamlit", "SAP", "DMAIC"],
    context: "INGELEC's finished-goods warehouse saw order lead time swing widely between the SAP <em>Bon de Prélèvement</em> and <em>Bon de Livraison</em> steps, with no clear explanation for the spread.",
    objective: "Determine whether lead-time variation was driven by order size or by warehouse congestion, and test whether process changes could reduce it.",
    data: "~21,600 real order lines extracted from SAP, covering picking timestamps across a range of congestion conditions.",
    method: "Applied a full DMAIC approach. Built a 3D FlexSim model of the picking flow, then a Python/SimPy discrete-event model calibrated against the SAP data, and extended it into a Monte Carlo scenario engine (Streamlit) to test root-cause levers before recommending changes.",
    rootCauses: "Warehouse congestion — not order size — was the dominant driver of lead time, with a ×4.6 factor measured between low- and high-congestion periods.",
    solutions: "Tested an arrival-smoothing scenario (spreading order releases more evenly across the day) and compared FIFO vs. SPT (shortest processing time) picking priority.",
    results: "Arrival-smoothing showed a measurable improvement. The FIFO vs. SPT comparison returned a negative/null result, reported alongside the positive finding rather than left out."
  },
  {
    id: "reliability-komatsu",
    title: "Reliability Improvement — Komatsu 730E",
    category: "Maintenance & Reliability",
    date: "Apr – Jun 2025 · OCP Group",
    images: [],
    summary: "Stage de Fin d'Études at OCP Group: analyzed failure history on Komatsu 730E haul trucks to identify why unplanned stoppages kept recurring, then proposed a preventive maintenance plan grounded in the findings.",
    kpis: [
      { value: "65%", label: "of stoppages explained by 3 root causes" }
    ],
    tools: ["Pareto", "Ishikawa", "5 Why", "Preventive Maintenance", "MRP"],
    context: "OCP's Komatsu 730E haul truck fleet experienced recurring unplanned stoppages affecting equipment availability.",
    objective: "Identify the dominant root causes behind the stoppages and propose a maintenance plan to address them.",
    data: "Historical failure and stoppage records for the truck fleet.",
    method: "Pareto analysis to rank failure modes by frequency, then Ishikawa diagrams and the 5P (5-Why-style) technique to trace each mode back to its root cause.",
    rootCauses: "3 root causes were found to account for 65% of all equipment stoppages.",
    solutions: "Set up a preventive maintenance plan, reviewed the existing MRP against the findings, and proposed corrective actions.",
    results: "A structured, evidence-based basis for improving truck availability going forward."
  },
  {
    id: "stockpro",
    title: "StockPro",
    category: "Inventory & Stock Management · Application",
    date: "Academic",
    images: ["stockpro-dashboard.jpeg"],
    summary: "Multi-warehouse stock and procurement management app (Python, SQLite): stock-level tracking and stockout alerts, purchase-order management, supplier performance via delay/reliability KPIs, and automatic PDF reporting.",
    kpis: [
      { value: "−20%", label: "stockouts (simulated)" },
      { value: "−12%", label: "storage cost (simulated)" }
    ],
    tools: ["Python", "Streamlit", "SQLite"],
    context: "Teams without a dedicated system had no centralized view of stock levels, reorder points, or supplier reliability across multiple warehouses.",
    objective: "Build a working tool that tracks stock, flags stockout risk early, and surfaces supplier performance.",
    method: "Built a multi-warehouse tracking and alerting application from scratch, with threshold-based stockout alerts, purchase-order tracking, and delay/reliability KPIs per supplier.",
    results: "Simulated results on test data: −20% stockouts and −12% storage cost versus the unmanaged baseline."
  },
  {
    id: "ingelec-simulateur",
    title: "Ingelec Simulateur",
    category: "Data & Decision Support · Application",
    date: "2025",
    images: ["ingelec-simulateur-dashboard.png"],
    summary: "Multi-page Streamlit app built on top of the warehouse simulation model — scenario comparison, source-data exploration, and a warehouse layout view, extended into a Monte Carlo scenario engine.",
    tools: ["Python", "Streamlit", "Monte Carlo"],
    context: "The FlexSim/SimPy model behind the Warehouse Congestion Simulation needed an interface non-technical stakeholders could actually use to compare scenarios.",
    objective: "Turn the simulation engine into an explorable tool rather than a one-off analysis.",
    method: "Built a multi-page Streamlit app on top of the SimPy model: scenario comparison, source-data exploration, a warehouse layout view, and a Monte Carlo scenario engine.",
    results: "Made it possible to test root-cause levers interactively before recommending a change, instead of re-running a script for each scenario."
  },
  {
    id: "energy-efficiency",
    title: "Building Energy Efficiency Study",
    category: "Energy & Simulation",
    date: "Academic",
    images: ["binayate-scenario-comparison.png", "binayate-building.jpg"],
    summary: "Comparative thermal-performance study (RTCM / BECTH / Binayate) of a base scenario (no insulation, single glazing) against an optimized scenario (full insulation, double glazing, improved COP).",
    kpis: [
      { value: "−25%", label: "48.45 → 36.15 kWh/m²/yr" }
    ],
    tools: ["Binayate", "RTCM"],
    context: "An administrative building's estimated energy consumption was high with no insulation or glazing upgrade in place.",
    objective: "Quantify how much a standard insulation and glazing upgrade would reduce annual energy consumption.",
    method: "Modeled base and optimized scenarios in Binayate under the RTCM/BECTH thermal-regulation framework and compared consumption.",
    results: "The optimized scenario cut estimated consumption by 25% (48.45 → 36.15 kWh/m²/yr)."
  },
  {
    id: "stock-vba",
    title: "Stock Management Tool — Excel VBA",
    category: "Inventory & Stock Management · Tool",
    date: "Academic",
    images: [],
    summary: "Automated stock-tracking tool covering entries/exits, alerts, suppliers and clients, built entirely in Excel/VBA for teams without access to a dedicated system.",
    tools: ["Excel", "VBA"],
    context: "Manual stock tracking in spreadsheets with no alerting left teams finding out about shortages too late.",
    objective: "Automate the entries/exits log and add threshold-based alerts, without requiring new software.",
    method: "Built the tracking and alerting logic entirely in Excel/VBA.",
    results: "A working, dependency-free tool usable by teams already working in Excel."
  },
  {
    id: "powerbi-job-dashboard",
    title: "Data Job Skill & KPI Dashboard (V2)",
    category: "Data & Decision Support · Dashboard",
    date: "Self-directed",
    images: ["powerbi-job-dashboard-overview.png", "powerbi-job-dashboard-skills-pay.png"],
    summary: "Upgraded a foundational data-jobs dashboard into a fully modeled Power BI application — automated ETL, relational data modeling and custom DAX measures to track in-demand skills and pay across data roles.",
    kpis: [
      { value: "300K", label: "job-posting rows processed via Power Query ETL" },
      { value: "+54%", label: "median pay, high-skill vs. low-skill data roles" }
    ],
    tools: ["Power BI", "Power Query", "DAX", "ETL", "Data Modeling"],
    context: "Following an initial, simpler version of a data-jobs dashboard, wanted to push further into Power BI's modeling and calculation layer through a self-guided course.",
    objective: "Upgrade the dashboard from a basic job-count view into an application capable of tracking specific data-science skills and job requirements.",
    data: "A public dataset of data-related job postings — nearly 300,000 rows across job-posting and skills tables.",
    method: "Used Power Query to extract, clean and transform the raw data (ETL), then built a relational data model connecting the job-postings and skills tables. Wrote custom DAX measures for calculations such as median salary and conditional metrics (e.g. salary by whether a posting explicitly required a degree), and built KPI visuals to surface the most in-demand skills and highest-paying roles.",
    results: "The dashboard shows a clear, positive relationship between skill breadth and pay across data roles — e.g. Senior Data Engineer postings average both the most skills per listing (7.0) and among the highest median pay (~$146.5K), while Business Analyst postings sit at the low end on both (2.9 skills/listing, ~$95K)."
  }
];

function statHtml(k, simulated) {
  return '<div class="stat-box' + (simulated ? ' simulated' : '') + '"><b>' + k.value + '</b><span>' + k.label + '</span></div>';
}

function projectCardHtml(p) {
  var img = p.images && p.images[0]
    ? '<img class="proj-img" src="' + p.images[0] + '" alt="' + p.title + '">'
    : '';
  var isSim = /simulat/i.test(JSON.stringify(p.kpis || []));
  var kpiHtml = (p.kpis || []).map(function (k) { return statHtml(k, /simulated/i.test(k.label)); }).join('');
  var tagsHtml = p.tools.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('');
  return '' +
    '<div class="proj-card">' +
      '<div class="proj-topbar"><span>' + p.category.toUpperCase() + ' · ' + p.date + '</span>' + (p.featured ? '<span class="featured-badge">Featured</span>' : '') + '</div>' +
      img +
      '<div class="proj-body">' +
        '<div class="proj-title">' + p.title + '</div>' +
        '<div class="proj-desc">' + p.summary + '</div>' +
        (kpiHtml ? '<div class="stat-row">' + kpiHtml + '</div>' : '') +
        '<div class="proj-tags">' + tagsHtml + '</div>' +
        '<button class="case-link" data-case="' + p.id + '">View case study →</button>' +
      '</div>' +
    '</div>';
}

function caseSection(num, title, html) {
  if (!html) return '';
  return '<div class="case-body"><div class="case-num mono">' + num + '</div><div><h3>' + title + '</h3><p>' + html + '</p></div></div>';
}

function caseStudyHtml(p) {
  var mediaHtml = '';
  if (p.images && p.images.length === 2) {
    mediaHtml = '<div class="case-media dual"><img src="' + p.images[0] + '" alt="' + p.title + '"><img src="' + p.images[1] + '" alt="' + p.title + '"></div>';
  } else if (p.images && p.images.length === 1) {
    mediaHtml = '<div class="case-media"><img src="' + p.images[0] + '" alt="' + p.title + '"></div>';
  }
  var kpiHtml = (p.kpis || []).map(function (k) { return statHtml(k, /simulated/i.test(k.label)); }).join('');
  var toolsHtml = p.tools.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('');
  var sections = [
    caseSection('01', 'Context', p.context),
    caseSection('02', 'Objective', p.objective),
    caseSection('03', 'Data & Scope', p.data),
    caseSection('04', 'Methodology', p.method),
    caseSection('05', 'Root Causes', p.rootCauses),
    caseSection('06', 'Solutions Tested', p.solutions),
    caseSection('07', 'Results', p.results)
  ].join('');
  return '' +
    '<button class="case-back mono" data-goto="projects">← Back to projects</button>' +
    '<div class="case-head">' +
      '<span class="case-cat mono">' + p.category.toUpperCase() + '</span>' +
      '<h1>' + p.title + '</h1>' +
      '<div class="case-date mono">' + p.date + '</div>' +
    '</div>' +
    mediaHtml +
    (kpiHtml ? '<div class="case-kpis">' + kpiHtml + '</div>' : '') +
    sections +
    '<div class="case-tools"><span class="col-label">Tools &amp; methods</span><div class="chip-row">' + toolsHtml + '</div></div>';
}

(function () {
  var root = document.documentElement;
  var themeBtn = document.getElementById('themeBtn');
  var menuBtn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');
  var pages = document.querySelectorAll('.page');
  var navLinks = document.querySelectorAll('.tab-link');

  // ---- render project grids from PROJECTS ----
  var fullGrid = document.getElementById('projects-grid');
  if (fullGrid) fullGrid.innerHTML = PROJECTS.map(projectCardHtml).join('');

  var featuredGrid = document.getElementById('home-featured-grid');
  if (featuredGrid) {
    var featured = PROJECTS.filter(function (p) { return p.featured; });
    var rest = PROJECTS.filter(function (p) { return !p.featured; });
    var pick = featured.concat(rest).slice(0, 2);
    featuredGrid.innerHTML = pick.map(projectCardHtml).join('');
  }

  var caseContainer = document.getElementById('case-study-body');

  function openCase(id) {
    var p = PROJECTS.filter(function (x) { return x.id === id; })[0];
    if (!p || !caseContainer) return;
    caseContainer.innerHTML = caseStudyHtml(p);
    showPage('case');
  }

  document.addEventListener('click', function (e) {
    var caseBtn = e.target.closest('[data-case]');
    if (caseBtn) { openCase(caseBtn.getAttribute('data-case')); return; }
    var gotoBtn = e.target.closest('[data-goto]');
    if (gotoBtn) { showPage(gotoBtn.getAttribute('data-goto')); }
  });

  // ---- page switching ----
  function showPage(name) {
    var found = false;
    pages.forEach(function (p) {
      var match = p.getAttribute('data-page') === name;
      p.classList.toggle('active', match);
      if (match) found = true;
    });
    if (!found) {
      pages.forEach(function (p) { p.classList.toggle('active', p.getAttribute('data-page') === 'home'); });
      name = 'home';
    }
    navLinks.forEach(function (l) { l.classList.toggle('active', l.getAttribute('data-goto') === name); });
    window.scrollTo(0, 0);
    if (name !== 'case') history.replaceState(null, '', '#' + name);
    nav.classList.remove('open');
  }
  window.showPage = showPage;

  window.addEventListener('popstate', function () {
    showPage((location.hash || '#home').slice(1));
  });
  showPage((location.hash || '#home').slice(1));

  // ---- theme ----
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.classList.add('dark');
  }
  function syncThemeIcon() {
    if (!themeBtn) return;
    themeBtn.textContent = root.classList.contains('dark') ? '◑' : '◐';
  }
  syncThemeIcon();
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      root.classList.toggle('dark');
      syncThemeIcon();
    });
  }

  // ---- mobile menu ----
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () { nav.classList.toggle('open'); });
  }

  // ---- certificate lightbox ----
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  document.addEventListener('click', function (e) {
    var thumb = e.target.closest('.cert-thumb img');
    if (thumb && lightbox && lightboxImg) {
      lightboxImg.src = thumb.src;
      lightbox.classList.add('open');
    }
    if (e.target === lightbox || e.target.closest('.lightbox-close')) {
      if (lightbox) lightbox.classList.remove('open');
    }
  });
})();
