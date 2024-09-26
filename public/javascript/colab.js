let detalles = document.getElementById("detalle");
let configurar = document.getElementById("config");
let formula1= document.getElementById("formu1"); //Primer Formulario
let formula2= document.getElementById("formu2"); //Segundo Formulario
let password = document.getElementById('password'); //Para los datos de una contrañesa
let viewPassword = document.getElementById('viewPassword');
      
let click = false;
      formula2.style.display='none';
detalles.onclick =function(){
    formula1.style.display='block';
    formula2.style.display='none';

}

configurar.onclick =function(){
    formula1.style.display='none';
    formula2.style.display='block';
    
}


      viewPassword.addEventListener('click', (e)=>{
          if(!click){
              password.type = 'text'
              click = true
          }else if(click){
              password.type = 'password'
              click = false
          }
      })

      const defaultFile = 'https://i.pinimg.com/236x/2a/2e/7f/2a2e7f0f60b750dfb36c15c268d0118d.jpg';

const file = document.getElementById( 'foto' );
const img = document.getElementById( 'img' );
file.addEventListener( 'change', e => {
  if( e.target.files[0] ){
    const reader = new FileReader( );
    reader.onload = function( e ){
      img.src = e.target.result;
      img.style.width ='100%'
      img.style.height ='100%'
    }
    reader.readAsDataURL(e.target.files[0])
  }else{
    img.src = defaultFile;
  }
} );