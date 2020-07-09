'use strict';

let projects=[];
projects.push({name: "collewear",tool:"HTML/CSS/JavaScript", relevant:"INFO340 Client-Side Development", cover: "./src/assets/project_covers/collewear.png", link:"./src/pages/collewear.html"});
projects.push({name:"SafePath", tool:"Figma", relevant:"WINFO Hackathon", cover:"./src/assets/project_covers/safepath.png", link:"./src/pages/safepath.html"});
projects.push({name:"Suicide and Mental Health Disorders", tool:"R", relevant:"INFO 201 Technical Foundations of Informatics", cover:"./src/assets/project_covers/smhd.png", link:"./src/pages/smhd.html"});
projects.push({name:"HuskyMap Server", tool:"Java", relevant:"CSE 373 Data Structures & Algorithms", cover:"./src/assets/project_covers/huskymap.png", link:"./src/pages/huskymap.html"});
projects.push({name:"EDA Visual Effects Corporation",tool:"Adobe Illustrator/Photoshop",relevant:"Internship ", cover:"./src/assets/project_covers/edavfx.png", link:"./src/pages/edavfx.html"});


// navigation bar interaction 
let hamburger = document.querySelector('.hamburger-menu');
let navs = document.querySelector('.navs');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    if (navs.style.display === "block") {
        navs.style.display = "none";
    } else {
        navs.style.display = "block";
    }
});

//remove hamburger menu when screen resizes
window.addEventListener('resize', () => {
    if(window.outerWidth >= 768){
        hamburger.style.display = "none";
        navs.style.display = "block";
    } else {
        hamburger.style.display = "block";
        navs.style.display = "none"; 
    }
});

function toggleDisplay() {
    let hamburger  = document.querySelector('.hamburger-menu');
}
//dashboard - project cards
function createProjects(){
    let dashboard = document.querySelector('#dashboard'); 
    projects.forEach(project => {
        let projectCard = createProjectCard(project);  
        dashboard.appendChild(projectCard);
    });
}

//dashboard - project cards
function createProjectCard(item) {
    let div = document.createElement('div');
    let a = document.createElement('a');
    a.setAttribute('href',item.link);
    let card = document.createElement('div');
    //cover image
    // link to the project page 
    let name = document.createElement('h3');
    name.innerHTML = item.name.toUpperCase();
    let tool = document.createElement('p');
    tool.innerHTML = item.tool;
    let relevant = document.createElement('p');
    relevant.innerHTML = item.relevant;
    let image = document.createElement('img');
    image.setAttribute('src',item.cover);

    //card.appendChild(image); 
    card.appendChild(name);
    card.appendChild(tool);
    card.appendChild(relevant);
    a.appendChild(card);
    div.appendChild(a);
    return div;
}