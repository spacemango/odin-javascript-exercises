const findTheOldest = function (people) {

   let result = people
      .map(person => {
         let year = new Date().getFullYear();

         if (!person.yearOfDeath) {
            return ({ ...person, yearOfDeath: year });
         }
         return person;
      })
      .sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth));

   return result[0];
};

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
