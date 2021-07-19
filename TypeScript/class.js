"use strict";
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
exports.__esModule = true;
exports.Member = exports.User = void 0;
// Complete feel of OOPs
var User = /** @class */ (function () {
    // GetterS & Setters
    // constructors
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User Created " + this.name);
    }
    // Methods
    User.prototype.register = function () {
        console.log(this.name + " has been registered successfully!");
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " has paid his/her Invoice!");
    };
    return User;
}());
exports.User = User;
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this, id = id;
        console.log("Member Created " + _this.id);
        return _this;
    }
    // Method
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
exports.Member = Member;
// Creating an object
var user1 = new Member(1, 'MikeDoe', 'mike.doe@gmail.com', 25);
user1.register();
user1.payInvoice();
