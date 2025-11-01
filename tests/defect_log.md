# 🐞 CleanCity QA – Final Defect Log

**Team:** TestTribe  
**Project:** CleanCity – Waste Pickup Scheduler  
**Testers:** Siphesihle, Sharon, Ishmael  
**Date:** July 16, 2025  

---

## 📋 Defects

| ID | Title | Description | Steps to Reproduce | Expected | Actual | Severity | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| D-001 | Allows Scheduling in the Past | System allows scheduling pickups for past dates. | 1. Go to Schedule Pickup<br>2. Select past date<br>3. Submit | System should reject past dates. | Past date accepted. | High | Open |
| D-002 | Alert Does Not Clear After Submission | Success alert stays on screen after submission. | 1. Schedule pickup<br>2. Submit<br>3. Observe alert | Alert should disappear or auto-clear. | Alert stays indefinitely. | Low | Open |
| D-003 | Description Allows Too Few Characters | Description input accepts &lt;3 characters. | 1. Schedule pickup<br>2. Enter short text<br>3. Submit | Minimum 3 characters required. | Accepts short text. | Medium | Open |
| D-004 | No Name Validation | Pickup can be submitted with empty or invalid name. | 1. Leave name blank or invalid<br>2. Submit | Should validate name. | No validation. | High | Open |
| D-005 | Invalid Inputs Allowed | Fields accept spaces, dots, symbols. | 1. Enter invalid chars<br>2. Submit | Input should be sanitized. | Invalid input accepted. | High | Open |
| D-006 | Allows Same-Day Scheduling | Allows pickup for same day, violating 24h policy. | 1. Pick today’s date<br>2. Submit | Should block same-day pickup. | Allowed. | Medium | Open |
| D-007 | Unable to Add Pickup After Scheduling | Cannot add second pickup if first exists. | 1. Schedule pickup<br>2. Try to add another | Should allow if within rules. | System blocks it. | Medium | Open |
| D-008 | No Status Update After Request | No real-time status update after scheduling. | 1. Schedule pickup<br>2. Check dashboard | Should update status immediately. | Status unchanged. | Medium | Open |
| D-009 | Unable to Upload Profile Picture | Upload fails or does nothing. | 1. Go to Profile<br>2. Upload picture | Should upload successfully. | Upload fails. | Medium | Open |
| D-010 | Feature Section Not Clickable | Landing page feature section not interactive. | 1. View landing page<br>2. Click feature | Should link to pages. | No links. | Low | Open |
| D-011 | Blog/Comment Not Visible to User | User can’t see own blog/comments. | 1. Post blog/comment<br>2. Reload | Should display user’s posts. | Not visible. | High | Open |
| D-012 | Comments Disappear on Reload | Comments vanish after page reload. | 1. Add comment<br>2. Reload | Comments persist. | Comments gone. | High | Open |
| D-013 | No Edit/Delete for Comments | Comments can’t be edited/deleted. | 1. Post comment<br>2. Look for edit/delete | Should allow edits/deletes. | No option. | Medium | Open |
| D-014 | Comments Show 'You' | Comments show ‘You’ instead of real username. | 1. Post comment<br>2. View comment | Should show actual name. | Displays ‘You’. | Low | Open |
| D-015 | Community Input Accepts Invalid | Comment input accepts empty/special chars. | 1. Enter invalid input<br>2. Submit | Should validate. | Invalid input accepted. | Medium | Open |
| D-016 | Missing Apply Button in Dropdown | Blog filter lacks ‘Apply’ button. | 1. Open dropdown<br>2. Try to filter | Should apply filter. | No apply option. | Low | Open |
| D-017 | Exceeds Weekly Pickup Limit | More than 3 pickups/week allowed. | 1. Schedule 4+ pickups/week | Should block excess pickups. | No limit enforced. | High | Open |
| D-018 | Pickup Allowed &lt;24 Hours | Pickup allowed with &lt;24h notice. | 1. Schedule for same day/&lt;24h | Should reject. | Pickup accepted. | High | Open |
| D-019 | Quiz Button Says 'Next' | Last quiz question says ‘Next’ not ‘Complete’. | 1. Reach last quiz<br>2. Check button | Should say ‘Complete Quiz’. | Says ‘Next Question’. | Low | Open |
| D-020 | Quiz Restarts Instead of Showing Score | Quiz restarts instead of displaying total score. | 1. Finish quiz<br>2. Submit | Should show score. | Restarts quiz. | High | Open |
| D-021 | Quiz Logic Always Marks Answer Wrong | Quiz always marks ‘Peter Box’ wrong. | 1. Select correct answer<br>2. Submit | Correct answer accepted. | Always wrong. | High | Open |
| D-022 | Score Counter Increases After Quiz | Score keeps counting after quiz completion. | 1. Finish quiz<br>2. Observe score | Should freeze. | Score updates still. | Medium | Open |
| D-023 | Score Display Inconsistent | Score shows wrong total while taking quiz. | 1. Take quiz<br>2. Check score | Should be accurate. | Inconsistent. | Medium | Open |
| D-024 | Dashboard UI Needs Improvement | Dashboard analytics unclear or messy. | 1. Open dashboard | Should be clear & user-friendly. | Needs improvement. | Low | Open |
| D-025 | Scheduled Pickups Not Visible | Scheduled pickups don’t appear on dashboard. | 1. Schedule pickup<br>2. Check dashboard | Should display pickups. | Not visible. | High | Open |
| D-026 | Dashboard Doesn’t Reflect Added Pickups | Added pickups not shown immediately. | 1. Add pickup<br>2. Refresh dashboard | Should reflect instantly. | No update. | High | Open |
| D-027 | Profile Doesn’t Show Comments | User profile doesn’t show user’s comments. | 1. Go to profile<br>2. Check comments | Should display them. | Doesn’t display. | Medium | Open |
| D-028 | Missing Redirect to Create Blog | Profile page lacks link to create a blog post. | 1. Go to profile<br>2. Look for blog link | Should redirect. | No redirect. | Low | Open |
| D-029 | Profile Doesn’t Reflect Requests | Profile page doesn’t show scheduled pickups. | 1. Schedule pickup<br>2. Check profile | Should display requests. | Doesn’t display. | High | Open |
| D-030 | Duplicate Sign-Ups Allowed | Same credentials reused for multiple sign-ups. | 1. Sign up with same email<br>2. Submit | Should block duplicate. | Allows duplicate. | High | Open |

