
# Initial Setup and Test Environment

---
### 1. Objective

To establish a fully functional testing environment for the CleanCity application, supporting development and continuous reporting.



##  2. Test Environment Overview  

- **Browsers**: Chrome, Firefox, Safari, Edge  
- **Devices**: Windows PC, Android Mobile, iPad  

- **Network Conditions**: WiFi, 3G, 4G (simulated)  
- **Tools**:  
  - *Bug Tracking:* Jira Cloud  
  - *Accessibility:* Axe DevTools, Wave  
  - *Performance:* Lighthouse, Chrome DevTools  
  
  - *Testing:* BrowserStack / real devices  
  - *Reporting:* Jira Dashboards or Google Sheets  
=======
- **Network Conditions**: WiFi, 3G, 4G (simulated) 

## 2.1 **Development Tools**

*Application Architecture*
  - Frontend framework - React.js
  - Storage - Browser; Localstorage
  - Authentication - Role-based access control
  - Deployment - Netlify(Static hosting)

  ## 2.2 **Testing Tools**

  |Tool           | Purpose                               |
  |---------------|---------------------------------------|
  |Jira cloud     |Sprint tracking, bug reporting, test case documentation, and QA workflows. Integrates with GitHub for collaboration.                      |
  |Axe DevTools, WAVE, NDVA, Keyboard-Only Testing  |Automated Accessibility testing per WCAG 2.1 AA — validates tab order, screen reader support, contrast, and alt text.|
  |Lighthouse, Chrome Devtools| Tests page performance and readiness. Measure Web Vitals, response time, and loading speed.|
  |BrowserStack / real devices| Check/validate responsiveness and compatibility across different devices and browsers.|
  |Jira dashboard, google sheets, attachments| Reporting on QA metrics: test coverage, issue, priority/severity analysis and documentation|
  |  Manual test| form validation in real time input|
  |Unit testing  | logic and error handling        |


  ### 2.3 Jira Cloud – Project Setup
Steps:
- Go to [jira software](https://www.atlassian.com/software/jira)
- Sign up or log in with your team email.
- Create a new Scrum project → Name it CleanCity QA.
- Set up:

  Issue types: Story, Bug, Task, Test Case

  Columns: To Do → In Progress → In QA → Done

  Invite team members and assign roles.

 ### 2.4 NVDA (Screen Reader for Accessibility)

- Download [NVDA](https://www.nvaccess.org/download/)

- Install and launch it (screen reader will start talking).

- Navigate through your app using only Tab, Shift+Tab, Enter, Arrow keys

- Verify:

  Headings are read correctly

  Buttons and links are announced

  Input fields and labels are connected

 To pause or quit NVDA: Press CapsLock + Q, then confirm.

 
## 3. Initial Functional Testing

| Module         | Key Test                                           |
| -------------- | -------------------------------------------------- |
| Authentication | Register, login, logout, invalid login             |
| Waste Pickup   | Schedule request, validation errors, cancel/edit   |
| Dashboard      | visualization(charts/graphs), displaying achievements          |
| Community      | Post tip, comment, like, flag                      |
| Admin View     | Access restriction check, request approval actions |


---

## 4. Collaboration and workflow
### 4.1 **Jira**

|Parts                    | Details                      |
|-------------------------|------------------------------|
|Jira Project Board       | Scrum board work flow; to do-in progress-in review-done|
|Issue types    |Story, Task, Bug, Test Case, Epic, Sub-task and their workflow|
|Prioritization    |Bugs and features are labeled by Priority and Severity; (high, medium...)|
|QA Status Tracking  |add each member as a watcher to receive notifs for every update on assigned tasks|




