$('#code-input').keypress(function(e) {
    if(e.which == 13) {
        location.href = "map.html";
    }
});
function getCodeClick() {
    $('#get-code-button').css('display', 'none');
    $('#code-input').css('display', 'block');
}