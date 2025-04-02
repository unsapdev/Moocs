// BANNER SLIDER
new Swiper(".banner-slider", {
    spaceBetween: 30,
    loop: document.querySelector(".banner-slider")
        ? document.querySelectorAll(".banner-slider .swiper-slide").length > 1
        : false,
    speed: 700,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".banner-slider-pagination",
        clickable: true,
    },
});

// POPULAR COURSE SLIDER
new Swiper(".popular-courses-slider", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop:
        document.querySelectorAll(".popular-courses-slider .swiper-slide")
            .length > 3,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".popular-courses-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1320: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

// OUR NEW COURSE SLIDER
new Swiper(".new-courses-slider", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop:
        document.querySelectorAll(".new-courses-slider .swiper-slide").length >
        3,
    pagination: {
        el: ".new-courses-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1320: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: ".new-courses-next",
        prevEl: ".new-courses-prev",
    },
});

// CHILD COURSE SLIDER
new Swiper(".child-course-slider", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop:
        document.querySelectorAll(".child-course-slider .swiper-slide").length >
        3,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".child-course-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1320: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

// TESTIMONIAL SLIDER
new Swiper(".testimonial-slider", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop:
        document.querySelectorAll(".testimonial-slider .swiper-slide").length >
        2,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".testimonial-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        1320: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
    },
});

// TESTIMONIAL SLIDER TWO
new Swiper(".testimonial-two-slider", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop:
        document.querySelectorAll(".testimonial-slider .swiper-slide").length >
        1,
    pagination: {
        el: ".testimonial-two-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".testimonial-two-next",
        prevEl: ".testimonial-two-prev",
    },
});

// TESTIMONIAL SLIDER FOUR
new Swiper(".testimonial-four-slider", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop:
        document.querySelectorAll(".testimonial-four-slider .swiper-slide")
            .length > 2,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".testimonial-four-pagination",
        clickable: true,
    },
    breakpoints: {
        1320: {
            slidesPerView: 2,
            spaceBetween: 28,
        },
    },
});

// UP COMING COURSE SLIDER
new Swiper(".up-coming-courses-slider", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop:
        document.querySelectorAll(".up-coming-courses-slider .swiper-slide")
            .length > 3,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".up-coming-courses-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1320: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

// FEATURED COURSE SLIDER
new Swiper(".featured-course-slider", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop:
        document.querySelectorAll(".featured-course-slider .swiper-slide")
            .length > 4,
    pagination: {
        el: ".featured-course-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".featured-courses-next",
        prevEl: ".featured-courses-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1320: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

// UP POPULAR COURSE SLIDER
new Swiper(".popular-courses-slider", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop:
        document.querySelectorAll(".popular-courses-slider .swiper-slide")
            .length > 3,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".popular-courses-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1320: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

// INSTRUCTOR SLIDER
new Swiper(".instructor-slider", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop:
        document.querySelectorAll(".instructor-slider .swiper-slide").length >
        4,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".instructor-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1320: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

// INSTRUCTOR SLIDER TWO
new Swiper(".instructor-slider-two", {
    speed: 9000,
    loop:
        document.querySelectorAll(".instructor-slider-two .swiper-slide")
            .length > 4,
    slidesPerView: 1,
    spaceBetween: 16,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".instructor-pagination-two",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1320: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

// ONLINE COURSE VIDEO SLIDER
new Swiper(".online-video-slider", {
    spaceBetween: 30,
    loop:
        document.querySelectorAll(".online-video-slider .swiper-slide").length >
        1,
    pagination: {
        el: ".online-video-slider-pagination",
        clickable: true,
    },
});

// BLOG SLIDER
new Swiper(".blog-slider", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: document.querySelectorAll(".blog-slider .swiper-slide").length > 3,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".blog-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1320: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

// RELATED COURSE SLIDER
new Swiper(".related-courses-slider", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop:
        document.querySelectorAll(".related-courses-slider .swiper-slide")
            .length > 3,
    pagination: {
        el: ".related-courses-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".related-courses-next",
        prevEl: ".related-courses-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1320: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

// ORGANIZATION SLIDER
new Swiper(".organization-slider", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop:
        document.querySelectorAll(".organization-slider .swiper-slide").length >
        4,
    pagination: {
        el: ".organization-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".organization-next",
        prevEl: ".organization-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1320: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

// TRUSTED PARTNER SLIDER FIVE
new Swiper(".trusted-partner-five-slider", {
    speed: 5000,
    loop:
        document.querySelectorAll(".trusted-partner-five-slider .swiper-slide")
            .length > 6,
    slidesPerView: 2,
    spaceBetween: 0,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".instructor-pagination-two",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 6,
        },
    },
});

// WORK PROCESS SLIDER
new Swiper(".work-process-slider", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop:
        document.querySelectorAll(".work-process-slider .swiper-slide").length >
        3,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".work-process-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1320: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

// BUNDLE COURSE SLIDER TWO
new Swiper(".bundle-course-two-slider", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop:
        document.querySelectorAll(".bundle-course-two-slider .swiper-slide")
            .length > 4,
    pagination: {
        el: ".bundle-course-two-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".bundle-course-two-next",
        prevEl: ".bundle-course-two-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1320: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

// BUNDLE COURSE SLIDER FOUR
new Swiper(".bundle-course-four-slider", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop:
        document.querySelectorAll(".bundle-course-four-slider .swiper-slide")
            .length > 3,
    pagination: {
        el: ".bundle-course-four-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1320: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: ".bundle-course-four-next",
        prevEl: ".bundle-course-four-prev",
    },
});
