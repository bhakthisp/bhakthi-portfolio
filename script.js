window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

const links = document.querySelectorAll("nav a");
links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

function setDarkMode(value){
    if(value === true){
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme","dark");
    } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme","light");
    }
}

if(localStorage.getItem("theme") === "dark"){
    setDarkMode(true);
}
$(document).ready(function(){

    // Fade in the whole content
    $(".content").hide().fadeIn(600);

    // Smooth scroll for internal links (jQuery version)
    $("a[href^='#']").click(function(e){
        e.preventDefault();
        let target = $(this.getAttribute("href"));
        if(target.length){
            $("html, body").animate({
                scrollTop: target.offset().top
            }, 600);
        }
    });

    // Hover highlight effect for nav using jQuery
    $("nav a").hover(
        function(){ $(this).css("opacity","1"); },
        function(){ $(this).css("opacity","0.9"); }
    );

});
