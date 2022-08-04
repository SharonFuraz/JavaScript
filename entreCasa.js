//Objetos
class recetas{
    constructor (receta,primerIngrediente,cantidadPrimerIngrediente,unidadesDeMedidaPrimer,segundoIngrediente,cantidadSegundoIngrediente,unidadesDeMedidaSegundo,tercerIngrediente,cantidadTercerIngrediente,unidadDeMedidaTercer,cuartoIngrediente,cantidadCuartoIngrediente,unidadDeMedidaCuarto,quintoIngrediente,cantidadQuintoIngrediente,unidadDeMedidaQuinto,sextoIngrediente,cantidadSextoIngrediente,unidadDeMedidaSexto,septimoIngrediente,cantidadSeptimoIngrediente,unidadDeMedidaSeptimo,octavoIngrediente,cantidadOctavoIngrediente,unidadDeMedidaOctavo,novenoIngrediente,cantidadNovenoIngrediente,unidadDeMedidaNoveno,decimoIngrediente,cantidadDecimoIngrediente,unidadDeMedidaDecimo,preparacion,costo){
    this.receta=receta;

    this.primerIngrediente=primerIngrediente;
    this.cantidadPrimerIngrediente=cantidadPrimerIngrediente ; 
    this.unidadesDeMedidaPrimer=unidadesDeMedidaPrimer;

    this.segundoIngrediente=segundoIngrediente;
    this.cantidadSegundoIngrediente=cantidadSegundoIngrediente;
    this.unidadesDeMedidaSegundo=unidadesDeMedidaSegundo;

    this.tercerIngrediente=tercerIngrediente;
    this.cantidadTercerIngrediente=cantidadTercerIngrediente;
    this.unidadDeMedidaTercer=unidadDeMedidaTercer;

    this.cuartoIngrediente=cuartoIngrediente;
    this.cantidadCuartoIngrediente=cantidadCuartoIngrediente;
    this.unidadDeMedidaCuarto=unidadDeMedidaCuarto;

    this.quintoIngrediente=quintoIngrediente;
    this.cantidadQuintoIngrediente=cantidadQuintoIngrediente;
    this.unidadDeMedidaQuinto=unidadDeMedidaQuinto;

    this.sextoIngrediente=sextoIngrediente;
    this.cantidadSextoIngrediente=cantidadSextoIngrediente;
    this.unidadDeMedidaSexto=unidadDeMedidaSexto;

    this.septimoIngrediente=septimoIngrediente;
    this.cantidadSeptimoIngrediente=cantidadSeptimoIngrediente;
    this.unidadDeMedidaSeptimo=unidadDeMedidaSeptimo;

    this.octavoIngrediente=octavoIngrediente;
    this.cantidadOctavoIngrediente=cantidadOctavoIngrediente;
    this.unidadDeMedidaOctavo=unidadDeMedidaOctavo;

    this.novenoIngrediente=novenoIngrediente;
    this.cantidadNovenoIngrediente=cantidadNovenoIngrediente;
    this.unidadDeMedidaNoveno=unidadDeMedidaNoveno;

    this.decimoIngrediente=decimoIngrediente;
    this.cantidadDecimoIngrediente=cantidadDecimoIngrediente;
    this.unidadDeMedidaDecimo=unidadDeMedidaDecimo;

    this.preparacion=preparacion;
    this.costo=costo;
   }
}
const Recetas=[]
let noquis= new recetas("ñoquis","papas",1,"kilo","harina 0000",300,"gr","huevo",1,"unidad","sal","a gusto",undefined,"pimienta","a gusto",undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,
"Primero lavar bien las papas,hervirlas con cáscara ya que al cocerlas con cáscara evitamos que absorban agua en exceso. Hacemos un corte horizontal por todo el contorno de la papa,las llevamos a una olla con agua. Cocinar hasta que al pincharlas se caigan.Las retiramos y las dejamos enfriar sólo para no quemarnos. Con el corte que hicimos, la cáscara tiene que salir muy fácil en dos partes.Pisamos las papas todavía en caliente como pure, agregamos sal, pimienta y mezclamos bien. Agregamos el huevo batido y la harina. No le vamos a agregar toda la harina de una, nos vamos a guardar un poco para ver cómo viene. Las cantidades son más bien proporcionales, puede ser que la papa haya absorbido más agua o que el huevo sea más chico, así que vamos a agregar la harina de a poco. Unir con la mano hasta que se pueda pasar hasta la mesada y terminar de integrar. Si en este paso ven que hace falta más harina, tenemos el resto para agregar. No es necesario amar mucho, la idea es llegar a una masa unida y uniforme sin tocarla mucho.Cortar tiras de masa y hacer chorricitos o rollitos, y cortar trocitos de unos 2 o 3 cm de ancho, pueden enharinar el cuchillo para que sea más fácil.Ahora viene la magia, vamos a pasarlos por la herramienta para darle forma a los ñoquis de papa de arriba hacia abajo. También pueden usar un tenedor enharinado que también les deja una forma similar. Colocarlos en una placa enharinada sin que se toquen para que no se pegoteen. Y claro, también pueden hacerlos sin la herramienta y simplemente que queden en su versión más rústica.Para la cocción, llevar de a tandas a una olla con agua hirviendo con sal. Van a ver que se caen al fondo. Cuando suben, los dejan 1 minuto y ya están listos",1000);
let tartaChoclo= new recetas ("tarta de choclo","choclo en crema",1,"lata","choclo en grano",1,"lata","cebolla blanca",1,"unidad","pimiento(morrón)",1,"unidad","queso cremoso",100,"gr","queso crema",70,"gr","crema de leche",1,"chorro","sal","a gusto",undefined,"pimienta","a gusto",undefined,undefined,undefined,undefined,
"Picar la cebolla y el pimiento pimiento rojo. En una sartén con un chorro de aceite saltear hasta que la cebolla esté transparente. Escurrir la lata de choclo en granos y la agregamos a la sartén junto con la lata de choclo cremoso. Salpimentar y dejar cocinar entre 3 a 5 minutos más, no mas que eso. Es solo un golpe de calor para que tomen gusto entre todos los ingredientes. En un bol mezclar el choclo, el queso crema, la crema de leche y la mitad del queso cremoso en cubitos y revolver hasta integrar. Agregar el relleno a una tartera con la masa y colocar el resto del queso cremoso en cubos en la parte de arriba. Pueden ponerle tapa si gustan, yo prefiero sin así se gratina el queso, -y se come menos harina y todo eso vieron. Llevar al horno a 180º hasta que esté dorada la masa y la superficie.",1500);
let faina=new recetas ("faina","harina de garbanzos",300,"gr","agua",850,"ml","aceite de oliva",100,"ml","sal","a gusto",undefined,"pimienta","a gusto",undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,
"En un bol mezclar la harina de garbanzos junto con la sal y la pimienta. Ir agregando el agua de a poco, sin que se armen grumos. Luego, agregar el aceite de oliva y usar un batidor de mano para incorporar todo muy bien. La mezcla debe quedar bien uniforme. Llevar a refrigerar por un día como mínimo. Una vez transcurrido el tiempo colocar en una pizzera previamente calentada con aceite en un horno bien alto (a 220°).Cocinar hasta que la fainá esté dorada.",500);
Recetas.push(noquis);
Recetas.push(tartaChoclo);
Recetas.push(faina);
//Variables
let createAccount=prompt ("Nombre completo");
let createUser=prompt ("Crear Usuario");
let createPassword=prompt ("Crear Contraseña");
let user=prompt ("Ingresar usuario");
let password=prompt ("Ingresar contraseña");

