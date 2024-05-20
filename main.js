const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function featuredAnimation () {
    const featuredWrapper = document.querySelector("#featured-wrapper")
    const fixedImage = document.querySelector("#fixed-img")

    featuredWrapper.addEventListener("mouseenter", function () {
        fixedImage.style.display = "block"
    })
    featuredWrapper.addEventListener("mouseleave", function () {
        fixedImage.style.display = "none"
    })

    const elements = document.querySelectorAll(".elem")

    elements.forEach(function(el){
        el.addEventListener("mouseenter", function() {
            const image = el.getAttribute("data-image")
            fixedImage.style.backgroundImage = `url(${image})`
        })
    })
}


featuredAnimation()