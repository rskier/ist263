function showNav () {
    document.getElementById("navLink1").style.display = "block";
    document.getElementById("navLink2").style.display = "block";
    document.getElementById("navLink3").style.display = "block";
    document.getElementById("hamicon").style.display = "none";
    document.getElementById("close").style.display = "block";
}
function hideNav () {
    document.getElementById("close").style.display = "none";
    document.getElementById("navLink1").style.display = "none";
    document.getElementById("navLink2").style.display = "none";
    document.getElementById("navLink3").style.display = "none";
    document.getElementById("hamicon").style.display = "block";
}