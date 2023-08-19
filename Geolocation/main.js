
let postionObj;


function geolocationFun(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getposition, errorhandlere);
    }
    else{
        alert("You should give the permission");
    }
}
function getposition(postion){
    postionObj =postion;
}
function errorhandlere(){
    alert('Error');

}


function dispMapFunc(){
    console.log(postionObj );
    if(postionObj ){
    let lat = postionObj.coords.latitude;
    let lon = postionObj.coords.longitude;

    var location = new google.maps.LatLng(lat, lon);
    var specs = { zoom: 17, center: location };
    new google.maps.Map(dispInfo, specs);
   }
else{
    alert("You should give the permission");
    geolocationFun();
}

}

function dispDetailedInfo(){
    if(postionObj ){
    dispInfo.innerHTML=` <div class="info">
    <h4>Latitude(degree)</h4>
    <p>${postionObj.coords.latitude}</p>
    <h4>Longtitude(degree)</h4>
    <p>${postionObj.coords.longitude}</p>
    <h4>Acurrecy(m)</h4>
    <p>${postionObj.coords.accuracy}</p>
    <h4>TimeStamp(Current Time and Date)</h4>
    <p>${new Date(postionObj.timestamp)}</p>
  </div>`;
}
else{
    alert("You should give the permission");
    geolocationFun()
}
}

window.addEventListener("load", geolocationFun);
window.addEventListener("load",function(){
    dispMap.addEventListener('click',dispMapFunc)
    dispDetailInfo.addEventListener('click',dispDetailedInfo)

})