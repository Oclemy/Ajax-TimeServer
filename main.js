




/*
 0 	UNSENT 	Client has been created. open() not called yet.
 1 	OPENED 	open() has been called.
 2 	HEADERS_RECEIVED 	send() has been called, and headers and status are available.
 3 	LOADING 	Downloading; responseText holds partial data.
 4 	DONE 	The operation is complete.
 */


/*
HTTP CLIENT CLASS
 */
var HttpClient = function () {

    //INSTANCE VARIABLES
    var requestType = "GET";
    var isAsynchronous = true;

    //GET FUNCTION
    this.get = function (targetURL, onMyDataRetrieved) {

        //AJAX USING XMLHTTPREQUEST
        var xmlhttprequest = new XMLHttpRequest();
        xmlhttprequest.onreadystatechange = function () {

            //IF OPERATION IS COMPLETED
            if (this.readyState == 4){

                //IF HTTP RESPONSE STATUS IS OK:200
                if(this.status == 200) {
                    onMyDataRetrieved(this.responseText);
                }else
                {
                    onMyDataRetrieved("Error, the Request has not succeeded")
                }
            }
        };

        //OPEN CONNECTION AND SEND ASYNCHRONOUS REQUEST
        xmlhttprequest.open(requestType, targetURL, isAsynchronous);
        xmlhttprequest.send();
    }

}

/*
IMPLEMENT OUR HTTP CLIENT GET REQUEST
 */
function getDateTime(targetURL) {
    var client = new HttpClient();
    client.get(targetURL, function (receivedData) {
        document.getElementById("displaySectionID").innerHTML =receivedData;
    });

}