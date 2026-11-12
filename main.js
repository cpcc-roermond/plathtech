
(function(){
  var root = document.documentElement, header = document.querySelector('.site-header');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // stable viewport height for pinned sections (ignores the URL-bar show/hide on phones)
  var lastW = 0;
  function setVh(force){ if (force || window.innerWidth !== lastW) { lastW = window.innerWidth; root.style.setProperty('--vh', window.innerHeight + 'px'); } }
  setVh(true); window.addEventListener('resize', function(){ setVh(!('ontouchstart' in window)); }); window.addEventListener('orientationchange', function(){ setTimeout(function(){ setVh(true); }, 250); });

  // navigation
  var burger = document.querySelector('.burger');
  function closeNav(){ document.body.classList.remove('nav-open'); if (burger) burger.setAttribute('aria-expanded', 'false'); }
  if (burger) burger.addEventListener('click', function(){ var o = document.body.classList.toggle('nav-open'); burger.setAttribute('aria-expanded', o); });
  document.querySelectorAll('.mobile-nav a').forEach(function(a){ a.addEventListener('click', closeNav); });
  window.addEventListener('resize', function(){ if (burger && getComputedStyle(burger).display === 'none') closeNav(); });
  var langs = document.querySelectorAll('.lang');
  function setLang(l, o){ l.classList.toggle('open', o); l.querySelector('.lang-btn').setAttribute('aria-expanded', o); }
  langs.forEach(function(l){
    l.querySelector('.lang-btn').addEventListener('click', function(e){ e.stopPropagation(); var o = !l.classList.contains('open'); langs.forEach(function(x){ setLang(x, false); }); setLang(l, o); });
  });
  document.addEventListener('click', function(e){ langs.forEach(function(l){ if (!l.contains(e.target)) setLang(l, false); }); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') { langs.forEach(function(l){ setLang(l, false); }); closeNav(); } });
  // hint: browser language differs from the page language -> offer it once (no automatic redirect)
  function store(k, v){ try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch(e){ return null; } }
  document.querySelectorAll('.lang-menu a, .mlang a, .flang a').forEach(function(a){ a.addEventListener('click', function(){ store('pt-lang', a.getAttribute('hreflang')); }); });
  var hint = document.querySelector('.lang-hint');
  if (hint && !store('pt-lang') && !store('pt-lang-hint')) {
    var cur = root.getAttribute('lang'), want = null;
    (navigator.languages || [navigator.language || '']).some(function(x){ var c = (x || '').slice(0,2).toLowerCase(); if (document.querySelector('.lang-menu a[hreflang="' + c + '"]')) { want = c; return true; } return false; });
    if (want && want !== cur) {
      var a = document.querySelector('.lang-menu a[hreflang="' + want + '"]'), link = hint.querySelector('.go');
      link.href = a.getAttribute('href'); link.setAttribute('hreflang', want); link.setAttribute('lang', want); if (want === 'ar') link.setAttribute('dir', 'rtl');
      link.querySelector('.ph').textContent = a.dataset.phrase; link.querySelector('.nm').textContent = a.dataset.name;
      hint.hidden = false; requestAnimationFrame(function(){ hint.classList.add('show'); });
      link.addEventListener('click', function(){ store('pt-lang', want); });
      hint.querySelector('.x').addEventListener('click', function(){ store('pt-lang-hint', '1'); hint.classList.remove('show'); setTimeout(function(){ hint.hidden = true; }, 300); });
    }
  }

  // reveal
  var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }); }, {rootMargin:'0px 0px -8% 0px', threshold:0.08});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

  // KPI counters
  var counters = document.querySelectorAll('.kpi .n[data-final]'), counted = false;
  function tween(dur, cb, done){ var s0 = performance.now(); function f(n){ var t = Math.min(1,(n-s0)/dur); cb(1-Math.pow(1-t,3)); if (t<1) requestAnimationFrame(f); else if (done) done(); } requestAnimationFrame(f); }
  function runCounters(){ if (counted) return; counted = true; counters.forEach(function(el){
    var fin = el.dataset.final;
    if (reduce) { el.textContent = fin; return; }
    if (el.dataset.text){ var a = el.dataset.text.split('|'); tween(1500,function(e){ el.textContent = Math.round(e*parseFloat(a[0]))+'-'+Math.round(e*parseFloat(a[1]))+a[2]; }, function(){ el.textContent = fin; }); return; }
    var to = parseFloat(el.dataset.to), pre = el.dataset.pre||'', suf = el.dataset.suf||''; tween(1500,function(e){ el.textContent = pre+Math.round(e*to)+suf; }, function(){ el.textContent = fin; }); }); }
  var kpis = document.querySelector('.kpis');
  if (kpis) { var kio = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting) { runCounters(); kio.disconnect(); } }); }, {threshold:0.35}); kio.observe(kpis); }

  // scroll-coupled states
  var bar = document.querySelector('.hprogress');
  var worlds = document.querySelector('.worlds'), wps = worlds ? worlds.querySelectorAll('.wp') : [], wdots = worlds ? worlds.querySelectorAll('.wdots i') : [];
  var wipe = document.querySelector('.wipe');
  function clamp(v){ return Math.min(1, Math.max(0, v)); }
  function pinProgress(el){ var hh = header ? header.offsetHeight : 0, r = el.getBoundingClientRect(), total = el.offsetHeight - (window.innerHeight - hh); return total > 0 ? clamp((hh - r.top)/total) : 0; }
  // products: list + preview
  var pg = document.querySelector('.pgrid'), rows = pg ? pg.querySelectorAll('.prow') : [], pimgs = pg ? pg.querySelectorAll('.pprev .stack img') : [];
  var pname = pg && pg.querySelector('.pprev .name'), plink = pg && pg.querySelector('.pprev .tlink'), active = -1, hovering = false;
  function setActive(i){ if (i === active) return; active = i; rows.forEach(function(r,k){ r.classList.toggle('active', k === i); }); pimgs.forEach(function(im,k){ im.classList.toggle('on', k === i); });
    if (pname) pname.textContent = rows[i].dataset.name; if (plink) plink.setAttribute('href', rows[i].dataset.href); }
  function byScroll(){ if (hovering || !rows.length) return; var mid = window.innerHeight*0.48, best = 0, bd = 1e9; rows.forEach(function(r,i){ var b = r.getBoundingClientRect(), d = Math.abs((b.top+b.bottom)/2 - mid); if (d < bd) { bd = d; best = i; } }); setActive(best); }
  rows.forEach(function(r,i){ r.addEventListener('mouseenter', function(){ hovering = true; setActive(i); }); r.addEventListener('focusin', function(){ setActive(i); }); });
  if (pg) pg.querySelector('.plist').addEventListener('mouseleave', function(){ hovering = false; });

  var ticking = false;
  function update(){
    ticking = false;
    var doc = root.scrollHeight - window.innerHeight;
    if (bar) bar.style.transform = 'scaleX(' + (doc > 0 ? clamp(window.scrollY/doc) : 0) + ')';
    if (worlds) {
      var p = pinProgress(worlds), t2 = clamp((p-0.24)/0.2), t3 = clamp((p-0.6)/0.2), idx = p < 0.34 ? 0 : (p < 0.7 ? 1 : 2);
      var moving = (t2 > 0 && t2 < 1) ? t2 : ((t3 > 0 && t3 < 1) ? t3 : -1);
      worlds.style.setProperty('--t2', t2.toFixed(4)); worlds.style.setProperty('--t3', t3.toFixed(4));
      worlds.style.setProperty('--tl', (moving < 0 ? 0 : moving).toFixed(4)); worlds.style.setProperty('--lo', moving < 0 ? 0 : 1);
      wps.forEach(function(el,i){ el.classList.toggle('on', i === idx); });
      wdots.forEach(function(el,i){ el.style.setProperty('--f', clamp(p*3 - i).toFixed(3)); });
    }
    if (wipe) { var q = pinProgress(wipe); wipe.style.setProperty('--p', q.toFixed(4)); wipe.classList.toggle('h-on', q > 0.72); }
    byScroll();
  }
  function onScroll(){ if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', onScroll, {passive:true}); window.addEventListener('resize', onScroll); update();
})();


