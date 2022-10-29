
$(document).ready(function(){
    $("#loading .fa-spinner").fadeOut(1000 ,function (){
       $("#loading").fadeOut(1000), () => {
        $("body").css("overflow", "visible")  }   });
   });
 
   $("#searchSection").hide()
   let contacts = document.getElementById("contact");
       let roww = document.getElementById("Landing-row");
       let rowwSearch = document.getElementById("row-search");
       let postContainer = document.getElementsByClassName("post");
     let instImg = document.getElementById("food-pic");
     let instName = document.getElementById("food-name");
     let instText = document.getElementById("instructions-data");
     let instArea = document.getElementById("area-data");
     let instCategory = document.getElementById("category-data");
     let instRecipes =document.getElementById("recipes");
     let instTags = document.getElementById("tags");
    let sourceLink = document.getElementById("srclink");
    let youtubeLink = document.getElementById("ytlink");
    let userName = document.getElementById("uName");
    let phoneNum = document.getElementById("Phone");
    let password = document.getElementById("Password");
    let emailFeild = document.getElementById("Email");
    let ageFeild = document.getElementById("Age");
    let Repassword = document.getElementById("Repassword");
    let sumbitBtn = document.getElementById("sumbitBtn");
    let categoryRow = document.getElementById("Category-row");
    let categoryPage = document.getElementById("CategoryPage");
    let areaRow = document.getElementById("Area-row");
       let arr = [];
       let arr2 = [];

       let nvWidth = 0;
      var  isTrue = !0;
      let ingreds;
       let mealIDD;
      let response;
      let API;
     let API2;
     let results;
     let result;
     let counter = 0 ;
     let meal;
     let mealAdds;
     let responseData ;

     const Ingre = ["strIngredient1","strIngredient2","strIngredient3","strIngredient4","strIngredient5","strIngredient6","strIngredient7","strIngredient8","strIngredient9","strIngredient10","strIngredient11","strIngredient12","strIngredient13","strIngredient14","strIngredient15","strIngredient16","strIngredient17","strIngredient18","strIngredient19","strIngredient20"];

      const rndmletter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

      for (let i = 0; i < rndmletter.length; i++) {
       
        rndmletter[i];

        API = `https://www.themealdb.com/api/json/v1/1/search.php?f=${rndmletter[i]}`;
         response = await fetch(API);
         result = await response.json();

        if(result.meals != null )
        {
          
           results = result;
           counter ++;
        }
        
        // console.log(results.meals[0].strMeal)
        meal = results.meals[0];

     
   
      
      

   addPosts(meal)
        }    
      

    //    addPosts([...Array(26).keys()]);
   

    async  function addPosts(arr){
        let e = ""
        for (let i = 0 ; i < 1 ; i++)
            {

         e += ` <div class="col-md-6 col-lg-3 my-3 position-relative post shadow">
        <img src="${arr.strMealThumb}" class="w-100 rads" alt="">
        <div class="layer d-flex align-items-center rads">
            <div class="info p-2 fs-1 fw-light">${arr.strMeal}</div>
        </div>

    </div>`
   
   
            }
         
 
        
        
            roww.innerHTML += e;
            $("html,body").animate({scrollTop: 0}, 200)

          
         
     
    }
    async  function addPostsSearch(arr){
        let e = ""
        
        for (let i = 0 ; i < 1 ; i++)
            {

         e += ` <div class="col-md-6 col-lg-3 my-3 position-relative post shadow">
        <img src="${arr.strMealThumb}" class="w-100 rads" alt="">
        <div class="layer d-flex align-items-center rads">
            <div class="info p-2 fs-1 fw-light">${arr.strMeal}</div>
        </div>

    </div>`
   

            }
        
            rowwSearch.innerHTML += e;
            $("html,body").animate({scrollTop: 0}, 200)

          
         
     
    }
    async  function addPostsSearchName(arr){
        let e = ""
        
        for (let i = 0 ; i < 1; i++)
            {

         e += ` <div class="col-md-6 col-lg-3 my-3 position-relative post shadow">
        <img src="${arr.strMealThumb}" class="w-100 rads" alt="">
        <div class="layer d-flex align-items-center rads">
            <div class="info p-2 fs-1 fw-light">${arr.strMeal}</div>
        </div>

    </div>`
   

            }
        
            rowwSearch.innerHTML += e;
            $("html,body").animate({scrollTop: 0}, 200)

          
         
     
    }
    async function fetchAPI (API) {
         let response = await fetch(API);
         let result = await response.json();

        return result;

    }
    $(".strip-toggel-menu").click(function () {
        isTrue ? ($(".nav-tab-menu").addClass("open-menu").removeClass("close-menu"), nvWidth = $(".nav-tab-menu").width() - 10, $(".strip-header-nav").css("left", nvWidth), $(".fa-align-justify").toggleClass("fa-solid fa-x"), $(".nav-tab-menu .item1").animate({
            opacity: "1",
            paddingTop: "7%"
        }, 1100), $(".nav-tab-menu .item2").animate({
            opacity: "1",
            paddingTop: "7%"
        }, 1200), $(".nav-tab-menu .item3").animate({
            opacity: "1",
            paddingTop: "7%"
        }, 1300), $(".nav-tab-menu .item4").animate({
            opacity: "1",
            paddingTop: "7%"
        }, 1400), $(".nav-tab-menu .item5").animate({
            opacity: "1",
            paddingTop: "7%"
        }, 1500), $(".nav-tab-menu .item6").animate({
            opacity: "1",
            paddingTop: "7%"
        }, 1600), isTrue = !isTrue) : ($(".nav-tab-menu").addClass("close-menu").removeClass("open-menu"), $(".fa-align-justify").toggleClass("fa-solid fa-x"), $(".strip-header-nav").css("left", 0), $(".nav-tab-menu li").animate({
            opacity: "0",
            paddingTop: "500px"
        }, 500), isTrue = !isTrue)
    });
  
