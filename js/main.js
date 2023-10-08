$(document).ready(function () {
    // Top sale section 
    $('#top-sale .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            991: {
                items:5
            }
        }
    });

    // $('#top-sale .owl-carousel').owlCarousel({
    //     center: true,
    //     items:2,
    //     loop:true,
    //     margin:10,
    //     responsive:{
    //         600:{
    //             items:4
    //         }
    //     }
    // });
    // $('#top-sale .owl-carousel').owlCarousel({
    //     center: true,
    //     items:2,
    //     loop:false,
    //     margin:10,
    //     responsive:{
    //         600:{
    //             items:4
    //         }
    //     }
    // });

    $('#dep-ad-carousel-section .owl-carousel').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:10,
        responsive: {
            0: {
                items:2
            },
            600:{
                items:4
            }
        }
    });
    $('#dep-ad-carousel-section .owl-carousel').owlCarousel({
        center: true,
        items:2,
        loop:false,
        margin:10,
        responsive: {
            0: {
                items:2
            },
            600:{
                items:4
            }
        }
    });

    // Product qty section 
    let $qty_up = $(".qty-up");
    let  $qty_down = $(".qty-down");
    // let $qty__input = $(".qty__input");

    // Click on qty-up button
    $qty_up.click(function(e) {
        let $qty__input = $(`.qty__input[data-id='${$(this).data("id")}']`);
        if($qty__input.val() >= 1 && $qty__input.val()<= 9) {
            $qty__input.val(function(i,oldval){
                return ++oldval;
            })
        }
    });
    $qty_down.click(function(e) {
        let $qty__input = $(`.qty__input[data-id='${$(this).data("id")}']`);
        if ($qty__input.val() <= 10 && $qty__input.val() >= 2) {
            $qty__input.val(function (i,newval) {
                return --newval;
            })
        }
    });

    // Product Image Carousel
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".nextBtn");
    const prevBtn = document.querySelector(".prevBtn");

    slides.forEach(function (slide, index) {
        slide.style.left = `${index * 100}%`
    })

    let counter = 0;
    nextBtn.addEventListener('click', function () {
        counter++;
        carousel();
    });

    prevBtn.addEventListener('click', function () {
        counter--;
        carousel();
    });

    function carousel() {
        // working with slides

        if (counter === slides.length) {
            counter = 0;
        }

        if (counter < 0) {
            counter = slides.length - 1;
        }

        slides.forEach(function (slide) {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        });
    }

});