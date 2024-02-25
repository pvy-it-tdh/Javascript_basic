class Car{
    constructor(name,colour)
    {
        this.name=name;
        this.colour=colour;
    }
    getColour= () =>{
        return this.colour;
    }
    getName=() =>{
        return this.name
    }
}

const bmw= new Car("BMW","Black");
const toyota = new Car("Toyota","Red");