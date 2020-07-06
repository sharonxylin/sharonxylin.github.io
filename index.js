'use strict';

//projects to display on the dashbaord
let projects=[];
projects.push({name: "collewear",tool:"HTML/CSS/JavaScript", relevant:"INFO340 Client-Side Development", cover: "../assets/project_covers/collewear.png", link:"collewear.html"});
projects.push({name:"SafePath", tool:"Figma", relevant:"WINFO Hackathon", cover:"../assets/project_covers/safepath.png", link:"safepath.html"});
projects.push({name:"Suicide and Mental Health Disorders", tool:"R", relevant:"INFO 201 Technical Foundations of Informatics", cover:"../assets/project_covers/smhd.png", link:"smhd.html"});
projects.push({name:"HuskyMap Server", tool:"Java", relevant:"CSE 373 Data Structures & Algorithms", cover:"../assets/project_covers/huskymap.png", link:"huskymap.html"});
projects.push({name:"EDA Visual Effects Corporation",tool:"Adobe Illustrator/Photoshop",relevant:"Internship", cover:"../assets/project_covers/edavfx.png", link:"edavfx.html"});


function createProjects(){
    let dashboard = document.querySelector('main'); // problem - can't get dashboard
    projects.forEach(project => {
        let projectCard = createProjectCard(project);  
        dashboard.appendChild(projectCard);
    });
}

function createProjectCard(item) {
    let card = document.createElement('article');
    card.classList.add('card');
    //cover image
    // link to the project page 
    let name = document.createElement('h2');
    name.innerHTML = item.name.toUpperCase();
    let tool = document.createElement('p');
    tool.innerHTML = item.tool;
    let relevant = document.createElement('p');
    relevant.innerHTML = item.relevant;
    card.appendChild(name);
    card.appendChild(tool);
    card.appendChild(relevant);
    return card;
}

createProjects();