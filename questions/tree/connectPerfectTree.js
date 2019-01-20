var connect = function(root, parent, side) {
  if (root === null) return
  if (parent === undefined) {
      root.next = null
  }
  if (side === 'left') {
      root.next = parent.right
  }
  if (side === 'right') {
      if (parent.next !== null) {
          root.next = parent.next.left
      } else {
          root.next = null
      }

  }
  connect(root.left, root, 'left')
  connect(root.right, root, 'right')
};
