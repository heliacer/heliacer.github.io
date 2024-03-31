function handleNavigation() {
  if (window.location.hash){
    document.querySelectorAll('.navitem a').forEach(link => { link.classList.remove('active') });
    document.querySelector(`.navitem a[href="${window.location.hash}"]`).classList.add('active');
  }
}


document.querySelectorAll('.navitem a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    const navbarHeight = document.querySelector('nav').offsetHeight;

    if (target) {
      const offsetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      isScrollingByUser = false;
      window.scrollTo({
        top: offsetPosition - 30,
        behavior: 'smooth',
        duration: 500
      });
      handleNavigation()
    }
  });
});

function findMiddle(elements) {
  const middleY = window.innerHeight / 2;
  for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const rect = element.getBoundingClientRect();
      if (middleY >= rect.top && middleY <= rect.bottom) {
          return element;
      }
  }
  return null;
}


window.addEventListener('scroll', () => {
  const topics = document.querySelectorAll('.topic');
  const touchingElement = findMiddle(topics);
  if (touchingElement){
    history.replaceState(null, null, `#${touchingElement.id}`);
    handleNavigation();
  }
});


window.addEventListener('load', () => {
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    const target = document.getElementById(targetId);
    const navbarHeight = document.querySelector('nav').offsetHeight;
    if (target) {
      const offsetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: offsetPosition - 30,
        behavior: 'auto'
      });
    }
    handleNavigation()
  }
});