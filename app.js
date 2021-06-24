var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

var serverURL = "	https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL + "?text="+text
}

function errorHandler(error){
    console.log("error occured",error);
    alert("something wrong with server! try again after sometime")
}

btnTranslate.addEventListener("click",clickEventHandler)

function clickEventHandler(){
    
    var inputTxt = txtInput.value

    fetch(getTranslationURL(inputTxt))
          .then(response => response.json())
          .then(json => outputDiv.innerText =(json.contents.translated))
          .catch(errorHandler)
    

}