let search = document.getElementById("searchSection")
let Landing = document.getElementById("landingPage")
let searchByle = document.getElementById("letter")
let searchByNa = document.getElementById("searchInput")
$("#searchChoice").click(function () { 
$("#landingPage").fadeOut(500, function () {
    $("#searchSection").fadeIn(500);
    $("#contact").hide()
    $("#CategoryPage").hide()
    $("#areaPage").hide()
})

});
$("#contactsChoice").click(function () { 
    $("#searchSection").hide()
    $("#CategoryPage").hide()
    $("#areaPage").hide()
    
    $("#landingPage").fadeOut(500, function () {
        $("#contact").fadeIn(500)
    
    })

});
$("#CategoryChoice").click(function () { 
    // ,$("#searchSection").hide()
    $("#contact").hide()
    $("#searchSection").hide()
    $("#areaPage").hide()
    $("#landingPage").fadeOut(500, function () {
        $("#CategoryPage").fadeIn(500, function(){

            displayCategories();
        })
        
    })

});
$("#areaChoice").click(function () { 
    // ,$("#searchSection").hide()
    $("#contact").hide()
    $("#searchSection").hide()
    $("#CategoryPage").hide()
    $("#landingPage").fadeOut(500, function () {
        $("#areaPage").fadeIn(500, function(){

            displayArea();
        })
        
    })

});

async function displayCategories(){
    let e = ""

    API = `https://www.themealdb.com/api/json/v1/1/categories.php`;
    response = await fetch(API);
    result = await response.json();
    
    for (let i = 0 ; i < 14 ; i++)
        {
            //  console.log(  result.categories[i].strCategoryThumb)
     e += 
`
<div class="col-md-6 col-lg-3 my-3 position-relative post shadow">
<img src="${result.categories[i].strCategoryThumb}" class="w-100 rads" alt="">
<div class="layer d-flex flex-column align-items-center justify-content-evenly rads">
    <div class="info p-2 fs-1 fw-light">${result.categories[i].strCategory}</div>

</div>

</div>`


        }
        
     

    
    
        categoryRow.innerHTML += e;
        $("html,body").animate({scrollTop: 0}, 200)

      
     
 
    
}
let  CountryArray = ["American","British","Canadian","Chinese","Croatian","Dutch","Egyptian","French"];
async function displayArea(){
    let e = ""
    for (let i = 0 ; i < CountryArray.length ; i++ )
    {
        API = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${CountryArray[i]}`;
        response = await fetch(API);
        result = await response.json();
        e += 
        `
        <div onclick="(filterByArea('${CountryArray[i]}'))" class="col-md-6 col-lg-3 my-3 position-relative post text-center Area shadow">
        <i class="fa-solid fa-city fa-3x w-100 text-danger"></i>
        <h2 class=" text-white fs-4 ">${CountryArray[i]}</h2>
        
        </div>
    `
    }
    areaRow.innerHTML += e;
    $("html,body").animate({scrollTop: 0}, 200)
     
 
    
}

async function searchByArea(arr){

    API = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${arr}`;
    response = await fetch(API);
    result = await response.json();

        for (let i = 0 ; i < 13 ; i++)
        {
            //  console.log(  result.categories[i].strCategoryThumb)
     e += 
`
<div class="col-md-6 col-lg-3 my-3 position-relative post shadow">
<img src="${result.meals[i].strCategoryThumb}" class="w-100 rads" alt="">
<div class="layer d-flex flex-column align-items-center justify-content-evenly rads">
    <div class="info p-2 fs-1 fw-light">${result.categories[i].strCategory}</div>

</div>

</div>`


        }
}

 async function searchByLetter(letters) {
//    $("#letter").keyup(  async function(e){
   
      
        if (letters != null){
        console.log(letters)
       
        $("#loading .fa-spinner").fadeIn(200 ,function (){
            $("#loading").fadeIn(200)  });
        API = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letters}`;
        response = await fetch(API);
        result = await response.json();

       if(result.meals != null )
       {
         
          results = result;
         
       
       }
       

       meal = results.meals[0];
       addPostsSearch(meal)
       
        
       $("#loading .fa-spinner").fadeOut(200 ,function (){
        $("#loading").fadeOut(200), () => {
         $("body").css("overflow", "visible")  }   });
       
        }
    // });
}



$("#letter").keyup((e) => {
    searchByLetter(e.target.value)
    console.log(e.target.value)
    clearThis(searchByle);
    clearThisRow(rowwSearch);
});

//-----------------------------------
//-----------------------------------
//-----------------------------------//-----------------------------------
//-----------------------------------
//-----------------------------------
//-----------------------------------
//-----------------------------------
//-----------------------------------
//-----------------------------------

async function searchByName(letters) {

       
          
            if (letters != null){
            console.log(letters)
        
          
            $("#loading .fa-spinner").fadeIn(200 ,function (){
                $("#loading").fadeIn(200)  });
            API = `https://www.themealdb.com/api/json/v1/1/search.php?s=${letters}`;
            response = await fetch(API);
            result = await response.json();
    
           if(result.meals != null )
           {
             
              results = result;
             
           
           }
           
    
           meal = results.meals[0];
           addPostsSearchName(meal)
           
             
           $("#loading .fa-spinner").fadeOut(200 ,function (){
            $("#loading").fadeOut(200), () => {
             $("body").css("overflow", "visible")  }   });
            
            }
            
        // });
    } 

    
    $("#searchInput").keyup((e) => {
        searchByName(e.target.value);
        console.log(e.target.value);
        clearThisRow(rowwSearch);
    });

    
    function clearThis(target) {
        if (target.value !=null) {
            target.value = "";
        }
    }
    function clearThisRow(target) {
        if (target.innerHTML !=null) {
            target.innerHTML = "";
        }
    }
