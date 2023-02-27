document.addEventListener("DOMContentLoaded", function() {
    var workExp;

    fetch('../JSON/workExp.json')
        .then(res => {
            return res.json();
        })
        .then(jobs => {
            workExp = jobs;
            // Set default work exp shown to code ninjas
            fillOptions();
            createWorkHistory(workExp[0]);
        });

    const workExperience = document.getElementById("workExperience");
    const viewAllButton = document.getElementById("viewAll");
    
    viewAllButton.addEventListener("click", () => {
        clearWorkHistory();
        for (const job of workExp) {
            createWorkHistory(job, true);
        }
    });

    workExperience.addEventListener("change", () => {
        let selectedJob = workExperience.value;

        for (job of workExp) {
            if(job.job ==  selectedJob){
                clearWorkHistory();
                createWorkHistory(job);
                break;
            }
        }
    });
    
    function clearWorkHistory() {
        let expContent = document.getElementById("experienceContent");
        expContent.innerHTML = "";
    }
    
    function fillOptions() {
        let workExpMenu = document.getElementById("workExperience");
        
        for(job of workExp){
            let option = document.createElement("option");
            option.value = job.job;
            option.innerHTML = job.job;

            workExpMenu.appendChild(option);
        }
    }

    function createWorkHistory(job, viewAll=false){
        let expContent = document.getElementById("experienceContent");
        let article = document.createElement("article");
        if(viewAll) {
            
            article.classList.add("workExpBottomMargin");
        }
        
        let jobLoc = document.createElement("h2");
        jobLoc.className = "jobLocation";
        jobLoc.innerHTML = job.job;

        let jobTitle = document.createElement("h3");
        jobTitle.innerHTML = job.title;

        let duration = document.createElement("p");
        duration.innerHTML = job.length;

        let horzLine = document.createElement("div");
        horzLine.classList.add("horzLine");
        horzLine.innerHTML = "<br><br>";

        let ul = document.createElement("ul");
        ul.classList.add("leftTab");

        for (jobDesc of job.tasks) {
            let li = document.createElement("li");
            li.classList.add("reduceOpacity");
            li.innerHTML = jobDesc;
            ul.appendChild(li);
        }

        expContent.appendChild(article);
        article.appendChild(jobLoc);
        article.appendChild(jobTitle);
        article.appendChild(duration);
        article.appendChild(horzLine);
        article.appendChild(ul);
    }
});