
$(function() {

// pahile hints hide garney...
$('form span').hide();

// get value
var $password = $('#password');
var $confirmPassword = $('#confirm_password');

// var pass = $('#password').val();

// console.log(confirmPassword);

// password not less than 8 case
function isPasswordValid() {
    return $password.value > 8;
}

// for confirmation password input
function isMatchPassword() {
    return $password.value === $confirmPassword.value;
}

// enable submit button after all OK
function submitEnable() {
    // return isPasswordValid() && isMatchPassword();
    console.log("working...");

    $('#submit').prop('disabled', function() {
        return (isPasswordValid() && isMatchPassword());
    });
    // $s = $('#submit');
// console.log($s);
}


// event checking for password input
function passwordCallback() {
    if(isPasswordValid()) {
// hide if valid
        $password.next().hide();
    } else {
        // show hint
        $password.next().show();
    }

}

$password.focus(passwordCallback).keyup(passwordCallback).keyup(confirmPasswordEvent).keyup(submitEnable);

function confirmPasswordEvent() {

    // checking password is mataching or not first
    if (isMatchPassword()) {
        $confirmPassword.next().hide();
    } else {
        // then display
        $confirmPassword.next().show();
    }
}

$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(submitEnable);

});
