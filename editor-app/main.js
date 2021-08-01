const inputs = document.querySelectorAll(".controls input");

function updateVar() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix) ;
}

inputs.forEach(input => input.addEventListener("input",updateVar));