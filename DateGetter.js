//Date4U js file, gets published date of webpage from source code of webpage
//makes use of "datePublished": function

function getDate() {
  var idStr = elt.id;   // get the ID
  elt.id = idStr;   // set the ID

  var element = document.getElementById("idStr");
var date = element.innerText.search(/"datePublished":"(.+)"/);

  chrome.tabs.executeScript({
    code: date
  })
  console.log(date)
}
