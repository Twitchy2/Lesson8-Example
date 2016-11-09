/**
 * Created by RFreeman on 10/12/2016.
 */

// delete confirmation
$('.confirmation').on('click', function() {
    return confirm('Are you sure you want to delete this?');
});

//create password validation
var validator = $('#registerForm').validate({
  rules: {
    confirm: {
      required: true,
      equalTo: '#password'
    }
  },
  message: {
    confirm: {
      equalTo: 'Your Passwords do not Match'
    }
  }
});
