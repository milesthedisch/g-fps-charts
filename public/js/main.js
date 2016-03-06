 (function IFEE() {
    var domReady = function(callback) {
        document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
    };
    domReady(function(){
      var httpRequest;
      document.getElementById("getGraphs").onclick = function() { makeRequest('/api/graphs'); };

      function makeRequest(url) {
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
          alert('Giving up :( Cannot create an XMLHTTP instance');
          return false;
        }
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', url);
        httpRequest.send();
      }

      function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
            console.log(httpRequest.responseText);
          } else {
            alert('There was a problem with the request.');
          }
        }
      }
    });
})();