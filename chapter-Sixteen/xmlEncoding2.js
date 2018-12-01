const mapping = {
  family: '1',
  person: '2',
  firstName: '3',
  lastName: '4',
  state: '5'
}

const personElement = {
  name: 'person',
  attributes: [
    {
      tag: 'firstName',
      value: 'Gayle'
    },
  ],
  value: 'Some Message',
  children: []
}

const familyElement = {
  name: 'family',
  attributes: [
    {
      tag: 'lastName',
      value: 'McDowell'
    },
    {
      tag: 'state',
      value: 'CA'
    }
  ],
  value: null,
  children: [personElement]
}

function xmlEncoding(element, result = []) {
  const keys = Object.keys(element)
  for (var i = 0; i < keys.length; i++) {
    const currKey = keys[i]
    const currAttr = element[currKey]
    if (currKey === 'name') {
      encodeString(currAttr, result, true)
    }
    if (currKey === 'value' && currAttr !== null) {
      encodeString(currAttr, result, false)
    }
    if (currKey === 'attributes') {
      encodeArr(currAttr, result)
    }
    if (currKey === 'children') {
      for (var j = 0; j < currAttr.length; j++) {
        xmlEncoding(currAttr[j], result)
      }
    }
  }
  result.push('0')
  return result.join(' ')
}

function encodeString(str, result, doMapping) {
  const addStr = doMapping ? mapping[str] : str
  result.push(addStr)
}

function encodeArr(arr, result) {
  arr.forEach(attr => {
    encodeString(attr.tag, result, true)
    encodeString(attr.value, result, false)
  })
  result.push('0')
}

console.log(xmlEncoding(familyElement))
