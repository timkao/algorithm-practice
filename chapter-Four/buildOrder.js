/*
  interview question 4.7
*/

function buildOrder(projects, relations) {
  const independent = [];
  let result = [];
  const graphMap = {}
  // turn all projects into map
  for (var i = 0; i < projects.length; i++) {
    graphMap[projects[i]] = [[], []]  // parents, children
  }

  // put relations in the graph
  for (var j = 0; j < relations.length; j++) {
    if (graphMap[relations[j][0]] && graphMap[relations[j][1]]) {
      const parent = relations[j][0];
      const child = relations[j][1]
    // parents -> children relationship
      graphMap[parent][1].push(child);
    // children -> parents relationship
      graphMap[child][0].push(parent);
    }
  }

  // find independent project
  for (var k = 0; k < projects.length; k++) {
    if (graphMap[projects[k]][0].length === 0) {
      independent.push(projects[k]);
      result.push(projects[k]);
    }
  }

  // find dependent project based on independent projects
  for (var m = 0; m < independent.length; m++) {
    result = traverseChildren(independent[m], graphMap, result, [independent[m]]);
  }

  // compare the result
  if (result.length === projects.length) {
    return result;
  } else {
    throw new Error('No route!')
  }
}

function traverseChildren(key, map, result, parents) {
  const children = map[key][1];
  const ownParents = map[key][0];
  // console.log('key: ', key )
  // console.log('children: ', children )
  // console.log('parents:', ownParents)
  // console.log('current parents: ', parents)

  // remember the parents. need to have all the parents to unlock next node
  if (!result.includes(key) && hasAllParents(parents, ownParents)) {
    result.push(key);
    parents.push(key);
  }
  if (children.length === 0 ) {
    return result
  }
  for (var i = 0; i < children.length; i++) {
    if (!result.includes(children[i])) { // prevent loop
      traverseChildren(children[i], map, result, parents);
    }
  }
  return result
}

function hasAllParents(allParents, ownParents) {
  for (var i = 0; i < ownParents.length; i++) {
    if (!allParents.includes(ownParents[i])) {
      return false;
    }
  }
  return true;
}


/*
  testing case
*/

console.log(buildOrder(['a', 'b', 'c', 'd', 'e', 'f'], [
  ['a', 'd'],
  ['f', 'b'],
  ['b', 'd'],
  ['f', 'a'],
  ['d', 'c']
]))


console.log(buildOrder(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], [
  ['f', 'c'],
  ['f', 'b'],
  ['c', 'a'],
  ['f', 'a'],
  ['b', 'a'],
  ['a', 'e'],
  ['b', 'e'],
  ['b', 'h'],
  ['d', 'g']
]))

/*
  Efficiency
  Time:
*/
