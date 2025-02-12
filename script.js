document.getElementById("yes-btn").addEventListener("click", function() {
    alert("Yay! I knew you'd say YES! ❤️");
});

document.getElementById("no-btn").addEventListener("mouseover", function() {
    this.style.position = "absolute";
    this.style.top = Math.random() * window.innerHeight + "px";
    this.style.left = Math.random() * window.innerWidth + "px";
});
