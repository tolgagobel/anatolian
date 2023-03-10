/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');



/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/Example');

let $;
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

$('.product-decrease, .product-increase').on('click', function (){
    var id=$(this).attr('data-id');
    var number=$(this).attr('data-number');
    $.ajax({
        type : 'PATCH',
        url : 'cart/update' + id,
        data : {number: number},
        success: function (){
            window.location.href = '/cart';
        }
    });
});

