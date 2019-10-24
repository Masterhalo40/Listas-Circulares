export default class Ruta{
    constructor(ruta){
        this._numero = ruta.numero;
        this._matricula = ruta.matricula;
        this._siguiente = null;
        this._anterior = null;
    }
   
    get numero(){
        return this._numero;
    }

    get matricula(){
        return this._matricula;
    }

    get siguiente(){
        return this._siguiente;
    }

    get anterior(){
        return this._anterior;
    }

    set siguiente(siguiente){
        this._siguiente = siguiente;
    }
    
    set anterior(anterior){
        this._anterior = anterior;
    }

    toString(){
        let a = `La matricula de la ruta ${this._numero} es ${this._matricula}`;
        return a;
    }
}