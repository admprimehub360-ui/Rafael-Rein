(function () {
  'use strict';
  function init() {
    const canvas = document.querySelector('.tree-canvas');
    if (!canvas || canvas.querySelector('.mobile-hotspot')) return;
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
    }
    const hint = document.querySelector('.tree-mobile-tools span');
    if (hint) hint.textContent = 'Toque em uma região da árvore para entrar no ambiente.';
    const panel = document.querySelector('#tree-mobile-detail');
    if (panel) panel.setAttribute('aria-hidden', 'true');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
