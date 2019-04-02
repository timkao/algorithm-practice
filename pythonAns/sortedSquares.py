import collections

class Solution:
  def sortedSquares(self, A):
    res = collections.deque()
    lef, rig = 0, len(A) - 1
    while lef <= rig:
      left, right = abs(A[lef]), abs(A[rig])
      if left > right:
        res.appendleft(left * left)
        lef += 1
      else:
        res.appendleft(right * right)
        rig -= 1
    return list(res)
