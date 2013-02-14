console.debug = function() {};
/*
 * This function will be called when this js is loaded.
 */
 window.addEventListener("load", function()
 {
    console.log("SSDP multicast app starts");
    var connect = document.getElementById("start");
    connect.onclick = StartImageLoad;

    output = document.getElementById("output");
});

/*
 * This function will be called when "SSDP Start" button is pushed.
 */
 var StartImageLoad = function()
 {
    var url = ["http://8.media.bustedtees.cvcdn.com/1/-/bustedtees.21419ad1-ed60-40a0-86ff-823a06226f42.jpg",
    "http://4.media.bustedtees.cvcdn.com/9/-/bustedtees.3cfc1519-e42f-4376-8fbf-980df580fb44.jpg",
    "http://2.media.bustedtees.cvcdn.com/1/-/bustedtees.27977811-360f-4294-9f38-3bd6561d.jpg"];

    // Get Image Div
    var request = new Array(3);
    var list = document.getElementById("imgList").getElementsByTagName("img");
    console.log(list.length);

    for (var i = 0; i < list.length; i++)
    {
        request[i] = new XMLHttpRequest();
        request[i].open('GET', url[i], true);
        request[i].responseType = 'blob';

        request[i].onload = (function(x) { return function() {
            if (request[x].readyState == 4 && request[x].status == 200) {
                var blob = request[x].response;
                list[x].src = window.URL.createObjectURL(blob);
            }
        }})(i);
        request[i].send();
    }
};