//Inciar sesion
const iniciarSesion=(user,password,createUser,createPassword,createAccount)=>{
    if ((user.toLowerCase() == createUser.toLowerCase()) && (password.toLowerCase() == createPassword.toLowerCase())){
        console.log("Bienvenido"+" "+createAccount);
    }else{
        console.log("Usuario o contraseña incorrectos");
    }
}
iniciarSesion (user,password,createUser,createPassword,createAccount);

let nombreReceta=("Conocé nuestras recetas")
Recetas.forEach((recetas)=>console.log("Nuestras recetas son: "+recetas.receta))

//variables recetas
let seleccionReceta=parseInt(prompt("Seleccione una receta: 1)Ñoquis 2)Tarta de choclo 3)Faina"));
let seleccionNoquis=1;
let seleccionTarta=2;
let seleccionFaina=3;
let cantidadPresupuesto=parseInt(prompt("Ingrese la cantidad que desea presupuestar"));

//seleccion de recetas
if(seleccionReceta==seleccionNoquis){
    console.log(noquis)

 for(let i=1;i<cantidadPresupuesto;i++){
    let resultado1=(cantidadPresupuesto*[noquis.costo])
    console.log ("El pago por multiplicar "+cantidadPresupuesto+" veces la receta "+"es de: $"+resultado1)

}
 }
