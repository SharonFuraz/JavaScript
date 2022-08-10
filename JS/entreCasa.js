//Objetos
class receta{
    constructor (nombre,primerIngrediente,cantidadPrimerIngrediente,unidadesDeMedidaPrimer,segundoIngrediente,cantidadSegundoIngrediente,unidadesDeMedidaSegundo,tercerIngrediente,cantidadTercerIngrediente,unidadDeMedidaTercer,cuartoIngrediente,cantidadCuartoIngrediente,unidadDeMedidaCuarto,quintoIngrediente,cantidadQuintoIngrediente,unidadDeMedidaQuinto,sextoIngrediente,cantidadSextoIngrediente,unidadDeMedidaSexto,septimoIngrediente,cantidadSeptimoIngrediente,unidadDeMedidaSeptimo,octavoIngrediente,cantidadOctavoIngrediente,unidadDeMedidaOctavo,novenoIngrediente,cantidadNovenoIngrediente,unidadDeMedidaNoveno,decimoIngrediente,cantidadDecimoIngrediente,unidadDeMedidaDecimo,preparacion,costo,fuente){
    this.nombre=nombre;

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
    this.fuente=fuente;
   }
}
const recetas=[]
let noquis= new receta ("Ñoquis","papas",1,"kilo","harina 0000",300,"gr","huevo",1,"unidad","sal","a gusto",undefined,"pimienta","a gusto",undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,
"Primero lavar bien las papas,hervirlas con cáscara ya que al cocerlas con cáscara evitamos que absorban agua en exceso. Hacemos un corte horizontal por todo el contorno de la papa,las llevamos a una olla con agua. Cocinar hasta que al pincharlas se caigan.Las retiramos y las dejamos enfriar sólo para no quemarnos. Con el corte que hicimos, la cáscara tiene que salir muy fácil en dos partes.Pisamos las papas todavía en caliente como pure, agregamos sal, pimienta y mezclamos bien. Agregamos el huevo batido y la harina. No le vamos a agregar toda la harina de una, nos vamos a guardar un poco para ver cómo viene. Las cantidades son más bien proporcionales, puede ser que la papa haya absorbido más agua o que el huevo sea más chico, así que vamos a agregar la harina de a poco. Unir con la mano hasta que se pueda pasar hasta la mesada y terminar de integrar. Si en este paso ven que hace falta más harina, tenemos el resto para agregar. No es necesario amar mucho, la idea es llegar a una masa unida y uniforme sin tocarla mucho.Cortar tiras de masa y hacer chorricitos o rollitos, y cortar trocitos de unos 2 o 3 cm de ancho, pueden enharinar el cuchillo para que sea más fácil.Ahora viene la magia, vamos a pasarlos por la herramienta para darle forma a los ñoquis de papa de arriba hacia abajo. También pueden usar un tenedor enharinado que también les deja una forma similar. Colocarlos en una placa enharinada sin que se toquen para que no se pegoteen. Y claro, también pueden hacerlos sin la herramienta y simplemente que queden en su versión más rústica.Para la cocción, llevar de a tandas a una olla con agua hirviendo con sal. Van a ver que se caen al fondo. Cuando suben, los dejan 1 minuto y ya están listos",1000,
"./Assets/noquis.jpeg");

let tartaChoclo= new receta ("Tarta de choclo","choclo en crema",1,"lata","choclo en grano",1,"lata","cebolla blanca",1,"unidad","pimiento(morrón)",1,"unidad","queso cremoso",100,"gr","queso crema",70,"gr","crema de leche",1,"chorro","sal","a gusto",undefined,"pimienta","a gusto",undefined,undefined,undefined,undefined,
"Picar la cebolla y el pimiento pimiento rojo. En una sartén con un chorro de aceite saltear hasta que la cebolla esté transparente. Escurrir la lata de choclo en granos y la agregamos a la sartén junto con la lata de choclo cremoso. Salpimentar y dejar cocinar entre 3 a 5 minutos más, no mas que eso. Es solo un golpe de calor para que tomen gusto entre todos los ingredientes. En un bol mezclar el choclo, el queso crema, la crema de leche y la mitad del queso cremoso en cubitos y revolver hasta integrar. Agregar el relleno a una tartera con la masa y colocar el resto del queso cremoso en cubos en la parte de arriba. Pueden ponerle tapa si gustan, yo prefiero sin así se gratina el queso, -y se come menos harina y todo eso vieron. Llevar al horno a 180º hasta que esté dorada la masa y la superficie.",1500,
"./Assets/tartaChoclo.jpeg");