---

# 🐞 Bug Report Document

## 1. Registration Module

### 1.1 Scheduling in the Past is Allowed
**Steps to Reproduce:**
- Navigate to the scheduling form.
- Select a past date.
- Submit the form.

**Expected Result:**  
System should reject past dates with a clear error message.

**Actual Result:**  
Form accepts past dates without warning.

---

### 1.2 Alert Message Does Not Clear After Submission
**Steps to Reproduce:**
- Submit a registration or schedule.
- Observe success/error alert.
- Submit another form or navigate away.

**Expected Result:**  
Alerts should clear after new actions or page change.

**Actual Result:**  
Old alerts remain visible.

---

### 1.3 Additional Description Allows Less Than Three Characters
**Steps to Reproduce:**
- Enter a description under 3 characters.
- Submit the form.

**Expected Result:**  
Validation error should block submission.

**Actual Result:**  
Form accepts short descriptions.

---

### 1.4 No Name Validation
**Steps to Reproduce:**
- Leave the name field blank or enter numbers/special characters.
- Submit the form.

**Expected Result:**  
Name field should only allow valid alphabetic input.

**Actual Result:**  
Invalid names are accepted.

---

### 1.5 Invalid Inputs Accepted (Spaces, Dots, Special Characters)
**Steps to Reproduce:**
- Enter empty spaces or special characters in required fields.
- Submit the form.

**Expected Result:**  
System should reject invalid formats.

**Actual Result:**  
Form accepts invalid formats.

---

### 1.6 Allows Scheduling for the Same Date
**Steps to Reproduce:**
- Schedule a pickup for a date.
- Attempt to schedule another pickup for the same date.

**Expected Result:**  
System should block duplicate date bookings.

**Actual Result:**  
Duplicate bookings are allowed.

---

### 1.7 Unable to Add After Scheduling
**Steps to Reproduce:**
- Schedule a pickup.
- Attempt to add another entry afterward.

**Expected Result:**  
Additional entries should be allowed if within limits.

**Actual Result:**  
Adding is blocked without explanation.

---

### 1.8 No Status Update After Creating a Post
**Steps to Reproduce:**
- Create a post via registration.
- Check for status update.

**Expected Result:**  
Confirmation or status change should be visible.

**Actual Result:**  
No visible update.

---

### 1.9 Unable to Upload Profile Picture
**Steps to Reproduce:**
- Go to profile settings.
- Upload a valid image file.

**Expected Result:**  
Profile picture should upload and display.

**Actual Result:**  
Upload fails silently.

---

## 2. Blogs Module

### 2.1 User Cannot See Own Blog Posts or Comments
**Steps to Reproduce:**
- Create a blog post or comment.
- Refresh or navigate to blogs page.

**Expected Result:**  
User’s posts/comments should be visible.

**Actual Result:**  
Posts/comments are missing.

---

### 2.2 Comments Disappear After Reload
**Steps to Reproduce:**
- Post a comment on a blog.
- Refresh the page.

**Expected Result:**  
Comment should persist.

**Actual Result:**  
Comment disappears.

---

### 2.3 Dropdown Menu Lacks “Apply” Button
**Steps to Reproduce:**
- Open blog filter dropdown.
- Select filter criteria.

**Expected Result:**  
An “Apply” button should allow users to confirm filter selection.

**Actual Result:**  
No “Apply” button present.

---

### 2.4 Allows Same-Day Pickup Scheduling
**Steps to Reproduce:**
- Attempt to schedule a pickup for the current date.

**Expected Result:**  
System should reject same-day scheduling if prohibited.

**Actual Result:**  
Same-day scheduling is accepted.

---

### 2.5 More Than 3 Pickups Allowed Per Week
**Steps to Reproduce:**
- Schedule more than 3 pickups in the same week.

