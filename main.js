

    const sunSection = document.querySelector("section.sun")
    const sun = sunSection.querySelector(".sunCircle")
    const sectionTop = sunSection.getBoundingClientRect().top
    var pixels = window.pageYOffset;
    const sunWidth = sun.getBoundingClientRect().width

    const radius = window.innerWidth/2 - sun.getBoundingClientRect().left; 
    const circleCenter = window.innerWidth/2


    const test = sunSection.querySelector("span.a")

    sun.style.transformOrigin = `${radius}px ${sun.getBoundingClientRect().height /2}px`;




document.addEventListener("scroll", () =>{
    pixels = window.pageYOffset;
    //sun.style.left = circleCenter + radius * (Math.cos(pixels/1000)) + "px"
    //sun.style.top = radius * Math.sin(pixels/1000) + "px"
    if((pixels/40) < 180){
        sun.style.transform = `rotate(${pixels/40}deg)`
        console.log(pixels/40)
    }

    //statements for diff sun messages can go here
    


})


if (window.innerWidth > 600){

    
    
}

