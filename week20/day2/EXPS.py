# #1
# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

# cat1 = Cat("Garfield", 3)
# cat2 = Cat("Meowzers", 1)
# cat3 = Cat("Argabashassem", 2000)

# def find_oldest_cat(*args):
#     oldest = None
#     for cat in args:
#         if oldest is None or cat.age > oldest.age:
#             oldest = cat
#     return oldest

# oldest_cat = find_oldest_cat(cat1, cat2, cat3)
# print("The oldest cat is " + oldest_cat.name + ", and is " + str(oldest_cat.age) + " years old.")

#2
# class Dog:
#     def __init__(self, name, height):
#         self.name = name
#         self.height = height

#     def bark(self):
#         print(self.name + " goes woof!")

#     def jump(self):
#         print(self.name + " jumps " + str(self.height * 2) + " cm high!")

# davids_dog = Dog("Rex", 50)
# print("David's dog is named " + davids_dog.name + " and is " + str(davids_dog.height) + " cm tall.")
# davids_dog.bark()
# davids_dog.jump()

# sarahs_dog = Dog("Teacup", 20)
# print("Sarah's dog is named " + sarahs_dog.name + " and is " + str(sarahs_dog.height) + " cm tall.")
# sarahs_dog.bark()
# sarahs_dog.jump()

# if davids_dog.height > sarahs_dog.height:
#     print(davids_dog.name + " is bigger.")
# else:
#     print(sarahs_dog.name + " is bigger.")

#3
# class Song:
#     def __init__(self, lyrics):
#         self.lyrics = lyrics

#     def sing_me_a_song(self):
#         for line in self.lyrics:
#             print(line)

# stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
# stairway.sing_me_a_song()


#4
# class Zoo:
#     def __init__(self, zoo_name):
#         self.name = zoo_name
#         self.animals = []

#     def add_animal(self, new_animal):
#         if new_animal not in self.animals:
#             self.animals.append(new_animal)

#     def get_animals(self):
#         print(self.animals)

#     def sell_animal(self, animal_sold):
#         if animal_sold in self.animals:
#             self.animals.remove(animal_sold)

#     def sort_animals(self):
#         animal_dict = {}
#         for animal in self.animals:
#             if animal[0] not in animal_dict:
#                 animal_dict[animal[0]] = [animal]
#             else:
#                 animal_dict[animal[0]].append(animal)
#         sorted_dict = dict(sorted(animal_dict.items()))
#         return sorted_dict

#     def get_groups(self):
#         animal_dict = self.sort_animals()
#         for key, value in animal_dict.items():
#             print(str(key) + ": " + str(value))

# ramat_gan_safari = Zoo("Ramat Gan Safari")
# ramat_gan_safari.add_animal("Giraffe")
# ramat_gan_safari.add_animal("Lion")
# ramat_gan_safari.add_animal("Bear")
# ramat_gan_safari.add_animal("Elephant")
# ramat_gan_safari.get_animals()
# ramat_gan_safari.sell_animal("Bear")
# ramat_gan_safari.get_animals()
# ramat_gan_safari.get_groups()