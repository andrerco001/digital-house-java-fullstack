const btnMostrar = $("#btn-mostrar");
const btnApagar = $("#btn-apagar");
const container = $("#container")

function mostrarElemento() {
    container.append("<h2>Oxxxi, que coisa mais linda</h2>");
    container.append("<img src='./images/cofap.jpg' alt='cofap' style='height:400px'></img>");
};

btnMostrar.one("click", mostrarElemento);

btnApagar.on("click", () => {
    container.empty();
    btnMostrar.one("click", mostrarElemento);
});

