const form = document.querySelector(".form-container");
const formSubmit = document.getElementById("btn-submit");

formSubmit.addEventListener("click", function(event) {
    if (form.checkValidity()) {
        alert("Sua denuncia foi realizada com sucesso!");
    } else {
        alert("É necessário que todos os campos sejam preenchidos")
    }
});