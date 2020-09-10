'use strict';

let projects=[];
projects.push({name: "collewear",tool:"HTML/CSS/JavaScript", relevant:"INFO340 Client-Side Development", cover: "./src/assets/project_covers/collewear.png", link:"./src/pages/collewear.html"});
projects.push({name:"Where to Go?", tool:"Google Maps Platform ", relevant: "Personal Project", cover:"./src/assets/project_covers/wheretogo.png", link:"./src/pages/wheretogo.html"})
projects.push({name:"HuskyMap Server", tool:"Java", relevant:"CSE 373 Data Structures & Algorithms", cover:"./src/assets/project_covers/huskymap.png", link:"./src/pages/huskymap.html"});
projects.push({name:"Hopeful", tool:"Figma/Angular.js", relevant: "Hack'20 Virtual Hackathon", cover:"./src/assets/project_covers/hopeful.png", link:"./src/pages/hopeful.html"});
projects.push({name:"Quick Save", tool:"Chrome Extension", relevant:"Personal Project", cover:"./src/assets/project_covers/quicksave.png", link:"./src/pages/quicksave.html"});
projects.push({name:"SafePath", tool:"Figma", relevant:"WINFO Hackathon", cover:"./src/assets/project_covers/safepath.png", link:"./src/pages/safepath.html"});
projects.push({name:"Suicide and Mental Health Disorders", tool:"R/Shiny App", relevant:"INFO 201 Technical Foundations of Informatics", cover:"./src/assets/project_covers/smhd.png", link:"./src/pages/smhd.html"});
projects.push({name:"EDA Visual Effects Corporation",tool:"Adobe Illustrator/Photoshop",relevant:"Internship ", cover:"./src/assets/project_covers/edavfx.png", link:"./src/pages/edavfx.html"});

// navigation bar interaction 
let hamburger = document.querySelector('.hamburger-menu');
let navs = document.querySelector('.navs');

//when the website first load 
if(window.outerWidth >= 768){
    hamburger.style.display = "none";
    navs.style.display = "block";
} else {
    hamburger.style.display = "block";
    navs.style.display = "none"; 
}


//remove hamburger menu when screen resizes
window.addEventListener('resize', () => {
    hamburger.classList.remove('active');
    if(window.outerWidth >= 768){
        hamburger.style.display = "none";
        navs.style.display = "block";
    } else {
        hamburger.style.display = "block";
        navs.style.display = "none"; 
    }
});

//hamburger menu interactivity
hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    if (navs.style.display === "block") {
        navs.style.display = "none";
    } else {
        navs.style.display = "block";
    }
});

//footer 
function footer() {
    let footerMessage = document.createElement('p');
    footerMessage.innerHTML = 'Made with 💕💖 by Sharon Lin | &copy; Sharon Lin 2020';
    ;
    document.querySelector('footer').appendChild(footerMessage);
}

footer(); 





//dashboard - project cards
function createProjects(){
    let dashboard = document.querySelector('#dashboard'); 
    projects.forEach(project => {
        let projectCard = createProjectCard(project);  
        dashboard.appendChild(projectCard);
    });
}

//dashboard - project card
/* LOOKS LIKE THIS:
    <div class="card" onclick="location.href='./src/pages/collewear.html';">
        <img src="./src/assets/project_covers/collewear.png">
        <div class="card-description">
            <p>COLLEWEAR</p>
            <p>HTML/CSS/JS</p>
            <p>INFO 340 Client Side Development</p>
        </div>
    </div> 
*/

function createProjectCard(item) {
    let card = document.createElement('div');
    card.classList.add('card');

    let image = document.createElement('img');
    image.setAttribute('src',item.cover);
    
    let description = document.createElement('div');
    description.classList.add('card-description');

    let name = document.createElement('p');
    name.innerHTML = item.name;
    let tool = document.createElement('p');
    tool.innerHTML = item.tool;
    let relevant = document.createElement('p');
    relevant.innerHTML = item.relevant;

    card.addEventListener('click', ()=>{
        window.location = item.link;
    });



    card.appendChild(image);
    card.appendChild(description);
    description.appendChild(name);
    description.appendChild(tool);
    description.appendChild(relevant);

    return card;
}

