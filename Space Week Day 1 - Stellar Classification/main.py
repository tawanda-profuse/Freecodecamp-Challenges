def classification(temp):
    if temp >= 30000: return "0"
    elif 10000 <= temp < 29999: return "B" 
    elif 7500 <= temp <= 9999: return "A"
    elif 6000 <= temp <= 7499: return "F"
    elif 5200 < temp < 5999: return "G"
    elif 3700 <= temp <= 5199: return "K"
    else: return "M"

print(classification(5778))
print(classification(2400))
print(classification(9999))
print(classification(3700))
print(classification(3699))
print(classification(210000))
print(classification(6000))
print(classification(11432))