let faina=new receta("Faina","harina de garbanzos",300,"gr","agua",850,"ml","aceite de oliva",100,"ml","sal","a gusto",undefined,"pimienta","a gusto",undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,
"En un bol mezclar la harina de garbanzos junto con la sal y la pimienta. Ir agregando el agua de a poco, sin que se armen grumos. Luego, agregar el aceite de oliva y usar un batidor de mano para incorporar todo muy bien. La mezcla debe quedar bien uniforme. Llevar a refrigerar por un día como mínimo. Una vez transcurrido el tiempo colocar en una pizzera previamente calentada con aceite en un horno bien alto (a 220°).Cocinar hasta que la fainá esté dorada.",500,
"./Assets/faina.jpeg");

let rogel= new receta("Rogel","manteca",130,"gr","yemas",4,undefined,"harina 0000",600,"gr","agua",200,"ml","sal",5,"gr","azucar",10,"gr","azucar",300,"gr","claras",4,undefined,undefined,undefined,undefined,undefined,undefined,undefined,
"Como hacer torta rogel paso a paso:En un bol colocar la harina junto con la sal y el azúcar, mezclar esto y continuar; hacer una corona con la harina y colocar ahí las yemas, el agua y la manteca derretida. Mezclar todo hasta formar una masa.Volcar en la preparación en la mesada y amasar a mano por un minuto. Cubrir con papel film y dejar reposar por 1 hora.Pasado este tiempo, separar la masa en 8 o 10 partes, dependiendo de la cantidad de tapitas con las que quieras armar tu torta rogel. Con parte hacer un bollito y estirar de 2 a 3 ml. de espesor. Pueden colocar encima de la masa la base del molde en el que harán la torta para tener una referencia y cortarlos con esta forma. Tener en cuenta que la tapas se encogerán un poco.Colocar las masas cortadas en una placa para horno previamente enharinada y pinchar la superficie de la masa con un tenedor. Cocinar a 200 grados por 8 a 10 minutos, hasta que la tapa esté dorada.Una vez cocinadas las tapas comenzar con el armado: Untar cada tapa con dulce de leche repostero colocando la cantidad necesaria y por encima otra tapa y aplastamos ambas. Repetir la acción hasta completar todas las tapas.La última tapa no lleva dulce de leche. Cómo preparar el Merengue:Mezclar las claras con 300 gr. de azúcar y revolver, llevar al fuego revolviendo hasta que el azúcar se disuelva, también se puede hacer a baño María.Cuando notar que el azúcar se disolvió, es el punto en el que sacamos del fuego.Comenzar a batir el merengue hasta enfriar.Una vez frío, colocar por arriba de la última tapa de rogel y con la misma espátula armar unos picos como decoración."
,4000,"./Assets/rogel2.jpeg");

let galletas=new receta("Galletitas de chocolate","chocolate",250,"gr","manteca",50,"gr","azucar impalpable",100,"gr","huevos",2,"unidades","harina de trigo",200,"gr","levadura",1,"cc","vainilla",1,"cucharada","sal","a gusto",undefined,undefined,undefined,undefined,undefined,undefined,undefined,"Fundir el chocolate a baño maría o en el microondas. Sumar la manteca junto a la vainilla y mezclar todo. Batir el azúcar y los huevos hasta duplicar el volumen. Por arriba agregar el chocolate derretido y mezclar nuevamente. Por último sumar la harina tamizada y la levadura con una pizca de sal. Mezclar lentamente hasta unir por completo. Refrigerar la masa por un rato hasta lograr una consistencia más dura. Con la masa fría formar las galletas, aplastarlas un poco y colocarlas en una placa de horno dejando una distancia prudente entre cada una. Precalentar el horno a 170 °C y hornear durante 10 min. Ir controlando el color y que no se quemen. Las galletas de chocolate deben quedar crocantes por fuera Enfriarlas sobre una rejilla y servir."
,1500,"./Assets/galletas.jpeg");

