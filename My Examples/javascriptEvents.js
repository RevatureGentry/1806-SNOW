window.onload = () => {
    document.getElementById('submitButton').addEventListener('click', function() {
        alert("Hello " + document.getElementById('name').value);
    });

    for (let el of document.querySelectorAll("*")) {
        el.addEventListener('click', e => alert(`Capturing: ${el.tagName}`), true);
        el.addEventListener('click', e => alert(`Bubbling: ${el.tagName}`));
    }
}
