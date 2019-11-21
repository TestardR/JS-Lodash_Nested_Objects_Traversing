const _ = require('lodash')

const data = {
    person: {
        age: {
            public: 40, private: 51
        }
    }
}

const path = 'age.public'

const age = _.get(data.person, path)
console.log(data.person.age.public)
console.log(age);



