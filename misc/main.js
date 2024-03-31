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

window.addEventListener('scroll', () => {
  const topics = document.querySelectorAll('.topic');
  const options = [];

  topics.forEach(topic => {
    const rect = topic.getBoundingClientRect();
    options.push({ id: topic.id, distanceToZero: Math.abs(rect.top / rect.bottom) });
  });
  let nearestIndex = 0;
  let nearestDistance = options[0].distanceToZero;
  for (let i = 1; i < options.length; i++) {
    if (options[i].distanceToZero < nearestDistance) {
      nearestIndex = i;
      nearestDistance = options[i].distanceToZero;
    }
  }
  const nearestId = options[nearestIndex].id;
  history.replaceState(null, null, `#${nearestId}`);
  handleNavigation();
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