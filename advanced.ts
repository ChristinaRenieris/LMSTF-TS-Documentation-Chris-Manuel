var cards: Array<{}> = [];
console.log("helooo");
class People {
    img = "";
    name = "";
    age = "";
    location = "";
    hobbies = "";
    favouriteMusic = "";


    constructor(img, name, age, location, hobbies, favouriteMusic) {
        this.img = img;
        this.name = name;
        this.age = age;
        this.location = location;
        this.hobbies = hobbies;
        this.favouriteMusic = favouriteMusic;
        cards.push(this);
        console.log(this.name);
        this.person();
    }

    person() {
        for (let i of cards) {
            var human = `<div class="col-lg-4">
        <div class="card">
            <img class="card-img-top" src="${this.img}" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title">${this.name}</h4>
                <p class="card-text">
               Age : ${this.age}<br>
               Location : ${this.location}<br>
                Hobbies : ${this.hobbies}<br>
                Favourite Music : ${this.favouriteMusic}<br>
                </p>
                <a href="#!" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>`;
      
console.table(cards);
//console.table(cards);
}
document.getElementById("profilesRow").innerHTML += human ;
    }

}






//return `
//        <div class="col-lg-2">
//        <div class="card">
//            <img class="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap">
//            <div class="card-body">
//                <h4 class="card-title">Card title</h4>
//                <p class="card-text">

//                </p>
//                <a href="#!" class="btn btn-primary">Go somewhere</a>
//            </div>
//        </div>
//    </div>
//     `}


let Bobby = new People("img/Bobby.jpg", "Bobby", "30", "Vienna", "Beer, Wine, Whiskey", "HipHop");
let Jessica = new People("img/Jessica.jpg", "Jessica", "28", "Hamburg", "Jogging, My Cat Tommy", "DeathMetal");
let Michi = new People("img/Michi.jpg", "Michi", "28", "Vienna", "Avoiding Dating Apps, Contradicting myself", "Whale Sounds, 10hours of Silence on YouTube");
let Maria = new People("img/Maria.jpg", "Maria", "25", "Bratislava", "Travel, Reading , Blogging", "Classical");
let Lisa = new People("img/Lisa.jpg", "Lisa", "33", "Vienna", "Cats, Cats AND CATS", "A bit of everything");
let Aldo = new People("img/Aldo.jpeg", "Aldo", "25", "Berlin", "Karate, Playing Drums, ", "Rock, PunkRock, MetalCore");

console.table(cards);