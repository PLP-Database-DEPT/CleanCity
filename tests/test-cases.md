# ✅ CleanCity QA – Test Cases Document
**File:** test-cases.md  
**Phase:** Phase 2 – Test Design  
**Project:** CleanCity – Waste Pickup Scheduler  
**Team:** Bug Hunters  
**Date:** July 2025  

---

## 🔐 Authentication System (Functional Test Cases)

### TC-A01 – Valid Registration with Correct Credentials
- **Preconditions:** User opens Registration form
- **Steps:**
  1. Enter valid email
  2. Password ≥ 8 characters
  3. Confirm password matches
  4. Enter display name
  5. Submit form
- **Expected:** Account created, redirected to Login
- **Reference:** FR-001, FR-003

### TC-A02 – Invalid Registration (Mismatched Passwords)
- **Input:** Valid email, mismatched passwords  
- **Expected:** Error message: “Passwords do not match”  
- **Reference:** FR-002

### TC-A03 – Login with Valid Credentials
- **Input:** Registered email and password  
- **Expected:** Redirected to Dashboard, session saved to localStorage  
- **Reference:** FR-004, FR-006

### TC-A04 – Access Control for Admin Routes
- **Input:** Logged-in user tries to access `/admin`  
- **Expected:** Redirected to error page or Dashboard  
- **Reference:** FR-009

---

## 🗑️ Waste Pickup Scheduling (Functional Test Cases)

### TC-W01 – Schedule Pickup with Valid Data
- **Preconditions:** Authenticated user
- **Steps:**
  1. Select valid future date
  2. Choose waste type and quantity
  3. Provide pickup instructions
  4. Click “Schedule”
- **Expected:** Confirmation modal appears, pickup saved  
- **Reference:** FR-012, FR-013

### TC-W02 – Schedule Pickup with Invalid Date
- **Input:** Today's or past date  
- **Expected:** “Pickup must be scheduled 24+ hours in advance” message  
- **Reference:** FR-013

### TC-W03 – Cancel Pickup Request
- **Preconditions:** Pending pickup exists  
- **Action:** Click “Cancel”  
- **Expected:** Request removed, status = “Cancelled”  
- **Reference:** FR-017

---

## 📊 Dashboard & Gamification (Functional Test Cases)

### TC-D01 – Display Recent Pickups
- **Preconditions:** User has past pickups  
- **Expected:** Pickup table loads with accurate data  
- **Reference:** FR-016, FR-023

### TC-D02 – Leaderboard Ranking
- **Input:** Confirmed pickups logged  
- **Expected:** Leaderboard reflects user’s updated rank  
- **Reference:** FR-026

### TC-D03 – First Pickup Badge Award
- **Trigger:** First successful pickup  
- **Expected:** “First Pickup” badge visible on profile  
- **Reference:** FR-029

---

## 💬 Feedback & Awareness (Functional Test Cases)

### TC-F01 – Submit Feedback
- **Input:** Valid message and rating  
- **Expected:** Feedback saved, success message displayed  
- **Reference:** FR-035

### TC-F02 – Rotate Eco Tips Automatically
- **Expected:** Tip text changes every 5 seconds  
- **Reference:** FR-036

### TC-F03 – Quiz Submission
- **Steps:**
  1. Select quiz answers
  2. Click “Submit”
- **Expected:** Score shown, explanation displayed  
- **Reference:** FR-038

---

## 📰 Blog & Community Features (Functional Test Cases)

### TC-B01 – Submit Community Post
- **Steps:**
  1. Type post message
  2. Click “Post”
- **Expected:** Post appears with timestamp and author  
- **Reference:** FR-041, FR-043

### TC-B02 – Like Another User’s Post
- **Action:** Click “Like”  
- **Expected:** Like count updates instantly  
- **Reference:** FR-045

### TC-B03 – View Blog Details
- **Steps:** Click on blog card  
- **Expected:** Blog opens with full content  
- **Reference:** FR-047

---

## 🛠️ Admin Panel (Functional Test Cases)

### TC-AD01 – View Pending Requests
- **Preconditions:** Admin logged in  
- **Expected:** Requests displayed in table format  
- **Reference:** FR-053

### TC-AD02 – Approve Pickup Request
- **Action:** Click “Approve”  
- **Expected:** Request status changes to “Approved”, user notified  
- **Reference:** FR-054

### TC-AD03 – Suspend User Account
- **Input:** Valid user search  
- **Expected:** Account status = “Suspended”; login disabled  
- **Reference:** FR-059

---

## ⚙️ Non-Functional Test Cases

### TC-N01 – Performance: Dashboard Page Load (3G)
- **Condition:** Throttle to 3G via DevTools  
- **Expected:** Page loads in under 5 seconds  
- **Tool:** Chrome DevTools

### TC-N02 – Security: XSS in Feedback Form
- **Input:** `<script>alert("XSS")</script>`  
- **Expected:** Input sanitized or blocked  
- **Tool:** Manual or browser console

### TC-N03 – Usability: Button Visibility in Mobile
- **Device:** Android emulator  
- **Expected:** All form buttons are fully visible and clickable

---

## ♿ Accessibility Test Cases (WCAG 2.1)

### TC-AX01 – Screen Reader Support
- **Tool:** NVDA  
- **Expected:** All form labels and buttons are announced correctly

### TC-AX02 – Keyboard Navigation
- **Action:** Use Tab / Shift+Tab  
- **Expected:** Logical focus order; no keyboard traps

### TC-AX03 – Alt Text on Icons and Images
- **Page:** Awareness  
- **Expected:** All images/icons have meaningful `alt` text

---

## 🌐 Cross-Browser Compatibility Matrix

| Feature                 | Chrome ✅ | Firefox ✅ | Safari ❌ | Edge ✅ |
|------------------------|-----------|------------|------------|----------|
| Pickup Form Modal      | ✅        | ✅         | ❌ Modal fails to open | ✅  |
| Blog Scroll Behavior   | ✅        | ✅         | ✅         | ✅  |
| Admin Panel Layout     | ✅        | ❌ Sidebar broken | ✅ | ✅  |

---



