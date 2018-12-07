f = open("table.json","w+")
f.write("[ \\\n")
for i in range(50):
    bini = bin(i)[2:]
    hexa = hex(i)[2:]
    octa = oct(i)[1:]
    f.write("{\"bin\":\"" + bini + "\",\"hex\":\"" + hexa + "\",\"oct\":\""+ octa +"\"}, \\\n")
f.write("]")
f.close()