window.onload = function() {
    'use strict';
    validateMaxlength();
function getZip(e) {
var zip = document.getElementById("zip");
var city = document.getElementById("city");
var state = document.getElementById("state");


var urls = "http://api.zippopotam.us/us/"

//make request
    fetch(urls+zip.value)
    .then(response =>{
        if(response.status != 200){
            document.getElementById("output").innerHTML = 
            `
            <p style="color:red">Invalid zip, please enter an valid zip code.</p>
            `;
            throw Error(response.statusText)
        } else {
            return response.json();
        }
    })
    .then(data => {
      //show location info
      var tcity = '';
      var tstate = ''
      data.places.forEach(place => {
          tcity += place['place name'];
          tstate += place['state']
          city.value = tcity; 
          state.value = tstate; 
      });
          
    })
    .catch(err => console.log(err))

}

function validateMaxlength(){
    var container = document.getElementsByClassName("container")[0];
    container.onkeyup = function(e) {
        var target = e.srcElement;
        var maxLength = parseInt(target.attributes["maxlength"].value, 10);
        var myLength = target.value.length;
        if (myLength >= maxLength) {
            getZip();
            output.innerHTML = '';
        }else{
            city.value = '';
            state.value = '';
        }
    }
}}

