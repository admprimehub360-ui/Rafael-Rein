(function () {
  'use strict';
  function init() {
    const canvas = document.querySelector('.tree-canvas');
    if (!canvas || canvas.querySelector('.mobile-hotspot')) return;
    function highlight(label) {
      document.querySelectorAll('.scene-region').forEach(region => {
        region.classList.toggle('mobile-active', region.dataset.branch === label);
      });
    }
    const zones = [
      ['Prompts', 'territorio.html?lugar=prompts', 'prompts'],
      ['Skills', 'territorio.html?lugar=skills', 'skills'],
      ['IA aplicada', 'territorio.html?lugar=ia', 'ia'],
      ['Estratégia', 'territorio.html?lugar=estrategia', 'estrategia'],
      ['Gestão', 'territorio.html?lugar=gestao', 'gestao'],
      ['Repositórios', 'territorio.html?lugar=codigos', 'repos'],
      ['História', 'historia.html#sobre', 'historia']
    ];
    for (const [label, href, key] of zones) {
      const link = document.createElement('a');
      link.className = 'mobile-hotspot mobile-hotspot-' + key;
      link.href = href;
      link.dataset.branch = label;
      link.setAttribute('aria-label', 'Abrir ' + label);
      link.title = label;
      link.dataset.short = label === 'Repositórios' ? 'Códigos' : label === 'IA aplicada' ? 'IA aplicada' : label === 'História' ? 'Minha história' : label;
      canvas.appendChild(link);
      link.addEventListener('pointerdown', () => highlight(label));
      link.addEventListener('click', event => {
        if (!window.matchMedia('(max-width: 600px)').matches) return;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        highlight(label);
        window.setTimeout(() => { window.location.href = href; }, 230);
      });
    }
    const hint = document.querySelector('.tree-mobile-tools span');
    if (hint) hint.textContent = 'Explore as construções da árvore. Toque em um ambiente para entrar.';
    const panel = document.querySelector('#tree-mobile-detail');
    if (panel) panel.setAttribute('aria-hidden', 'true');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
