// //Classes should start with capitalize letters 

// class Person {
//     constructor (name, age){
//         this.name = name;
//         this.age = age;
//     } //constructors is requited, we cannot create a class witout it 
    
//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am $`)
//     }

// }


class Rectangle {
    constructor(width, height, color, left, top) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.left = left;
        this.top = top; 

    }

    draw(){
        document.body.insertAdjacentHTML("aferbegin", `
            <div
            style = "width:${this.width}px; 
            height: ${this.height} 
            background-color: ${this.width};
            position: absolute;
            top: ${this.top}px;
            left: ${this.left}px;"> </div>`
        )
    }

    area() {
        return this.width * this.height  
    }

    set color(newColor) {
        this._color= newColor;
    }

    get color() {
        return
    }
}

const rect1 = new Rectangle(100,50,"red",50,40)


//--------------------

class Square extends Rectangle{
    constructor(width, color, left, top) {
        super(width, width, color, left, top); //super is a duplication of the construction for rectangle
     } 
}
        

//----------------------

class Circle extends Square {
    constructor (width, color, left, top) {
        super (width, color, left, top);
    }

    draw(){ //we need the draw again cause Circle has a different styling 
        document.body.insertAdjacentHTML("afterbegin", ` 
            <div
            style = "
            border-radius: 50%;
            width:${this.width}px; 
            height: ${this.height} 
            background-color: ${this.width};
            position: absolute;
            top: ${this.top}px;
            left: ${this.left}px;"> </div>`
        )
    }
}