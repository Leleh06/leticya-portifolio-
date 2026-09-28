// ---------- tecnologias ----------
const techs = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Node.js', 'SQL', 'Git & GitHub'];

const listaTechs = document.getElementById('techs');
techs.forEach(t => {
    const li = document.createElement('li');
    li.textContent = t;
    listaTechs.appendChild(li);
});

// ---------- ano no rodapé ----------
document.getElementById('ano').textContent = new Date().getFullYear();