else if (seleccionReceta==seleccionTarta){
    console.log(tartaChoclo)
for(let i=1;i<cantidadPresupuesto;i++){
        let resultado2=(cantidadPresupuesto*[tartaChoclo.costo])
        console.log ("El pago por multiplicar "+cantidadPresupuesto+" veces la receta "+"es de: $"+resultado2)
}
}
else if (seleccionReceta==seleccionFaina){
    console.log(faina)
    for(let i=1;i<cantidadPresupuesto;i++){
        let resultado3=(cantidadPresupuesto*[faina.costo])
        console.log ("El pago por multiplicar "+cantidadPresupuesto+" veces la receta "+"es de: $"+" "+resultado3)
}
} else{
    console.log("Ingrese alguna de las recetas ofrecidas\n1)Ñoquis\n2)Tarta de choclo\n3)Faina")
}
let cantidadReceta=parseInt(prompt("Ingrese la cantidad de veces que quiere multiplicar su receta"));
if(seleccionReceta==seleccionNoquis){
    console.log(noquis)

 for(let i=1;i<cantidadReceta;i++){
    let resultado1=(cantidadReceta*[noquis.cantidadPrimerIngrediente])
    let resultado2=(cantidadReceta*[noquis.cantidadSegundoIngrediente])
    let resultado3=+(cantidadReceta*[noquis.cantidadTercerIngrediente])
    console.log ("Su receta por "+" "+cantidadReceta+" "+" veces la original es:Ingredientes: papas "+resultado1+"kg,harina 0000 "+resultado2+"gr,huevos"+resultado3 +"unidades,sal y pimienta a gusto")

}
 }
else if (seleccionReceta==seleccionTarta){
    console.log(tartaChoclo)
for(let i=1;i<cantidadReceta;i++){
        let resultado4=(cantidadReceta*[tartaChoclo.cantidadPrimerIngrediente])
        let resultado5=(cantidadReceta*[tartaChoclo.cantidadSegundoIngrediente])
        let resultado6=(cantidadReceta*[tartaChoclo.cantidadTercerIngrediente])
        let resultado7=(cantidadReceta*[tartaChoclo.cantidadCuartoIngrediente])
        let resultado8=(cantidadReceta*[tartaChoclo.cantidadQuintoIngrediente])
        let resultado9=(cantidadReceta*[tartaChoclo.cantidadSextoIngrediente])
        let resultado10=(cantidadReceta*[tartaChoclo.cantidadSeptimoIngrediente])
        console.log ("Su receta por"+" "+cantidadReceta+" "+" veces la original es:Ingredientes: choclo en crema "+resultado4+" latas,choclo en grano "+resultado5+"latas,cebolla blanca "+resultado6+"unidades,pimentón(morrón) "+resultado7+"unidades,queso cremoso "+resultado8+"gr,queso crema "+resultado9+"gr,crema de leche"+resultado10+"chorros,sal y pimienta a gusto")
}
}
else if (seleccionReceta==seleccionFaina){
    console.log(faina)
    for(let i=1;i<cantidadReceta;i++){
        let resultado11=(cantidadReceta*[faina.cantidadPrimerIngrediente])
        let resultado12=(cantidadReceta*[faina.cantidadSegundoIngrediente])
        let resultado13=(cantidadReceta*[faina.cantidadTercerIngrediente])
        console.log ("Su receta por"+" "+cantidadReceta+" "+" veces la original es:Ingredientes: harina de garbanzos "+resultado11+"gr,agua "+resultado12+"ml,aceite de oliva"+resultado13+"ml,sal y pimienta a gusto")
}
} else{
    console.log("No se encontró la receta solicitada")
}
let consulta= prompt("¿Qué ingrediente contiene la receta a buscar?")
const buscarRecetas=Recetas.filter((recetas)=>recetas.preparacion=="harina");
if(consulta=="harina"){
  console.log(buscarRecetas)
  console.log(faina)
  console.log(noquis)
}
