export function addFileEvents() {
    const clearBtn = document.getElementById("clear-file");
    const fileInput = document.getElementById("user-music");

    clearBtn.addEventListener("click", function clearFile(event) {
        event.preventDefault();
        fileInput.files = null;
        fileInput.value = null;

    });
}