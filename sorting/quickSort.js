function partition(arr, begin, width) {
  const pivot = arr[width - 1];
  let spacePointer = width - 1;
  let wall = begin;

  for (var i = begin; i < width - 1; i++) {
    const currValue = arr[i];
    if (currValue <= pivot) {
      arr[i] = arr[wall]
      arr[wall] = currValue;
      if (wall === spacePointer) {
        spacePointer = i;
      }
      wall++
    } else {
      arr[i] = arr[width - 1]
      arr[width - 1] = currValue
      if (width - 1 === spacePointer) {
        spacePointer = i;
      }
    }
  }

  if (wall === spacePointer) {
    arr[wall] = pivot;
  } else {
    arr[spacePointer] = arr[wall]
    arr[wall] = pivot
  }

  return wall;
}


function quickSort(arr, width, begin = 0) {
  if (width - begin <= 1) {
    return arr
  }
  const partitionPoint = partition(arr, begin, width)
  quickSort(arr, partitionPoint)
  quickSort(arr, width, partitionPoint + 1)
  return arr
}

const example = [2, 9, 15, 10, 8, 22, 3, 11];

console.log(partition(example, 0, 8));
console.log(quickSort(example, example.length))
