$(document).ready(function () {

    $('.input-zip').terminadedigitar(function () {

        $.ajax({
            cache: false,
            method: 'get',
            url: "https://viacep.com.br/ws/" + $('.input-zip').val() + "/json/",
            dataType: 'json',
            success: function (data) {
                $('.input-zip').val(data.cep);
                $('.input-address').val(data.logradouro);
                $('.input-district').val(data.bairro);
                $('.input-city').val(data.localidade);
                $('.input-state').val(data.uf);
                $('input[name="number"]').focus();
            }
        });

    }, 1000);

});