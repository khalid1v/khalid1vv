// Dark mode toggle — remembers the choice between visits
const themeBtn = document.getElementById('themeBtn');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') document.body.classList.add('dark');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Project filter tabs
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.proj-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      card.classList.toggle('show', filter === 'all' || card.dataset.category === filter);
    });
  });
});
