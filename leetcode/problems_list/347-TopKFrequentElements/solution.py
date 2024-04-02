"""
:type nums: List[int]
:type k: int
:rtype: List[int]
"""


class Solution(object):
    def topKFrequent(self, nums, k):
        top_elements = {}
        for num in nums:
            if top_elements.get(num) == None:
                top_elements[num] = 0
            top_elements[num] += 1
        return sorted(top_elements, key=top_elements.get, reverse=True)[:k]
