// ========================================
// COLOQUE SEUS LINKS AQUI
// ========================================

const links = {
    email: "abelbeni0303@gmail.com",
    discord: "https://discord.com/",
    github: "https://github.com/abelbeniciodev",
    linkedin: "https://www.linkedin.com/in/abel-benicio-b15880399?",

    instagram: "https://www.instagram.com/spike_alb?",
    twitter: "https://twitter.com/@abisdovapo",
    youtube: "https://www.youtube.com/",
    spotify: "https://open.spotify.com/user/31pyykkcw3et2ugdfosx257yfbr4?si=nNAayBCDSgu0LBSklmjxuQ&utm_source=copy_link"
};


// ========================================
// NÃO PRECISA ALTERAR NADA ABAIXO
// ========================================

document.querySelectorAll("[data-link]").forEach((elemento) => {

    const nome = elemento.dataset.link;

    if (links[nome]) {
        elemento.href = links[nome];
    }

});
