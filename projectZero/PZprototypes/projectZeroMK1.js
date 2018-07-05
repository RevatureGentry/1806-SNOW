function changeImage(imageID) {
    console.log(document.getElementById(imageID).src)
    if (document.getElementById(imageID).src.includes("openSpace.png"))
    {
        document.getElementById(imageID).src = "greenX.png";
    }
        else if (document.getElementById(imageID).src.includes("greenX.png"))
        {
            document.getElementById(imageID).src = "redO.png";
        }
            else if(document.getElementById(imageID).src.includes("redO.png"))
            {
                document.getElementById(imageID).src = "openSpace.png"
            }
}