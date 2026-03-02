1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById → Selects one element by ID.

getElementsByClassName → Selects multiple elements by class name (returns a live collection).

querySelector → Selects the first matching element using CSS selector.

querySelectorAll → Selects all matching elements using CSS selector (returns a static NodeList).

2. How do you create and insert a new element into the DOM?

Use document.createElement() to create an element.

Add content using textContent or innerHTML.

Insert it using append(), appendChild(), or insertBefore().

3. What is Event Bubbling?

Event Bubbling is when an event starts from the target element and then moves upward to its parent elements.

Example:
If you click a button inside a div → the button event runs first → then the div event runs → then the document.

4. What is Event Delegation? Why is it useful?

Event Delegation means adding one event listener to a parent element to handle events for its children.

It is useful because:

It improves performance.

It works for dynamically added elements.

It reduces multiple event listeners.

5. Difference between preventDefault() and stopPropagation()

preventDefault() → Stops the default browser action (like form submit or link redirect).

stopPropagation() → Stops the event from bubbling to parent elements.