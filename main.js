import Base from "./Base.js";
import Ruta from "./Ruta.js";

class Main{
    constructor(){
        let base = new Base(
            document.querySelector("#tablaArt"), document.querySelector("#info")           
        );        
        document.querySelector("#btnAgregar").addEventListener("click",()=>{
        let numero = Number(document.querySelector("#numero").value);
        let matricula = Number(document.querySelector("#matricula").value);
        let toString = document.querySelector("#toString");
        
        let objRuta = {
            numero: numero,
            matricula: matricula,
        };
            let ruta = new Ruta(objRuta);
            base.AddRuta(ruta);
            base.AgregarEnTabla(ruta);
            toString.textContent = ruta.toString(); 
    });
    }
}
let m = new Main()