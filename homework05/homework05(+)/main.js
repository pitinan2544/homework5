const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const res = [
  { day: "mon", sum: 100 },
  { day: "wed", sum: 300 }
];

// Create a map to store sums based on days
const sumMap = new Map(res.map(item => [item.day, item.sum]));

// Create the final array with all days
const finalArray = days.map(day => ({
  day,
  sum: sumMap.has(day) ? sumMap.get(day) : 0
}));

console.log(finalArray);
