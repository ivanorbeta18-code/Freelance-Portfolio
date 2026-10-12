// Rotating service words in the home page headline
(function () {
  var box = document.getElementById('rotator');
  if (!box) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var words = ['web design.', 'video editing.', 'Canva graphics.', 'data entry.', 'virtual assistance.'];
  var word = box.querySelector('.rotator-word');
  var i = 0;

  setInterval(function () {
    box.classList.add('out');
    setTimeout(function () {
      i = (i + 1) % words.length;
      word.textContent = words[i];
      box.classList.remove('out');
      box.classList.add('pre');
      void box.offsetWidth;            // restart the transition
      box.classList.remove('pre');
    }, 320);
  }, 2800);
})();
