/* =========================
   BLOG BUBALINOCULTURA PR
   SCRIPT PRINCIPAL
========================= */

/* SCROLL SUAVE NO MENU */
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

/* DATA AUTOMÁTICA NO RODAPÉ */
const footer = document.querySelector('footer');

const data = new Date();
footer.innerHTML += `<p>Atualizado em: ${data.toLocaleDateString('pt-BR')}</p>`;

/* =========================
   MODO ESCURO
========================= */
const botaoDark = document.createElement('button');
botaoDark.textContent = '🌙 Modo Escuro';
botaoDark.style.position = 'fixed';
botaoDark.style.bottom = '20px';
botaoDark.style.right = '20px';
botaoDark.style.padding = '10px';
botaoDark.style.border = 'none';
botaoDark.style.borderRadius = '8px';
botaoDark.style.cursor = 'pointer';
botaoDark.style.background = '#2e6b4f';
botaoDark.style.color = 'white';
document.body.appendChild(botaoDark);

botaoDark.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

/* ESTILO DO MODO ESCURO */
const style = document.createElement('style');
style.innerHTML = `
.dark-mode {
  background-color: #121212;
  color: #e0e0e0;
}

.dark-mode .post {
  background-color: #1e1e1e;
  color: #e0e0e0;
}

.dark-mode nav {
  background-color: #111;
}

.dark-mode header {
  background: linear-gradient(135deg, #000, #222);
}
`;
document.head.appendChild(style);

/* =========================
   SISTEMA SIMPLES DE POSTS
========================= */

function adicionarPost(titulo, texto) {
  const container = document.querySelector('.posts');

  if (!container) return;

  const post = document.createElement('div');
  post.classList.add('post');

  post.innerHTML = `
    <h2>${titulo}</h2>
    <p>${texto}</p>
    <span class="tag">Novo Post</span>
  `;

  container.prepend(post);
}

/* EXEMPLO DE USO */
adicionarPost(
  "Produção de leite de búfala no Paraná",
  "A produção de leite de búfala vem crescendo no estado, com alta demanda por queijos artesanais como a muçarela de búfala."
);
