export default function getStudentIdsSum(arr) {
  const ids = arr.map((obj) => obj.id);
  return ids.reduce((accumulator, currentValue) => accumulator + currentValue);
}
