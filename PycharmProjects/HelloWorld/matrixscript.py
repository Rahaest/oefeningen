import re

# Input rows & columns
script_input = input().split()
n = int(script_input[0])
m = int(script_input[1])

matrix = []
# Input of data
for _ in range(n):
    matrix_item = input()
    matrix.append(matrix_item)

# Zip combines the lists, * is used to unpack arguments from the list
matrix = list(zip(*matrix))

message = ""

for word in matrix:
    for char in word:
        message += char
# \W+ will match any character that's not alphanumeric and replaces them with space.
print(re.sub(r"(\W+)", ' ', message))
