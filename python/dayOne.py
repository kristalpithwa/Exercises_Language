name = "kristal"
experience = 2
hourly_rate = 20
is_learning_ai = True

print("name =>", name)
print("experience =>", experience)

print("type of name =>",type(name))
print("type of experience =>" ,type(experience))


# ============== GST calculator ===============================

product_price = 300
gst = 18

total_gst = product_price*gst/100
final_price= product_price + total_gst


print("Product Price =", product_price)
print("GST Percentage =", gst,"%")
print("GST Amount =", total_gst)
print("Final Price =" ,final_price)

# =================== Developer Profile =============================

# Name
# Years of experience
# Current technology
# Target technology


name = input("Enter Name: ")
experience = int(input("Enter Experience: "))
current_tech = input("Enter Current Technology: ")
target_tech = input("Enter Target Technology: ")

print("Name:", name)
print("Experience:", experience)
print("Current Technology:", current_tech)
print("Target Technology:", target_tech)