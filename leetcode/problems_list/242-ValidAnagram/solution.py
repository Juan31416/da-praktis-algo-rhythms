class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        count = {}
        for curr in s:
            count[curr] = count.get(curr, 0) + 1
        for curr in t:
            count[curr] = count.get(curr, 0) - 1
        for val in count.values():
            if val != 0:
                return False
        return True


"""
# Sorted Array Solution Time Complexity O(nlogn) Space Complexity O(n)
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
      sWord = sorted(list(s))
      tWord = sorted(list(t))
      anagramCheck = True
      if (len(sWord) != len(tWord)):
          return not anagramCheck
      for i in range(len(sWord)):
        if (sWord[i] != tWord[i]):
          anagramCheck = False
      return anagramCheck
"""
