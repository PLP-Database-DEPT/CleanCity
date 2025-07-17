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

✅ **End of Final Defect Log**
