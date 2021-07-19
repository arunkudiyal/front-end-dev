// Complete feel of OOPs
export class User {
    // Properties
    private name: string
    private email: string
    private age: number

    // GetterS & Setters

    // constructors
    constructor(name: string, email: string, age: number) {
        this.name = name
        this.email = email
        this.age = age

        console.log(`User Created ${this.name}`);
    }

    // Methods
    register(): void {
        console.log(`${this.name} has been registered successfully!`);
    }

    payInvoice(): void {
        console.log(`${this.name} has paid his/her Invoice!`);
        
    }
}

export class Member extends User {
    id: number

    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age)
        this,id = id

        console.log(`Member Created ${this.id}`);
    }

    // Method
    payInvoice(): void {
        super.payInvoice()
    }
}

// Creating an object
let user1 = new Member(1, 'MikeDoe', 'mike.doe@gmail.com', 25)
user1.register()
user1.payInvoice()