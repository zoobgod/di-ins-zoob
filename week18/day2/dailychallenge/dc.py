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
# 3
for i in range(0,string_len):
    print(string_list[0:i+1])