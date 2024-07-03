export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((obj) => obj.location === city)
    .map((obj) => {
      const grades = newGrades.find((grade) => grade.studentId === obj.id);
      const grade = grades ? grades.grade : 'N/A';
      return { ...obj, grade };
    });
}
