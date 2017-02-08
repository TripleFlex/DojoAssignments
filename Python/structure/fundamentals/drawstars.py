arr = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]

def draw_stars(arr):
    for value in arr:
        if type(value) is str:
            string = ""
            for idx in range(0,len(value)):
                output = value[0]
                string += output.lower()
            print string

        else:
                string = ""
                for idx in range(0,value):
                    string += "*"
                print string

draw_stars(arr)
