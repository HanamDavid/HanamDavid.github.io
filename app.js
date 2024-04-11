
function _toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburguer-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}
const observer = new IntersectionObserver(
    (entries)=>{
        entries.forEach((entry)=> {
            console.log(entry)
            if(entry.isIntersecting){
                entry.target.classList.remove('hidden');
                entry.target.classList.add('show');
            }else{
                entry.target.classList.remove('show');
            }
        });

});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el)=> observer.observe(el));



