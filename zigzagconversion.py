#!/usr/bin/env python
# encoding: utf-8


class Solution(object):
    def convert(self, s, numRows):
        row = 0
        col = 0
        slen = len(s)
        if numRows <= 0:
            return
        elif numRows == 1:
            return s
        else:
            row = numRows
            gap = numRows - 2
            div = slen / (numRows + gap)
            remainder = slen % (numRows + gap)

            result = ''
            if remainder == 0:
                col = (1 + gap) * div
            else:
                if remainder <= numRows:
                    col = (1 + gap) * div + 1
                else:
                    col = (1 + gap) * div + remainder % numRows + 1
            ls = [([''] * col) for i in xrange(row)]
            count = slen - 1
            for i in xrange(col):
                if i % (gap + 1) == 0:
                    for j in xrange(row):
                        if count > 0:
                            ls[j][i] = s[count]
                            count -= 1
                else:
                    for j in xrange(row - 1, -1, -1):
                        if (j + i) % (numRows - 1) == 0:
                            if count > 0:
                                ls[j][i] = s[count]
                                count -= 1
            for i in xrange(row):
                for j in xrange(col):
                    if ls[i][j] != '':
                        result += ls[i][j]
            return result

if __name__ == "__main__":
    ss = Solution()
    res = ss.convert("PAYPALISHIRING", 3)
    print res
