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
            document.getElementById("experience").scrollIntoView({behavior: "smooth", block: "start"});
        } else if(e.target.id == "projectScroll"){
            document.getElementById("projects").scrollIntoView({behavior: "smooth", block: "start"});
        }
    });

    function scrollContentIntoView(element) {
        element.scrollIntoView({behavior: "smooth", block: "end"});
    }
});