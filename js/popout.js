$(document).ready(function () {
    $('#sidecont').load('sidenav.html');
});

function openNav() {
    document.getElementById("mySidenav").style.width = "18em";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
