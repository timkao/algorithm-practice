/*
  interview question 16.12
*/

const compressedStr = {
  family: '1',
  person: '2',
  firstName: '3',
  lastName: '4',
  state: '5'
}

function xmlEncoding(xml) {
  const specailChar = ['=', '"', '>', '<', ' ']
  let result = ''
  let tagName = ''
  let endTag = false;
  let inTag = false;
  let inQoute = false
  for (var i = 0; i < xml.length; i++) {
    if (xml[i] === '<' && !inQoute) {
      if (isTagHead(xml, i + 1)) {
        inTag = true
        if (tagName.length > 0) {
          result += tagName + ' '
          tagName = ''
        }
      }
    }

    if (inQoute || !inTag) {
      if (xml[i] !== '"') {tagName += xml[i]}
    } else {
      if (!endTag && !specailChar.includes(xml[i])) { tagName += xml[i] }
    }

    if (!inQoute && inTag && (xml[i] === ' ' || xml[i] === '=')) {
      if (tagName.length > 0) {
        result += compressedStr[tagName] + ' '
        tagName = ''
      }
    }

    if (xml[i] === '"') {
      inQoute = !inQoute
      if (inQoute === false) {
        result += tagName + ' '
        tagName = ''
      }
    }

    if (xml[i] === '>' && !inQoute) {
      if (i === xml.length - 1) { result += '0'}
      else if (isTagEnd(xml, i - 1)) {
        result += '0' + ' '
        endTag = false
        inTag = false
        tagName = ''
      }
    }
    if (xml[i] === '/' && !inQoute) { endTag = true}
  }
  return result;
}


function isTagHead(doc, start) {
  let quote = false
  for (var i = start; i < doc.length; i++) {
    if (doc[i] === '"') { quote = !quote}
    if (!quote) {
      if (doc[i] === '<') { return false}
      if (doc[i] === '>') { return true}
    }
  }
}

function isTagEnd(doc, end) {
  let quote = false
  for (var i = end; i >= 0; i--) {
    if (doc[i] === '"') { quote = !quote}
    if (!quote) {
      if (doc[i] === '<') { return true}
      if (doc[i] === '>') { return false}
    }
  }
}

console.log(xmlEncoding('<family lastName="McDowell" state="CA"><person firstName="Gayle">Some Message</person></family>'))


/*
  root => current tag
  root.name => current tag name
  root.attributes => array of attributes of the tag
  root.children => children of the tag
  root.value => value of the tag
*/

function xmlEncodeBook(root, result = []) {
  encode(root.name, result, true);
  for (var i = 0; i < root.attributes.length; i++) {
    encode(root.attributes[i], result, true)
  }
  if (root.value !== null && root.value !== '') {
    encode(root.value, result, false)
  } else {
    for (var j = 0; j < root.children.length; j++) {
      xmlEncodeBook(root.children[j], result)
    }
  }
  encode('0', result, false)
  return result.join(' ');
}

function encode(target, result, compressing) {
  if (compressing) {
    result.push(compressedStr[target])
  } else {
    result.push(target)
  }
}
