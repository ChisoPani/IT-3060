function renderChild(evt){
    $(evt.target).next().toggle(1000);
}
$(document).ready(function(){
    $('h3').click(renderChild);
})