$(document).ready(function(){
    $("#user").validate({
        rules: {
            name: {
              required: true,
              minlength: 2,
              maxlength: 15
            },
            phone: {
                required: true
            }  
        },
        messages: {
            name: {
              required: "Введите ваше имя",
              minlength: jQuery.validator.format("Осталось букв:{0}"),
              maxlength: "Максимум 15 букв"
            },
             phone: {
                required: "Введите ваш телефон"
            }
        }
    });

    $("#newuser").validate({
        rules: {
            username: {
              required: true,
              minlength: 2,
              maxlength: 15
            },
          
            myemail: {
                required: true,
                email: true
            },
            iphone: {
                required: true
            }
        },
        messages: {
            username: {
              required: "Введите ваше имя",
              minlength: jQuery.validator.format("Осталось букв:{0}"),
              maxlength: "Максимум 15 букв"
            },
            myemail: {
                required: "Введите ваш email",
                email: "Введите корректный email"
            },
            iphone: {
                required: "Введите ваш телефон"
            }
          }
    });
    
    $(".zphone").mask("8 (999) 999-99-99");

});