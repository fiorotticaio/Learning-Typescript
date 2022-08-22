var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var hello = "world";
/*==================================================================================*/
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("true", "le"));
var user1 = {
    name: "Moster",
    age: 30,
    getMessage: function () {
        return "Hello" + name; // this.name
    }
};
var user2 = {
    name: "Jack",
    getMessage: function () {
        return "Hello" + name;
    }
};
console.log(user1.getMessage());
var popularTags = ["dragon", "coffee"];
var dragonsTag = "dragon";
var username = "alex";
var pageName = "1"; // pode ser string ou number
var errorMessage = null;
var user3 = null;
var someProp;
/*==================================================================================*/
var doSomething = function () {
    console.log("doSomething");
};
var foo = undefined; // não faz sentido associar void a variáveis
var fool = undefined; // "any" pode ser qualquer coisa
console.log(fool.bar());
var doSomething2 = function () {
    throw "never"; // a execução da função vai para depois do throw
};
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
var s2 = vUnknown;
var pageNumber = "1";
var numericPageNumber = pageNumber;
// console.log(vAny.foo());
// console.log(vUnknown.foo());
/*==================================================================================*/
var someElement = document.querySelector(".foo");
console.log("someElement", someElement.value);
someElement.addEventListener("blur", function (event) {
    var target = event.target;
    console.log("event", target.value);
});
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }
    User.prototype.changeUnchangableName = function () {
        // this.unchangableName = "new name";
    };
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    User.maxAge = 50; // acessadas apenas na classe, não em instãncias
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var user4 = new User("Alex", "Moster");
console.log(user4.getFullName());
console.log(User.maxAge);
var admin = new Admin("Pedrou", "foo");
console.log(admin);
/*==================================================================================*/
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user5 = {
    name: "Jack",
    data: {
        meta: "foo"
    },
    meta: 'bar'
};
var user6 = {
    name: "Jack",
    data: ["foo", "bar", "baz"]
};
var result = addId(user5);
console.log("result", result);
/*==================================================================================*/
var statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2
};
console.log(statuses.inProgress);
/*
o "enum" é como se fosse pra criar objetos mas ele inicializa
todos os atributos com ineiros começando em 0 e também pode
virar um tiṕo
*/
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NotStarted"] = "notStarted";
    StatusEnum["InProgress"] = "inProgress";
    StatusEnum["Done"] = "done";
})(StatusEnum || (StatusEnum = {}));
var notStrartedStatus = StatusEnum.NotStarted;
notStrartedStatus = StatusEnum.Done;
console.log(StatusEnum.InProgress);
