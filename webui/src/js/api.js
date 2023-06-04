$(document).ready(function(){
    $(document).off('click','#sendPasscode').on('click','#sendPasscode',function(){
        if($('#userName').val() == ''){
            alert('Please enter username');
        } else {
            if(validateUserName($('#userName').val()) != 'true'){
                alert('Sorry User Not Found');
            }
        }
    })
})

window.validateUserName = function(){
    
}