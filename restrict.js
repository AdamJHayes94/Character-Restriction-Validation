jQuery(function() {

    jQuery('.input-text').focusout(function () {

        var tocheck = jQuery(this).val();

        if (jQuery(this).attr('id') == 'billing:email' || jQuery(this).attr('id') == 'id_onestepcheckout_username') {
            tocheck = tocheck.replace(/[^A-Za-z0-9 ._@-]+/, '');
        }else if (jQuery(this).attr('id') == 'billing:telephone' || jQuery(this).attr('id') == 'shipping:telephone') {
            tocheck = tocheck.replace(/[^0-9 ]+/, '');
        } else if (jQuery(this).attr('id') == 'billing:customer_password' || jQuery(this).attr('id') == 'billing:confirm_password' || jQuery(this).attr('id') == 'id_onestepcheckout_password') {
            //nothing
        } else {
            tocheck = tocheck.replace(/[^A-Za-z0-9 ]+/, '');
        }
        jQuery(this).val(tocheck);
    });

});