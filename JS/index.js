document.addEventListener("DOMContentLoaded", function() {
    var workExp;

    fetch('../JSON/workExp.json')
        .then(res => {
            return res.json();
        })
        .then(jobs => {
            workExp = jobs;
            console.log("test")
            // Set default work exp shown to code ninjas
            createWorkHistory(workExp[0]);
        });

    const lsButton = document.getElementById("ls");
    const lsItem = document.getElementById("workExperience");
    const treeButton = document.getElementById("tree");

    lsButton.addEventListener("click", () => {
        let selectedJob = lsItem.value;

        for (job of workExp) {
            if(job.job ==  selectedJob){
                clearWorkHistory();
                createWorkHistory(job);
                break;
            }
        }
    });

    treeButton.addEventListener("click", () => {
        clearWorkHistory();
        for (const job of workExp) {
            createWorkHistory(job);
        }
    })


    function clearWorkHistory() {
        let expContent = document.getElementById("experienceContent");
        expContent.innerHTML = "";
    }

    function createWorkHistory(job){
        let expContent = document.getElementById("experienceContent");
        let article = document.createElement("article");
        
        let jobAndTitle = document.createElement("h2");
        jobAndTitle.innerHTML = `${job.job} - ${job.title}`;

        let duration = document.createElement("p");
        duration.innerHTML = job.length;

        let horzLine = document.createElement("div");
        horzLine.classList.add("horzLine");
        horzLine.innerHTML = "<br><br>";

        let ul = document.createElement("ul");
        ul.classList.add("leftTab");

        for (jobDesc of job.tasks) {
            let li = document.createElement("li");
            li.innerHTML = jobDesc;
            ul.appendChild(li);
        }

        expContent.appendChild(article);
        article.appendChild(jobAndTitle);
        article.appendChild(duration);
        article.appendChild(horzLine);
        article.appendChild(ul);
    }
});