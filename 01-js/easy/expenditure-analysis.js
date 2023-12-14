/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let resultArray = [];

  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    // Find the index of the category in the resultArray
    const categoryIndex = resultArray.findIndex((item) => item.category === category);

    if (categoryIndex !== -1) {
      // If the category already exists, add the price to the totalSpent
      resultArray[categoryIndex].totalSpent += price;
    } else {
      // If the category doesn't exist, create a new object
      resultArray.push({ category, totalSpent: price });
    }
  });

  return resultArray;
}

module.exports = calculateTotalSpentByCategory;
