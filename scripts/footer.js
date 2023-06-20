const footer = () => {
    document.querySelector("footer").innerHTML = `
    <article class="title">
        <h2 class="titleText">
            <i class="fa-brands fa-git-alt"></i>
            Has llegado al final de la página!
            <i class="fa-brands fa-git-alt"></i>
        </h2>
    </article>
    <article class="titleText github">
        <i class="fa-brands fa-github"></i>
        <a href="https://github.com/lucaszhh" target="_blank" class="textUnderline">
            <div>
                <h3>visita mi perfil de GitHub</h3>
                <h2>lucaszhh</h2>
            </div>
        </a>
        <i class="fa-brands fa-github"></i>
    </article>
`
};

footer();