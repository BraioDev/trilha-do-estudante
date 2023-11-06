document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("getDataButton");
    const texto = document.getElementById("dataDisplay");

    button.addEventListener("click", () => {
        // eslint-disable-next-line no-undef
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => {
                texto.value = JSON.stringify(response.data, null, 2);
            })
            .catch(error => {
                console.log(error);
                texto.value = "Erro ao Obter dados";
            });
    });
});
