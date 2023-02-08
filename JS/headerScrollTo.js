document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("nav");
    const logo = document.getElementById("logo");

    logo.addEventListener("click", () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    });

    nav.addEventListener("click", (e) => {
        if(e.target.id == "aboutScroll"){
            document.getElementById("aboutMe").scrollIntoView({behavior: "smooth", block: "end"});
        } else if(e.target.id == "experienceScroll"){
            document.getElementById("experience").scrollIntoView({behavior: "smooth", block: "end"});
        }
    });
});