
---

### Answered the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?<br>
Ans: getElementById Selects one element by its id.<br>
     getElementsByClassName Selects all elements with the given class name.<br>
     querySelector Selects the first element that matches a CSS selector.<br>
     querySelectorAll Selects all elements that match a CSS selector.<br>
     
2. How do you **create and insert a new element into the DOM**?<br>
Ans:const div = document.createElement('div') and insert is like<br>
document.getElementById('id name').appendChild(div)<br>
     
3. What is **Event Bubbling** and how does it work?<br>
Ans: When we click an element inside a nested structure, the event is triggered first on the element itself, then on its parent, then on its parent’s parent, and so on.

4. What is **Event Delegation** in JavaScript? Why is it useful?<br>
Ans: Handle events for many elements with one parent listener.<br>

5.What is the difference between preventDefault() and stopPropagation() methods?<br>
Ans: Stops the event from bubbling further up (or down) the DOM tree.
---

