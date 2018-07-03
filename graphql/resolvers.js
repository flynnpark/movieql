const flynn = {
  name: 'Flynn',
  age: 27,
  gender: 'male'
};

const resolvers = {
  Query: {
    person: () => flynn
  }
};

export default resolvers;
