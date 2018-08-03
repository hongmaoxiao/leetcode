#!/usr/bin/env python
# encoding: utf-8


class Solution(object):
    def threeSum(self, nums):
        nums = sorted(nums)
        length = len(nums)
        result = []
        for i in range(length - 2):
            target = nums[i]
            if i >= 1 and nums[i - 1] == target:
                continue
            left = i + 1
            right = length - 1
            while left < right:
                leftdata = nums[left]
                rightdata = nums[right]
                if leftdata + rightdata == -target:
                    result.append([target, leftdata, rightdata])
                    while left < right:
                        left += 1
                        right -= 1
                        if nums[left] != leftdata or nums[right] != rightdata:
                            break
                elif leftdata + rightdata > -target:
                    while left < right:
                        right -= 1
                        if rightdata != nums[right]:
                            break
                else:
                    while left < right:
                        left += 1
                        if leftdata != nums[left]:
                            break

        return result

if __name__ == "__main__":
    sl = Solution()
    res = sl.threeSum([-1, 0, 1, 2, -1, -4])
    print(res)
