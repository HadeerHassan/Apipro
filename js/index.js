let searchMovie = document.getElementById("searchMovie");
let wordMovie = document.getElementById("wordMovie");
let apiDefault = "now_playing";

$("input").focus(function () {
    $(this).css({ "background-color": "transparent", "border": "1px solid #5da0e2;" }),
        $(this)[0].setSelectionRange(0, 0)
})

$("input").blur(function () {
    $(this).css({ "background-color": "transparent", "border-bottom": "1px solid rgba(255,255,255,.7);" })
})

//-----------for api movie---------

let allMovies = [];
apiDefault = "now_playing"

async function getMovies(term) {
    let apiResponse = await fetch(`https://api.themoviedb.org/3/movie/${term}?api_key=87f91c3745f7746c020562d5ab32c69b&language=en-US`);
    allMovies = await apiResponse.json();
    allMovies = allMovies.results;
    console.log(allMovies);
    displaySearch();
}
// function display() {
//     let cartona = ``;
//     for (let i = 0; i < allMovies.length; i++) {
//         cartona += ` <div class="col-md-4 mb-3">
//         <div class="imgitem shadow">
//         <img src="https://image.tmdb.org/t/p/w500${allMovies[i].poster_path}" class="img-fluid rounded" alt="">
//             <div class="layer d-flex align-items-center ">
//                 <div class="info">
//                     <h2>${allMovies[i].original_title}</h2>

//                     <p class="m-0">${allMovies[i].overview}</p>
//                     <p class="m-0">${allMovies[i].vote_average}</p>
//                     <p>${allMovies[i].release_date}</p>
//                 </div>
//             </div>
//         </div>
//     </div>`
//     }
//     document.getElementById("dataDisplay").innerHTML = cartona;
// }
// getMovies(apiDefault);


// $("#searchMovie").keyup(function () {

//     let cartoona;
//     let x = $(this).val();

//     for (let i = 0; i < allMovies.length; i++) {
//         if (allMovies[i].original_title.toLowerCase().includes(x.toLowerCase())) {
//             // apiDefault = allMovies[i].id;
//             // getMovies(apiDefault);}
//             for (let i = 0; i < allMovies.length; i++) {
//                 cartoona += ` <div class="col-md-4 mb-3">
//                 <div class="imgitem ">
//                 <img src="https://image.tmdb.org/t/p/w500${allMovies[i].poster_path}" class="img-fluid rounded" alt="">
//                     <div class="layer d-flex align-items-center ">
//                         <div class="info">
//                             <h2>${allMovies[i].original_title}</h2>

//                             <p class="m-0">${allMovies[i].overview}</p>
//                             <p class="m-0">${allMovies[i].vote_average}</p>
//                             <p>${allMovies[i].release_date}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>`
//             }

//         }


//     }
//     document.getElementById("dataDisplay").innerHTML = cartoona;
// })

function displaySearch(t = "") {
    let cartona = ``;
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].original_title.toLowerCase().includes(t.toLowerCase()) == true) {
            cartona += ` <div class="col-md-4 mb-3">
            <div class="imgitem ">
            <img src="https://image.tmdb.org/t/p/w500${allMovies[i].poster_path}" class="img-fluid rounded" alt="">
                <div class="layer d-flex align-items-center ">
                    <div class="info">
                        <h2>${allMovies[i].original_title}</h2>

                        <p class="m-0">${allMovies[i].overview}</p>
                        <p class="m-0">${allMovies[i].vote_average}</p>
                        <p>${allMovies[i].release_date}</p>
                    </div>
                </div>
            </div>
        </div>`
        }
        else {

            console.log("mshmawgod");
        }

    }
    document.getElementById("dataDisplay").innerHTML = cartona;
}



