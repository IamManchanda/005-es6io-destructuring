/**
 * JS
 */

const details = ['Harry Manchanda', 123, 'harry.zone'];
const [name, id, website] = details;

const data = 'Basketball,Sports,90210,23,wes,bos,cool';

const [itemName, category, sku, inventory] = data.split(',');
console.log(itemName, category, sku, inventory);

const team = ['Wes', 'Harry', 'Sarah', 'Keegan', 'Riker'];
const [captain, assistant, ...players] = team;