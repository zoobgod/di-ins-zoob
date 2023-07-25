# my_age = 23


# #For example,  
# #my_name = "Frank"  this line creates a name variable type: string 
# #print("My name is {}".format(my_name))

# cars = 100 #int
# space_in_a_car = 4.0 #int
# drivers = 30 #int
# passengers = 90 #int
# cars_not_driven = cars - drivers #int that counts how many cars are driverless
# cars_driven = drivers #int that gets amount of cars driven
# carpool_capacity = cars_driven * space_in_a_car #int that gets amount of cars driven and space in each car
# average_passengers_per_car = passengers / cars_driven #int that gets amount of passengers in each car


# print("There are", cars, "cars available.")
# print("There are only", drivers, "drivers available.")
# print("There will be", cars_not_driven, "empty cars today.")
# print("We can transport", carpool_capacity, "people today.")
# print("We have", passengers, "to carpool today.")
# print("We need to put about", average_passengers_per_car,"in each car.")



number = int(input("Please input a number between 1 and 100"))

if number % 3 == 0:
    print('Fizz')
elif number % 5 == 0:
    print('Buzz')
elif number % 3 == 0 and number%5==0:
    print('FizzBuzz')

