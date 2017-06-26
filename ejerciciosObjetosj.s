function datos(nombre,dia,mes,anio){
  this.nombre =nombre;
  this.dia = dia;
  this.mes =mes;
  this.anio=anio;

  var hoy= new Date();
  var year=hoy.getFullYear();
  var month= hoy.getMonth();
  var day = hoy.getDate();
  var edad;

  if(month>=mes && day>=dia) {
    edad = year-anio;
}else{
    edad= year-anio-1;
}
  document.write ("la edad actual de "+nombre +" es "+ edad);
}
var edad=new datos("ana",2,8,1995);
