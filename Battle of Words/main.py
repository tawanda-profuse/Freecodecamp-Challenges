def battle(our_team, opponent):
    alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    our_score=0
    opponent_score=0

    # Helper function
    def check_string(arr, current):
        is_capital_inside=False
        is_lower_inside=False
        current_index=0

        for i in range(len(arr)):
            if arr[i].upper() == current:
                # Update both values to avoid repeating
                is_capital_inside=True
                current_index = i
        for i in range(len(arr)):
            if arr[i].lower() == current:
                is_lower_inside=True
        
        return {'is_capital_inside': is_capital_inside, 'is_lower_inside': is_lower_inside, 'current_index': current_index}
     
    # Iterate over our_team        
    for i in range(len(our_team)):
        result = check_string(alphabet, our_team[i])

        if result['is_capital_inside']:
            our_score += (result['current_index']+1) * 2
        elif result['is_lower_inside']:
            our_score += result['current_index'] + 1

    # Iterate over opponent        
    for i in range(len(opponent)):
        result = check_string(alphabet, opponent[i])

        if result['is_capital_inside']:
            opponent_score += (result['current_index']+1) * 2
        elif result['is_lower_inside']:
            opponent_score += result['current_index'] + 1

    if our_score > opponent_score:
        return "We win"
    elif our_score < opponent_score:
        return "We lose"
    else: return "Draw" 
    

print(battle("hello world", "hello word"))
print(battle("Hello world", "hello world"))
print(battle("lorem ipsum", "kitty ipsum"))
print(battle("hello world", "world hello"))
print(battle("git checkout", "git switch"))
print(battle("Cheeseburger with fries", "Cheeseburger with Fries"))
print(battle("We must never surrender", "Our team must win"))
