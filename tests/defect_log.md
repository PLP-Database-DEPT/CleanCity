# 🐞 Defect Log 
| ID  | Date       | Reporter   | Feature/Area      | Severity   | Type        | Description                              | Steps to Reproduce                         | Expected Result         | Actual Result           | Status   | Screenshot |
|-----|------------|------------|-------------------|------------|-------------|------------------------------------------|---------------------------------------------|------------------------|------------------------|----------|------------|
| 001 | 2025-07-10 | Salma      | Dashboard         | Critical   | Functional  | Unable to load dashboard for new users   | 1. Register as new user<br>2. Log in<br>3. Access dashboard | Dashboard loads successfully | Error 500 displayed        | Open     | ![img1](screenshots/001.png) |
| 002 | 2025-07-11 | Salma      | User Experience   | Major      | UI/UX       | Navigation menu overlaps page content    | 1. Resize browser to 1024x768<br>2. Open dashboard | Navigation menu adjusts responsively | Menu overlaps content      | In Progress | ![img2](screenshots/002.png) |
| 003 | 2025-07-16 | Stephen      | Admin  | Major      | Functionality       | Admin has no access to feedback    | 1. Click on the feedback button |Show feedback forms from users | Same user interface      | In Progress | ![004](004.mp4) |
| 004 | 2025-07-16 | Stephen      | Homepage   | Major      | Functionality       | Reload always returns to homepage    | 1. Click on Awareness 2. Click the refresh button | Awareness page should refresh | Returns to homepage | In Progress | ![003](003.mp4) |
| 005 | 2025-07-16 | Stephen      | Dashboard  | Critical      | Functional |Filter combinations show all status for a specific town| 1. Click on Dashboard 2. Dropdown the filter by status and select "pending" 3. Dropdown the filter by location and select Nairobi | Only pending requests in Nairobi should be showing | All status in Nairobi showing | Open | ![005](005.mp4) |
| 006 | 2025-07-16 | Stephen | Dashboard | Medium | Functional | Admin update of status does not reflect an error message when clicked without any selection | 1. Login as admin 2. Navigate to the admin segment 3. Click on the update status without selecting a request | Error message instructing the user to fill the fields | No error message | Open | ![006](006.mp4) |
| 007 | 2025-07-16 | Stephen | Dashboard | Critical | Functional | Update of a request to the same status | 1. Login as admin 2. Navigate to the admin section 3. Click on the edit button for a request 4. Update the status to the same status it was as before | An error message should pop to warn against updating to the same status | Request status is update successfully | Open | ![007](007.mp4) |
| 008 | 2025-07-16 | Stephen | Dashboard | Critical | Security | The app doesn't log one out even after closing it | 1. Open the app 2. Login with admin logins 3. Close the tab 4. reopen from history | New user login path | Access the app with the same account already logged in as before | Open | ![008](008.mp4) |
| 009 | 2025-07-16 | Stephen | Dashboard | Critical | UI/UX | The error message requesting one to fill the mandatory fields after submitting the form overlaps the dashboard header. | 1. Login to the app 2. Navigate to the homepage 3. Do not fill the form but navigate to the submit the request button | The error message should show on the body and not the hdashboard header. | Error message displays on the dashboard and moves with the screen navigation | Open | ![009](009.mp4) |
| 010 | 2025-07-16 | Stephen | Dashboard  | Critical | Functional | After login to the app, one is directed to the dashboard instaed of the homepage | 1. Login as a user 2. Wait for redirection | Redirection to the Homepage | Redirection to the dashboard segment | Open | ![010](010.mp4) |

## Fields Explained
- **ID:** Unique defect number
- **Date:** When defect was found
- **Reporter:** Your GitHub username
- **Feature/Area:** Where defect occurs (e.g., Dashboard)
- **Severity:** [Blocker/Critical/Major/Minor/Trivial]
- **Type:** [Functional/UI/UX/Accessibility/Performance/Security]
- **Description:** Brief summary of the issue
- **Steps to Reproduce:** Clear, numbered list
- **Expected Result:** What should happen
- **Actual Result:** What actually happens
- **Status:** [Open/In Progress/Fixed/Closed]
- **Screenshot:** Link to supporting image 
