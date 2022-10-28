# _Mr. Roboger's Neighborhood_

#### By _**Dominik Magic**_

#### _A website that will give you Mr. Roboger's feedback based on your number input_<p>&nbsp;</p>  

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description

_This website was created by for purpose of demonstrating the combined use of JavaScript branching, arrays and looping. Based on the number inputed, a return containing a count to the inputed number will be displayed, altering the numbers containing 1, 2 or 3._

## Setup/Installation Requirements

* _Clone [this](https://github.com/dmagic1304/roboger-s-neighborhood) repositiory to your desktop_
* _Open the cloned portfolio folder located on your desktop_
* _Open the index.html file in your browser_

## Tests

```
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

Test7: "It will replace input elements containing number 3 with 'Won't you be my neighbor?'"
Code: beepBoop(5);
Expected Output: outputArray = [0, 1, 2, 'Won't you be my neighbor?', 4, 5]

Test8: "It will replace input elements containing number 2 with 'Boop!'"
Code: beepBoop(5);
Expected Output: outputArray = [0, 1, 'Boop!, 'Won't you be my neighbor?', 4, 5]

Test9: "It will replace elements containig number 3 with 'Won't you be my neighbor?', elements with number 2 with 'Boop!', and elements containign number 1 with 'Beep!', in that hierarhy"
Code: beepBoop(14);
Expected Output: outputArray = [0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!',  'Won't you be my neighbor?', 'Beep!']
```

## Known Bugs

* _No known bugs at this time_

## GitHub Pages

[https://dmagic1304.github.io/roboger-s-neighborhood/](https://dmagic1304.github.io/roboger-s-neighborhood/)

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) _2022_ _Dominik Magic_

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.