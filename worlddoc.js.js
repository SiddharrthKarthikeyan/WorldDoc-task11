let api = `https://restcountries.eu/rest/v2/all`;
let mainDiv = document.createElement("div");
mainDiv.setAttribute("class" , "mainContainer");
mainDiv.innerHTML = "";

async function calcDoc(countryName) {
    try {
        let responseData = await fetch(api);
        let userData = await responseData.json();
        var countryDetails = userData.filter((item)=>{
            return item.name === countryName;
        });
        console.log(countryDetails);
       displayDoc(countryDetails);
    }
    catch(error){
        console.log("Something went wrong");
        
        
    }
} 
calcDoc();

function countryDoc(){
    let countryName = document.getElementById("inp").value;
    calcDoc(countryName);
}
mainDiv = document.createElement("div");
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
let div4 = document.createElement("div");
let div5 = document.createElement("div");

function displayDoc(countryDetails){
     
    mainDiv.setAttribute("class" , "displaydata");

    
    div1.setAttribute("class" , "headings");
    div1.textContent = "CAPITAL";
   

    let h1_capital = document.createElement("h1");
    h1_capital.setAttribute("class" , "info");
    h1_capital.textContent = countryDetails[0].capital;
  
    
    div2.setAttribute("class" , "headings");
    div2.textContent = "CURRENCIES";
   

    let h2_currency = document.createElement("h1");
    h2_currency.setAttribute("class" , "info");
    h2_currency.textContent = countryDetails[0].currencies[0].name;
    console.log("check1");
    
    div3.setAttribute("class" , "headings");
    div3.textContent = "LANGUAGES";

    let h3_languages = document.createElement("h1");
    h3_languages.setAttribute("class" , "info");
    h3_languages.textContent = countryDetails[0].languages[0].name;

    div4.setAttribute("class" , "headings");
    div4.textContent = "NATIVE NAME";

    let h4_nativename = document.createElement("h1");
    h4_nativename.setAttribute("class" , "info");
    h4_nativename.textContent = countryDetails[0].nativeName;
    console.log("check2");

    div5.setAttribute("class" , "headings");
    div5.textContent = "LATLANG";

    let h5_latlang = document.createElement("h1");
    h5_latlang.setAttribute("class" , "info");
    h5_latlang.textContent = countryDetails[0].latlng[0] + (' , ') + countryDetails[0].latlng[1];
    

    div1.append(h1_capital);
    div2.append(h2_currency);
    div3.append(h3_languages);
    div4.append(h4_nativename);
    div5.append(h5_latlang);
    mainDiv.append(div1,div2,div3,div4,div5);
    document.body.append(mainDiv);
    
    
}