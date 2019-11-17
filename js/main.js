
//Array for Swedish translation
let swe = [
    {
        "menu": "Meny",
        "about_btn": "Om mig",
        "project_btn": "Projekt",
        "resume": "Mitt CV",
        "contact_btn": "Kontakt",
        "resume_h1": "Mitt CV"
    },
    {
        "ellaDescr": "Studerar till webbutvecklare fullstack",
        "jumboHeader": "Vem är jag?",
        "jumboText": "Mitt mål är att bli riktig grym på programmering. Jag brinner för innovation, tech och business. Med min kandidatexamen i Företagsekonomi och management, kombinerat med min utbildning inom webutveckling hoppas jag kunna bidra till utvecklingen av framtidens innovativa produkter och lösningar. När jag inte programmerar eller jobbar tycker jag om att upptäcka nya platser, läsa böcker och lära mig nya saker. Jag letar nu efter en praktikplats där jag kan både få lära mig och bidra så mycket som möjligt.",
        "resume_btn": "CV"
    },
    {
        "my_projects": "Mina projekt",
        "techniques": "Tekniker",

        "CRM_text": "Agilt projektarbete där vi i grupp utvecklade en demo av ett CRM-system. Systemet inkluderade kundhantering, kalenderfunktion, notifikationer, addering av nya kunder och inloggningsfunktion.",
        "see_more": "Se mer",

        "quiz_text": "Individuellt arbete där jag utvecklade en quiz-applikation med frågor hämtade från ett JSON-API. Användaren valde antalet frågor, applikationen räknade ut antalet korrekta svar.",

        "nim_title": "Nim-spelet",
        "nim_text": "Ett spel för två spelare. Av 21 pinnar ska spelarna välja att ta bort antingen 1, 2 eller 3 stycken. Den spelare som tar bort den sista pinnen förlorar."
    },
    {
        "phone": "Telefonnummer",
        "adress": "Adress"
    }
];

//Array for English translation
let eng = [
    {
        "menu": "menu",
        "about_btn": "About",
        "project_btn": "Projects",
        "resume": "Resume",
        "contact_btn": "Contact",
        "resume_h1": "Resume"
    },
    {
        "ellaDescr": "Fullstack Web Developer Student",
        "jumboHeader": "Who am I?",
        "jumboText": "I am a Fullstack Web Developer Student with a B.sc. in Business Administration and Economics. I am truly passionate about innovation, tech and business. By becoming a great developer, I hope to contribute to the innovation of tomorrow. I am always looking for new knowledge to keep growing, both as an individual and as an employee. If there is anything I don’t know, I’m not afraid to learn. Therefore, I am now looking for an internship where I can both learn from and contribute to the current technology.",
        "resume_btn": "Resume"
    },
    {
        "my_projects": "My projects",
        "techniques": "Techniques",

        "CRM_text": "An agile group project where we as a group of three designed and developed a CRM-system. The project lasted for three weeks and we were using Scrum as an agile method.",
        "see_more": "See more",
        "CRM_pic1": "/images/CRM_pictures/CRM_pictures.001.jpeg",

        "quiz_text": "Individual assignment where I developed a quiz application which included questions collected from a JSON-API. The user got to choose the number of questions and the application calculated the score.",

        "nim_title": "Nim-game",
        "nim_text": "A game for two players where each player gets to pick 1, 2 or 3 sticks out of 21. The player who gets the last stick looses"
    },
    {
        "phone": "Phone",
        "adress": "Address"
    }
];

//Function that translates to Swedish from array

