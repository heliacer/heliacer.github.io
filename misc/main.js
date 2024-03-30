handleNavigation()
window.addEventListener("hashchange", () => handleNavigation());
function handleNavigation() {
  if (window.location.hash){
    document.querySelectorAll('.navitem a').forEach(link => { link.classList.remove('active') });
    document.querySelector(`.navitem a[href="${window.location.hash}"]`).classList.add('active');
  }
}
window.addEventListener('scroll', () => {
  const topics = document.querySelectorAll('.topic');
  topics.forEach(topic => {
      const rect = topic.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          if (window.location.hash !== `#${topic.id}`) {
              history.replaceState(null, null, `#${topic.id}`);
              handleNavigation();
          }
      }
  });
});

document.querySelectorAll('.navitem a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    const navbarHeight = document.querySelector('nav').offsetHeight;

    if (target) {
      const offsetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: offsetPosition - 30,
        behavior: 'smooth',
        duration: 500
      });
    }
  });
});