$(document).ready(function(){ 
    $('#js-shopping-list-form').submit(event =>{
        event.preventdefault();
    
        $('.shopping-list').append(
             '<li>' +
             '<span class="shopping-item"> + $("#shopping-list-entry").val() + </span>' +
             '<div class="shopping-item-controls">' +
             '<button class="shopping-item-toggle">' +
             '<span class="button-label">check</span>' +
             '</button>' +
             '<button class="shopping-item-delete">' +
                '<span class="button-label">delete</span>' +
                '</button>' +
                '</div>' +
                '</li>' +
        );
});
});
