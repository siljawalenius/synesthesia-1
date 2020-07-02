

    const sunSection = document.querySelector("section.sun")
    const sun = sunSection.querySelector(".sunCircle")
    const sectionTop = sunSection.getBoundingClientRect().top
    var pixels = window.pageYOffset;
    const sunWidth = sun.getBoundingClientRect().width

    const radius = window.innerWidth/2 - sun.getBoundingClientRect().left; 
    const circleCenter = window.innerWidth/2


    const test = sunSection.querySelector("span.a")

    test.style.left = (radius)+"px";
    test.style.bottom = ((window.innerHeight/100)*30 + sun.getBoundingClientRect().height /2)+ "px"
    test.style.position = "fixed"

    sun.style.transformOrigin = `${radius}px ${sun.getBoundingClientRect().height /2}px`;




document.addEventListener("scroll", () =>{
    pixels = window.pageYOffset;
    //sun.style.left = circleCenter + radius * (Math.cos(pixels/1000)) + "px"
    //sun.style.top = radius * Math.sin(pixels/1000) + "px"

   
    sun.style.transform = `rotate(${pixels/40}deg)`

    console.log(pixels/40)

})


if (window.innerWidth > 600){

    
    
}

