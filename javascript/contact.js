$(function() {
    // Get the form.
    var form = $('#contact_form');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
$(form).submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();

    // TODO
// Serialize the form data.
var formData = $(form).serialize();
// Submit the form using AJAX.
$.ajax({
    type: 'POST',
    url: $(form).attr('action'),
    data: formData
})
.done(function(response) {
    // Make sure that the formMessages div has the 'success' class.
    $(formMessages).removeClass('alert alert-danger');
    $(formMessages).addClass('alert alert-success');
   $(formMessages).css("font-size:14px");
    // Set the message text.
    $(formMessages).text(response);
            $(".alert-success").fadeTo(2e3, 500).slideUp(500, function() {
            $(".alert-success").slideUp(1200)
        });
    // Clear the form.
    $('#name').val('');
    $('#email').val('');
    $('#message').val('');
    $("#subject").val('');
})
.fail(function(data) {
    // Make sure that the formMessages div has the 'error' class.
    $(formMessages).removeClass('alert alert-success');
    $(formMessages).addClass('alert alert-danger');
   $(formMessages).css("font-size:14px");
    // Set the message text.
    if (data.responseText !== '' && data.responseText !== undefined && data.responseText != object) {
        $(formMessages).text(data.responseText);
        console.log(data.responseText);
            $(".alert-danger").fadeTo(2e3, 500).slideUp(500, function() {
            $(".alert-danger").slideUp(1200)
        });
    } else {
        $(formMessages).text('Oops! An error occured and your message could not be sent.');
            $(".alert-danger").fadeTo(2e3, 500).slideUp(500, function() {
            $(".alert-danger").slideUp(1200)
        });        
    }
});
});
});