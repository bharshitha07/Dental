// NAVBAR SHADOW ON SCROLL

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("sticky", window.scrollY > 20);

});



// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".hero-content, .hero-image, .card, .about-image, .about-content, .review-card, form"
);

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {

    const triggerBottom = window.innerHeight / 1.2;

    revealElements.forEach((element) => {

        const boxTop = element.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {

            element.classList.add("active");

        }
    });
}



// SMOOTH BUTTON ANIMATION

const buttons = document.querySelectorAll(".btn, .outline-btn");

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px) scale(1)";

    });

});



// COUNTER ANIMATION

const counters = document.querySelectorAll(".stats h2");

let started = false;

window.addEventListener("scroll", () => {

    const statsSection = document.querySelector(".stats");

    const sectionTop = statsSection.offsetTop;

    if (window.scrollY > sectionTop - 500 && !started) {

        counters.forEach((counter) => {

            let target = parseInt(counter.innerText);

            let count = 0;

            let speed = target / 100;

            const updateCounter = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count) + "+";

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target + "+";

                }
            };

            updateCounter();
        });

        started = true;
    }
});
