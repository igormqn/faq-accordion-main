document.querySelectorAll('.dropdown-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const icon = header.querySelector('.icon');
  
      if (body.classList.contains('open')) {
        body.classList.remove('open');
        icon.classList.remove('open');
      } else {
        document.querySelectorAll('.dropdown-body').forEach(body => body.classList.remove('open'));
        document.querySelectorAll('.icon').forEach(icon => icon.classList.remove('open'));
        body.classList.add('open');
        icon.classList.add('open');
      }
    });
  });
  