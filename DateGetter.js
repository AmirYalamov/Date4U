//Date4U js file, gets published date of webpage from source code of webpage
//makes use of "datePublished": function

var element = document.getElementById("datePublished");
var date = element.innerText.search(/"datePublished":"(.+)"/)
return date;