let budin= new receta("Budín de mandarina","mandarinas",2,"unidades","harina 0000",2,"tazas","azucar",1,"taza","huevos",3,"unidades","aceite neutro",1,"taza",undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,"Precalentar el horno, como siempre, en súper mínimo. Batir los huevos con el azúcar.Agregar una de las tazas de harina y remover hasta unir completamente.Agregar la taza de aceite y lo mismo: remover hasta unir (puede hacerse con espátula o con batidora).Incorporar la cáscara rallada y el jugo de las 2 mandarinas. Si son muy jugosas, poné solo el jugo de una.Incorporar la última taza de harina hasta unir.Llevar a horno suave por 45 minutos o hasta que esté dorado por arriba"
,1200,"./Assets/budin1.jpeg")

recetas.push(noquis);
recetas.push(tartaChoclo);
recetas.push(faina);
recetas.push(rogel);
recetas.push(galletas);
recetas.push(budin);

class descripcion{
    constructor(descripcionIngredientes){
    this.descripcionIngredientes=descripcionIngredientes
    }
}
const ingredientes=[]
let descripcionNoquis= new descripcion ("La mejor receta de ñoquis, facil y rica para celebrar todos los 29 en familia.");
let descripcionTartaChoclo=new descripcion ("En tan solo en 5 pasos vas a obtener una tarta de choclo súper cremosa.");
let descripcionFaina=new descripcion ("Faina casera que no falla. Es súper facil y económica. ¡Animate a probarla!");
let descripcionRogel=new descripcion ("Rogel rica con muuucho dulce de leche para conquistar todo tipo de paladares.")
let descripcionGalletas=new descripcion ( "Convertirte en un excelente pastelero haciendo estas galletitas de chocolate. ¡Son otro nivel!")
let descripcionBudin=new descripcion ("Budín clasico de mandarina que no falla. ¡¡Riquisimo para la merienda con unos ricos mates!!")

ingredientes.push(descripcionNoquis);
ingredientes.push(descripcionTartaChoclo);
ingredientes.push(descripcionFaina);
ingredientes.push(descripcionRogel);
ingredientes.push(descripcionGalletas);
ingredientes.push(descripcionBudin);

//  //Variables
//  let createAccount=prompt ("Nombre completo");
//  let createUser=prompt ("Crear Usuario");
//  let createPassword=prompt ("Crear Contraseña");
//  let user=prompt ("Ingresar usuario");
//  let password=prompt ("Ingresar contraseña");

//  //Inciar sesion
//  const iniciarSesion=(user,password,createUser,createPassword,createAccount)=>{
//      if ((user.toLowerCase() == createUser.toLowerCase()) && (password.toLowerCase() == createPassword.toLowerCase())){
//          console.log("Bienvenido"+" "+createAccount);
//      }else{
//          console.log("Usuario o contraseña incorrectos");
//      }
//  }
//  iniciarSesion (user,password,createUser,createPassword,createAccount);

//  let nombreReceta=("Conocé nuestras recetas")
//  recetas.forEach((receta)=>console.log("Nuestras recetas son: "+receta.nombre))

//  //variables recetas
//  let seleccionReceta=parseInt(prompt("Seleccione una receta: 1)Ñoquis 2)Tarta de choclo 3)Faina 4)Rogel 5)Galletitas de chocolate 6)Budín de mandarina"));
//  let seleccionNoquis=1;
//  let seleccionTarta=2;
//  let seleccionFaina=3;
//  let seleccionRogel=4;
//  let seleccionGalletas=5;
// let seleccionBudin=6

//  let cantidadPresupuesto=parseInt(prompt("Ingrese la cantidad que desea presupuestar"));

//  //seleccion de recetas
//  if(seleccionReceta==seleccionNoquis){
//      console.log(noquis)

//   for(let i=1;i<cantidadPresupuesto;i++){
//      let resultado1=(cantidadPresupuesto*[noquis.costo])
//      console.log ("El pago por multiplicar "+cantidadPresupuesto+" veces la receta "+"es de: $"+resultado1)

