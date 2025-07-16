Defect Log — CleanCity: Waste Pickup Scheduler

This document captures all identified defects across various modules of the CleanCity app for Week 6 testing.

📋 Registration Page

1. Allows scheduling in the past (invalid dates)

Severity: High

Type: Validation Bug

Expected: Prevent dates earlier than today

2. Alert does not clear after submission

Severity: Low

Type: UI/UX Bug

Expected: Success alert should disappear automatically or on reset

3. Additional description allows <3 characters

Severity: Low

Type: Input Validation Bug

Expected: Minimum 3 characters required

4. No name validation

Severity: Medium

Type: Validation Bug

Expected: Name should not be empty or contain invalid characters

5. Allows invalid inputs (spaces, dots, symbols)

Severity: High

Type: Input Sanitization Bug

6. Allows scheduling for the same date

Severity: Medium

Type: Business Logic Bug

7. Unable to add after scheduling

Severity: High

Type: Functional Bug

Expected: Users should be able to add another request after scheduling

8. No status update after post creation

Severity: Medium

Type: UI/Sync Bug

9. Unable to upload profile picture

Severity: Medium

Type: Functional Bug

🏠 Landing Page (CleanCity)

10. Feature section not interactive

Severity: Low

Type: UI Bug

Expected: Feature items should be clickable or linked

11. Feature section lacks links to relevant pages

Severity: Medium

Type: UX Bug

📝 Blogs Page

12. User can’t see own blog/comments

Severity: Medium

Type: Data Display Bug

13. Comments disappear on reload

Severity: High

Type: Data Persistence Bug

14. Dropdown filter lacks 'Apply' button

Severity: Medium

Type: UI/UX Bug

15. Allows same-day pickup scheduling

Severity: High

Type: Business Logic Bug

16. Exceeds weekly pickup limit

Severity: High

Type: Logic Bug

17. Pickup allowed <24 hours in advance

Severity: High

Type: Validation Bug

💬 Community Page

18. Cannot edit or delete comments

Severity: Medium

Type: Functional Bug

19. Comments show "you" instead of actual username

Severity: Low

Type: UI/Text Bug

20. No input validation on comments

Severity: Medium

Type: Validation Bug

📚 Awareness (Quiz)

21. Last question still shows “Next Question”

Severity: Medium

Type: UI/Text Bug

22. Quiz restarts instead of showing score

Severity: Medium

Type: Logic Bug

23. Score display is inconsistent

Severity: Medium

Type: UI Bug

24. Logic issue: "Peter Box" always incorrect

Severity: High

Type: Logic Bug

25. Score increases after completion

Severity: High

Type: Logic Bug

📊 Dashboard

26. Dashboard UI needs improvement

Severity: Low

Type: UI/Design Issue

27. Scheduled pickups not visible

Severity: High

Type: Data Display Bug

28. Dashboard should reflect new schedules

Severity: High

Type: Sync/Logic Bug

❓ Quiz Logic

29. Final score not updated correctly

Severity: Medium

Type: Logic Bug

30. Quiz should show score or exit after completion

Severity: Medium

Type: UX/Flow Bug

👤 Profile Page

31. Comments not visible in profile

Severity: Low

Type: Data Display Bug

32. No prompt to create a blog post

Severity: Low

Type: UX Enhancement

33. Scheduled requests not reflected in profile

Severity: High

Type: Data Sync Bug

🏠 Home/Sign-up Page

34. Duplicate sign-up allowed with same credentials

Severity: High

Type: Validation Bug

35. No error shown for existing user

Severity: Medium

Type: Feedback/Validation Bug

Prepared by: SharonDate: July 16, 2025Status: In Progress ✅