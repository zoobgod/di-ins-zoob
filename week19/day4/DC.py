try:
    result = int(input('Please input a number: ')) / 0
except ZeroDivisionError:
    print("You can't divide by zero!")
except ValueError:
    print("You must enter a number!")
else:
    print(result)