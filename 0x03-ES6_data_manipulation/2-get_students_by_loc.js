export default function getStudentsByLocation(arr, city) {
  const students = arr.filter((word) => word.location === city);

  return students;
}
