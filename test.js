const { dateDifference, getDetailedDifference } = require('./index');

const date1 = '2022-02-10';
const date2 = '2024-12-14';


console.log('Difference in years:', dateDifference(date1, date2, 'years'));
console.log('Difference in months:', dateDifference(date1, date2, 'months'));
console.log('Difference in days:', dateDifference(date1, date2, 'days'));


const detailedDifference = getDetailedDifference(date1, date2);
console.log('Detailed difference:', detailedDifference);
