let points = 0;
const pointsEl = document.getElementById('points');
const heroPoints = document.getElementById('heroPoints');
const feedback = document.getElementById('feedback');
const history = document.getElementById('history');
let activity = [];

document.getElementById('answers').addEventListener('click', (event) => {
  const button = event.target.closest('button[data-answer]');
  if (!button) return;
  if (button.dataset.answer === 'Luanda') {
    points += 10;
    pointsEl.textContent = points;
    heroPoints.textContent = points;
    feedback.textContent = 'Resposta correta! +10 pontos demonstrativos.';
    activity.unshift('Resposta correta: +10 pontos');
  } else {
    feedback.textContent = 'Não foi desta vez. Tenta novamente!';
    activity.unshift('Resposta incorreta: 0 pontos');
  }
  document.querySelectorAll('#answers button').forEach(b => b.disabled = true);
  document.querySelectorAll('#answers button').forEach(b => b.style.opacity = '.55');
});
document.getElementById('historyBtn').addEventListener('click', () => {
  history.textContent = activity.length ? activity.join(' • ') : 'Ainda não há atividade.';
});
document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('nav').classList.toggle('open');
});
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => document.getElementById('nav').classList.remove('open')));
