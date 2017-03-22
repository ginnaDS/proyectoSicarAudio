//Confirma el usuario en el index

  function confirmUser() {

    //Confirma espacios
    $(document).ready(function() {
      $('#form_ingreso')
        .formValidation({
            message: 'No valido',
            icon: {
                
                
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                identificacion: {
                    message: 'usuario erroneo',
                    validators: {
                        
                        notEmpty: {
                            message: 'identificacion obligatoria'
                        },
                        digits: {

                            message: 'Este campo solo permite numeros'
                        }
                      
                     
                    }
                },
                contraseña: {
                    validators: {
                        notEmpty: {
                            message: 'contraseña requerida'
                            
                        }
                    }
                }
            }
        })

        .on('success.form.fv', function(e) {
            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the FormValidation instance
            var bv = $form.data('formValidation');

            // Use Ajax to submit form data

           
        });
      });

 //Validacion
    $(document).ready(function(){
       
            var identificacion=document.getElementById("identificacion").value;
            var contraseña=document.getElementById("contraseña").value;
            if (identificacion!="") {

                if (identificacion=="102055321") {
                    if (contraseña=="Admin.14") {
                        window.location="roles/administrador.html";

                    }
                }else{ 
                    if (identificacion=="150102030") {

                        if (contraseña=="cliente.15") {
                            window.location="roles/cliente.html"
                        }
                    }else{alert("Usuario o contraseña erronea")}
                }
            }


      

    });


  }
//Confirma el usuario en el index en ingles
 function confirmUserEnglish() {

      //Confirm spaces
     $(document).ready(function() {
      $('#form_ingreso')
        .formValidation({
            message: 'No valido',
            icon: {





                
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                identificacion: {
                    message: 'usuario erroneo',
                    validators: {
                        
                        notEmpty: {
                            message: 'Id required'
                        },
                        digits: {

                            message: 'This field can only contain numbers'
                        }
                      
                     
                    }
                },
                contraseña: {
                    validators: {
                        notEmpty: {
                            message: 'password required'
                            
                        }
                    }
                }
            }
        })

        .on('success.form.fv', function(e) {
            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the FormValidation instance
            var bv = $form.data('formValidation');

            // Use Ajax to submit form data

           
        });
      });

  //Validation
    $(document).ready(function(){

            var identificacion=document.getElementById("identificacion").value;
            var contraseña=document.getElementById("contraseña").value;
            if (identificacion!="") {

                if (identificacion=="102055321") {
                    if (contraseña=="Admin.14") {
                        window.location="roles/administrador.html";

                    }
                }else{ 
                    if (identificacion=="150102030") {

                        if (contraseña=="cliente.15") {
                            window.location="roles/cliente.html"
                        }
                    }else{alert("Wrong user or password")}
                }
            }


      

    });


 }
//Confirmar actualizacion
  function confirmar(){

            
 //swal({   title: "¿Seguro?",   text: "La informacion sera reemplazada",   type: "info",   showCancelButton: true,   closeOnConfirm: false,   showLoaderOnConfirm: true, }, function(){   setTimeout(function(){   swal("Actualizacion exitosa", "La informacion se actualizo satisfactoriamente ", "success")  }, 3000); });
  //}
  swal({
  title: '¿Seguro?',
  text: "La informacion sera reemplazada",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: 'rgba(255, 0, 0, 0.66)',
  confirmButtonText: 'Aceptar',
  cancelButtonText: 'Cancelar'
 }).then(function() {
  swal(
    'Actualizada',
    'La informacion se actualizo con exito.',
    'success'
  );
 })
 }
//Confirmar registro

 function confirmarRegistro(){
     //Kevin Andres Gomez
   $(document).ready(function() {
    $('#defaultForm').formValidation({
        message: 'This value is not valid',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            Primernombre: {
                validators: {
                    notEmpty: {},
                     string: {
                        message: 'upper'
                        }


                }
            },
            primerApellido: {
                validators: {
                    notEmpty: {}
                }
            },
          
            correo: {
                validators: {
                    emailAddress: {}
                }
            },
            Telefono: {
                validators: {
                    notEmpty: {},
                    digits: {
                        message: 'Este campo solo puede tener digitos'
                   
                    }
                }
            },
            confirmContraseña: {
                validators: {
                    notEmpty: {},
                    identical: {
                        field: 'contraseña'
                    }
                }
            },
             identificacion: {
                validators: {
                    notEmpty: {},
                    digits: {
                        message: 'Este campo solo puede tener digitos'
                    }
                }
            },
             fechaNacimiento: {
                validators: {
                    notEmpty: {}
                    
                }
            }           
          }
    })
    });
  ;

 }
//Muestra popover

 function Popover(){
     //Kevin Andres Gomez
     $('[data-toggle="popover"]').popover();
  }
//tiempo entre imagenes del carrusel

 function carouI(){

   $('.carousel').carousel({
      interval: 7000
      
      })    
  }
 
 //Esconder la barra lateral
//Esconder la barra lateral 
 function esconderBarra(){

    $('[data-toggle="offcanvas"]').click(function(){
            $("#navigation").toggleClass("hidden-xs");
         });



 }
//Confirma salida usuario
    function salir(){

        swal({
    title: '¿Seguro?',
    text: "Saliendo de SICAR AUDIO",
    type: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, salir'
   }).then(function() {
   swal(
    'Saliendo',
    'En breves momentos lo dirigieremos a nuestra pagina principal',
    'success'
 
   );
   window.location="../index.html";
    })
            
    // swal({   title: "¿Seguro?",   
   // text: "Saliendo de SICAR AUDIO",   
   // type: "info",   
   // showCancelButton: true,   closeOnConfirm: false,   showLoaderOnConfirm: true, }
   // , 
   // function(){   setTimeout(function(){
   //  swal({   
    //    title: "Saliendo",   
    //    text: "En breves momentos lo redirigiremos a nuestra pagina principal",
     //      timer: 6000,   showConfirmButton: false   });    window.location="../index.html"; });
   

    //})
  }
//Boton agregar pedido
 function aProducto(){
 

 var producto= $("#productos").val();
 var cant= $("#cantidad").val();
 var prec;
 if (producto==0) {
    swal(
       'Debe seleccionar algun producto'
        );
 }else{
    if (cant=="") {
        swal('Debe seleccionar alguna cantidad');
    }if (cant>5) {
      swal('Maximo 5 productos');
    }else{
  if (cant<=0) {
      swal('Minimo 1 producto');
    }else{

 switch(producto){
    case "1": var prec=130000;
              break;
    case "2": var prec=90000;
              break;
    case "3": var prec=90000;
              break;
    case "11": var prec=520000;
              break;
    case "12": var prec=545000;
              break;
    case "13": var prec=900000;
              break;
    case "21": var prec=4300000;
              break;
    case "22": var prec=400000;
              break;
    case "23": var prec=900000;
              break;
 }

 var total= cant*prec;
  document.getElementById('P1P').value=total ; 

 }

 }
   
   }

  }
//Agregar carrito
 function aCar(){
 var producto= $("#productos").value();
  var cant= $("#cantidad").val();
  if (producto==0) {
    swal(
        'Debe seleccionar algun producto'
        );
  }else{
    if (cant=="") {
        swal('Debe seleccionar alguna cantidad');
    }if (cant>5) {
      swal('Maximo 5 productos');
    }else{
  if (cant<=0) {
      swal('Minimo 1 producto');
    }else{



 
     document.getElementById("Pr1").innerHTML ="";


  }
 }



 

 }

 }









      















