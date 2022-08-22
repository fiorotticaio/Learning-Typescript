let hello: string = "world";


/*==================================================================================*/

const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
}

console.log(getFullName("true", "le"));


/*==================================================================================*/


interface IUser {
    name: string;
    age?: number; // "?" means optional
    getMessage(): string;
}

const user1: IUser = {
    name: "Moster",
    age: 30,
    getMessage() {
        return "Hello" + name; // this.name
    }
}

const user2: IUser = {
    name: "Jack",
    getMessage() {
        return "Hello" + name;
    }
}

console.log(user1.getMessage());


/*==================================================================================*/


type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface UserInterface {
    id: ID;
    name: string;
    surname: string;
}

const popularTags: PopularTag[] = ["dragon", "coffee"];

const dragonsTag: MaybePopularTag = "dragon";

let username: string = "alex";

let pageName: string | number = "1"; // pode ser string ou number

let errorMessage: string | null = null;

let user3: UserInterface | null = null;

let someProp: string | number | null | undefined | string[] | object


/*==================================================================================*/


const doSomething = (): void => {
    console.log("doSomething");
}

let foo: void = undefined; // não faz sentido associar void a variáveis

let fool: any = undefined; // "any" pode ser qualquer coisa
console.log(fool.bar());

const doSomething2 = (): never => { // never é um tipo que nunca vai retornar
    throw "never"; // a execução da função vai para depois do throw
}

let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
let s2: string = vUnknown as string;

let pageNumber: string = "1";
let numericPageNumber: number = (pageNumber as unknown) as number;

// console.log(vAny.foo());
// console.log(vUnknown.foo());


/*==================================================================================*/


const someElement = document.querySelector(".foo") as HTMLInputElement;
console.log("someElement", someElement.value);

someElement.addEventListener("blur", (event) => {
    const target = event.target as HTMLInputElement;
    console.log("event", target.value);
});


/*==================================================================================*/


interface UserInterface2 {
    getFullName(): string;
}

class User implements UserInterface2 { // o "implements" é como que um "se baseia" 
    /*
    public -> pode ser acessado fora da classe (padrão)
    private -> não pode ser acessado fora da classe 
    protected -> pode ser acessado na classe e em seus childrens 
    */
    protected firstName: string; 
    private lastName: string;
    readonly unchangableName: string; // não pode mudar o valor da variável

    static readonly maxAge = 50; // acessadas apenas na classe, não em instãncias

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }

    changeUnchangableName(): void {
        // this.unchangableName = "new name";
    }

    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

class Admin extends User {
    private editor: string;

    setEditor(editor: string): void {
        this.editor = editor;
    }

    getEditor(): string {
        return this.editor;
    }
}

const user4 = new User("Alex", "Moster");
console.log(user4.getFullName());
console.log(User.maxAge);

const admin = new Admin("Pedrou", "foo");
console.log(admin);


/*==================================================================================*/


const addId = <T extends object>(obj: T) => { // espera-se que "obj" seja do tipo T que derive de um object
    const id = Math.random().toString(16);
    return {
        ...obj,
        id,
    }
}

/* interface genérica */
interface UserInterface3<T, V> { // o que está entre <> são os parâmetros como tipos
    name: string;
    data: T;
    meta: V;
}

const user5: UserInterface3<{ meta: string }, string> = {
    name: "Jack",
    data: {
        meta: "foo",
    },
    meta: 'bar',
}

const user6: UserInterface3<string[]> = {
    name: "Jack",
    data: ["foo", "bar", "baz"],
}

const result = addId<UserInterface3>(user5);
console.log("result", result);


/*==================================================================================*/


const statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2,
}

console.log(statuses.inProgress);

/* 
o "enum" é como se fosse pra criar objetos mas ele inicializa
todos os atributos com ineiros começando em 0 e também pode 
virar um tiṕo 
*/
enum StatusEnum {
    NotStarted = "notStarted",
    InProgress = "inProgress",
    Done = "done",
}

interface Task {
    id: string;
    status: StatusEnum;
}

let notStrartedStatus: StatusEnum = StatusEnum.NotStarted;

notStrartedStatus = StatusEnum.Done;

console.log(StatusEnum.InProgress);