var leastInterval = function(tasks, n) {
  const [bases, times, rest] = findBases(tasks)
  const intervals = times - 1
  const emptySpace = n - (bases - 1)
  if (emptySpace <= 0) return bases * times + rest
  if (intervals * emptySpace >= rest) return bases * times + intervals * emptySpace
  return bases * times + rest
};

function findBases(tasks) {
  const taskMap = {}
  tasks.forEach(task => {
      if (taskMap[task] === undefined) {
          taskMap[task] = 1
      } else {
          taskMap[task] += 1
      }
  })
  let maxTasks = []
  let maxTaskCount = 0
  Object.keys(taskMap).forEach(taskKey => {
      const curCount = taskMap[taskKey]
      if (curCount > maxTaskCount) {
          maxTaskCount = curCount
          maxTasks = [taskKey]
      } else if (curCount === maxTaskCount) {
          maxTasks.push(taskKey)
      }
  })
  return [maxTasks.length, maxTaskCount, tasks.length - maxTasks.length * maxTaskCount]
}