**Expected Result:**  
System should enforce weekly limit.

**Actual Result:**  
No restriction enforced.

---

### 2.6 Less Than 24-Hour Advance Scheduling Allowed
**Steps to Reproduce:**
- Schedule a pickup less than 24 hours in advance.

**Expected Result:**  
Request should be rejected.

**Actual Result:**  
Request is accepted.

---

## 3. Community Module

### 3.1 Cannot Edit or Delete Comments
**Steps to Reproduce:**
- Post a comment.
- Attempt to edit or delete it.

**Expected Result:**  
Edit/delete options should work.

**Actual Result:**  
Action not possible.

---

### 3.2 Comments Display “You” Instead of Username
**Steps to Reproduce:**
- Post a comment as a logged-in user.
- View the comment thread.

**Expected Result:**  
Username should be displayed.

**Actual Result:**  
Displays “You” instead of username.

---

### 3.3 No Comment Input Validation
**Steps to Reproduce:**
- Enter only spaces or special characters.
- Submit the comment.

**Expected Result:**  
Validation should block invalid inputs.

**Actual Result:**  
Comment is accepted.

---

## 4. Awareness (Quiz) Module

### 4.1 Last Question Button Still Says “Next Question”
**Steps to Reproduce:**
- Start the quiz and proceed to last question.
- Observe button label.

**Expected Result:**  
Button should read “Complete Quiz.”

**Actual Result:**  
Button says “Next Question.”

---

### 4.2 Quiz Restarts Instead of Showing Total Score
**Steps to Reproduce:**
- Complete all quiz questions.
- Click final button.

**Expected Result:**  
Final score should display.

**Actual Result:**  
Quiz restarts.

---

### 4.3 Score Display Inconsistencies
**Steps to Reproduce:**
- Complete quiz questions.
- Observe score tracking mid-quiz.

**Expected Result:**  
Score should match number of questions answered.

**Actual Result:**  
Incorrect score displayed (e.g., “2 out of 5” on Q3 of 3).

---

### 4.4 Incorrect Answer Logic (“Peter Box” Always Wrong)
**Steps to Reproduce:**
- Select “Peter Box” as an answer.
- Submit.

**Expected Result:**  
Correctness should depend on the question.

**Actual Result:**  
Always marked incorrect.

---

### 4.5 Score Increases After Quiz Completion
**Steps to Reproduce:**
- Finish quiz.
- Continue clicking next or resubmitting answers.

**Expected Result:**  
Score should freeze after completion.

**Actual Result:**  
Score keeps increasing.

---

## 5. Dashboard Module

### 5.1 Analytics UI Needs Improvement
**Steps to Reproduce:**
- View the dashboard analytics section.

**Expected Result:**  
Clear, readable, and visually appealing analytics.

**Actual Result:**  
UI is cluttered/unclear.

---

### 5.2 Scheduled Pickups Not Visible
**Steps to Reproduce:**
- Schedule a pickup.
- View dashboard.

**Expected Result:**  
Scheduled pickups should be listed.

**Actual Result:**  
No pickups displayed.

---

### 5.3 Dashboard Missing Added Schedules
**Steps to Reproduce:**
- Add new schedule.
- View dashboard.

**Expected Result:**  
Dashboard should update in real-time.

**Actual Result:**  
Data not reflected.

---

## 6. Landing Page (Clean City)

### 6.1 Feature Section Not Interactive
**Steps to Reproduce:**
- Scroll to Feature section.
- Attempt to click on features.

**Expected Result:**  
Features should link to relevant pages.

**Actual Result:**  
No interaction.

---

### 6.2 Feature Section Missing Links
**Steps to Reproduce:**
- Attempt to navigate from Feature section.

**Expected Result:**  
Links should direct to “Sign Up,” “Schedule Pickup,” or “Read Blog.”

**Actual Result:**  
No navigation available.

---

## 7. Profile Module

### 7.1 User Comments Not Displayed
**Steps to Reproduce:**
- Post a comment.
- Visit profile.

**Expected Result:**  
Profile should show user’s comments.

**Actual Result:**  
Comments not shown.

---

### 7.2 Missing Redirect to Create Blog Post
**Steps to Reproduce:**
- Attempt to create a blog post from profile.

**Expected Result:**  
Redirect to blog creation form.

**Actual Result:**  
No redirection.

---

### 7.3 Scheduled Requests Not Reflected
**Steps to Reproduce:**
- Schedule a request.
- View profile.

**Expected Result:**  
Scheduled requests should be listed.

**Actual Result:**  
No records shown.

---

## 8. Home / Sign-up Module

### 8.1 Multiple Accounts with Same Credentials Allowed
**Steps to Reproduce:**
- Sign up with an email and password.
- Repeat sign-up with same credentials.

**Expected Result:**  
System should reject duplicates with error message.

**Actual Result:**  
Multiple accounts created.

---

### 8.2 Missing “User Already Exists” Error
**Steps to Reproduce:**
- Attempt to register with an existing email.

**Expected Result:**  
Clear “User already exists” message displayed.

**Actual Result:**  
No error shown.


✅ **End of Final Defect Log**
