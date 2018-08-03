class Solution(object):
    def twoSum(self, nums, target):
        nums.sort()
        result = []
        slen = len(nums)
        for i in range(slen - 1):
            for j in range(i + 1, slen):
                if nums[i] + nums[j] == target:
                    result.append(i)
                    result.append(j)
                    return result

if __name__ == '__main__':
    souletion = Solution()
    res = souletion.twoSum([3, 2, 4], 6)
    print res