$("#searchMovie").keyup(function () {


    let x = $(this).val();

    displaySearch(x);

}
)
getMovies(apiDefault);
//--------------search by word-------------------
let allResult = [];
async function searchByWord(query) {
    let apiResponse = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=87f91c3745f7746c020562d5ab32c69b&language=en-US&page=1&include_adult=false&query=${query}`);
    allResult = await apiResponse.json();
    allResult = allResult.results;
    console.log(allResult);
    displayByword();
}

$("#wordMovie").keyup(function () {
    let word = $(this).val();
    searchByWord(word);

})
function displayByword() {

    let cartona = ``;
    for (let i = 0; i < allResult.length; i++) {
        cartona += ` <div class="col-md-4 mb-3">
            <div class="imgitem ">
            <img src="https://image.tmdb.org/t/p/w500${allResult[i].poster_path}" class="img-fluid rounded" alt="">
                <div class="layer d-flex align-items-center ">
                    <div class="info">
                        <h2>${allResult[i].original_title}</h2>

                        <p class="m-0">${allResult[i].overview}</p>
                        <p class="m-0">${allResult[i].vote_average}</p>
                        <p>${allResult[i].release_date}</p>
                    </div>
                </div>
            </div>
        </div>`
    }

    document.getElementById("dataDisplay").innerHTML = cartona;

}

//------------------------form section--------------

let nameInput = $("#nameInput");
let emailInput = $("#emailInput");
let phoneInput = $("#phoneInput");
let ageInput = $("#ageInput");
let passwordInput = $("#passwordInput");
let repasswordInput = $("#repasswordInput");
let alertInput = $("#namealert");


// function validateName ()
// {  
//     let m=$("#nameInput").next();
//     let regex=/^[A-Z a-z 1-9]+$/;
//     if(regex.test(nameInput.val()))
//     { 

//         console.log("tmam");
//         // console.log(regex.test(nameInput.val()));
//         m.removeClass("d-block");
//         // console.log($("#namealert"));

//         m.addClass("d-none");
//     }
//     else
//     {

//         // $("#namealert").css("display","block");
//         m.removeClass("d-none");
//         m.addClass("d-block");

//         console.log("la2a");

//     }
// }

// nameInput.keyup(function(){validateName()});

function validate(Input, regex) {
    let m = Input.next();

    if (regex.test(Input.val())) {
        console.log("tmam");

        m.removeClass("d-block");


        m.addClass("d-none");
    }
    else {


        m.removeClass("d-none");
        m.addClass("d-block");

        console.log("la2a");

    }
}

nameInput.keyup(function () { validate(nameInput, /^[A-Z a-z 1-9]+$/) });
emailInput.keyup(function () { validate(emailInput, /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) });
phoneInput.keyup(function () { validate(phoneInput, /^(002)?01[0125][0-9]{8}$/) });
ageInput.keyup(function () { validate(ageInput, /^[1-9][0-9]?$/) });
passwordInput.keyup(function () { validate(passwordInput, /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/) });
repasswordInput.keyup(function () { repassword(repasswordInput) });


// let regularpassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

function repassword(i) {
    if (i.val() == passwordInput.val()) {
        validate(i, /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/);
    }
    else {
        $("#repasswordalert").removeClass("d-none");
        $("#repasswordalert").addClass("d-block");

    }

}


//---------------------side nav section------------

$("#logoIcon").click(function () {

    console.log($(".side-nav").css("transform"));
    if ($(".side-nav").css("transform") == "matrix(1, 0, 0, 1, -228, 0)") {

        $(".side-nav").css("transform", "translateX(0)");
        $(this).addClass("fa-times");
        $(".item1").animate({ paddingTop: "25px", opacity: "1" }, 1100);
        $(".item2").animate({ paddingTop: "25px", opacity: "1" }, 1200);
        $(".item3").animate({ paddingTop: "25px", opacity: "1" }, 1300);
        $(".item4").animate({ paddingTop: "25px", opacity: "1" }, 1400);
        $(".item5").animate({ paddingTop: "25px", opacity: "1" }, 1500);
        $(".item6").animate({ paddingTop: "25px", opacity: "1" }, 1600);
    }
    else {

        $(".side-nav").css("transform", "translateX(-75%)");
        $(this).removeClass("fa-times");

        $(".item1").animate({ paddingTop: "500px", opacity: "0" }, 1100);
        $(".item2").animate({ paddingTop: "500px", opacity: "0" }, 1200);
        $(".item3").animate({ paddingTop: "500px", opacity: "0" }, 1300);
        $(".item4").animate({ paddingTop: "500px", opacity: "0" }, 1400);
        $(".item5").animate({ paddingTop: "500px", opacity: "0" }, 1500);
        $(".item6").animate({ paddingTop: "500px", opacity: "0" }, 1600);

    }
})

$("#now").click(function () {
    apiDefault = "now_playing";
    getMovies("now_playing");
})
$("#popular").click(function () {
    apiDefault = "popular";
    getMovies("popular");
})
$("#trending").click(function () {
    getTrending();
})
$("#top").click(function () {

    getMovies("top_rated");
})
$("#upcoming").click(function () {
    apiDefault = "upcoming";
    getMovies("upcoming");
})

async function getTrending(){
    let apiResponse = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=87f91c3745f7746c020562d5ab32c69b&language=en-US`);
    allMovies = await apiResponse.json();
    allMovies = allMovies.results;
    console.log(allMovies);
    displaySearch();
}