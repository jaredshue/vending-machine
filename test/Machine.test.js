const Machine = require('../src/Machine')

describe('The vending machine', () => {
  it('is initialized with no items', () => {
    // SEAT
    // setup
    const vendingMachine = new Machine();

    // exercise & assert
    expect(vendingMachine.seeSelections()).toEqual([])

    // teardown, not needed
  })

  it('can stock one snack', () => {
    // setup
    const vendingMachine = new Machine();
    const snack = {
      name: 'macadamia nuts',
      price: 250
    }

    // exercise
    vendingMachine.stock([snack])

    // assert
    expect(vendingMachine.seeSelections()).toEqual([snack])
  })

  it('displays an error if no inventory comes with stocking', () => {
    // setup
    const vendingMachine = new Machine()
    const displayMessage = "please do not troll. you cannot stock nothing."

    // exercise & assert
    expect(() => vendingMachine.stock()).toThrow(displayMessage)
  })

  it('displays the amount depositted when depositting money', () => {
    const vendingMachine = new Machine()
    const displayMessage = "You have deposited Rs 100"
    expect(vendingMachine.deposit(100)).toEqual(displayMessage);
  })

  it('displays total amount depositted when depositting money multiple times', () => {
    const vendingMachine = new Machine()
    const displayMessage = "You have deposited Rs 150"
    vendingMachine.deposit(100);
    expect(vendingMachine.deposit(50)).toEqual(displayMessage);
  })

  it('displays message indicating that an item is unavailable', () => {
    const vendingMachine = new Machine()
    const displayMessage = "The item you selected is unavailable"

    expect(vendingMachine.selectItem()).toEqual(displayMessage);
  })

  it('displays message indicating that a deposit amount is insufficient when selecting an item', () => {
    const vendingMachine = new Machine()
    const snack = {
      name: 'macadamia nuts',
      price: 250
    }
    const displayMessage = "Your deposit is insufficient.  Please add Rs 250 for this item"

    vendingMachine.stock([snack]);

    expect(vendingMachine.selectItem('macadamia nuts')).toEqual(displayMessage);
  })
})