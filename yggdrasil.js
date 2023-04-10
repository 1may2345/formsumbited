
//!--------customer review page common box-----------//
function changestars(score){    

    var w=26; /* one star's width */
    var totalw=w*score; /* score stars */
    var aa=document.getElementById("autostars");
    aa.style.width=totalw+"px";
}	






//!-------nagation bar setting------------//

function showMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}





//!--------contact us page  form-----------//

var inputemail = document.getElementById('email');
inputemail.oninvalid = function(event) {
    event.target.setCustomValidity('xxx@xxx.xx Email should match this pattern.');
}

var inputname = document.getElementById('name');
inputname.oninvalid = function(event) {
    event.target.setCustomValidity('Please Enter your name.');
}

var inputsubject = document.getElementById('subject');
inputsubject.oninvalid = function(event) {
    event.target.setCustomValidity('Please fill out this empty.');
}

var inputmessage = document.getElementById('message');
inputmessage.oninvalid = function(event) {
    event.target.setCustomValidity('Please fill out this empty.');
}