(function(){
  var form = document.getElementById('contact-form'); if (!form) return;
  var endpoint = form.getAttribute('data-endpoint') || '';
  var rules = { name: function(v){ return v.trim().length >= 2; }, email: function(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); },
    subject: function(v){ return v.trim().length >= 5; }, message: function(v){ return v.trim().length >= 10; } };
  function validate(f){ var r = rules[f.name]; if (!r) return true; var ok = r(f.value), e = document.getElementById('err-' + f.name); if (e) e.hidden = ok; f.classList.toggle('invalid', !ok); return ok; }
  form.addEventListener('input', function(e){ if (e.target.classList.contains('invalid')) validate(e.target); });
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var ok = true; Array.prototype.forEach.call(form.querySelectorAll('input,textarea'), function(f){ if (!validate(f)) ok = false; });
    var success = form.querySelector('.form-success'), error = form.querySelector('.form-error'); success.hidden = true; error.hidden = true;
    if (!ok) { form.querySelector('.invalid').focus(); return; }
    var btn = form.querySelector('button[type=submit]'); btn.disabled = true; btn.textContent = btn.dataset.sending;
    function done(good){ btn.disabled = false; btn.textContent = btn.dataset.label; (good ? success : error).hidden = false; if (good) form.reset(); }
    if (!endpoint) { setTimeout(function(){ done(true); }, 900); return; }
    var d = {}; Array.prototype.forEach.call(form.querySelectorAll('input,textarea'), function(f){ d[f.name] = f.value.trim(); });
    d._replyto = d.email; d._subject = d.subject;
    fetch(endpoint, { method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(d) })
      .then(function(r){ done(r.ok); }).catch(function(){ done(false); });
  });
})();
