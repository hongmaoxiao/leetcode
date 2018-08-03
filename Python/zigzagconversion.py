#!/usr/bin/env python
# encoding: utf-8


class Solution(object):
    def convert(self, s, numRows):
        slen = len(s)
        result = ""
        if slen == 0 or numRows <= 0:
            return result
        elif numRows == 1:
            result = s
        else:
            count = 0
            step = 2 * (numRows - 1)
            for i in range(numRows):
                gap = step - 2 * i
                for j in range(i, slen, step):
                    result += s[j]
                    count += 1
                    if gap > 0 and gap < step and j + gap < slen and count < slen:
                        result += s[j + gap]
                        count += 1
        return result


if __name__ == "__main__":
    ss = Solution()
    res = ss.convert("PAYPALISHIRING", 3)
    print res
