# Draft Test-Cases and Checklists

# 🧪 CleanCity Project – Manual Test Cases

## TC-001 – User Registration with Valid Input

* **Related Requirement:** FR-001
* **Feature:** Authentication – Registration
* **Test Type:** Manual
* **Steps to Reproduce:**

  1. Navigate to the registration page.
  2. Enter a valid email address (e.g., [user@test.com](mailto:user@test.com)).
  3. Enter a password with at least 8 characters.
  4. Confirm the password.
  5. Enter full name between 2 and 50 characters.
  6. Optionally enter a valid phone number.
  7. Click “Register”.
* **Expected Result:** Account is created with the "User" role and redirected to the dashboard.
* **Status:** *(To be filled during execution)*

---

## TC-002 – Reject Scheduling for Less than 24-Hour Notice

* **Related Requirement:** FR-013
* **Feature:** Waste Pickup Scheduling
* **Test Type:** Manual
* **Steps to Reproduce:**

  1. Log in as a registered user.
  2. Go to “Schedule Pickup”.
  3. Enter today’s date as pickup date.
  4. Choose any waste type, quantity, and address.
  5. Submit the form.
* **Expected Result:** System displays a validation message: “Pickup must be scheduled at least 24 hours in advance.”
* **Status:** *(To be filled during execution)*

---

## TC-003 – Prevent User Access to Admin Panel

* **Related Requirement:** FR-011
* **Feature:** Role-Based Access
* **Test Type:** Manual
* **Steps to Reproduce:**

  1. Log in using a regular “User” account.
  2. Try to manually visit the `/admin` URL.
* **Expected Result:** Access is denied, or user is redirected to a “Not Authorized” or login page.
* **Status:** *(To be filled during execution)*

---

## TC-004 – Responsive Design on Mobile

* **Related Requirement:** FR-069
* **Feature:** User Interface – Responsiveness
* **Test Type:** Manual
* **Steps to Reproduce:**

  1. Open the app on a mobile device or emulate one in browser dev tools.
  2. Navigate through major pages (home, dashboard, schedule, etc.).
* **Expected Result:** All UI elements scale correctly, no overflow issues, and navigation works smoothly on 320–767px screens.
* **Status:** *(To be filled during execution)*

---

## TC-005 – Track Pickup Status in Real-Time

* **Related Requirement:** FR-020
* **Feature:** Request Tracking
* **Test Type:** Manual
* **Steps to Reproduce:**

  1. Schedule a pickup as a user.
  2. Monitor the dashboard or status page.
  3. Wait for admin to update the request status.
* **Expected Result:** The pickup status updates in real-time (or with minimal delay) and reflects accurately (e.g., “Confirmed”, “Completed”).
* **Status:** *(To be filled during execution)*
