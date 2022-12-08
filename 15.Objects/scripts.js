// ----------------------
// --------Objects-------
// ----------------------

/*
    In Javascript objects are variables that has many values.
    Those values written as name:value pairs called properties or methods.
*/

// --[1]Object Literals--
// Comma-separated list of (name-value pairs )wrapped in curly braces.
var nimal = {
    firstName: 'Nimal',
    lastName: 'Perera',   //Single Variables
    age: 24,

    isMarried: false,
    job: 'Developer',
                                    //Arrary
    subjects: ['Java Programming', 'Web Development', 'Graphic Design', 'Database Management'],

    degree: {
        name: 'Software Eng.',  //object ekak athle thawa object ekak hadima
        duration: '4 years',
        credits: 120
    },
    projects: [
        {
            name: 'Ecomerce App',  
            technology: 'Flutter',
            version: 1.1
        },
        {
            name: 'Music Player',     //Arrary eke athule object
            technology: 'Java',
            version: 1.2
        },
        {
            name: 'POS',
            technology: 'C#',
            version: 2.0
        }
           // me okkama lakshan object eke..

    ],
    yearOfBirth: function(year){  //Meka method ekak
        return year-this.age;    //this eka denne me object eke thina valu eka ganna kiyala kiyanne
    }
}

// Get values
console.log(nimal);
console.log(nimal.firstName);
console.log(nimal['lastName']);
var x = 'age';
console.log(nimal[x]);
console.log(nimal.subjects[2]);
console.log(nimal['subjects'][3]);     //Data ganna puluwan widi - 1)name.degree.
                                                          //       2)name.['degree'].
console.log(nimal.degree.name);
console.log(nimal['degree'].credits);
console.log(nimal.projects[1].technology);
console.log('Year of Birth : '+nimal.yearOfBirth(2021));

// Modify values
nimal.job = 'Engineer';
nimal['isMarried'] = true;
console.log(nimal);

// --[2]new Object syntax--s
var kasun = new Object();
// Add Properties
kasun.firstName = 'Kasun';
kasun.lastName = 'Fernando';
kasun['age'] = 30;

console.log(kasun);
