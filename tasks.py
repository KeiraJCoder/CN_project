def coffee_order(size, drink_type):

     print(f"Here’s your {size} {drink_type}.") 
     
coffee_order("large", "latte")



actual_pin = 1234 
balance = 500 

def cash_machine(entered_pin, amount): 
     global balance 

     if entered_pin == actual_pin and amount <= balance: 
          balance -= amount 
          print(f"Dispensing cash of £{amount}. Your new balance is £{balance}.") 
     elif entered_pin == actual_pin and amount > balance: 
          print(f"Insufficient funds, you cannot withdraw £{amount}. You only have £{balance} in your account.") 
     else: 
          print("Incorrect PIN") 

cash_machine(1234, 400) 


for i in range(1, 11): 
     print(i) 