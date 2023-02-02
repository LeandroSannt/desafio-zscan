const lista = document.querySelectorAll("#nav li");

for (let i = 0; i < lista.length; i++) {
  lista[i].addEventListener("click", function () {
    alert(`cliquei no ${lista[i].textContent}`);
  });
}
