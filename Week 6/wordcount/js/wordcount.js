function count_words(evt) {


    var input = document.getElementById("inputText").value;
    var words = 0;
    words = input.split(' ').length;

    document.getElementById('numberOfWords').value = words;

}
window.onload = function (evt) {
    if (document && document.getElementById) {
        document.getElementById('btnConvert').onclick = count_words;

    }

}
