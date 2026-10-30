# WEB Technologies 1 - Assignment 6

Name: Nurassyl Zhumagul

Group: IT-2501

Open index.html in a browser to use the page. An internet connection is needed to load jQuery 3.7.1 from the CDN and the two images.

## Task 0 - Setup

jQuery loads before script.js. $(document).ready(function() { ... }) waits until the HTML is ready. The code prints "jQuery is ready!" in the browser console.


## Task 1 - Selectors & CSS

The profile shows my name, headline, and introduction. Tag, ID, and class selectors find elements, and .text() and .css() change their text and style. The Light Theme and Dark Theme buttons change the page colors.

<img width="751" height="282" alt="{6CDCA26D-1D28-4BCD-9C5C-5C24D63A4B9E}" src="https://github.com/user-attachments/assets/e51d6cb8-4567-41e9-8b69-0916af76dc4b" />
<img width="726" height="480" alt="{5097E8C8-F071-4EF9-8A65-BFF6D53C2601}" src="https://github.com/user-attachments/assets/9ebf60e5-3abd-4609-ad97-82c239195fc3" />


## Task 2 - Visibility Methods

The About Me section includes my biography, status, and fun facts. Hide uses .hide(), Show uses .show(), and Toggle uses .toggle() on the About Me content.

<img width="807" height="421" alt="{BC307D6E-8922-407B-9CED-4BD36FAB17EE}" src="https://github.com/user-attachments/assets/6fe1adb1-cbed-4398-9445-63294dc59b4b" />
<img width="541" height="339" alt="{DC59EDD4-AD5D-4B57-9AC6-62FC3B8836C6}" src="https://github.com/user-attachments/assets/8df823bc-6157-4a86-94f9-81e4b593708b" />


## Task 3 - Fade Methods

The gallery contains two images. The three buttons use .fadeIn(), .fadeOut(), and .fadeToggle() to show or hide the gallery gradually.

<img width="592" height="321" alt="{CACDFFA9-FE99-496E-ACC7-1A1C71D93E18}" src="https://github.com/user-attachments/assets/f837a5ce-465c-4bb8-b9c8-e2f41b88c186" />
<img width="943" height="303" alt="{949B69D2-C43B-46B8-91A2-99EEC36E498B}" src="https://github.com/user-attachments/assets/f46d2367-5615-456a-a7d0-d70cd1939fb6" />


## Task 4 - Slide Methods

Clicking a favorite heading uses .slideToggle() on its own panel. Open All uses .slideDown() to open all three panels, and Close All uses .slideUp() to close them.

<img width="556" height="536" alt="{E8658F5F-B20E-41D3-8C98-9C714A5B904B}" src="https://github.com/user-attachments/assets/e16e687a-da9b-4aa7-8f70-d581b7353aab" />
<img width="854" height="493" alt="{42C7EFCC-2FE9-454B-AB1B-8B3F6F8CF2AA}" src="https://github.com/user-attachments/assets/b73c0746-51e1-4c66-945d-16a90a076a86" />


## Task 5 - Add & Remove Elements

The list starts with HTML, CSS, JavaScript, and jQuery. Add Skill uses .append() to add a new item at the end, while Prepend Skill uses .prepend() to add it at the beginning; both ignore empty text and clear the input after adding. Remove Skill uses .remove() to delete the last item.

<img width="761" height="680" alt="{9288C48E-08E5-4FA4-B90A-39FA71E70695}" src="https://github.com/user-attachments/assets/9bcb2a32-5531-4d0b-8e88-282f89fa8520" />
<img width="784" height="406" alt="{914E438D-E808-4983-919C-8F288D7EAC15}" src="https://github.com/user-attachments/assets/f91ee53d-4f7f-48ad-8c97-96bdc64250ba" />


## Task 6 - Modifying Attributes

The social link starts as GitHub. Change Link uses .attr() to change its destination to LinkedIn and .text() to change its label.

<img width="755" height="154" alt="{8191E451-1439-4B31-A14B-A1644C4EE565}" src="https://github.com/user-attachments/assets/748cd006-f4d3-4590-a3ba-fb4c5123fe14" />
<img width="1072" height="192" alt="{FFE6AF8F-9AC9-4B7C-B7AC-963B40D11AB7}" src="https://github.com/user-attachments/assets/2910a79a-adca-4170-a14e-55637d41216c" />


## Task 7 - Form Interaction

The form has Name and Email inputs. The input event runs while I type, .val() reads each value, and .text() shows it below the form. The form does not submit anything.

<img width="810" height="349" alt="{CBB407E7-2C1D-4C36-AAFA-44F1642E7100}" src="https://github.com/user-attachments/assets/9c761c4c-15b5-4fbc-a894-9ab9b2eaade0" />
<img width="612" height="441" alt="{FAC82A23-8EF2-4EED-8E7C-9CC5FEB704BC}" src="https://github.com/user-attachments/assets/6dde92c2-07e1-4621-ae94-92e042bf8f4a" />


## Task 8 - Basic Animation

All three skill bars start at zero width. The first click uses .animate() to grow HTML to 80%, CSS to 70%, and JavaScript to 50% in 500 milliseconds. The boolean skillsAnimated remembers whether the bars are filled, so the next click returns them to zero.

<img width="767" height="583" alt="{E6476234-1171-49F3-BBCC-CEA03A8396CE}" src="https://github.com/user-attachments/assets/6c00fb7b-ed97-4f6a-9e5c-c26238b64df9" />
<img width="878" height="456" alt="{1EFFD5C2-779B-40A5-9A17-4D0DAA6CA7D9}" src="https://github.com/user-attachments/assets/eed430b1-fe2a-4654-b344-157f050f58e9" />


## Summary

This page practices basic jQuery selectors, events, effects, and animations. Each task has its own comments in the code so I can find and explain it.