//     }
// }
//  else if (seleccionReceta==seleccionTarta){
//      console.log(tartaChoclo)
//  for(let i=1;i<cantidadPresupuesto;i++){
//          let resultado2=(cantidadPresupuesto*[tartaChoclo.costo])
//          console.log ("El pago por multiplicar "+cantidadPresupuesto+" veces la receta "+"es de: $"+resultado2)
//     }
// }
//  else if (seleccionReceta==seleccionFaina){
//      console.log(faina)
//      for(let i=1;i<cantidadPresupuesto;i++){
//          let resultado3=(cantidadPresupuesto*[faina.costo])
//          console.log ("El pago por multiplicar "+cantidadPresupuesto+" veces la receta "+"es de: $"+" "+resultado3)
//     }
// } 
//  else if (seleccionReceta==seleccionGalletas){
//     console.log(galletas)
//     for(let i=1;i<cantidadPresupuesto;i++){
//         let resultado4=(cantidadPresupuesto*[galletas.costo])
//         console.log ("El pago por multiplicar "+cantidadPresupuesto+" veces la receta "+"es de: $"+" "+resultado4)
//     }
// } 
//  else if (seleccionReceta==seleccionRogel){
//     console.log(rogel)
//     for(let i=1;i<cantidadPresupuesto;i++){
//         let resultado5=(cantidadPresupuesto*[rogel.costo])
//         console.log ("El pago por multiplicar "+cantidadPresupuesto+" veces la receta "+"es de: $"+" "+resultado5)
//     }
// }
//  else if (seleccionReceta==seleccionBudin){
//     console.log(budin)
//     for(let i=1;i<cantidadPresupuesto;i++){
//         let resultado6=(cantidadPresupuesto*[budin.costo])
//         console.log ("El pago por multiplicar "+cantidadPresupuesto+" veces la receta "+"es de: $"+" "+resultado6)
//     }
// }else{
//      console.log("Ingrese alguna de las recetas ofrecidas\n1)Ñoquis\n2)Tarta de choclo\n3)Faina")
// }
//  let cantidadReceta=parseInt(prompt("Ingrese la cantidad de veces que quiere multiplicar su receta"));
//  if(seleccionReceta==seleccionNoquis){
//      console.log(noquis)

//   for(let i=1;i<cantidadReceta;i++){
//      let resultado1=(cantidadReceta*[noquis.cantidadPrimerIngrediente])
//      let resultado2=(cantidadReceta*[noquis.cantidadSegundoIngrediente])
//      let resultado3=+(cantidadReceta*[noquis.cantidadTercerIngrediente])
//      console.log ("Su receta por "+" "+cantidadReceta+" "+" veces la original es:Ingredientes: papas "+resultado1+"kg,harina 0000 "+resultado2+"gr,huevos"+resultado3 +"unidades,sal y pimienta a gusto")

