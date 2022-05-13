# Task-1 Tab&Accordion
## 1.1- Tab
- Formation is made like Tabular Form
- Selection of a specific button shows its specific content and hide others.
- For this we used hide() & show()

## 1.2- Accordion
- Formation is made like accordion 
- Selection of a specific button shows its specific content and hide others.
- For this we used slideup(), hide() & show().



# Task-2 Countdown
- Countdown watch where users give time in seconds and is calculated automaticaly.
- It had following buttons-
1.Start
2.Pause/Resume
3.Stop
4.Reset
- Time duration works in loop duration of 10 c-seconds.
- Current stage of the watch is shown.


# Task-3 Stopwatch
- It had following buttons-
1.Start
2.Pause/Resume
3.Stop
4.Reset
- method of prepend() and text sorting with get() & set()
- Time duration works in loop duration of 10 c-seconds.
- Every action has a entry in the log untii it has been reset.


# Task-4 WizardForm/phase1
- It has tabular format and is accessed or joined with index and length.
- The input field includes text,radio button, checkbox,date,dob,dropdown,number and textarea.
- Prev and Save&next button to navigate.
- On click of edit Update button will appear on last tab of the form insteads of submit button.
- All the entries are shown in table format after submitting which consists of edit and delete button.
- Edit button can edit and delete can delete the entries.
- Methods used here are get(), set(), tab, index(),length(),empty(),append().

# Task-5 WizardForm/Phase2
- It has all the functionality of phase1.
- 4 entries addedd anywhere in the form - Hours , zipcode, ipaddress, Money
- Validation of Form is done where one cannot put something which is not asked or will show error(on the time of submitting).
- Usage of plugins() and datepicker and validate().
- Masked plugins for zipcode,ipaddress,email,numbers
- Using of regex method() for email and numbers

# Task-6 Calender
- while opening it shows you the current month calender with current date marked.
- It has 4 buttons today,year, Month, Date, Find Date.
- Method used are getMonth(), getFullyear(), getDate(), setMonth(), setFullYear(), newDate().
- Functionality with prev and next arrow.(prev will show the prevoius month and the next will show the next)
- When finding date it will highlight the day of the month of the year selected.
- append() methods for showing date in the month in table format.

# Task-7 Calculator
- Basic Calculator made by eval().
- Shows error text on inappropraite calculation via try & catch method.
- KeyCode() method used for binding it with buttons.
- replace() method for ² and √.

# Task-8 AddMore/Phase1
- Develop a webpage that performs jQuery Traversing.
- Initially on a webpage Add More button and one parent div with the childrens containing one input and three buttons Add Child, Submit and Delete.
- Clicking the add more button will dynamically add the whole parent.
- Clicking the add child button will add two input one for subtitle and value and a delete button to delete the child.
- when user clicks the submit button the data will be shown in tabular format on the right side.
- Parent's delete button will delete the whole Parent and child respectively.
- Deleting the child from left side the change will only be reflected on the click of submit button and will also be deleted from the table.
Bootbox plugin used.

# Task-8 AddMore/Phase2
- In Phase 2 the data will be appended to the table on right-side in Real-time on the time of typing only.(no need for submit button)
- when the user removes the data from the input at a same time it will also be removed from table.
- Parent cannot be deleted if thier child exists.
- By default one parent will always be shown on the webpage.

# Task-9 Business Card Maker
## Wizard 1: Template
- It contains two template options for the business card. 
- Clean (It will look like the attached example image)
- Standard (It will look like the attached example image)
- Clean will be selected by default.
## Wizard 2: Theme
- It contains three colors picker for the color theme. By default, any basic color theme is selected. You can set the same default color theme for all templates. Users can select anyone. The reset button will reset colors to default.
- Light Color (Attach Color Picker)
- Main Color (Attach Color Picker)
- Dark Color (Attach Color Picker)
- Reset Button (Set to theme color)
## Wizard 3: Personalization
### Display Area:
#### Front and Back:
- Display how the business card will look like
- Every change must reflect on the change of every event.
- For example, If you change the theme color then it instantly reflects at the display area.
- By default Front and the Back area contains descriptions like “”

#### Download:
- The download button will validate the Personalization form (Wizard - 3)

- If all fields are validated then it will allow the user to download PDF.
Reset:
- Reset button will clear all the fields in the wizard area

- It will take the user to the Templates (Wizard - 1)

- Reset button will clear all the designs in the display area

#### Other Feature
- QR Code: Display QR code in every card which redirects the user to the link of their website

#### Clean Designs:

- It should contain minimum elements.

- Background color is fixed: white/black
Standard Designs:
- It should contain at least two shapes/graphics.

- Background color must be dynamic (User can change it)

- Hint - For graphics, take font-awesome icons instead of png images. So you can change the 
color of icons easily.

# Jquery Task 9: Dynamic Menu Creation
### Features:
- When you click on add button the element entered in the input field will be added to the right side with two buttons edit & remove. And the same value will be added in the default drop-down.

- When the value is selected from dropdown and value entered from that input field, then the value will be added as sub children of the parent ( the element selected in the dropdown will be considered as parent ) in the right side. Similarly at the same time, new dropdown will be created which contains values of children.

- On change of dropdown, find the sub-children and create the dropdown for the same containing proper hierarchical structure.

- On edit, parent/children can be edited and then can be updated ( can't edit any other parent/children while editing ).

- On remove, the element will be removed and if the element is parent then all the sub-children will be removed too.

# Jquery Task 10 - Fun and Learn
### Create a webpage to design a memory game:
- Create a 6*4 clickable box grid as displayed in the following images

- Click on any box will show a pre-defined icon.

- When the user clicks on the 2nd box, match the icons. If icons are the same then display both icons and disable that box. If icons are not identical then close both boxes after 2 seconds.

- Once the user opens all boxes, display the message with the time and refresh button.

- The refresh button will close all boxes with new random icons. Do not refresh the page.
#### Other Features:
- Use font-awesome icons.

- Select at least 50 icons then randomly display any 12 icons in each game.

- Icon pair and location must be random in every game.

- Every 12 pairs have a unique icon.
- User can write number of blocks they want to play for.