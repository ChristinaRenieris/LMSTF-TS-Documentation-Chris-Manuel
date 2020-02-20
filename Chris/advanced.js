var People = /** @class */ (function () {
    function People(name, age, location, hobbies, favouriteMusic) {
        this.name = "";
        this.age = "";
        this.location = "";
        this.hobbies = "";
        this.favouriteMusic = "";
        this.name = name;
        this.age = age;
        this.location = location;
        this.hobbies = hobbies;
        this.favouriteMusic = favouriteMusic;
    }
    People.prototype.person = function () {
        return "\n       <li>Name : " + this.name + "</li>\n       <li>Age : " + this.age + "</li>\n       <li>Location : " + this.location + "</li>\n       <li>Hobbies : " + this.hobbies + "</li>\n       <li>Favourite Music : " + this.favouriteMusic + "</li>\n    ";
    };
    return People;
}());
//BOBBY
var Bobby = new People("Bobby", "30", "Vienna", "Beer, Wine, Whiskey", "HipHop");
document.getElementById(" INSERT BOBBY ID HERE").innerHTML = (Bobby.person());
//JESSICA
var Jessica = new People("Jessica", "28", "Hamburg", "Jogging, My Cat Tommy", "DeathMetal");
document.getElementById(" INSERT JESSICA ID HERE").innerHTML = (Jessica.person());
//MICHI
var Michi = new People("Michi", "28", "Vienna", "Avoiding Dating Apps, Contradicting myself", "Whale Sounds, 10hours of Silence on YouTube");
document.getElementById(" INSERT MICHI ID HERE").innerHTML = (Michi.person());
//MARIA
var Maria = new People("Maria", "25", "Bratislava", "Travel, Reading , Blogging", "Classical");
document.getElementById(" INSERT MARIA ID HERE").innerHTML = (Maria.person());
//LISA
var Lisa = new People("Lisa", "33", "Vienna", "Cats, Cats AND CATS", "A bit of everything");
document.getElementById(" INSERT LISA ID HERE").innerHTML = (Lisa.person());
//ALDO
var Aldo = new People("Aldo", "25", "Berlin", "Karate, Playing Drums, ", "Rock, PunkRock, MetalCore");
document.getElementById(" INSERT ALDO ID HERE").innerHTML = (Aldo.person());
