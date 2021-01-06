$(function(){
    load_data();
    function load_data () {
        $.ajax({
            url: "fetch.php",
            method: "POST",
            success: function (data){
                $('#user_data').html(data);
            }
        });
    }
    //$.noConflict();
    // $('#user-dialog').dialog({
    //     autoOpen: false,
    //     width: 400
    // });
    $('#form-container').hide();

    $('#add').click(function () {
        $('#user-dialog').attr('title', 'Add Data');
        $('#action').val('insert');
        $('#user-form')[0].reset();
        $('#form-action').val('Insert');
        $('#form-container').show();
        $('#form-action').attr('disabled', false);
    });
    $('#exit').click(() => {
        $('#form-container').hide();
    });


    $('#user-form').on('submit', (event) => {
        event.preventDefault();
        var error_Name = '';
        var error_Email = '';

        if ($('#name').val() == ''){
            error_Name = 'You need to put your name.';
            $('#errorName').text(error_Name);
            $('#name').css('border-color', 'red');
        }else{
            error_Name = '';
            $('#errorName').text(error_Name);
            $('#name').css('border-color', '');
        }
        if ($('#email').val() == ''){
            error_Email = 'You need to put your Email address.';
            $('#errorEmail').text(error_Email);
            $('#email').css('border-color', 'red');
        }else{
            error_Email = '';
            $('#errorEmail').text(error_Email);
            $('#email').css('border-color', '');
        }

        if (error_Name == '' || error_Email == ''){
            return false;
        }else{
            $('#user-form').attr('disabled', 'disabled');
            var form_value = $(this).serialize();
            console.log(form_value);
            // $.ajax({
            //     url: 'action.php',
            //     method: 'POST',
            //     data:form_value,
            //     success: (data) => {
            //         //$('#user-form').hide();
            //         $('#action_alert').html(data);
            //         $('#action_alert').show();
            //         load_data();
            //     }
            // });
        }
    });

    $('#action_alert').hide();
});