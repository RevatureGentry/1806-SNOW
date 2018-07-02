export function addArrowEvents() {
    const ids = [1, 2, 3, 4];
    for(let id of ids) {
        const arrow_id = "arrow-" + id.toString();
        const arrow = document.getElementById(arrow_id);
        arrow.addEventListener("animationend", function(event) {
            arrow.classList.remove("explode");
        });
    }
}