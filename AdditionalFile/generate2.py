f = open("timer.txt","w+")
start = 1950
for i in range(65):
        start += 90
        f.write(".container2 svg tspan > tspan:nth-of-type(" + str(i+12) + ") {\n\t animation: draw 300ms " + str(start) + "ms forwards;\n }\n")