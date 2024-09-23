function openTab(event, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

function toggleEmailField() {
    var emailField = document.getElementById("emailEncuesta");
    if (document.getElementById("satisfaccion").checked) {
        emailField.style.display = "block";
    } else {
        emailField.style.display = "none";
    }
}

// Inicialización
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("General").style.display = "block";
});
