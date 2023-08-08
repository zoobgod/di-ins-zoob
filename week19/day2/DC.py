# matrix = [
#     "7ii",
#     "Tsx",
#     "h%?",
#     "i #",
#     "sM ",
#     "$a ",
#     "#t%",
#     "^r!"
# ]

# message = ""

# for col in range(len(matrix[0])):
#     for row in range(len(matrix)):
#         char = matrix[row][col]
#         if char.isalpha():
#             message += char
#     message += " "

# print(message)


# from functools import reduce

# def sum_list(lst):
#     total = 0
#     for num in lst:
#         try:
#             total += num
#         except TypeError:
#             pass
#     return total

# my_list = [2, 3, 1, 2, "four", 42, 1, 5, 3, "imanumber"]
# sum_of_every = sum_list(my_list)
# print(sum_of_every)