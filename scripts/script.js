const arrowUp = () => {
    document.querySelector("body").innerHTML += `
        <a href="#top"><i title="Ir arriba" class="fa-solid fa-circle-up fa-beat arrowUp"></i></a>
    `
};

const copyContent = (text) => navigator.clipboard.writeText(text);

arrowUp();