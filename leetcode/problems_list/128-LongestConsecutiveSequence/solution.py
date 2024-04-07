class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        num_set = set(nums)
        longest = 0
        for num in num_set:
            if num - 1 not in num_set:
                end = num + 1
                while end in num_set:
                    end += 1
                    longest = max(longest, end - num)
        return 1 if (longest == 0 and len(num_set) > 0) else longest