function sweLanguage() {
    $('.menu').html(swe[0].menu);
    $('#about_button').html(swe[0].about_btn);
    $('.projekt').html(swe[0].project_btn);
    $('#resume').html(swe[0].resume);
    $('#contact_button').html(swe[0].contact_btn);

    $('.ellaDescr').html(swe[1].ellaDescr);
    $('.jumboHeader').html(swe[1].jumboHeader);
    $('.jumboText').html(swe[1].jumboText);
    $('#resume_btn').html(swe[1].resume_btn);

    $('.my_projects').html(swe[2].my_projects);
    $('.techniques').html(swe[2].techniques);

    $('.CRM_text').html(swe[2].CRM_text);
    $('.see_more').html(swe[2].see_more);
    $('.CRM_pic1').html(swe[2].CRM_pic1);
    $('.CRM_pic2').html(swe[2].CRM_pic2);
    $('.CRM_pic3').html(swe[2].CRM_pic3);

    $('.quiz_text').html(swe[2].quiz_text);
    $('.quiz_pic1').html(swe[2].quiz_pic1);
    $('.quiz_pic2').html(swe[2].quiz_pic2);
    $('.quiz_pic3').html(swe[2].quiz_pic3);

    $('.nim_title').html(swe[2].nim_title);
    $('.nim_text').html(swe[2].nim_text);
    $('.nim_pic1').html(swe[2].nim_pic1);
    $('.nim_pic2').html(swe[2].nim_pic2);

    $('.phone').html(swe[3].phone);
    $('.adress').html(swe[3].adress);
}

//Function that translates to English from array
function engLanguage() {
    $('.menu').html(eng[0].menu);
    $('#about_button').html(eng[0].about_btn);
    $('.projekt').html(eng[0].project_btn);
    $('#resume').html(eng[0].resume);
    $('#contact_button').html(eng[0].contact_btn);

    $('.ellaDescr').html(eng[1].ellaDescr);
    $('.jumboHeader').html(eng[1].jumboHeader);
    $('.jumboText').html(eng[1].jumboText);
    $('#resume_btn').html(eng[1].resume_btn);

    $('.my_projects').html(eng[2].my_projects);
    $('.techniques').html(eng[2].techniques);

    $('.CRM_text').html(eng[2].CRM_text);
    $('.see_more').html(eng[2].see_more);
    $('.CRM_pic1').html(eng[2].CRM_pic1);
    $('.CRM_pic2').html(eng[2].CRM_pic2);
    $('.CRM_pic3').html(eng[2].CRM_pic3);

    $('.quiz_text').html(eng[2].quiz_text);
    $('.quiz_pic1').html(eng[2].quiz_pic1);
    $('.quiz_pic2').html(eng[2].quiz_pic2);
    $('.quiz_pic3').html(eng[2].quiz_pic3);

    $('.nim_title').html(eng[2].nim_title);
    $('.nim_text').html(eng[2].nim_text);
    $('.nim_pic1').html(eng[2].nim_pic1);
    $('.nim_pic2').html(eng[2].nim_pic2);

    $('.phone').html(eng[3].phone);
    $('.adress').html(eng[3].adress);
}


// Saving selected language in local storage
let language = localStorage.getItem("language");

if (language == null) {
    language = "ENGLISH";
    engLanguage();
} else if (language == "ENGLISH") {
    engLanguage();
    $("#english").attr("selected", "");
} else if (language == "SWEDISH") {
    sweLanguage();
    $("#swedish").attr("selected", "");
}

document.addEventListener("DOMContentLoaded", function (e) {
    let selector = document.getElementById("language_selector");

    //Runs the translation when the user selects language
    selector.addEventListener("change", function (e) {
        language = e.target.value;
        localStorage.setItem("language", language);
        if (language == "ENGLISH") {
            engLanguage();
        } else if (language == 'SWEDISH') {
            sweLanguage();
            console.log(language);
        }
    })
});

//Toggle different elements in order to make it a single page
$(document).ready(function () {
    $("#resume").click(function () {
        $(".main_content").toggle()
        $("#cv_pdf").toggle();
        $("resume_h1").toggle();
    });

    $("#resume_btn").click(function () {
        $(".main_content").toggle()
        $("#cv_pdf").toggle();
        $("resume_h1").toggle();
    });

    $("#projects_button").click(function () {
        $(".main_content").show()
        $("#cv_pdf").hide();
        $("resume_h1").hide();
    });

    $("contact_button").click(function () {
        $(".main_content").show()
        $("#cv_pdf").hide();
        $("resume_h1").hide();
    });

    $("#about_button").click(function () {
        $(".main_content").show()
        $("#cv_pdf").hide();
        $("resume_h1").hide();
    });
});


