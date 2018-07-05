let ajaxObj = function(url ='', respFunc = {}, RSLT4 = {} ){
    // 1.) Declare and instantiate an object of type XMLHttpRequest
    let xhr = new XMLHttpRequest();
    // 2.) Set a function to the xhr.OnReadyStateChange event
    xhr.onreadystatechange = function() {
        if (xhr.readyState < 4){RSLT4};}
        //Check to ensure the response has completed and has HTTP status code of 200
        if (xhr.readyState === 4 && xhr.status === 200) {
            // 5.) handle the response
            respFunc      
        }   
    // 3.) Open a request to the URL
    xhr.open("GET",url);
    // 4.) Send the request
    xhr.send();
}