var cards = [];
console.log("helooo");
var People = /** @class */ (function () {
    function People(img, name, age, location, hobbies, favouriteMusic) {
        this.img = "";
        this.name = "";
        this.age = "";
        this.location = "";
        this.hobbies = "";
        this.favouriteMusic = "";
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
    People.prototype.person = function () {
        for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
            var i = cards_1[_i];
            var human = "<div class=\"col-lg-2\">\n        <div class=\"card\">\n            <img class=\"card-img-top\" src=\"" + this.img + "\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">" + this.name + "</h4>\n                <p class=\"card-text\">\n               Age : " + this.age + "<br>\n               Location : " + this.location + "<br>\n                Hobbies : " + this.hobbies + "<br>\n                Favourite Music : " + this.favouriteMusic + "<br>\n                </p>\n                <a href=\"#!\" class=\"btn btn-primary\">Go somewhere</a>\n            </div>\n        </div>\n    </div>";
            console.table(cards);
            //console.table(cards);
        }
        document.getElementById("profilesRow").innerHTML += human;
    };
    return People;
}());
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
var Bobby = new People("img/Bobby.jpg", "Bobby", "30", "Vienna", "Beer, Wine, Whiskey", "HipHop");
var Jessica = new People("img/Jessica.jpg", "Jessica", "28", "Hamburg", "Jogging, My Cat Tommy", "DeathMetal");
var Michi = new People("img/Michi.jpg", "Michi", "28", "Vienna", "Avoiding Dating Apps, Contradicting myself", "Whale Sounds, 10hours of Silence on YouTube");
var Maria = new People("img/Maria.jpg", "Maria", "25", "Bratislava", "Travel, Reading , Blogging", "Classical");
var Lisa = new People("img/Lisa.jpg", "Lisa", "33", "Vienna", "Cats, Cats AND CATS", "A bit of everything");
var Aldo = new People("img/Aldo.jpeg", "Aldo", "25", "Berlin", "Karate, Playing Drums, ", "Rock, PunkRock, MetalCore");
console.table(cards);
