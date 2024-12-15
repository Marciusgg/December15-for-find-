const items = [
  { id: 1, name: "Christmas Candles", price: 1.75, categoryId: 1, inventory: 100 },
  { id: 2, name: "Santa Claus Hat", price: 0.25, categoryId: 1, inventory: 100 },
  { id: 3, name: "Ornaments", price: 1.0, categoryId: 1, inventory: 100 },
  { id: 4, name: "Stockings", price: 3.0, categoryId: 2, inventory: 100 },
  { id: 5, name: "Gingerbread House", price: 1.0, categoryId: 2, inventory: 100 },
  { id: 6, name: "Candy Canes", price: 5.75, categoryId: 3, inventory: 100 },
  { id: 7, name: "Elf Figurines", price: 4.0, categoryId: 3, inventory: 100 },
  { id: 8, name: "Snow Globes", price: 5.5, categoryId: 4, inventory: 100 },
];
// Funkcija pažengusiam naudojant .find() metodą, rodyklės funkcijas ir sąligines išraiškas. Kol kas pačiam sunku suvokto, bet kodas gerokai sutrumpinamas, tačiau sunkiau suprantamas.
function getItemPriceByName(itemName) {
  // Naudojamas .find() ir rodyklės vietoj for loop'o. Sukuriamas naujas kintamasis item jame naudojamas .find(), kuriuo kaip ir su 'for' analizuojami duomenų lentelė ir ieškoma vardo atitikties su įvestimi.
  const item = items.find(i => i.name === itemName);
  // Vietoj if naudojami 'conditional expressions' - sąliginės išraiškos. "Jeigu salyga 'item' yra tiesa(?) grąžiname 'item.price', jeigu netiesa(:) grąžiname 'There is no such product.'"
  return item ? item.price : 'There is no such product.';
}
let price = getItemPriceByName("Candy Canes");
console.log(price);