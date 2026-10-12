// Project dialogs and image viewer
(function () {
  document.querySelectorAll('[data-open]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.getElementById(btn.dataset.open).showModal();
      document.body.style.overflow = 'hidden';
    });
  });

  document.querySelectorAll('dialog.modal').forEach(function (dlg) {
    dlg.querySelector('.modal-close').addEventListener('click', function () { dlg.close(); });
    // Click on the dark area outside the box closes it
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('close', function () { document.body.style.overflow = ''; });
  });

  var lightbox = document.getElementById('lightbox');
  var lightboxImg = lightbox.querySelector('img');
  document.querySelectorAll('.shot').forEach(function (shot) {
    shot.addEventListener('click', function () {
      var img = shot.querySelector('img');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.showModal();
    });
  });
  lightbox.addEventListener('click', function () { lightbox.close(); });
})();
