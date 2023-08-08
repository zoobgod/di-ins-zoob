# #ex1
# import random

# def get_random_temp(season):
#     if season == "winter":
#         return random.randint(-10, 16)
#     elif season == "spring" or season == "autumn" or season == "fall":
#         return random.randint(0, 23)
#     elif season == "summer":
#         return random.randint(24, 40)
#     else:
#         return "Invalid season"

# def main():
#     season = input("Enter a season (summer, autumn/fall, winter, spring): ")
#     temp = get_random_temp(season)
#     if type(temp) == int:
#         print("The temperature right now is " + str(temp) + " degrees Celsius.")
#         if temp < 0:
#             print("Brrr, that's freezing! Wear some extra layers today.")
#         elif temp < 16:
#             print("Quite chilly! Don't forget your coat.")
#         elif temp < 24:
#             print("Nice weather! Enjoy your day.")
#         elif temp < 32:
#             print("Getting hot! Stay hydrated, drink some vodka.")
#         else:
#             print("Very hot, wear a sunscreen.")
#     else:
#         print(temp)

# main()

#ex2
# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]

# def ask_questions():
#     correct_answers = 0
#     incorrect_answers = 0
#     wrong_answers = []
#     for question in data:
#         user_answer = input(question["question"] + " ")
#         if user_answer.lower() == question["answer"].lower():
#             correct_answers += 1
#         else:
#             incorrect_answers += 1
#             wrong_answers.append(question["question"])
#     return (correct_answers, incorrect_answers, wrong_answers)

# def inform_user(correct_answers, incorrect_answers, wrong_answers):
#     print("You got " + str(correct_answers) + " questions correct and " + str(incorrect_answers) + " questions incorrect.")
#     if incorrect_answers == 0:
#         print("Great job! You got all the questions right!")
#     elif incorrect_answers == 1:
#         print("Not bad, but you got one question wrong.")
#     else:
#         print("You got " + str(incorrect_answers) + " questions wrong.")
#         print("Here are the questions you got wrong:")
#         for question in wrong_answers:
#             print(question)


# correct, incorrect, wrong = ask_questions()
# inform_user(correct, incorrect, wrong)

#ex3
# from datetime import date

# def get_age(year, month, day):
#     today = date.today()
#     return today.year - year - ((today.month, today.day) < (month, day))

# def can_retire(gender, date_of_birth):
#     year, month, day = map(int, date_of_birth.split("/"))
#     age = get_age(year, month, day)
#     if gender.lower() == "m":
#         retirement_age = 67
#     elif gender.lower() == "f":
#         if date(year, month, day) > date(1947, 4, 30):
#             retirement_age = 67
#         else:
#             retirement_age = 62
#     else:
#         raise ValueError("Invalid gender")
#     return age >= retirement_age


# gender = input("What is your gender? (m/f) ")
# dob = input("What is your date of birth? (yyyy/mm/dd) ")
# if can_retire(gender, dob):
#     print("Congratulations! You can retire and drink vodka everyday!")
# else:
#     print("Sorry, too young to retire, get better at your job for now, then retire.")

#ex4
# def calculate_sum(x):
#     total = 0
#     for i in range(1, 5):
#         total += int(str(x) * i)
#     return total


# x = int(input("Enter a number: "))
# result = calculate_sum(x)
# print(result)

