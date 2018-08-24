const example = [[2, 7], [1, 8], [3, 6], [2, 4], [5, 9], [0, 1]]


// go through all the possibilities
function schedule(activities, schedules = []) {
  if (activities.length === 0) {
    return schedules.length;
  }

  const result = [];

  for (var i = 0; i < activities.length; i++) {
    const currentActivity = activities[i];
    const newSchedules = schedules.concat([currentActivity]);

    // update activities
    const activitiesWithoutOverlap = activities.filter(activity => {
      return activity[1] < currentActivity[0] || activity[0] > currentActivity[1]
    })
    const otherActivities = activities.slice(0, i).concat(activities.slice(i + 1, activities.length))

    result.push(Math.max(schedule(activitiesWithoutOverlap, newSchedules), schedule(otherActivities, schedules)))
  }

  return Math.max(...result);

}

console.log(schedule(example))


// optimize with Math
function scheduleOpt(activities, schedule = []) {

  if (activities.length === 0) {
    console.log(schedule);
    return schedule.length;
  }


  // sort activites
  const sortedActs = activities.sort((a, b) => {
    return a[1] > b[1]
  }).concat()

  // take the first one, update schedule
  const currentAct = sortedActs[0];
  const newSchedule = schedule.concat([currentAct]);
  // remove overlaps
  const actsWithoutOverlap = sortedActs.filter(act => {
    return currentAct[0] > act[1] || currentAct[1] < act[0]
  })

  // not take the first one, use old schedule

  // remove first one
  const actsWithoutCurrent = sortedActs.slice(1, sortedActs.length);

  return Math.max(scheduleOpt(actsWithoutOverlap, newSchedule), scheduleOpt(actsWithoutCurrent, schedule))
}

console.log(scheduleOpt(example));
