string_inp=input("Please input a string that is 10 chars long")
string_len=len(string_inp)
if string_len > 10:
    print("Too long")
elif string_len < 10:
    print("Too short")
else:
    print("Perfect length")

#2

string_list=list(string_inp)
print(f"First char: {string_list[0]}, last char: {string_list[-1]}")

# print(f"{string_inp[0]} {string_inp[-1]}")

# 3
for i in range(0,string_len):
    print(string_list[0:i+1])


user_num=input('Please GIMME A NUM from 1 to 10:')
numbers1 = [1,2,3,4,5,6,7,8,9,10]
for i in numbers1:
       print(f"{user_num} x {i} = {int(user_num)*i}")

