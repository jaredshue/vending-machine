class Machine {
  constructor() {
    this.snacks = []
    this.balance = 0;
  }

  seeSelections() {
    return this.snacks
  }

  stock(inventory) {
    if(inventory == undefined) {
      throw Error("please do not troll. you cannot stock nothing.")
    }
    this.snacks = inventory
  }

  deposit(amount) {
    this.balance += amount;
    return `You have deposited Rs ${this.balance}`;
  }

  selectItem(name) {
    var snack = this.snacks.filter(x => x.name == name)[0];

    if (snack == undefined) {
      return "The item you selected is unavailable";
    }
    
    if (this.balance < snack.price) {
      var difference = snack.price - this.balance;
      return `Your deposit is insufficient.  Please add Rs ${difference} for this item`;
    }
  }
}

module.exports = Machine