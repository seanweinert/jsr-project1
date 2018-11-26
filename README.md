# Marvin the Paranoid Android chat bot

##THINGS TO CHANGE/IMPLEMENT

- move if/else statements to a switch statement
- fix loop through auto-response not working
- change from HTML function call to JS event listener

## As part of my 10 week Javascript class I have been assigned to create a chabot that does the following:

- Have the AI respond to user input
- Do at least 3 different things
- One of the commands must utilize the list of people in the class to send a reply
- Use at least 1 conditional to change the response
- Leverage a for loop to iterate over a collection
- Use a random component
- Go above and beyond simple `if/else` statements

# What Marvin does

- Marvin asks for your name. By default, Marvin will randomize through an array of characters from H2G2.
  - User can choose between entering a name or using the default
  - In either case, the user's name will display in the user's chatbox and Marvin will print a welcome message to the user.
- Marvin has a 'userResponse()' function that is called from the submit button on the index.html page

  - userResponse() is called in two ways:
    - Using [enter] anywhere on the page by calling "onsubmit="userResponse(); return false"" in the form tag
    - Clicking on the "Let's Chat!" button by using ""onclick="userResponse()"" in the button tag
  - When userResponse() is called it uses an IF/ELSE statment to verify if any keywords have been enetered into the input field
    - IF some part of the field contatins one of the keywords, it prints a pre-programmed response from the MARVIN array
    - ELSE it will print a looped auto-response from the RESPONSE array

- Using HTML <option>, I've included a dropdown list for users to see available keywords

# How Marvin looks:

- Marvin's background is a solid color with a transparent PNG of Marvin found on google. Used fonts.google.com for font changes.
