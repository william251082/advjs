// // problem
// // Amazon shopping
// const user = {
//     name: 'Kim',
//     active: true,
//     cart: [],
//     purchases: []
// };
//
//
// //Implement a cart feature:
// // 1. Add items to cart.
// // 2. Add 3% tax to item in cart
// // 3. Buy item: cart --> purchases
// // 4. Empty cart
//
// //Bonus:
// // accept refunds.
// // Track user history.

const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
};
const history1 = [];
const compose = (f, g) => (...args) => f(g(...args));
const pipe = (f, g) => (...args) => g(f(...args));
const purchaseItem  = (...fns) => fns.reduce(compose);
// reduce calls the func for all el of the arr
const purchaseItem2  = (...fns) => fns.reduce(pipe);
purchaseItem2(
    addItemToCart,
    applyTaxToItems,
    buyItem,
    emptyUserCart,
)(user, {name: 'laptop', price: 60});
// purchaseItem(
//   emptyUserCart,
//   buyItem,
//   applyTaxToItems,
//   addItemToCart
// )(user, {name: 'laptop', price: 50})
function addItemToCart(user, item) {
    history1.push(user);
    const updatedCart = user.cart.concat(item);
    return Object.assign({}, user, {cart: updatedCart});
}

function applyTaxToItems(user) {
    history1.push(user);
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price*taxRate
        }
    });
    return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
    history1.push(user);
    const itemsInCart = user.cart;
    return Object.assign({}, user, { purchases: itemsInCart });
}
function emptyUserCart(user) {
    history1.push(user);
    return Object.assign({}, user, { cart: [] });
}

function refundItem() {

}

function getUserState() {

}

function goBack() {

}

function goForward() {

}

console.log(user);


// func without a return is just a procedure
// connect(mapStateToProps, mapDispatchToProps)(App); // Add data to props
// mapDispatchToProps and mapStateToProps take actions and returns an object


//fp focus more on composition, oop focus more on inheritance
// Inheritance
// what it is?
//
// class Character needs sleep(), now all the classes that extend Character will need that too
// tight coupling is the opposite of reusable modular code, coupling of parent and child class is a tight form of coupling
// tight coupling problem leads to fragile base class problem
// hierarchy problem, what if the junior class become higher than the boss
// some low level class will inherit props that it doesn't need


// Composition
// what it has? abilities?
function attack(character) {
    return Object.assign({}, character, {attackFn: () => {}} )
}
function Elf(name, weapon, type) {
    let elf = {
        name, weapon, type
    }
}

// Inheritance -- super class the is extended into smaller pieces
// Composition -- smaller pieces that are combined to make something bigger

// NOT Composition from design pattern book, fragile method
// Multiple inheritance
const rectangular = (state) => {
    return {
        area: () => {
            return state.height * state.width;
        }
    }
};

const openable = (state) => {
    return {
        toggleOpen: () => {
            return state.open = !state.open;
        }
    }
};

// to compose them into an object
const buildRectangularWindow = (state) => {
  return Object.assign(state, rectangular(state), openable(state));
};

const rectangularWindow = buildRectangularWindow({
    height: 20,
    width: 20,
    open: false
});

console.log(rectangularWindow.open);
console.log(rectangularWindow.toggleOpen());


// Composition
// interface DataReader {
//     read(): void;
//     data: string[][];
// }
//
// export class MatchReader {
//     static fromCsv(filename: string): MatchReader {
//         return new MatchReader(new CsvFileReader(filename))
//     }
//
//     matches: MatchData[] = [];
//
//     constructor(public reader: DataReader) {}
//
// load(): void {
//     this.reader.read();
// this.matches = this.reader.data.map((row: string[]): MatchData => {
//     return [
//         dateStringToDate(row[0]),
//         row[1],
//         row[2],
//         parseInt(row[3]),
//         parseInt(row[4]),
//         row[5] as MatchResult,
//         row[6]
//
//     ]
// });
// }
// }

// MatchReader should load up some data and DataReader is only for providing the data


// composition                                          inheritance
// many operations on fixed data                        few operations on common data
// stateless --not modifying state                      stateful  --you can modify the this inside classes
// pure functions --no side-effects                     side effects --methods manipulate the internal state
// declarative --what we want to be doing               imperative --how is it to be done
// fp is good for processing huge data                  oop is good for characters in a game with few operations

