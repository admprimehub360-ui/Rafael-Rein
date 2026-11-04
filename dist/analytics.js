(function () {
  'use strict';
  if (window.RRAnalytics) return;

  const measurementId = 'G-1DTR9GR6ME';
  const consentKey = 'rr_analytics_consent_v1';
  const consent = (() => { try { return localStorage.getItem(consentKey); } catch (_) { return null; } })();
  let active = false;

  function startAnalytics() {
    if (active) return;
    active = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { anonymize_ip: true });
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
    document.head.appendChild(script);
  }

  function record(name, details) {
    if (!active || typeof window.gtag !== 'function') return;
    window.gtag('event', name, details || {});
  }
  window.RRAnalytics = { record };

  function saveChoice(accepted, notice) {
    try { localStorage.setItem(consentKey, accepted ? 'accepted' : 'declined'); } catch (_) {}
    notice.remove();
    if (accepted) startAnalytics();
  }

  function showConsent() {
    if (document.querySelector('.rr-consent')) return;
    const notice = document.createElement('aside');
    notice.className = 'rr-consent';
    notice.setAttribute('role', 'region');
    notice.setAttribute('aria-label', 'Preferências de privacidade');
    const message = document.createElement('p');
    message.textContent = 'Podemos usar dados de navegação para entender quais conteúdos interessam mais? Você pode recusar sem perder acesso ao site.';
    const buttons = document.createElement('div');
    const reject = document.createElement('button');
    reject.type = 'button'; reject.textContent = 'Recusar';
    reject.addEventListener('click', () => saveChoice(false, notice));
    const accept = document.createElement('button');
    accept.type = 'button'; accept.textContent = 'Aceitar métricas';
    accept.addEventListener('click', () => saveChoice(true, notice));
    buttons.append(reject, accept); notice.append(message, buttons);
    const style = document.createElement('style');
    style.textContent = '.rr-consent{position:fixed;bottom:16px;left:16px;right:16px;z-index:99999;max-width:690px;margin:auto;background:#10271ef5;color:#eef9e9;border:1px solid #90b98c;border-radius:12px;padding:18px;box-shadow:0 15px 45px #0008;font:13px/1.55 system-ui,sans-serif}.rr-consent p{margin:0 0 12px}.rr-consent div{display:flex;gap:9px;justify-content:flex-end;flex-wrap:wrap}.rr-consent button{border:1px solid #aecda8;background:transparent;color:#eef9e9;padding:10px 15px;border-radius:7px;font:700 12px system-ui;cursor:pointer;min-height:42px}.rr-consent button:last-child{background:#d7f38f;color:#173121;border-color:#d7f38f}@media(max-width:500px){.rr-consent{bottom:8px;left:8px;right:8px}.rr-consent button{flex:1}}';
    document.head.appendChild(style);
    document.body.appendChild(notice);
  }

  document.addEventListener('click', function (event) {
    const region = event.target.closest && event.target.closest('.scene-region[data-branch], .tree-node[data-branch]');
    if (region) record('tree_environment_click', { environment_name: region.dataset.branch, interaction_type: 'tree' });
    const mobileLink = event.target.closest && event.target.closest('#mobile-place-link');
    if (mobileLink) record('tree_environment_explore', { destination: mobileLink.getAttribute('href') });
    const zoom = event.target.closest && event.target.closest('#tree-zoom');
    if (zoom) record('tree_zoom_toggle', { action: zoom.getAttribute('aria-pressed') === 'true' ? 'zoom_out' : 'zoom_in' });
  }, true);

  function addPrivacyControl() {
    const footer = document.querySelector('footer') || document.body;
    const control = document.createElement('button');
    control.type = 'button';
    control.textContent = 'Preferências de métricas';
    control.setAttribute('aria-label', 'Alterar consentimento de métricas');
    control.style.cssText = 'display:inline-block;margin:12px;padding:8px 12px;border:1px solid currentColor;border-radius:6px;background:transparent;color:inherit;font:12px system-ui;cursor:pointer';
    control.addEventListener('click', () => {
      try { localStorage.removeItem(consentKey); } catch (_) {}
      window.location.reload();
    });
    footer.appendChild(control);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addPrivacyControl, { once: true });
  else addPrivacyControl();

  if (consent === 'accepted') startAnalytics();
  else if (consent !== 'declined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', showConsent, { once: true });
    else showConsent();
  }
})();
