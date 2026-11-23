/* i18n.js — site bilingue FR / EN
 * Le français reste dans le HTML (lu au chargement). Seul l'anglais est listé ici.
 * Format : [sélecteur CSS, texte anglais, mode]
 * Modes : 't' = textContent (défaut) | 'h' = innerHTML | 'n' = 1er nœud texte | 'a:xxx' = attribut xxx
 */
(function () {
  var EN = [
    // Meta
    ['title', 'Clovis C. Adjovi – Independent Trainer'],
    ['meta[name="description"]', 'Practical training in office software, artificial intelligence and entrepreneurship for individuals, entrepreneurs and professionals.', 'a:content'],

    // Navigation
    ['nav', 'Main navigation', 'a:aria-label'],
    ['nav a[href="#apropos"]', 'About'],
    ['nav a[href="#formations"]', 'Training'],
    ['nav a[href="#offres"]', 'Offers'],
    ['nav a[href="#expertise"]', 'Expertise'],
    ['nav a[href="#methode"]', 'Method'],
    ['nav a[href="#avis"]', 'Reviews'],
    ['nav a[href="#contact"]', 'Contact'],

    // Hero
    ['.hero h1', 'Independent Trainer'],
    ['.hero .lead', 'Hello, I’m Clovis, a Higher Technician in Computer Systems and Software and an AI-focused web and mobile developer. Today I pass on the skills of tomorrow: that is my mission. Whether you are just starting out or want to go further, we learn together, step by step, with hands-on exercises.'],
    ['.cta .btn:not(.ghost)', 'See the offers'],
    ['.cta .ghost', 'Let’s talk about your project'],
    ['.hero img', 'Clovis C. Adjovi, independent trainer, sitting in his office', 'a:alt'],

    // About
    ['#apropos h2', 'About me'],
    ['#apropos .lead', 'My name is <strong>Clovis ADJOVI</strong>, but everyone calls me <strong>King</strong>. I’m an independent trainer based in Cotonou, helping individuals, companies and teams make better use of digital tools to work more efficiently and grow their business.', 'h'],
    ['#apropos .who > div > p:nth-of-type(2)', 'A developer by trade and CEO of the digital agency Be Leader, I work with companies on real-world tools every day. What I teach comes from the field: office software and digital tools, artificial intelligence applied to productivity, and the fundamentals of entrepreneurship.'],
    ['#apropos .who > div > p:nth-of-type(3)', 'Every training is practical, accessible and tailored to your level. And if your needs are specific, I build a custom program for your company or team.'],
    ['#apropos .who > div > p:nth-of-type(4) strong', 'Any questions? Write to me!'],
    ['#apropos .points li:nth-child(1)', 'Experience and know-how'],
    ['#apropos .points li:nth-child(2)', 'Continuous learning'],
    ['#apropos .points li:nth-child(3)', 'Personalized, attentive service'],

    // Trainings
    ['#formations h2', 'Training programs'],
    ['#formations .grid4 > div:nth-child(1) h3', 'Office software and digital tools'],
    ['#formations .grid4 > div:nth-child(1) p', 'Master the essential tools to work more efficiently.'],
    ['#formations .grid4 > div:nth-child(2) h3', 'Artificial intelligence'],
    ['#formations .grid4 > div:nth-child(2) p', 'Learn how to use AI to boost your productivity.'],
    ['#formations .grid4 > div:nth-child(3) h3', 'Entrepreneurship'],
    ['#formations .grid4 > div:nth-child(3) p', 'Build the skills you need to launch and grow your business.'],
    ['#formations .grid4 > div:nth-child(4) h3', 'Custom training'],
    ['#formations .grid4 > div:nth-child(4) p', 'Programs tailored to the specific needs of your company or team.'],

    // Offers
    ['#offres h2', 'Offers and plans'],
    ['.plans .plan:nth-child(1) header', 'Essential'],
    ['.plans .plan:nth-child(1) li:nth-child(1)', 'One-to-one training'],
    ['.plans .plan:nth-child(1) li:nth-child(2)', 'Course materials'],
    ['.plans .plan:nth-child(1) li:nth-child(3)', 'Hands-on exercises'],
    ['.plans .plan:nth-child(1) button', 'Book'],
    ['.plans .plan:nth-child(1) button', 'Essential (45 €)', 'a:data-plan'],
    ['.plans .plan:nth-child(2) li:nth-child(1)', 'In-depth training'],
    ['.plans .plan:nth-child(2) li:nth-child(2)', 'Case studies'],
    ['.plans .plan:nth-child(2) li:nth-child(3)', 'Personalized support'],
    ['.plans .plan:nth-child(2) li:nth-child(4)', 'Post-training support'],
    ['.plans .plan:nth-child(2) button', 'Book'],
    ['.plans .plan:nth-child(3) li:nth-child(1)', 'Complete program'],
    ['.plans .plan:nth-child(3) li:nth-child(2)', 'Individual coaching'],
    ['.plans .plan:nth-child(3) li:nth-child(3)', 'Personalized action plan'],
    ['.plans .plan:nth-child(3) li:nth-child(4)', 'Follow-up over several weeks'],
    ['.plans .plan:nth-child(3) li:nth-child(5)', 'Priority support'],
    ['.plans .plan:nth-child(3) button', 'Book'],
    ['#offres .note', 'Not sure which plan suits you? Write to me, we’ll talk it over simply and I’ll help you choose. For a team, choose “Custom training” in the form.'],

    // Expertise
    ['#expertise h2', 'My expertise'],
    ['#expertise .skill:nth-of-type(1) h3', 'Active learning'],
    ['#expertise .skill:nth-of-type(1) p', 'Learning by doing for better retention.'],
    ['#expertise .skill:nth-of-type(2) h3', 'Professional training'],
    ['#expertise .skill:nth-of-type(2) p', 'Support for employees, freelancers and managers.'],
    ['#expertise .skill:nth-of-type(3) h3', 'Digital and technology'],
    ['#expertise .skill:nth-of-type(3) p', 'Training on modern tools and market innovations.'],
    ['.pair img:nth-child(1)', 'Focused learner at a laptop', 'a:alt'],
    ['.pair img:nth-child(2)', 'Handshake between two professionals', 'a:alt'],

    // Results
    ['#resultats h2', 'Results'],
    ['.trio img:nth-child(1)', 'Work documents and charts analyzed by two people', 'a:alt'],
    ['.trio img:nth-child(2)', 'Hands typing on a laptop keyboard', 'a:alt'],
    ['.trio img:nth-child(3)', 'Growth curve on a financial document', 'a:alt'],
    ['.quote center', 'A successful training is one that produces concrete results.'],

    // Method
    ['#methode h2', 'How does it work?'],
    ['.steps li:nth-child(1) h3', 'Discussion'],
    ['.steps li:nth-child(1) p', 'Analysis of your needs and goals.'],
    ['.steps li:nth-child(2) h3', 'Program design'],
    ['.steps li:nth-child(2) p', 'Building a path suited to your level.'],
    ['.steps li:nth-child(3) h3', 'Training'],
    ['.steps li:nth-child(3) p', 'Interactive sessions with hands-on exercises and real-life cases.'],
    ['.steps li:nth-child(4) h3', 'Follow-up and evaluation'],
    ['.steps li:nth-child(4) p', 'Measuring what you have learned and post-training support.'],

    // Reviews
    ['#avis h2', 'Client reviews'],
    ['.reviews blockquote:nth-child(1) .stars', '5 out of 5 stars', 'a:aria-label'],
    ['.reviews blockquote:nth-child(1) p', '“Very clear and practical training. I was able to apply the methods the very next day in my work.”'],
    ['.reviews blockquote:nth-child(2) .stars', '5 out of 5 stars', 'a:aria-label'],
    ['.reviews blockquote:nth-child(2) p', '“Excellent trainer, a great teacher and very attentive. The explanations are simple and effective.”'],

    // Contact
    ['#contact h2', 'Let’s talk'],
    ['#contact .lead', 'A question, an idea, a doubt? Write to me, it will be a pleasure. I will reply with a proposal tailored to your level and goals. Thank you for your trust!'],
    ['.coords li:nth-child(1) b', 'Phone: '],
    ['.coords li:nth-child(3) b', 'Email: '],
    ['#form label:nth-of-type(1)', 'Name', 'n'],
    ['#form label:nth-of-type(2)', 'Desired training', 'n'],
    ['#form label:nth-of-type(3)', 'Your message', 'n'],
    ['#formule option:nth-child(1)', 'Essential (45 €)'],
    ['#formule option:nth-child(4)', 'Custom training'],
    ['#texte', 'Tell me in a few words what you would like to learn and when you are available.', 'a:placeholder'],
    ['#wa', 'Send via WhatsApp'],
    ['#mail', 'Send by email'],

    // Floating button + footer
    ['.wa-float', 'Any questions? Write to me'],
    ['.wa-float', 'https://wa.me/22966134541?text=Hello%20Clovis%2C%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20training%20programs.', 'a:href'],
    ['footer.site .wrap span:nth-child(1)', 'Thank you for visiting! © 2026 Clovis C. Adjovi, independent trainer'],
    ['footer.site .wrap span:nth-child(2)', 'Benin']
  ];

  function firstTextNode(el) {
    for (var c = el.firstChild; c; c = c.nextSibling) {
      if (c.nodeType === 3 && c.nodeValue.trim()) return c;
    }
    return null;
  }

  function get(el, mode) {
    if (mode === 'h') return el.innerHTML;
    if (mode === 'n') { var n = firstTextNode(el); return n ? n.nodeValue : ''; }
    if (mode.indexOf('a:') === 0) return el.getAttribute(mode.slice(2));
    return el.textContent;
  }

  function set(el, mode, value) {
    if (value === null || value === undefined) return;
    if (mode === 'h') el.innerHTML = value;
    else if (mode === 'n') { var n = firstTextNode(el); if (n) n.nodeValue = value; }
    else if (mode.indexOf('a:') === 0) el.setAttribute(mode.slice(2), value);
    else el.textContent = value;
  }

  // On mémorise le français d'origine, lu directement dans la page
  var items = [];
  EN.forEach(function (e) {
    var el = document.querySelector(e[0]);
    if (!el) { console.warn('i18n : élément introuvable →', e[0]); return; }
    var mode = e[2] || 't';
    items.push({ el: el, mode: mode, fr: get(el, mode), en: e[1] });
  });

  var lang = 'fr';
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.id = 'lang';
  btn.style.cssText = 'cursor:pointer;font:inherit;font-weight:600;background:transparent;color:inherit;border:1px solid currentColor;border-radius:6px;padding:.25em .7em;margin-left:auto;';

  function apply(l) {
    lang = l;
    items.forEach(function (it) { set(it.el, it.mode, l === 'en' ? it.en : it.fr); });
    document.documentElement.lang = l;
    btn.textContent = l === 'fr' ? 'EN' : 'FR';
    btn.setAttribute('aria-label', l === 'fr' ? 'Switch to English' : 'Passer en français');
    try { localStorage.setItem('lang', l); } catch (e) {}
  }

  // Le bouton est inséré dans l'en-tête
  var bar = document.querySelector('.bar');
  var menu = document.getElementById('menu');
  if (bar) bar.insertBefore(btn, menu || null);
  btn.addEventListener('click', function () { apply(lang === 'fr' ? 'en' : 'fr'); });

  // Utilisable par le script du formulaire : i18n.t('français', 'english')
  window.i18n = { t: function (fr, en) { return lang === 'en' ? en : fr; } };

  // Langue de départ : choix mémorisé, sinon langue du navigateur
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  var start = saved || ((navigator.language || 'fr').slice(0, 2) === 'en' ? 'en' : 'fr');
  apply(start);
})();