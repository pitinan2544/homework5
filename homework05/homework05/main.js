const persons = [
    { name: 'John', sex: 'M' },
    { name: 'Jody', sex: 'M' },
    { name: 'Susan', sex: 'F' },
    { name: 'Kate', sex: 'F' },
    { name: 'Sid', sex: 'M' }
  ];
  
  const result = persons.reduce((acc, person) => {
    if (!acc[person.sex]) {
      acc[person.sex] = [person.name];
    } else {
      acc[person.sex].push(person.name);
    }
    return acc;
  }, {});
  
  console.log(result);
  