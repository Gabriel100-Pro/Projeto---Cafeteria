const botao = document.getElementById("cadastrarBtn");
    const spinnerOverlay = document.getElementById("spinnerOverlay");
    const modalOverlay = document.getElementById("modalOverlay");
    const fecharBtn = document.getElementById("fecharBtn");

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