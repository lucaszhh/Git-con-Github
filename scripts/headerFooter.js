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
        <h2><i class="fa-brands fa-github"></i></h2>
        <a href="https://github.com/lucaszhh" target="_blank" class="download">
            <div>
                <h3>visita mi perfil de GitHub</h3>
                <h2>lucaszhh</h2>
            </div>
        </a>
        <h2><i class="fa-brands fa-github"></i></h2>
    </article>
`
};

const header = () => {
    document.querySelector(".headerView").innerHTML += `
    <div>
        <img src="../images/icons/gitIcon.png" alt="Git icono">
        <span>+</span>
        <img src="../images/icons/githubIcon.png" alt="GitHub icono">
    </div>
    <article class="info-card">
        <a href="../index.html">
            <img src="../images/icons/gitIcon.png" />
            <h2>Inicio</h2>
            <img src="../images/icons/githubIcon.png" />
        </a>
    </article>
    `
}



footer();
header();