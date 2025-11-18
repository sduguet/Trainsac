setTimeout(() => init(), 500);

function init() {
  const ls = JSON.parse(localStorage.getItem('Trainsac')) || {};
  const maxLevelClear = ls.maxLevelClear || 0;
  const levelsPb = ls.levelsPb || {};

  let i = maxLevelClear + 1;
  while (i > 0) {
    const levelAlreadyClear = document.querySelector(`.level[data-level='${i}']`);
    levelAlreadyClear?.classList.remove('level--disabled');
    i -= 1;
  }

  for (const [level, pb] of Object.entries(levelsPb)) {
    const levelNode = document.querySelector(`[data-level="${level}"]`);
    const maxPoint = 25 + (5 * parseInt(level));
    const diff = maxPoint - parseInt(pb);

    if (diff >= 0 && diff <= 2) {
      const medal = ['gold', 'silver', 'bronze'][diff];
      console.log(levelNode);
      console.log(medal);
      levelNode.classList.add(`level--${medal}`);
    }
  }
  
  const levelsActive = document.querySelectorAll('.level:not(.level--disabled)');
  levelsActive.forEach(level => level.addEventListener('click', goGame))
  
  function goGame() {
    const selectedLevelNode = this;

    ls.selectedLevel = selectedLevelNode.dataset.level;
    localStorage.setItem('Trainsac', JSON.stringify(ls));

    window.location.href = '/game.html';
  }
}
