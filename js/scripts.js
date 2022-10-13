$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,

    responsive:{
        390:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})


const navigation = ["home", "about us", "Services", "Contact"];
const links = ["index.html", "about.html", "Services.html","contact.html"];

let navLength = navigation.length;

let navigationText = "<ul>"

for (let i=0; i<navLength; i++){
    navigationText +='<li><a href="'+ links[i] +'">'  + navigation[i] + "</a></li>"
};
navigationText += "</ul>";

document.getElementById("nav").innerHTML = navigationText;
document.getElementById("navfooter").innerHTML = navigationText;


