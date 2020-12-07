# Beatrice (they/them)
Some JS utils, called Beatrice because it's a fun name.

## ClassBuilder
Allows for ease of building html class strings without having to worry about missing a space, bracketing a condition wrong, etc.
### Input
| Parameter | Description |
| --------- | ----------- |
| classes | A JS object in the format {className: isAdded}, where isAdded is a boolean value, or an expression that evaluates to a boolean value. |
### Output
Returns a space-separated string with the applicable class names. If isAdded === true, the class is added to the returned string.
### Example (in JSX)
```jsx
const isTheBadClassIncluded = false;
const isTheGoodClassIncluded = true;

<button 
  className={ClassBuilder({
    goodClass: isTheGoodClassIncluded,
    badClass: isTheBadClassIncluded,
  })}
>
  Click button!
</button>
```
... would generate the following html ...
```html
<button class="goodClass">
  Click button!
</button>
```
