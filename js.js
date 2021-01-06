$(document).ready(function () {
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
    
        $('#user-dialog').dialog ({
            autoOpen: false,
            width: 400,
            height: 300
            
        });
        $('#add').click(function () {
            $('#user-dialog').attr('title', 'Add Data');
            $('#action').val('insert');
            $('#user-form')[0].reset();
            $('#form-action').val('Insert');
            $('#user-dialog').dialog('open');
            $('#form-action').attr('disabled', false);
        });
        // $('#form-container').hide();
        // $('#add').click(function () {
        //     $('#user-dialog').attr('title', 'Add Data');
        //     $('#action').val('insert');
        //     $('#user-form')[0].reset();
        //     $('#form-action').val('Insert');
        //     $('#form-container').show();
        //     $('#form-action').attr('disabled', false);
        // });
        // $('#exit').click(() => {
        //     $('#form-container').hide();
        // });
    
    
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
    
    
            if ( $('#name').val() == '' || $('#email').val() == ''){
                console.log('hey its working=====>');
                //return false;
            }else{
                $('#form-action').attr('disabled', 'disabled');
                var form_value = $('#user-form').serialize();
                console.log(form_value);
                    $.ajax({
                        url: 'action.php',
                        method: 'POST',
                        data:form_value,
                        success: (data) => {
                            $('#user-dialog').dialog('close');
                            $('#action-alert').html(data);
                            $('#action-alert').dialog('open');
                            load_data();
                        }
                    });
                }
        });
        $('#action-alert').dialog({
            autoOpen: false,
            width:200
        });
    
    
        $(document).on('click', '.edit', function() {
            var id = $(this).attr('id');
            var action = 'fetch_single';
            console.log(id, action);
            $.ajax({
                url: "action.php",
                method: "POST",
                data: {id:id, action:action},
                dataType: "json",
                success: function(data){
                    $('#name').val(data.name);
                    $('#email').val(data.email);
                    $('#user-dialog').attr('title', 'Edit Data');
                    $('#action').val('update');
                    $('#hidden_id').val(id);
                    $('#form-action').val('Update');
                    $('#user-dialog').dialog('open');
                }
            })
        });
    });
});