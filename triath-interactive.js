var names = [];
var countNames = 0;

$(document).ready(function()
{
    $('input:radio[name="display"]').change(function()
    {
        if($(this).val() === 'Map')
        {
            $('#last-q').css('display', 'inline');
        }
        else
        {
            $('#last-q').css('display', 'none');
        }
    });
    
    $('input:radio[name="people"]').change(function()
    {
        if($(this).val() === 'User-Entered-Names')
        {
            $('#enter-names').css('display', 'inline');
        }
        else
        {
            $('#enter-names').css('display', 'none');
        }
    });
    
    $('#submit-name').click(function()
    {
       countNames = countNames + 1;
       names.push($('#inp').val);
       console.log(countNames);
       console.log($('#inp').val);
    });
});