class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        mapped_values, pair_idx = dict(), []
        for idx, curr in enumerate(nums):
            if (target-curr in mapped_values):
                pair_idx = [idx, mapped_values[target-curr]]
            mapped_values[curr] = idx
        return pair_idx
