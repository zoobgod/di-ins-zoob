class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = {}

    def add_animal(self, animal, quantity=1):
        if animal in self.animals:
            self.animals[animal] += quantity
        else:
            self.animals[animal] = quantity

    def get_info(self):
        animal_info = []
        for animal, quantity in self.animals.items():
            animal_info.append(f"{animal} : {quantity}")
        return f"{self.name}'s farm\n\n" + "\n".join(animal_info) + "\n\nE-I-E-I-0!"

macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())

