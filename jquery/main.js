$(document).ready(function () {

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(XX) XXXXX-XXXX'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: 'ex: 123.456.789-10'
    })

    $('#cep').mask('00.000-000', {
        placeholder: 'XX.XXX-XXX'
    })
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira um nome válido',
            email: 'Por favor, insira um email válido',
            telefone: 'Por favor, insira um telefone válido',
            cpf: 'Por favor, insira um CPF válido',
            endereco: 'Por favor, insira um endereço válido',
            cep: 'Por favor, insira um CEP válido'
        },
        submitHandler: function (form) {
            console.log(form)
            alert(`Formulário enviado com sucesso!`)
        },
        invalidHandler: function (validador) {
            let quantCamposIncorretos = validador.numberOfInvalids();
            if (quantCamposIncorretos) {
                alert(`Existem ${quantCamposIncorretos} campos incorretos`)
            }
        }
    })
})