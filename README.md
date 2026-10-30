# WEB Technologies 1 - Assignment 6

Name: Nurassyl Zhumagul

Group: IT-2501

Open `index.html` in a browser to use the page. An internet connection is needed to load jQuery 3.7.1 from the CDN and the two images.

## Task 0 - Setup

jQuery loads before `script.js`. `$(document).ready(function() { ... })` waits until the HTML is ready. The code prints "jQuery is ready!" in the browser console.

Screenshot placeholder: browser console with the ready message.

## Task 1 - Selectors & CSS

The profile shows my name, headline, and introduction. Tag, ID, and class selectors find elements, and `.text()` and `.css()` change their text and style. The Light Theme and Dark Theme buttons change the page colors.

Screenshot placeholder: profile in light and dark themes.

## Task 2 - Visibility Methods

The About Me section includes my biography, status, and fun facts. Hide uses `.hide()`, Show uses `.show()`, and Toggle uses `.toggle()` on the About Me content.

Screenshot placeholder: About Me content shown and hidden.

## Task 3 - Fade Methods

The gallery contains two images. The three buttons use `.fadeIn()`, `.fadeOut()`, and `.fadeToggle()` to show or hide the gallery gradually.

Screenshot placeholder: gallery visible and hidden.

## Task 4 - Slide Methods

Clicking a favorite heading uses `.slideToggle()` on its own panel. Open All uses `.slideDown()` to open all three panels, and Close All uses `.slideUp()` to close them.

Screenshot placeholder: favorite panels open and closed.

## Task 5 - Add & Remove Elements

The list starts with HTML, CSS, JavaScript, and jQuery. Add Skill uses `.append()` to add a new item at the end, while Prepend Skill uses `.prepend()` to add it at the beginning; both ignore empty text and clear the input after adding. Remove Skill uses `.remove()` to delete the last item.

Screenshot placeholder: skills list after adding and removing skills.

## Task 6 - Modifying Attributes

The social link starts as GitHub. Change Link uses `.attr()` to change its destination to LinkedIn and `.text()` to change its label.

Screenshot placeholder: social link after clicking Change Link.

## Task 7 - Form Interaction

The form has Name and Email inputs. The `input` event runs while I type, `.val()` reads each value, and `.text()` shows it below the form. The form does not submit anything.

Screenshot placeholder: typed name and email shown below the form.

## Task 8 - Basic Animation

All three skill bars start at zero width. The first click uses `.animate()` to grow HTML to 80%, CSS to 70%, and JavaScript to 50% in 500 milliseconds. The boolean `skillsAnimated` remembers whether the bars are filled, so the next click returns them to zero.

Screenshot placeholder: skill bars filled and reset.

## Summary

This page practices basic jQuery selectors, events, effects, and animations. Each task has its own comments in the code so I can find and explain it.

I still need to take real screenshots, replace the placeholders, create a public GitHub repository, upload the files, set up GitHub Pages, and submit the assignment.
