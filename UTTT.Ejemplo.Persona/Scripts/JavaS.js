function valid() {
    
    var clave = document.getElementById("txtClaveUnica").value;
    
    var nombre = document.getElementById("txtNombre").value;
    
    var apaterno = document.getElementById("txtAPaterno").value;
    
    var amaterno = document.getElementById("txtAMaterno").value;
    
    var sexo = document.getElementById("ddlSexo");
   
    var hermanos = document.getElementById("TxtHermanos").value;
    
    var calendario = document.getElementById("hid");
    
    var select = sexo.options[sexo.selectedIndex].value;
    
    var fecha = calendario.defaultValue;
    
    var date = parseInt(("" + fecha.substr(6, 10)));
   
    var fecha2 = 2021 - date;
    
    var bol = true;
    
    var message = "";
    
    if (clave == "" || nombre == "" || apaterno == "" || date == "") {

        bol = false;
        message = "Hay que llenar todos los campos."

    } else if (!(/\d{3}$/.test(clave))) {
        message = "solo se admiten letras";
        bol = false;


    } else if (!(/[A-z]{3}/.test(nombre)) || !(/[A-z]{3}/.test(apaterno)) || !(/[A-z]{3}/.test(amaterno))) {

        message = "Solo admiten un maximo de 3 numeros";
        bol = false;
    }
    else if (fecha2 <= 17) {
        message = "Deben ser mayor de edad";
        bol = false;



    } else if (isNaN(hermanos) == true) {
        message = "Solo debe ingresar numeros";
        bol = false;

    } else if (select < 0 || select > 2) {

        message.push("Ingresa el sexo");
        bol = false;
    }
    alert(message);
    return bol;


}