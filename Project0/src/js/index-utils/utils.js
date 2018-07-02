export function existsUserChosenFile() {
    return document.getElementById("user-music").files.length > 0;
}


export function getSelectedMusic() {
    var LAYLA = 
        "Layla \n" +
        "Eric Clapton \n" +
        "unit 16 upm 60 beat 4 \n " +
        "-ScoreStart- \n" +
        "A5 C6 D6 E6 D6 A5 C6 ~ ~ ~ E5 E5 E5 ~ D5 D5 C5 D5 E5";

    const selected = document.getElementById("provided-music").value;
    if(selected === "layla") {
        return LAYLA;
    } else if (selected === "duck") {
        return LAYLA;
    } else if (selected === "user") {
        return LAYLA;
    } else {
        throw new Error("An invalid selection was made!");
    }
}
