function ol_1() {
  function createBookShop(inventory) {
    return {
      inventory,
      inventoryValue() {
        return inventory.reduce((total, book) => (total + book.price), 0);
      },
      priceForTitle(title) {
        const book = inventory.find(book => book.title.toLowerCase().trim() === title.toLowerCase().trim());
        if (!book) return '<no title found>';
        return book.price;
      }
    };
  }

  const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'Eloquent Javascript', price: 15 }
  ];

  const bookShop = createBookShop(inventory);

  console.log(`Total Inventory Value is: $${bookShop.inventoryValue()}`);

  console.log(bookShop.priceForTitle('test'));

  const bookTitleToFind = "Harry Potter";
  console.log(`Price for "${bookTitleToFind}" is $${bookShop.priceForTitle(bookTitleToFind)}`);

}

function ol_2() {

  function saveFile(url, data) {
    $.ajax({
      method: 'POST',
      url,
      data
    });
  }

  const url = 'http://fileupload.com';
  const data = { color: 'red' };
  saveFile(url, data);

}

ol_2();