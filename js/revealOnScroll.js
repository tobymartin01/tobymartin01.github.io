//reveal on scroll left
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-scroll');
        } else {
            entry.target.classList.remove('show-scroll');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-scroll');
hiddenElements.forEach((el) => observer.observe(el));

//reveal on scroll fade
const observer_fade = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-scroll-fade');
        } else {
            entry.target.classList.remove('show-scroll-fade');
        }
    });
});

const hiddenElementsfade = document.querySelectorAll('.hidden-scroll-fade');
hiddenElementsfade.forEach((el) => observer_fade.observe(el));

//reveal on scroll bottom
const observer_bottom = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-scroll-bottom');
        } else {
            entry.target.classList.remove('show-scroll-bottom');
        }
    });
});

const hiddenElementsbottom = document.querySelectorAll('.hidden-scroll-bottom');
hiddenElementsbottom.forEach((el) => observer_bottom.observe(el));