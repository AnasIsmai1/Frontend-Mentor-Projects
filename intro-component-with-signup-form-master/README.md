# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

The challenge involoved creating a baisc desgin consisting of three coomponents the hero section, the banner, and the form itself. We just needed to add a few error messages and the error img within the input fields and then check the fields if they are empty or not on submission.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./screenshot.png)

### Links

- Live Site URL: [https://anas-sdeprj-intro-sign-up.netlify.app/](https://anas-sdeprj-intro-sign-up.netlify.app/)

## My process

    i began with wrapping the content in the appropriate tag elements. Creating the hero section of the webpage and then the banner on top of the form followed by the form itself. I added the font sizes to the body and gave a box sizing of border box to all the elements. I then started off with the form, giving it a background color and then padding according to the given design. I then created the input fields with imgs and error messages in all of them. I styled them and gave them a display property of none and created a show class with a property of block. Which would only be shown when the field is empty or does not meet the length criteria. I then styled the inputs and button giving them focus and hover states. Since the form, banner and hero section had similar sizings i created a mixin which would include the width and other propertied which would give them these properties if i included them. I gave box shadows to the banner and the form and then set the background with the help of an img tag and giving it an absolute position with a low zindex which would push it back and still show the background at the same time. I added the js logic checking the field to be empty as i typed into the field with the help of a eventlistener of input. i created a regular expression for checking the email and compared it to the input and give it a false input if it didnt match. This would also show the error message and the error image.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### Continued development

In the future i would like to add a success or failure message in the form as we submit the form. The process is that the form would check if all the fields are empty on submission or not with the help of a variable.
## Author

- Frontend Mentor - [@AnasIsmai1](https://www.frontendmentor.io/profile/AnasIsmai1)
- Instagram - [@a_ismail.ai](https://www.instagram.com/a_ismail.ai)
