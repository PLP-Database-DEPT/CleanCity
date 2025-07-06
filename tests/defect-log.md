# 🐞 Defect Log – CleanCity QA Testing

This log records all bugs identified during the QA testing of the CleanCity application.
Each entry includes detailed reproduction steps, severity rating, and related references.

| ID | Title | Page | Severity | Steps to Reproduce | Expected Result | Actual Result | Status | Date Reported | Attachment |
|----|-------|------|----------|---------------------|------------------|----------------|--------|----------------|------------|
| D-001 | Password Mismatch Not Caught | Register | Major | 1. Go to Register<br>2. Enter valid email<br>3. Enter non-matching passwords<br>4. Submit | Show “Passwords do not match” | No error message shown | Open | 2025-07-04 | screenshot1.png |
| D-002 | Modal Breaks on Safari | Waste Pickup | Critical | 1. Open app on Safari<br>2. Navigate to Pickup page<br>3. Fill form<br>4. Click Schedule | Show confirmation modal | Modal layout broken | Open | 2025-07-04 | safari_modal_bug.png |
| D-003 | Sidebar Misaligned | Admin Panel (Firefox) | Minor | 1. Open Admin Panel in Firefox<br>2. View sidebar layout | Proper alignment | Sidebar overlaps content | Open | 2025-07-04 | admin_firefox.png |
| D-004 | XSS Vulnerability | Feedback | Critical | 1. Go to Feedback form<br>2. Enter <script>alert("XSS")</script><br>3. Submit | Input rejected or sanitized | Script executes | Open | 2025-07-04 | xss_feedback.png |
| D-005 | Broken Alt Text | Awareness Page | Cosmetic | 1. Go to Awareness page<br>2. Inspect icons/images | All images should have alt text | Some icons lack alt | Open | 2025-07-04 | alt_text_issue.png |
| D-006 | Keyboard Focus Trap | Awareness Page | Major | 1. Use Tab to navigate<br>2. Focus gets stuck on quiz section | Full keyboard navigation | Focus gets trapped | Open | 2025-07-04 | focus_trap.gif |
| D-007 | Inaccessible Buttons (Mobile) | Login | Minor | 1. Open app on mobile<br>2. Try clicking Login | Button should be visible and clickable | Button overflows or cuts off | Open | 2025-07-04 | mobile_button_issue.png |
| D-008 | Cancel Pickup Doesn’t Work | Pickup History | Major | 1. Schedule Pickup<br>2. Click Cancel | Pickup status should update to “Cancelled” | No change, request still active | Open | 2025-07-04 | cancel_fail.png |
| D-009 | No Badge Awarded | Dashboard | Medium | 1. Complete first pickup<br>2. Check profile | “First Pickup” badge should be visible | No badge shown | Open | 2025-07-04 | badge_missing.png |
| D-010 | Login Bypass with URL | Admin | Critical | 1. Paste `/admin` URL directly without login | Redirect or deny access | Admin panel loads without login | Open | 2025-07-04 | admin_bypass.png |

---
📌 Note: Screenshots and evidence files should be included in the `attachments/` folder.
