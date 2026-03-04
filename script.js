/* ANIMATION OBSERVER */

const animated = document.querySelectorAll(".animate")

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show")
}
else{
entry.target.classList.remove("show")
}

})
},{threshold:0.2})

animated.forEach(el=>observer.observe(el))



/* NAV ACTIVE LINK */

const sections=document.querySelectorAll("section")
const navLinks=document.querySelectorAll(".nav-links a")

window.addEventListener("scroll",()=>{

let current=""

sections.forEach(section=>{

if(scrollY>=section.offsetTop-150){
current=section.id
}

})

navLinks.forEach(link=>{
link.classList.remove("active")
if(link.getAttribute("href").includes(current)){
link.classList.add("active")
}
})

})



/* RIPPLE BUTTON */

document.querySelectorAll(".ripple").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span")
ripple.className="ripple-effect"

this.appendChild(ripple)

const x=e.clientX-this.offsetLeft
const y=e.clientY-this.offsetTop

ripple.style.left=`${x}px`
ripple.style.top=`${y}px`

setTimeout(()=>ripple.remove(),600)

})

})



/* MOBILE NAV */

const hamburger=document.getElementById("hamburger")
const navLinksMenu=document.getElementById("navLinks")

hamburger.addEventListener("click",()=>{
navLinksMenu.classList.toggle("active")
})


/* CLOSE MENU AFTER CLICK */

document.querySelectorAll(".nav-links a").forEach(link=>{
link.addEventListener("click",()=>{
navLinksMenu.classList.remove("active")
})
})