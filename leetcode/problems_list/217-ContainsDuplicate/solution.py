class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        dictionarySet = {}
        for num in nums:
            dictionarySet[num] = True
        return len(dictionarySet) != len(nums)
