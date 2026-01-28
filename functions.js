const botao = document.getElementById("cadastrarBtn");
    const spinnerOverlay = document.getElementById("spinnerOverlay");
    const modalOverlay = document.getElementById("modalOverlay");
    const fecharBtn = document.getElementById("fecharBtn");

    if(botao){
      botao.addEventListener("click", (e) => {
        e.preventDefault();

        // Mostra spinner
        spinnerOverlay.style.display = "flex";

        // Depois de 2s, troca spinner pelo modal
        setTimeout(() => {
          spinnerOverlay.style.display = "none";
          modalOverlay.style.display = "flex";
        }, 2000);
      });

      fecharBtn.addEventListener("click", () => {
        modalOverlay.style.display = "none";
      });
    }

    console.log("teste");


    // Menu hambúrguer responsivo
    document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.getElementById('hamburger');
        const navbar = document.getElementById('navbar');

        if(hamburger && navbar){
            hamburger.addEventListener('click', function() {
                navbar.classList.toggle('active');
            });

            // Fechar menu ao clicar em um link
            const navLinks = navbar.querySelectorAll('a');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navbar.classList.remove('active');
                });
            });
        }
    });