let mouse = document.getElementById("mouse")
let mouseCircle = document.getElementById("mouseCircle")

const animeMouse = (e, interacting) => {
    const x = e.clientX, y = e.clientY;

    const keyframesM = {
        transform: `translate(${x - mouse.offsetHeight /2}px, ${y - mouse.offsetHeight /2}px) scale(${interacting ? 1 : 1})`
    }

    const keyframesMC = {
        transform: `translate(${x - mouseCircle.offsetHeight /2}px, ${y - mouseCircle.offsetHeight /2}px) scale(${interacting ? 2 : 1})`
    }

    mouse.animate(keyframesM, {
        duration:0,
        fill: "forwards"
    })

    mouseCircle.animate(keyframesMC, {
        duration:150,
        fill: "forwards"
    })
}

window.onmousemove = e => {
    const interactable = e.target.closest(".interactable"), interacting = interactable !== null;

    animeMouse(e, interacting)
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))