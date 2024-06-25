export default function returnHowManyArguments(...theArgs) {
  let count = 0;
  for (const arg of theArgs) { // eslint-disable-line no-unused-vars
    count += 1;
  }
  return count;
}
