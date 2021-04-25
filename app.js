var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hello");
var myname;
myname = "Akram";
console.log("hello " + myname);
//Decleared Array of string
var hobbies;
var hobbies2;
//Decleared arry of string and numer
hobbies = ['football', 'basketball'];
var color;
(function (color) {
    color[color["gray"] = 3] = "gray";
    color[color["green"] = 4] = "green";
    color[color["blue"] = 5] = "blue";
})(color || (color = {}));
var mycolor = color.gray;
console.log(mycolor);
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 27;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Male");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("mohamed", "md");
console.log(person.name, person.username);
// person.setType()
var Ahmed = /** @class */ (function (_super) {
    __extends(Ahmed, _super);
    function Ahmed(username) {
        var _this = _super.call(this, "Ahmed", username) || this;
        _this.age = 30;
        return _this;
    }
    return Ahmed;
}(Person));
var cl_Ahmed = new Ahmed("Ah");
console.log(cl_Ahmed.name); //will be ahmed
var per = {
    name: "Amir",
    age: 28,
    address: "Giza - cairo"
};
