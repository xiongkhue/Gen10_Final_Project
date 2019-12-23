// JavaScript source code
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
                if (form.checkValidity() === true) {
                    event.preventDefault();
                    event.stopPropagation();
                    window.alert("Thank you for providing information");
                }
                valthisform();
            }, false);
        });
    }, false); 
})();

function valthisform() {
    var checkboxs = document.getElementsByName("checkbox-stacked");
    var okay = false;
    for (var i = 0, l = checkboxs.length; i < l; i++) {
        if (checkboxs[i].checked) {
            okay = true;
            break;
        }
    }
    if (okay) {
        for (var i = 0, l = checkboxs.length; i < l; i++) {
            checkboxs[i].removeAttribute("required");
        }
    }


}