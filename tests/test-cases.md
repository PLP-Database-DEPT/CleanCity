**Critical Risk Testing - Authentication**
**Test Suite: Authentication System (CR-002)**
_Test Case: CR-002-001 - User registration with valid data_
_Manual Test Steps:_

1. Navigate to registration page
2. Enter valid name from Test Data (e.g., "New Test User")
3. Enter valid email from Test Data(e.g., "newuser@test.com")
4. Enter valid password from Test Data (e.g., "NewPass123")
5. Confirm the password
6. Click on Create Account

_Expected Result:_

Account created successfully
User logged in automatically
User data stored in localStorage

_Actual Result:_

1. Account registration is successful.
2. User was not logged in automatically nor directed to the login page.

Test Case: CR-002-002 - User login with valid credentials
_Manual Test Steps:_

1. Navigate to login page
2. Enter registered email (e.g., "newuser@test.com")
3. Enter correct password (e.g., "NewPass123")
4. Submit login form

_Expected Result:_
User logged in successfully
Redirected to dashboard
Session token stored in localStorage

_Actual Result:_

1. User logged in successfully.
2. User redirected to dashboard.

**Critical Risk Testing - Core Forms**
**Test Suite: Home Page Waste Pickup Request Form (CR-001)**
_Test Case: CR-001-001 - Valid waste pickup request submission_

_Manual Test Steps:_

1. Navigate to home page
2. Fill in name field with "Test User"
3. Select City on the dropdown
4. Select waste type "Recyclables"
5. Select pickup date 48 hours from now
6. Submit form

_Expected Result:_
Form submits successfully
Confirmation message displayed
Data stored in localStorage
Request appears in dashboard

_Actual Result:_
Form submits successfully
Request appears in dashboard

_Test Case: CR-001-003 - Pickup date validation (24-hour rule)_

_Manual Test Steps:_

1. Navigate to home page
2. Fill in all required fields with valid data
3. Select pickup date within 24 hours (e.g., current time + 12 hours)
4. Attempt to submit form

_Expected Result:_
Error message displayed
Form submission prevented
No data stored in localStorage

_Actual Result_
Submission is successful
Data is stored in localStorage

**Admin Panel Testing**
**Test Suite: Admin Panel Request Management (HR-002)**
_Test Case: HR-002-002 - Approve pickup request_

_Manual Test Steps:_

1. Log in as admin user
2. Navigate to admin panel
3. Locate a pending request
4. Click "Edit" button
5. Verify status change and notification

_Expected Result:_
Request status changes to "Approved"
User notification triggered
Status update reflected in localStorage
Dashboard updates for regular user

_Actual Result:_
The edit button work
Status update is reflected after updating on the dashboard.

**Data Integrity Testing**
**Test Suite: Data Integrity (CR-003)**
_Test Case: CR-003-001 - localStorage data persistence_

_Manual Test Steps:_

1. Submit 3-5 waste pickup requests through the form
2. Note the details of each request
3. Close browser completely
4. Reopen browser and navigate to application
5. Verify all requests are still present with correct data

_Expected Results:_
Requests appear in dashboard immediately with correct:
• User ID
• Waste type
• Pickup date/time
• Status ("Pending")
All fields match form inputs exactly
No errors in console during shutdown
All requests reload automatically on:
• Dashboard (user view)
• Admin panel (admin view)
All original requests must show:
✓ Identical IDs
✓ Unchanged timestamps
✓ Correct status
✓ No data corruption

_Actual Results:_
Requests are displayed accurately
All fields match form inputs
No errors im console during shutdown
Original requests show the relevant information
