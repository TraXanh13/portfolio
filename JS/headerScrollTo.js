document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("nav");
    const logo = document.getElementById("logo");

    logo.addEventListener("click", () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    });

    nav.addEventListener("click", (e) => {
        if(e.target.id == "aboutScroll"){
            scrollContentIntoView(document.getElementById("aboutMe"));
        } else if(e.target.id == "experienceScroll"){
            scrollContentIntoView(document.getElementById("experience"));
        } else if(e.target.id == "projectScroll"){
            scrollContentIntoView(document.getElementById("projects"));
        }
    });

    function scrollContentIntoView(element) {
        element.scrollIntoView({behavior: "smooth", block: "start"});
    }
});