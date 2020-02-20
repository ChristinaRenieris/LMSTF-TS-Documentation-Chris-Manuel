class  People{
    name = "";
    age ="";
    location ="";
    hobbies ="";
    favouriteMusic ="";

    constructor(name, age, location, hobbies, favouriteMusic){
        this.name = name;
        this.age = age;
        this.location = location;
        this.hobbies = hobbies;
        this.favouriteMusic = favouriteMusic;
    }

    person(){
       return `
       <li>Name : ${this.name}</li>
       <li>Age : ${this.age}</li>
       <li>Location : ${this.location}</li>
       <li>Hobbies : ${this.hobbies}</li>
       <li>Favourite Music : ${this.favouriteMusic}</li>
    `}
}
//BOBBY
let Bobby = new People("Bobby", "30" ,"Vienna" ,"Beer, Wine, Whiskey", "HipHop");
document.getElementById(" INSERT BOBBY ID HERE").innerHTML = (Bobby.person());

//JESSICA
let Jessica = new People("Jessica", "28" ,"Hamburg" ,"Jogging, My Cat Tommy", "DeathMetal");
document.getElementById(" INSERT JESSICA ID HERE").innerHTML = (Jessica.person());

//MICHI
let Michi = new People("Michi", "28" ,"Vienna" ,"Avoiding Dating Apps, Contradicting myself", "Whale Sounds, 10hours of Silence on YouTube");
document.getElementById(" INSERT MICHI ID HERE").innerHTML = (Michi.person());

//MARIA
let Maria = new People("Maria", "25" ,"Bratislava" ,"Travel, Reading , Blogging", "Classical");
document.getElementById(" INSERT MARIA ID HERE").innerHTML = (Maria.person());

//LISA
let Lisa = new People("Lisa", "33" ,"Vienna" ,"Cats, Cats AND CATS", "A bit of everything");
document.getElementById(" INSERT LISA ID HERE").innerHTML = (Lisa.person());


//ALDO
let Aldo = new People("Aldo", "25" ,"Berlin" ,"Karate, Playing Drums, ", "Rock, PunkRock, MetalCore");
document.getElementById(" INSERT ALDO ID HERE").innerHTML = (Aldo.person());