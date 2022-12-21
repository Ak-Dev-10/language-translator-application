var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var textOutput = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"; 

var serverURL ="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    console.log("error occured" , error);
    alert("There is something wrong with the server! try again after some time") 
}

function clickHandler(){
    // 
    var inputText = textInput.value; // taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
     var translatedText = json.contents.translated;
      textOutput.innerText = translatedText;
    })
    .catch(errorHandler)
};


btnTranslate.addEventListener("click", clickHandler);