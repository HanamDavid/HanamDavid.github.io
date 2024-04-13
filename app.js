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
const vh= window.innerHeight*3.5
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));

const tracker = document.getElementById("tracker");
const pointer = document.getElementById("pointer");
window.onpointermove = event =>{
    const{pageX, pageY} = event;
    if(pageY<vh){

        pointer.animate(
            {
                left: `${pageX}px`,
                top: `${pageY}px`
            }   , { duration: 1, fill: "forwards" });

        tracker.animate(
            {
                left: `${pageX}px`,
                top: `${pageY}px`
            }   , { duration: 3000, fill: "forwards" }); 
    }else{
        pointer.animate(
            {
                left: `${pageX}px`,
            }   , { duration: 1, fill: "forwards" });

        tracker.animate(
            {
                left: `${pageX}px`,
            }   , { duration: 3000, fill: "forwards" }); 
    }


}


