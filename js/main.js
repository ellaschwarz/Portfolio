
//ATT MENYN SKA KÄNNA AV VAR MAN ÄR NÄR MAN SCROLLAR
// !function (e) {
//     "use strict";
//     e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
//         if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
//             var a = e(this.hash);
//             if ((a = a.length ? a : e("[name=" + this.hash.slice(1) + "]")).length)
//                 return e("html, body").animate({
//                     scrollTop: a.offset().top - 70
//                 },
//                     1e3, "easeInOutExpo"), !1
//         }
//     }),

//         e(".js-scroll-trigger").click(function () {
//             e(".navbar-collapse").collapse("hide")
//         }),
//         e("body").scrollspy({
//             target: "#mainNav",
//             offset: 100
//         });

//     function a() {
//         100 < e("#mainNav").offset().top ? e("#mainNav").addClass("navbar-shrink") : e("#mainNav").removeClass("navbar-shrink")
//     }

//     a(), e(window).scroll(a)
// }

// (jQuery);


// LOCAL STORAGE
let language = localStorage.getItem("language");

if (language == null){
    console.log("User has not selected a language");
    language = "en";
} 

document.addEventListener("DOMContentLoaded", function(e){
let selector = document.getElementById("language_selector");

selector.addEventListener("change", function(e){
    console.log(e.target.value);
    language = e.target.value;
    localStorage.setItem("language", language);
})
});

console.log(language);


//VISAR OCH DÖLJER CV-SIDAN
$(document).ready(function(){
    $("#resume").click(function(){
       $(".main_content").toggle()
       $("#cv_pdf").toggle();
       $("resume_h1").toggle();
       });

       $("#resume_btn").click(function(){
        $(".main_content").toggle()
        $("#cv_pdf").toggle();
        $("resume_h1").toggle();
        });

       $("#projects_button").click(function(){
        $(".main_content").show()
        $("#cv_pdf").hide();
        $("resume_h1").hide();
        });

        $("contact_button").click(function(){
            $(".main_content").show()
            $("#cv_pdf").hide();
            $("resume_h1").hide();
            });

            $("#about_button").click(function(){
                $(".main_content").show()
                $("#cv_pdf").hide();
                $("resume_h1").hide();
                });    
    });

   
