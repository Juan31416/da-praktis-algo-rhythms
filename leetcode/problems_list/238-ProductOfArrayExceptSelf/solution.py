"""
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
"""
# Time complexity: O(n)
# Space complexity: O(1)


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = [1]*len(nums)
        left = 1
        for i in range(len(nums)):
            res[i] = left
            left *= nums[i]
        right = 1
        for i in range(len(nums)-1, -1, -1):
            res[i] *= right
            right *= nums[i]

        return res
