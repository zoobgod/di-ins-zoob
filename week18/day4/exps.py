# ex1

# my_fav_numbers = {1,47,19,11}

# added_nums = {2,3,4}

# my_fav_numbers.update(added_nums)

# print(my_fav_numbers)

# friend_fav_numbers = {8, 0, 30, 999}

# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

# print(our_fav_numbers)

#ex2

# no, it isnt possible

#3

# basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# basket.remove("Banana")
# basket.remove("Blueberries")
# basket.append("Kiwi")
# basket.insert(0,"Apples")
# basket.count{"Apples"}
# basket.clear()

# print(basket)

#ex4

# integer is a number that doesnt have a decimal point, float is a number that does have a decimal point

# sequence_of_floats = [float(i)/2 for i in range(0,11)]
# print(sequence_of_floats)

# ex5
# def func():
#     for i in range(1, 21):
#         print(i)
# func()

# def func1():
#     for i in range(1, 21):
#         if i%2==0:
#             print(i)
# func1()



#ex6
# name = ""
# while name != "Nikita":
#     name = input("What is your name? ")

#ex7
# Ask the user to input their favorite fruit(s)
# favorite_fruits_str = input("What is your favorite fruit(s)? (separate with a single space) ")
# favorite_fruits = favorite_fruits_str.split()

# Ask the user to input a name of any fruit
# chosen_fruit = input("Choose a fruit: ")

# Check if the chosen fruit is in the favorite fruits list
# if chosen_fruit in favorite_fruits:
#     print("You chose one of your favorite fruits! Enjoy!")
# else:
#     print("You chose a new fruit. I hope you enjoy.")

#ex8
# toppings = []
# while True:
#     topping = input("Enter a pizza topping (or 'quit' to finish): ")
#     if topping == "quit":
#         break
#     toppings.append(topping)
#     print("Adding " + topping + " to your pizza.")
    
# price = 10 + 2.5 * len(toppings)
# print("Your pizza with toppings " + ", ".join(toppings) + " costs $" + str(price) + ".")

#ex9
# def calculate_ticket_price(age):
#     if age < 3:
#         return 0
#     elif 3 <= age <= 12:
#         return 10
#     else:
#         return 15

# def main_ticket_keeper():
#     family_count = int(input("How many family members want a ticket? "))
#     total_cost = 0

#     for i in range(family_count):
#         age = int(input(f"Enter the age of family member {i+1}: "))
#         total_cost += calculate_ticket_price(age)

#     print(f"The total cost of all the family's tickets is: ${total_cost}")

# main_ticket_keeper()

#2
# def is_permitted_to_watch(age):
#     return 16 <= age <= 21

# def main_restricted_movie():
#     teenagers = ["Alice", "Bob", "Charlie", "David", "Eva"]
#     permitted_teenagers = []

#     for teen in teenagers:
#         age = int(input(f"Enter the age of {teen}: "))
#         if is_permitted_to_watch(age):
#             permitted_teenagers.append(teen)

#     print("Teenagers permitted to watch the movie are:", permitted_teenagers)

# main_restricted_movie()

#ex10

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# Remove all occurrences of "Pastrami sandwich" from sandwich_orders
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

# Prepare the orders of the clients
finished_sandwiches = []
while sandwich_orders:
    sandwich = sandwich_orders.pop()
    finished_sandwiches.append(sandwich)
    print("I made your " + sandwich.lower() + ".")
