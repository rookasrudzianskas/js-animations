gsap.registerPlugin(Flip);

const links = document.querySelectorAll('.nav-item a');
const activeNav = document.querySelector('.active-nav');

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        // Turn navs to blue color
        gsap.to(links, { color: "#252525"});
        if(document.activeElement === link) {
            gsap.to(link, {color: "#385ae0"});
        }

        // Moving the line
        const state = Flip.getState(activeNav);
        link.appendChild(activeNav);
        Flip.from(state, {
            duration: 1.25,
            absolute: true,
            ease: 'elastic.out(1, 0.5)'
        })
    });
})
