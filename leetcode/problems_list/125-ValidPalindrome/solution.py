
# Time complexity: O(n)
# Space complexity: O(n)
class Solution:
    def isPalindrome(self, s: str) -> bool:
        clean_string = "".join(filter(str.isalnum, s.lower()))
        right_index, left_index = len(clean_string) - 1, 0
        while left_index < right_index:
            if clean_string[left_index] != clean_string[right_index]:
                return False
            left_index += 1
            right_index -= 1
        return True


'''
# Time complexity: O(n)
# Space complexity: O(n)
    def isPalindrome(self, s: str) -> bool:
        clean_string = "".join(filter(str.isalnum, s.lower()))
        print(clean_string, clean_string[::-1])
        return clean_string == clean_string[::-1]
'''
