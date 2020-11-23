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
    var output = { item: name, change: [] };
    var snack = this.snacks.filter(x => x.name == name)[0];

    if (snack == undefined) {
      return "The item you selected is unavailable";
    }
    
    if (this.balance < snack.price) {
      var difference = snack.price - this.balance;
      return `Your deposit is insufficient.  Please add Rs ${difference} for this item`;
    }

    if (this.balance > snack.price) {
      var difference = this.balance - snack.price;
      var bills = [500, 100, 50, 20, 10];

      for (var i in bills) {
        while (difference / bills[i] >= 1) {
          output.change.push(bills[i]);
          difference -= bills[i];
        }
      }
    }

    return output;
  }

  cancel(){
    var output = {change: []}
    var bills = [500, 100, 50, 20, 10];

    for (var i in bills) {
      while (this.balance / bills[i] >= 1) {
        output.change.push(bills[i]);
        this.balance -= bills[i];
      }
    }
    return output
  }
}

module.exports = Machine