//     }
// }
//  else if (seleccionReceta==seleccionTarta){
//      console.log(tartaChoclo)
//  for(let i=1;i<cantidadReceta;i++){
//          let resultado4=(cantidadReceta*[tartaChoclo.cantidadPrimerIngrediente])
//          let resultado5=(cantidadReceta*[tartaChoclo.cantidadSegundoIngrediente])
//          let resultado6=(cantidadReceta*[tartaChoclo.cantidadTercerIngrediente])
//          let resultado7=(cantidadReceta*[tartaChoclo.cantidadCuartoIngrediente])
//          let resultado8=(cantidadReceta*[tartaChoclo.cantidadQuintoIngrediente])
//          let resultado9=(cantidadReceta*[tartaChoclo.cantidadSextoIngrediente])
//          let resultado10=(cantidadReceta*[tartaChoclo.cantidadSeptimoIngrediente])
//          console.log ("Su receta por"+" "+cantidadReceta+" "+" veces la original es:Ingredientes: choclo en crema "+resultado4+" latas,choclo en grano "+resultado5+"latas,cebolla blanca "+resultado6+"unidades,pimentón(morrón) "+resultado7+"unidades,queso cremoso "+resultado8+"gr,queso crema "+resultado9+"gr,crema de leche"+resultado10+"chorros,sal y pimienta a gusto")
//     }
// }
//  else if (seleccionReceta==seleccionFaina){
//      console.log(faina)
//      for(let i=1;i<cantidadReceta;i++){
//          let resultado11=(cantidadReceta*[faina.cantidadPrimerIngrediente])
//          let resultado12=(cantidadReceta*[faina.cantidadSegundoIngrediente])
//          let resultado13=(cantidadReceta*[faina.cantidadTercerIngrediente])
//          console.log ("Su receta por"+" "+cantidadReceta+" "+" veces la original es:Ingredientes: harina de garbanzos "+resultado11+"gr,agua "+resultado12+"ml,aceite de oliva"+resultado13+"ml,sal y pimienta a gusto")
//     }
// }
//  else if (seleccionReceta==seleccionRogel){
//     console.log(rogel)
//     for(let i=1;i<cantidadReceta;i++){
//         let resultado14=(cantidadReceta*[rogel.cantidadPrimerIngrediente])
//         let resultado15=(cantidadReceta*[rogel.cantidadSegundoIngrediente])
//         let resultado16=(cantidadReceta*[rogel.cantidadTercerIngrediente])
//         let resultado17=(cantidadReceta*[rogel.cantidadCuartoIngrediente])
//         let resultado18=(cantidadReceta*[rogel.cantidadQuintoIngrediente])
//         let resultado19=(cantidadReceta*[rogel.cantidadSextoIngrediente])
//         let resultado20=(cantidadReceta*[rogel.cantidadSeptimoIngrediente])
//         let resultado21=(cantidadReceta*[rogel.cantidadOctavoIngrediente])
//         console.log ("Su receta por"+" "+cantidadReceta+" "+" veces la original es:Ingredientes: manteca "+resultado14+"gr,yemas "+resultado15+",harina 0000 "+resultado16+"gr,agua "+resultado17+"ml,sal "+resultado18+"gr,azucar "+resultado19+"gr,azucar "+resultado20+"gr,claras "+resultado21)
//     }
// }
// else if (seleccionReceta==seleccionGalletas){
//     console.log(galletas)
//     for(let i=1;i<cantidadReceta;i++){
//         let resultado22=(cantidadReceta*[galletas.cantidadPrimerIngrediente])
//         let resultado23=(cantidadReceta*[galletas.cantidadSegundoIngrediente])
//         let resultado24=(cantidadReceta*[galletas.cantidadTercerIngrediente])
//         let resultado25=(cantidadReceta*[galletas.cantidadCuartoIngrediente])
//         let resultado26=(cantidadReceta*[galletas.cantidadQuintoIngrediente])
//         let resultado27=(cantidadReceta*[galletas.cantidadSextoIngrediente])
//         let resultado28=(cantidadReceta*[galletas.cantidadSeptimoIngrediente])
//         console.log ("Su receta por"+" "+cantidadReceta+" "+" veces la original es:Ingredientes: chocolate "+resultado22+"gr,manteca "+resultado23+"gr,azucar impalpable "+resultado24+"gr,huevos "+resultado25+" unidades,harina de trigo "+resultado26+"gr,levadura en polvo "+resultado26+"cc,vainilla "+resultado27+"cucharaditas,sal a gusto")
//     }
// }
// else if (seleccionReceta==seleccionBudin){
//     console.log(budin)
//     for(let i=1;i<cantidadReceta;i++){
//         let resultado29=(cantidadReceta*[budin.cantidadPrimerIngrediente])
//         let resultado30=(cantidadReceta*[budin.cantidadSegundoIngrediente])
//         let resultado31=(cantidadReceta*[budin.cantidadTercerIngrediente])
//         let resultado32=(cantidadReceta*[budin.cantidadCuartoIngrediente])
//         let resultado33=(cantidadReceta*[budin.cantidadQuintoIngrediente])
//         console.log ("Su receta por"+" "+cantidadReceta+" "+" veces la original es:Ingredientes: mandarinas "+resultado29+"unidades,harina "+resultado30+"tazas,azucar "+resultado31+"tazas,huevos "+resultado32+" unidades,aceite neutro "+resultado33+"tazas")
//     }
// } else{
//      console.log("No se encontró la receta solicitada")
// }
//  let consulta= prompt("¿Qué ingrediente contiene la receta a buscar?")
//  const buscarRecetas=recetas.filter((receta)=>receta.preparacion=="harina");
//  if(consulta=="harina"){
//    console.log(buscarRecetas)
//    console.log(faina)
//    console.log(noquis)
//    console.log(rogel)
//    console.log(galletas)
//    console.log(budin)
// }
//DOM recetas
let cards=document.getElementById("index__cartas");
for (let i = 0; i < recetas.length; i++) {
    let card=document.createElement ("div");
    card.className="index__cards";
    card.innerHTML=`
    <div class="card index__card">
    <img src=${recetas[i].fuente} class="card-img-top receta__imagen" alt="fotoReceta">
    <div class="index__cuerpo">
    <h5 class="receta__titulo">${recetas[i].nombre}</h5>
    <p class="receta__contenido">${ingredientes[i].descripcionIngredientes}</p>
    <p class="receta__contenido">Costo total: $ ${recetas[i].costo}</p>
    <button id="receta__boton" class="btn btn-primary"><b>Receta</b></button>
    </div>
    `;
    cards.append(card);
}
  let boton=document.getElementById("receta__boton");
//  boton.onmouseover=()=>{
//     alert("Abrir receta");
//  }
  
