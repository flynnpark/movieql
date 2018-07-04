export const people = [
  {
    id: 0,
    name: 'Flynn',
    age: 27,
    gender: 'male'
  },
  {
    id: 1,
    name: 'Amie',
    age: 27,
    gender: 'male'
  },
  {
    id: 2,
    name: 'Dal',
    age: 33,
    gender: 'male'
  },
  {
    id: 3,
    name: 'Yesdoing',
    age: 27,
    gender: 'male'
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id);
  return filteredPeople[0];
};
