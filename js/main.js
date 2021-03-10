var swiper = new Swiper('.swiper-container', {
    effect : 'coverflow',
    grabCursor: true,
    slidesPerVier:'auto',
    coverflowEffect :{
        rotate:50,
        stretch: 0,
        depth:100,
        modifier:1,
        slideShadows:true
    },
    pagination:{
        el:'.swiper-pagination',
    }
})

AOS.init(
    {
        offset:200,
        duration:1000
    }
);

ityped.init(document.querySelector(".iTyped"), 
{
    showCursor:true,
    strings:['E-Learning Site', 'Your Academic problem Solver', 'Various Calculators','All just for you']

});

window.addEventListener('scroll', () => 
{
    let content = document.querySelector('nav');
    let contentposition = content.getBoundingClientRect().top;
    let scroll = window.scrollY;
//    let scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if(scroll > contentposition)
    {
        console.log(contentposition);
        content.classList.add('navbar-scroll');
    }
    else
    {
        content.classList.remove('navbar-scroll');
    }
});