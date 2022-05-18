function formToJSON(form){
    var array = jQuery(form).serializeArray();
    var json = {};
    
    jQuery.each(array, function() {
        json[this.name] = this.value || '';
    });

    return json;
}

jQuery(document).on('ready', function() {
    jQuery('form#empForm').bind('submit', function(event){
        
        event.preventDefault();

        var form = this;
        var json = formToJSON(form);

        $.ajax({
            type: "POST",
            url: "fictitious-url.php",
            data: json,
            dataType: "json"
        });
		
        alert('Form successfully submitted!  This is the JSON object that was submitted:\n\n' + JSON.stringify(json));
        
        return true;
    });
});

function formatNum(event)
{

    var pnum = document.getElementById('pnum');


    if (isNaN(pnum.value.charAt(pnum.value.length - 1)))
    {
        
        if (pnum.value.length == 5)
        {
            //Remove parentheses and space when deleting 3rd digit
            pnum.value = pnum.value.substring(1, 3);
        
        }
        else
        {
            //Prevent non-numbers from being entered
            pnum.value = pnum.value.substring(0, pnum.value.length - 1);
        }
    
        return
    }
    //Add parentheses and space
    if (pnum.value.length == 3)
    {
        pnum.value = "(" + pnum.value + ") ";
        return;
    }
    
    //Add a dash
    if (pnum.value.length == 10)
    {
        pnum.value = pnum.value.substring(0, 9) + "-" + pnum.value.substring(9, 10);
        return;
    }
    
    //Prevent user from entering more than 10 digits
    if (pnum.value.length >= 15)
    {
        pnum.value = pnum.value.substring(0, 14);
        return;
    }
}

