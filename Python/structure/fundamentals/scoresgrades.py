from random import randint

print "Scores and Grades"
for count in range(0,10):
    score = randint(60,100)

    if(score >=90):
        grade = "A"
    elif(score >=80):
        grade = "B"
    elif(score >=70):
        grade = "C"
    else:
        grade = "D"

    print ("Score: " + str(score) + "; Your grade is " + str(grade))

print "end of program. Bye!"
