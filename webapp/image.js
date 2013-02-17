console.debug = function() {};
/*
 * This function will be called when this js is loaded.
 */
 window.addEventListener("load", function()
 {
    console.log("Image Load Test");

    /*
     * Set button event
     */
    var single = document.getElementById("LoadSingle");
    single.onclick = LoadSingleImage;

    var multiple = document.getElementById("LoadMultiple");
    multiple.onclick = LoadMultipleImage;

});

/*
 * Load Single image and Set it on image tag
 */
var LoadSingleImage = function()
{
    console.log("Load Simgle Image");

    var url = "http://2.media.bustedtees.cvcdn.com/e/-/bustedtees.e8c2409e-884a-4500-9287-ec9ec26933f5.jpg";

    var img = document.getElementById("img").getElementsByTagName("img")[0];

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var blob = xhr.response;
            img.src = window.URL.createObjectURL(blob);
        }
    };
    xhr.send();
}

/*
 * Load Multiple images and Set them on image tag
 */
 var LoadMultipleImage = function()
 {
    console.log("Load Multiple images");

    var url = ["http://8.media.bustedtees.cvcdn.com/1/-/bustedtees.21419ad1-ed60-40a0-86ff-823a06226f42.jpg",
    "http://4.media.bustedtees.cvcdn.com/9/-/bustedtees.3cfc1519-e42f-4376-8fbf-980df580fb44.jpg",
    "http://2.media.bustedtees.cvcdn.com/1/-/bustedtees.27977811-360f-4294-9f38-3bd6561d.jpg"];

    var request = new Array(3);
    var list = document.getElementById("imgList").getElementsByTagName("img");

    for (var i = 0; i < list.length; i++)
    {
        request[i] = new XMLHttpRequest();
        request[i].open('GET', url[i], true);
        request[i].responseType = 'blob';

        request[i].onreadystatechange = (function(x) { return function() {
            if (request[x].readyState == 4 && request[x].status == 200) {
                var blob = request[x].response;
                list[x].src = window.URL.createObjectURL(blob);
            }
        }})(i);
        request[i].send();
    }
};
