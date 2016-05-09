class Solution(object):
    def twoSum(self, nums, target):
        result = []
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                if nums[i] + nums[j] == target:
                    result.append(i)
                    result.append(j)
                    return result

if __name__ == '__main__':
    souletion = Solution()
    res = souletion.twoSum([3,2,4], 6)
    print res