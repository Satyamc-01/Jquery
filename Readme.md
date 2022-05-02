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