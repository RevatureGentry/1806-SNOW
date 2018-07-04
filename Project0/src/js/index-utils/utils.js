export function existsUserChosenFile() {
    return document.getElementById("user-music").files.length > 0;
}


export function getSelectedMusic() {
    var LAYLA = 
        "Layla \n" +
        "Eric Clapton \n" +
        "unit 16 upm 120 beat 4 \n " +
        "-ScoreStart- \n" +
        "A3 C4 D4 E4 D4 A3 C4 ~ ! ~ E3 E3 E3 ~ D3 D3 C3 D3 E3";

    const selected = document.getElementById("provided-music").value;
    if(selected === "layla") {
        return LAYLA;
    } else if (selected === "duck") {
        return LAYLA;
    } else {
        throw new Error("An invalid selection was made!");
    }
}
