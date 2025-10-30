// document.getElementById('mobileMenu').addEventListener('click', function() {
//     document.getElementById('navLinks').classList.toggle('active');
// });

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             target.scrollIntoView({ behavior: 'smooth', block: 'start' });
//             // Close mobile menu if open
//             document.getElementById('navLinks').classList.remove('active');
//         }
//     });
// });

// const observerOptions = {
//     threshold: 0.1,
//     rootMargin: '0px 0px -50px 0px'
// };

// const observer = new IntersectionObserver(function(entries) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//         }
//     });
// }, observerOptions);

// document.querySelectorAll('.fade-in').forEach(el => {
//     observer.observe(el);
// });

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    
    if (window.scrollY > 0) {
        header.style.backgroundColor = '#ffffffeb';
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.2)';
        header.style.transition = '.3s ease all';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.boxShadow = '0 0px 0px rgba(0, 0, 0, 0.1)';
        header.style.transition = '.3s ease all';
    }
    
    // id link dari masing masing navbar
    const navBeranda = document.getElementById('link-beranda');
    const navDampak = document.getElementById('link-dampak');
    const navJenis = document.getElementById('link-type');
    const navLaw = document.getElementById('link-law');
    const navResources = document.getElementById('link-resources');
    const navHelp = document.getElementById('link-help');

    // id dari masing masing section
    const hero = document.getElementById('home');
    const dampak = document.getElementById('dampak');
    const jenis = document.getElementById('drug-types');
    const law = document.getElementById('law');
    const resources = document.getElementById('resources');
    const help = document.getElementById('help');
    
    if(window.scrollY >= hero.offsetTop){
        navBeranda.classList.add('active');
    }else{
        navBeranda.classList.remove('active');
    }

    if(window.scrollY + 50 >= dampak.offsetTop){
        navBeranda.classList.remove('active');
        navJenis.classList.remove('active');
        navLaw.classList.remove('active');
        navResources.classList.remove('active');
        navDampak.classList.add('active');
    }else{
        navDampak.classList.remove('active');
    }

    if(window.scrollY + 50 >= jenis.offsetTop){
        navBeranda.classList.remove('active');
        navDampak.classList.remove('active');
        navLaw.classList.remove('active');
        navResources.classList.remove('active');
        navJenis.classList.add('active');
    }else{
        navJenis.classList.remove('active');
    }
    
    if(window.scrollY + 50 >= law.offsetTop){
        navBeranda.classList.remove('active');
        navDampak.classList.remove('active');
        navJenis.classList.remove('active');
        navResources.classList.remove('active');
        navLaw.classList.add('active');
    }else{
        navLaw.classList.remove('active');

    }

    if(window.scrollY + 50 >= resources.offsetTop){
        navBeranda.classList.remove('active');
        navDampak.classList.remove('active');
        navJenis.classList.remove('active');
        navLaw.classList.remove('active');
        navResources.classList.add('active');
    }else{
        navResources.classList.remove('active');

    }

    if(window.scrollY + 50 >= help.offsetTop){
        navBeranda.classList.remove('active');
        navDampak.classList.remove('active');
        navJenis.classList.remove('active');
        navLaw.classList.remove('active');
        navResources.classList.remove('active');
        navHelp.classList.add('active');
    }else{
        navHelp.classList.remove('active');

    }
});