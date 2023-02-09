document.addEventListener("DOMContentLoaded", function() {
    var projects;

    fetch('../JSON/projects.json')
        .then(res => {
            return res.json();
        })
        .then(projectsJson => {
            projects = projectsJson;
            fillOptions();
            createProjectCard(projects[0]);
        });
    console.log(projects);

    function fillOptions() {
        let projectList = document.getElementById("projectList");
        
        for(project of projects){
            let option = document.createElement("option");
            option.value = project.project;
            option.innerHTML = project.project;

            projectList.appendChild(option);
        }
    }

    function createProjectCard(project){
        let projectTitle = document.getElementById("projectTitle");
        let projectDesc = document.getElementById("projectDesc");
        let projectTools = document.getElementById("projectTools");
        let projectLink = document.getElementById("projectLinks");

        projectTitle.innerHTML = project.project;
        projectDesc.innerHTML = project.description;
        projectLink.innerHTML = project.link;
        projectTools.innerHTML = project.tools;
    }
});