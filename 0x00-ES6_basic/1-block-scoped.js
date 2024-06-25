export default function taskBlock(trueOrFalse) {
  if (trueOrFalse) {
    const task = true; // eslint-disable-line no-unused-vars
    const task2 = false; // eslint-disable-line no-unused-vars
  }

  const task = false;
  const task2 = true;
  return [task, task2];
}
