document.querySelectorAll("svg").forEach(svg => {
    svg.setAttribute("onmouseover", "alert('XSS WORKING!')");
    svg.style.border = "5px solid red"; // Debug visuel
});
