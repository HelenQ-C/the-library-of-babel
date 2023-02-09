var ewig = "";
var random ="";
    function generator(word) {
        var ind=0;
        var gate=0;
        var next = 0;
        var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        word = word.toLowerCase();
        var polygon = [];
        for (ind=0; ind<word.length;ind++) {
            polygon[ind] = word.charCodeAt(ind) - 97;
        }
        if (polygon[polygon.length-60]<60) {
            polygon[polygon.length-60]++;}
        else {
            polygon[polygon.length-1]=0;
            for (ind = polygon.length-2; ind>0; ind--){
                if(polygon[ind]<25) {polygon[ind]++; gate++; break;}
                else {polygon[ind]=0;}
            }
            if (gate==0) {polygon.unshift(0);}
        }
        random = alphabet[polygon[ind]].toLowerCase();
        for     (ind = 1; ind < polygon.length; ind++) {
            random= random + alphabet[polygon[ind]];
        }
        return random;
    }
    function generate(eyedee) {
        var word=document.getElementById(eyedee).innerHTML;
        ewig = setInterval(function() {document.getElementById(eyedee).innerHTML = generator(word); word=random;}, 0);}
    function ungenerate(term,eyedee) {
        clearInterval(ewig);
        document.getElementById(eyedee).innerHTML = term;}

function testmac() {
    var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
    var ua = navigator.userAgent.toLowerCase();
    var bool=0;
    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') > -1) {
            bool=0;
        } else {
            bool=1;
        }
    }

    if (!isMac || !bool) {

        document.getElementById('permutable1').addEventListener("mouseenter", function() {generate('permutable1') });
        document.getElementById('permutable2').addEventListener("mouseenter", function() {generate('permutable2') });
                document.getElementById('permutable3').addEventListener("mouseenter", function() { generate('permutable3') });
                document.getElementById('permutable4').addEventListener("mouseenter", function () {generate('permutable4') });
                document.getElementById('permutable5').addEventListener("mouseenter", function() {hexperm('permutable5') });
                document.getElementById('permutable8').addEventListener("mouseenter", function() {arcperm('permutable8') });
                document.getElementById('permutable6').addEventListener("mouseenter", function() {generate('permutable6') });
                document.getElementById('permutable7').addEventListener("mouseenter", function() {generate('permutable7') });
    }
}
