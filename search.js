

function searchReddit() {
  var query = document.getElementById("inputText").value;
  var url =  "https://www.google.com/search?q="+query+"+site%3Areddit.com&oq="+query+"+site%3Areddit.com"
  console.log("url: ", url);
  window.location.href = url;
}
