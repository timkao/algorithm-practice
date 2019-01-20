var merge = function(nums1, m, nums2, n) {
  let replacePt = m + n - 1
  let n1Pt = m - 1
  let n2Pt = n - 1
  while (replacePt >= 0 && n2Pt >= 0) {
    const n1 = nums1[n1Pt]
    const n2 = nums2[n2Pt]
    if (n1 > n2) {
      nums1[replacePt] = n1
      replacePt -= 1
      n1Pt -= 1
    } else {
      nums1[replacePt] = n2
      replacePt -= 1
      n2Pt -= 1
    }
    if (n1Pt < 0) {
      pasteAll(nums1, nums2, replacePt, n2Pt)
      break
    }
  }
};

function pasteAll(arr1, arr2, p1, p2) {
  while (p2 >= 0) {
    arr1[p1] = arr2[p2]
    p1 -= 1
    p2 -= 1
  }
}
