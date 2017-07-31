const jsonString = JSON.stringify([
  {
      "name": "Mars",
      "cost": "$2.25", // actually we want the cost as a number
      "tasty": "true", // and this should be boolean, not string
    },
    {
      "name": "Jelly",
      "cost": "$0.20",
      "tasty": "true",
    },
    {
      "name": "Birch",
      "cost": "$20",
      "tasty": "false",
    },
], null, 3);


const parsedData = JSON.parse(jsonString, (key, value) => {
  if (key === 'cost') return Number(value.replace('$', ''));
  if (value === 'true') return true;
  if (value === 'false') return false;

  return value;
});


console.log(parsedData);
