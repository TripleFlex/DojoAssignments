def odd_even():
    for count in range(1,2001):
        if count % 2 == 0:
            print "Number is "+ str(count) + ". This Number is Even."
        else:
            print "Number is " + str(count) + ". This Number is odd."

print odd_even()


a = [2,4,10,16]
b = 5

def multiply(a,b):
    y = []
    for value in a:
        x=value*b
        y.append(x)
    return y

print multiply(a,b)
