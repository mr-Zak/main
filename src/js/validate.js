$(document).ready(function(){
    $("#user").validate({
        rules: {
            name: {
              required: true,
              minlength: 2,
              maxlength: 15
            },
          
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            }
        },
          messages: {
            name: {
              required: "Введите ваше имя",
              minlength: jQuery.validator.format("Осталось букв:{0}"),
              maxlength: "Максимум букв 15"
            },
            email: {
                required: "Введите ваш email",
                email: "Введите корректный email"
            },
            phone: {
                required: "Введите ваш телефон"
            }
          }
    });
    $(".phone").mask("8 (999) 999-99-99");

    $("#userForm").validate({
        rules: {
            username: {
                required: true,
                minlength: 2
            }    
        }
    });
});