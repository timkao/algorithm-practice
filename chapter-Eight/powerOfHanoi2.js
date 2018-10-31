 const orig = [5, 4, 3, 2, 1]
 const buff = []
 const dest = []

 function moveDisks(disks, origin, destination, buffer) {
   if (disks > 0) {
     moveDisks(disks - 1, origin, buffer, destination)
     destination.push(origin.pop())
     moveDisks(disks - 1, buffer, destination, origin)
   }
 }

moveDisks(orig.length, orig, dest, buff)
console.log(orig)
console.log(buff)
console.log(dest)
