
// pahile hints hide garney...
$('form span').hide();

// event checking
function passwordEvent() {
    if($(this).val().length > 8) {
// hide if valid
        $(this).next().hide();
    } else {
        // show hint
        $(this).next().show();
    }

}

$('#password').focus(passwordEvent).keyup(passwordEvent);

function confirmPasswordEvent() {s

    // checking password is mataching or not first
    if ($('#password').val() === $('confirm_password').val()) {
        $(this).next().hide();
    } else {
        // then display
        $(this).next().show();
    }
}

$('#confirm_password').focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
