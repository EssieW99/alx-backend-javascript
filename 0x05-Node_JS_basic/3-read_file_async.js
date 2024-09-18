const fs = require('fs').promises;

function countStudents(filepath) {
  return fs.readFile(filepath, 'utf-8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.length > 0);
      const header = lines.shift().split(','); // eslint-disable-line no-unused-vars
      const students = lines.map((line) => {
        const values = line.split(',');
        return {
          firstname: values[0],
          field: values[3],
        };
      });

      console.log(`Number of students: ${students.length}`);

      // create an object to store field counts
      const counts = {};

      // count students in each field
      students.forEach((student) => {
        if (!counts[student.field]) {
          counts[student.field] = [];
        }
        counts[student.field].push(student.firstname);
      });
      for (const [field, names] of Object.entries(counts)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
