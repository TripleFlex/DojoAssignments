from random import randint


print "Starting the program..."
def coinToss():
    heads = 0
    tails = 0
    for count in range(1,5001):
        flip = randint(0,1)
        if flip == 0:
            heads+=1
            print "Attempt #" + str(count) + " Throwing a coin... its a Head! ... Got" + str(heads) + " head(s) so far and" + str(tails) + " tail(s) so far"

        else:
            tails+=1
            print "Attempt #" + str(count) + " Throwing a coin... its a Tail!... Got" + str(heads) + " head(s) so far and" + str(tails) + " tail(s) so far"

    print "Ending the program, thank you"

coinToss()
