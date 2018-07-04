
// This function makes sure that the user
// can click a button to clear his file system file,
// if he wants to use a provided file instead.
export function addFileEvents() {
    const clearBtn = document.getElementById("clear-file");
    const fileInput = document.getElementById("user-music");

    clearBtn.addEventListener("click", function clearFile(event) {
        event.preventDefault();
        fileInput.files = null;
        fileInput.value = null;

    });
}