// searchByle.addEventListener("keyup" , function(){
//     letter = searchByle.value; })



//-----------------------------------
//-----------------------------------
//-----------------------------------//-----------------------------------
// async function getID(){
// $(postContainer).click(async function (){
   
//     API = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealIDD}`;
//     response = await fetch(API);
//     result = await response.json();
   
//    if(result.meals != null )
//    {
     
//       results = result;
     
   
//    }
    
//    meal = results.meals[0];
//   return mealIDD = meal.idMeal;
    
//        });
    
//     }



$(postContainer).click( function (){
    
   getMealinfo(meal.idMeal)     
});
async function getMealinfo(mealID) {
   

    $("#loading").fadeIn(100, function (){
        $("#instructions").fadeIn(200, function () {
            $("#landingPage").hide()
        })
    })
    

    API = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
    response = await fetch(API);
    result = await response.json();
   
   if(result.meals != null )
   {
     
      results = result;
     
   
   }
   
   meal = results.meals[0];
  
   
   instName.innerHTML = meal.strMeal;
   instImg.setAttribute("src",`${meal.strMealThumb}`)
   instText.innerHTML = meal.strInstructions;
   instArea.innerHTML = meal.strArea;
   instCategory.innerHTML = meal.strCategory;
   
for (let i = 0;  i<Ingre.length; i++)
{
    ingreds =Ingre[i];
    let e=""
    while (meal.ingreds != null)
    {   
        
        for (let i = 0 ; i < 1 ; i++)
        {

     e += `      <li class="my-3 mx-1 p-1 alert-success rounded ">${meal.ingreds}</li> `    // NOT WORKING :(


        }
    
        instRecipes.innerHTML += e;
        
    }

}
let z =""
let counterTags =1;
for (let i = 0 ; i < counterTags ; i++)
{

z += `        <li class="my-3  p-1 bg-danger rounded">${meal.strTags}</li>`

    
}
instTags.innerHTML += z;
sourceLink.setAttribute("href", `${meal.strSource}`)
youtubeLink.setAttribute("href",`${meal.strYoutube}`)




//    instRecipes.innerHTML = 



    
    $("#loading").fadeOut(500)
}


// $(".post").click(function (){
//     getID()
// })

// function  validation(){



if(userNameValid() && userEmailValid()  && userPhoneValid() && userAgeValid() && userPasswordValid() && userRePasswordValid()){
   sumbitBtn.setAttribute("disabled","false")
    $("#sumbitBtn").click ( function (){
        clearThisRow(userName); clearThisRow(emailFeild); clearThisRow(phoneNum); clearThisRow(ageFeild);clearThisRow(password);clearThisRow(Repassword);
        console.log("omar")
    })
}

// }else{
//     sumbitBtn.setAttribute("disabled","true")
// }
// }
// Repassword.addEventListener("keyup",function(e){
//     validation();
// })



function userNameValid() {
return /^[a-zA-Z ]+$/.test(userName.value)
}

function userEmailValid() {
    return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(emailFeild.value)  
}

function userPhoneValid() {
    return  /^[0-9]{1,11}$/.test(phoneNum.value)
}

function userAgeValid() {
    return  /^[0-9]{2}$/.test(ageFeild.value)
}

function userPasswordValid() {
    return  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password.value)
}

function userRePasswordValid() {
    return  password.value == Repassword.value
}
// $("#sumbitBtn").click ( function (){
// userNameValid()
// userEmailValid()
// userPhoneValid()
// userAgeValid()
// userPasswordValid()
// userRePasswordValid()
// })