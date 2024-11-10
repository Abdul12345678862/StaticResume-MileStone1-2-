function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    var button = section.previousElementSibling;
    if (section) {
        if (section.style.display === "none" || !section.style.display) {
            section.style.display = "block";
            button.innerHTML = "Hide";
        }
        else {
            section.style.display = "none";
            button.innerHTML = "Show";
        }
    }
}
// Initialize all sections as visible
window.onload = function () {
    var sections = document.querySelectorAll(".content");
    sections.forEach(function (section) {
        section.style.display = "block";
    });
};
