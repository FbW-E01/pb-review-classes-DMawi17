// # Review - Classes

// NOTE! Pay close attention to creating code with good and consistent code style.

/* 1. Create a class called "Component". The constructor for Component should
take in one parameter "name". There should be one method called "render" that
prints `<p>Component _name_  rendering` where `_name_`  is the provided name. */

class Component {
    constructor(name) {
        this.name = name;
    }
    render() {
        console.log(`<p>Component ${this.name} rendering`);
    }
}

// const component = new Component("John");
// component.render();

/* 2. Create a child class called UserCard that extends Component. The UserCard
should take in only one constructor parameter called "user".Expect the user to
be an object with "name", "imageUrl" and "email" properties.The UserCard should
override the original "render" method.The new render method should print out
something like this: */

class UserCard extends Component {
    constructor(user) {
        super(user.name);
        this.user = user;
    }
}

const user = {
    name: `Josie Rueden`,
    URL: `https://haven.name`,
    email: `Josie_VonRueden82@yahoo.com`,
};

UserCard.prototype.render = function () {
    console.log(
        `
        <div class="card card-user">
            <img class="card-img-top" src="${this.user.URL}" alt>
            <div class="card-body">
                <h5 class="card-title">${this.user.name}</h5>
                <p class="card-text">To contact, please send a message to</p>
                <a
                    href="mailto:${this.user.email}"
                    class="btn btn-primary"
                >
                    ${this.user.name}
                </a>
            </div>
        </div>
        `
    );
};

const userOne = new UserCard(user);
// console.log(userOne);
userOne.render();

// 3. Create an array of at least 5 user objects.

let userObjects = [
    {
        name: `Catharine`,
        URL: `https://lou.info`,
        email: `Catharine.Reichel23@hotmail.com`,
    },
    {
        name: `Bailey`,
        URL: `https://violet.info`,
        email: `Bailey.Hessel@yahoo.com`,
    },
    {
        name: `Ransom`,
        URL: `https://maude.com`,
        email: `Ransom.Pfeffer9@gmail.com`,
    },
    {
        name: `Arlie`,
        URL: `http://jorge.com`,
        email: `Arlie_Gutmann89@hotmail.com`,
    },
    {
        name: `Georgiana`,
        URL: `https://leon.com`,
        email: `Georgiana90@yahoo.com`,
    },
];

// 4. Using the .map() method, create 5 UserCard instances (objects) based on your users.

const instOfUsers = userObjects.map((v) => new UserCard(v));
console.log(instOfUsers);

// 5. Using .forEach(), call the render method of your instances.

instOfUsers.forEach((obj) => obj.render());

// 6. Print the type of the UserCard class.

console.log(typeof UserCard);

// 7. Print the type of a UserCard instance.

console.log(typeof userOne);
