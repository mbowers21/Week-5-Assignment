class Item {
    constructor (item) {
        this.item = item;
    }
    describe () {
        return `You have selected ${this.item}.`;
    }
}

class GroceryList {
    constructor () {
        this.cart = []; 
        this.selectedStore = null;
    }

    start () {
        let selection = this.showMainMenuOptions ();
        while (selection != 'exit') {
            switch (selection) {
                case 'add':
                    this.addItem ();
                    break;
                case 'delete':
                    this.deleteItem ();
                    break; 
                case 'show':
                    this.showItems ();
                    break; 
                default: 
                    selection = 'exit';
            }
            selection = this.showMainMenuOptions ();
        }
        alert ('Thanks for shopping with us!');
    }

    showMainMenuOptions() {
        return prompt(`
        exit
        add item
        delete item
        show items
        `); 
    }

    showItems () {
        let cartInventory = '';
        for (let i = 0; i < this.cart.length; i++) {
            cartInventory += i + ') ' + this.cart[i].item + '\n';
        }
        alert (cartInventory);
    }

    addItem () {
        let item = prompt('Enter name of item to buy:');
        this.cart.push(new Item(item));  
    } 

    deleteItem () {
        let index = prompt('Enter the index of the item you want to delete:');
        if (index > -1 && index < this.cart.length) {
            this.cart.splice(index, 1);
        }
    }
}

let list = new GroceryList();
list.start(); 