let meunIcon=document.querySelector('#meun-icon');
let navbar=document.querySelectorAll('#navbar');
let sections=document.querySelectorAll('#secrtion');
let navlinks=document.querySelector('#header nav a');

window. onabort=()=> {
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top <offset + height ){
            navlinks.forEach(sec =>{
                links.classlist.remove('active');
                document.querySelector('hader nav a [href*=' + id +']').
                classlist.add('active');
            })
        }
    })
}
$meunIcon.onclick = () =>{
    meunIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}