// ---------- tecnologias ----------
const techs = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'Node.js', 'MySQL', 'PgAdmin', 'Frontend', 'Backend', 'UI', 'UX', 'Git & GitHub'];

const listaTechs = document.getElementById('techs');
techs.forEach(t => {
    const li = document.createElement('li');
    li.textContent = t;
    listaTechs.appendChild(li);
});

// ---------- projetos (links do GitHub) ----------
// Pra adicionar um projeto novo, copia um bloco { ... } e muda os dados.
// "repo" é o nome exato do repositório no GitHub.
const GITHUB = 'https://github.com/Leleh06/';

const projetos = [
    { nome: 'Site Arquitetura',   repo: 'site-arquitetura',        desc: 'Site de arquitetura com layout responsivo.',               tags: 'HTML · CSS' },
    { nome: 'Sorteador de Jogos', repo: 'sorteador-de-jogos',      desc: 'Sorteia um jogo da lista pra você nunca mais ficar indecisa.', tags: 'JavaScript' },
    { nome: 'Diário de Leitura',  repo: 'Diario-de-Leitura',       desc: 'Registro dos livros que li e do que achei de cada um.',     tags: 'HTML · CSS · JS' },
    { nome: 'Projeto Comunidade', repo: 'ProjetoComunidade',       desc: 'Projeto feito pensando em uma comunidade real.',            tags: 'Web' },
    { nome: 'Projeto SA',         repo: 'ProjetoSA',               desc: 'Projeto da situação de aprendizagem do SENAI.',             tags: 'SENAI' },
    { nome: 'Projeto SA Clone',   repo: 'projetoSAclone',          desc: 'Segunda versão do Projeto SA.',                             tags: 'SENAI' },
    { nome: 'Layout Bootstrap',   repo: 'Layout-bootstrap',        desc: 'Layout montado com a grade e os componentes do Bootstrap.', tags: 'Bootstrap' },
    { nome: 'Interação com APIs', repo: 'aulas-interacao-APis-senai', desc: 'Exercícios de consumo de APIs das aulas do SENAI.',      tags: 'JavaScript · API' },
    { nome: 'Aulas de CSS',       repo: 'aulas-CSS-senai',         desc: 'Exercícios e experimentos de CSS das aulas.',               tags: 'CSS' },
    { nome: 'Prova Prática',      repo: 'prova-pratica',           desc: 'Prova prática de desenvolvimento.',                         tags: 'Web' }
];

const grade = document.getElementById('projetos-grade');
projetos.forEach(p => {
    const a = document.createElement('a');
    a.className = 'card';
    a.href = GITHUB + p.repo;
    a.target = '_blank';
    a.rel = 'noopener';

    const titulo = document.createElement('h3');
    titulo.textContent = p.nome;

    const desc = document.createElement('p');
    desc.textContent = p.desc;

    const tags = document.createElement('span');
    tags.className = 'tags';
    tags.textContent = p.tags;

    const ver = document.createElement('span');
    ver.className = 'ver';
    ver.textContent = 'ver no github';

    a.append(titulo, desc, tags, ver);
    grade.appendChild(a);
});

// ---------- ano no rodapé ----------
document.getElementById('ano').textContent = new Date().getFullYear();
