Test section:

Describe: beepBoop()

Test1: "It will make sure the user has entered a number"
Code: beebBoop ("string");
Expected Output: console.log("please enter a number")

Test2: "It will make sure that the number enered was a whole number"
Code: beepBoop(3.14);
Expected Output: console.log("please enter a whole number")

Test3: "It will make sure that the number entered is more than 0"
Code: beepBoop(-1);
Expected Output: console.log("please enter a number bigger than 0")

Test4: "It will return an array of numbers from 0 to the user's inputed number"
Code: beepBoop(7);
Expected Output: outputArray = [0, 1, 2, 3, 4, 5, 6, 7]

Test5: "It will recognize if outputArray element contains number 3"
Code: beepBoop(5);
Expected Output: console.log("number 3 detected")

Test6: "It will go through the outputArray and log every element that contains 3, 2 or 1 with the hierarchy in that order"
Code: beepBoop(13);
Expected Output: console.log("number 3 detected")*2 | console.log("number 2 detected")*2 | console.log("number 1 detected")*3
