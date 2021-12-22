const reviews = [
    {
        id:1,
        author:'Firdavs',
        job:'freelancer',
        img:'https://image.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        info:'ametcoivneprvmpmvpwoc,oc pomvpemv eiovmpmv evpv ivpvkei beiempmev peomvpvm'
    },
    {
        id:2,
        author:'Shoh Jahon',
        job:'pupil',
        img:'https://image.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:'ametcoivneprvmpmvpwoc,oc pomvpemv eiovmpmv evpv ivpvkei beiempmev peomvpvm'
    },
    {
        id:3,
        author:'Saidafzal',
        job:'front-end developer',
        img:'https://image.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:'ametcoivneprvmpmvpwoc,oc pomvpemv eiovmpmv evpv ivpvkei beiempmev peomvpvm'
    }
];


let personal = document.getElementById('person-img');
let author = document.getElementById('author');
let job = document.getElementById('job');
let info = document.getElementById('info');

let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    showPerson();
})

function showPerson(){
    const item = reviews[currentItem];

    personal.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    info.textContent = item.info;
}

nextBtn.addEventListener('click', function(){
    currentItem ++;
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson()
})

prevBtn.addEventListener('click', function(){
    currentItem --;

    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson()
})