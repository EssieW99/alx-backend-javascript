import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arr = [];
  const sizes = [19, 20, 34];

  for (const size of sizes) {
    arr.push(new ClassRoom(size));
  }
  return arr;
}
