/* Edney Learn — site chrome
   Header and footer are injected from here so that navigation, status labels and
   footer links have exactly one source of truth across all pages.
   When this is rebuilt on a real stack these become template partials.
   Works over file:// because the markup is inline rather than fetched. */

(function () {
  'use strict';

  /* ------------------------------------------------------------------
     Site chrome
     ------------------------------------------------------------------ */
  var HEADER =
  '<header class="site-header">' +
    '<div class="header-inner">' +
      '<a class="brand" href="index.html">Edney <em>Learn</em></a>' +
      '<button class="nav-toggle" aria-expanded="false" aria-controls="primary-nav">Menu</button>' +
      '<nav class="nav" id="primary-nav" aria-label="Primary">' +
        '<ul>' +
          '<li class="has-menu">' +
            '<a href="ai-capability.html">AI Capability</a>' +
            '<div class="menu">' +
              '<a href="ai-capability.html">What AI capability means</a>' +
              '<a href="ai-enabled-vs-ai-augmented.html">AI-enabled vs AI-augmented</a>' +
              '<a href="method.html">The Workflow Design Method</a>' +
            '</div>' +
          '</li>' +
          '<li class="has-menu">' +
            '<a href="who-its-for.html">Who It\'s For</a>' +
            '<div class="menu">' +
              '<a href="who-its-for.html">Overview</a>' +
              '<a href="for-professionals.html">Individual professionals</a>' +
              '<a href="for-managers-teams.html">Managers and teams</a>' +
              '<a href="for-smes.html">Small businesses</a>' +
              '<a href="for-institutions.html">Associations and universities</a>' +
            '</div>' +
          '</li>' +
          '<li class="has-menu">' +
            '<a href="workflows.html">Professional Workflows</a>' +
            '<div class="menu">' +
              '<p class="menu-note">First paid pilot</p>' +
              '<a href="workflow-project-managers.html">For Project Managers <span class="status status--pilot">Pilot</span></a>' +
              '<p class="menu-note">Developed product families</p>' +
              '<a href="workflow-authors.html">For Authors <span class="status status--available">Available</span></a>' +
              '<a href="workflow-consultants.html">For Consultants <span class="status status--available">Available</span></a>' +
              '<p class="menu-note">IP codification</p>' +
              '<a href="architect.html">ARCHITECT standard</a>' +
              '<p class="menu-note">Later pathways</p>' +
              '<a href="workflow-managers-teams.html">For Managers and Teams <span class="status status--dev">In Development</span></a>' +
              '<a href="workflow-future-pathways.html">Educator and future roles <span class="status status--future">Future</span></a>' +
              '<p class="menu-note">Ways to start</p>' +
              '<a href="programmes.html">Programmes and workflow packs</a>' +
              '<a href="workshops.html">Implementation workshops</a>' +
              '<a href="coaching.html">Coaching and review</a>' +
            '</div>' +
          '</li>' +
          '<li><a href="evidence.html">Evidence</a></li>' +
          '<li><a href="insights.html">Insights</a></li>' +
          '<li class="has-menu">' +
            '<a href="about.html">About</a>' +
            '<div class="menu">' +
              '<a href="about.html">Edney Learn and Dr Jim Choo</a>' +
              '<a href="contact.html">Contact</a>' +
            '</div>' +
          '</li>' +
        '</ul>' +
      '</nav>' +
      '<a class="btn btn--primary btn--sm header-cta" href="benchmark.html#register">Register for the Benchmark</a>' +
    '</div>' +
  '</header>';

  var FOOTER =
  '<footer class="site-footer">' +
    '<div class="wrap">' +
      '<div class="footer-grid">' +
        '<div>' +
          '<div class="footer-brand">Edney <em>Learn</em></div>' +
          '<p class="footer-note">An AI-augmented professional capability company. We help professionals and organisations convert AI experimentation into measurable capability.</p>' +
          '<p class="footer-note mt-2">Founder website: <a href="https://drjimchoo.com">Dr Jim Choo</a></p>' +
        '</div>' +
        '<div>' +
          '<h4>Capability</h4>' +
          '<ul>' +
            '<li><a href="ai-capability.html">AI Capability</a></li>' +
            '<li><a href="ai-enabled-vs-ai-augmented.html">AI-enabled vs AI-augmented</a></li>' +
            '<li><a href="method.html">Workflow Design Method</a></li>' +
            '<li><a href="benchmark.html">Developmental profile</a></li>' +
          '</ul>' +
        '</div>' +
        '<div>' +
          '<h4>Workflows</h4>' +
          '<ul>' +
            '<li><a href="workflow-project-managers.html">For Project Managers</a></li>' +
            '<li><a href="workflow-authors.html">For Authors</a></li>' +
            '<li><a href="workflow-consultants.html">For Consultants</a></li>' +
            '<li><a href="architect.html">ARCHITECT standard</a></li>' +
            '<li><a href="workflow-managers-teams.html">For Managers and Teams</a></li>' +
            '<li><a href="workflow-future-pathways.html">Future role pathways</a></li>' +
          '</ul>' +
        '</div>' +
        '<div>' +
          '<h4>Offers</h4>' +
          '<ul>' +
            '<li><a href="programmes.html">Programmes and packs</a></li>' +
            '<li><a href="workshops.html">Implementation workshops</a></li>' +
            '<li><a href="coaching.html">Coaching and review</a></li>' +
          '</ul>' +
        '</div>' +
        '<div>' +
          '<h4>Company</h4>' +
          '<ul>' +
            '<li><a href="about.html">About</a></li>' +
            '<li><a href="who-its-for.html">Who It\'s For</a></li>' +
            '<li><a href="evidence.html">Evidence</a></li>' +
            '<li><a href="insights.html">Insights</a></li>' +
            '<li><a href="contact.html">Contact</a></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
      '<div class="footer-bar">' +
        '<p style="margin:0;">&copy; 2026 EDNEY LEARN PLT (201904002443).</p>' +
        '<ul>' +
          '<li><a href="privacy.html">Privacy</a></li>' +
          '<li><a href="terms.html">Terms</a></li>' +
          '<li><a href="ai-use.html">AI use disclosure</a></li>' +
        '</ul>' +
      '</div>' +
    '</div>' +
  '</footer>';

  /* ------------------------------------------------------------------
     Inject chrome
     ------------------------------------------------------------------ */
  var headerSlot = document.querySelector('[data-chrome="header"]');
  var footerSlot = document.querySelector('[data-chrome="footer"]');
  if (headerSlot) headerSlot.outerHTML = HEADER;
  if (footerSlot) footerSlot.outerHTML = FOOTER;

  /* ------------------------------------------------------------------
     Mobile navigation
     ------------------------------------------------------------------ */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
        toggle.focus();
      }
    });
  }

  /* ------------------------------------------------------------------
     Mark the current page in the nav
     ------------------------------------------------------------------ */
  var here = location.pathname.split('/').pop() || 'index.html';
  Array.prototype.forEach.call(document.querySelectorAll('.nav a'), function (a) {
    if (a.getAttribute('href') === here) a.setAttribute('aria-current', 'page');
  });

})();
