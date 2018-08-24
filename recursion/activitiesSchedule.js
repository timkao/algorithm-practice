const example = [[2, 7], [1, 8], [3, 6], [2, 4], [5, 9]]


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
