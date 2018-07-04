
// This function ensures that when the
// receiver arrows are done animating in response to a successful
// match, the animations disappear.
export function addArrowEvents() {
    const ids = [1, 2, 3, 4];
    for(let id of ids) {
        const arrow_id = "arrow-" + id.toString();
        const arrow = document.getElementById(arrow_id);
        arrow.addEventListener("animationend", function removeArrowAnimations(event) {
            event.preventDefault();
            arrow.classList.remove("explode");
        });
    }
}