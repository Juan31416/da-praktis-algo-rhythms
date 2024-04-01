"""
Problem: Anagrams Grouping
Source: https://leetcode.com/problems/group-anagrams/
Time Complexity: O(n * m * log(m))
Space Complexity: O(n)

"""


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        grouped_anagrams = {}
        ans = []
        for curr in strs:
            sorted_string = ''.join(sorted(curr))
            if sorted_string in grouped_anagrams:
                ans[grouped_anagrams.get(sorted_string)].append(curr)
            else:
                grouped_anagrams[sorted_string] = len(ans)
                ans.append([curr])
        return ans
