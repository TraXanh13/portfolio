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
        let projectCarosel = document.getElementById("projectCarosel");
        let projectDetails = document.getElementById("projectDetails");
        let projectTitle = document.createElement("h2");
        let projectDesc = document.createElement("p");
        let projectLink = createLink(project);
        
        projectCarosel.style.backgroundImage = `url(${project.imageLocation}itchio.png)`;
        projectTitle.innerHTML = project.project;
        projectDesc.innerHTML = project.description;
        projectLink.innerHTML = `<a href=${project.link}>${project.link}</a>`;

        projectDetails.appendChild(projectTitle);
        projectDetails.appendChild(projectDesc);
        projectDetails.appendChild(projectLink);
        projectDetails.appendChild(createToolCards(project));
    }

    function createLink(project) {
        let projectLink = document.createElement("a");
        projectLink.innerHTML = `<a href=${project.link}>${project.link}</a>`;
        projectLink.setAttribute("rel", "noopener noreferrer");
        projectLink.setAttribute("target", "_blank");

        return projectLink;
    }

    function createToolCards(project) {
        let projectTools = document.createElement("projectTools");
        project.tools.forEach(tool => {
            let toolCard = document.createElement("div");
            toolCard.className = "toolCard";
            toolCard.innerHTML = tool;
            projectTools.appendChild(toolCard); 
        });

        return projectTools;
    }

    document.getElementById("projectList").addEventListener("change", function() {
        let selectedProject = document.getElementById("projectList").value;

        for (project of projects) {
            if(project.project ==  selectedProject){
                clearProjectCard();
                createProjectCard(project);
                break;
            }
        }
    });

    function clearProjectCard() {
        projectDetails = document.getElementById("projectDetails");
        projectDetails.innerHTML = "";
    }

});