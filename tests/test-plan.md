# CleanCity QA Test Plan

**Project:** CleanCity – Waste Pickup Scheduler  
**Team:** TestTribe (Siphesihle, Sharon, Ishmael)  
**Institution:** PLP Academy  
**Prepared By:** Sharon  
**Date:** July 16, 2025  

---

## 1️⃣ Test Objectives

The objective of this QA cycle is to verify that core features — **Sign-Up, Sign-In, Schedule Pickup, Profile Management, Blogs, Community, Awareness Quiz, Dashboard** — function as expected, are user-friendly, secure, and comply with project requirements. The goal is to detect and log defects early and ensure a stable, secure release.

---

## 2️⃣ Scope

**In-Scope:**

- Registration & Authentication  
- Scheduling waste pickups (including date validation, duplicate checks)  
- Editing and viewing user profile details  
- Landing Page usability  
- Blogs & Community (posting, commenting, editing, deleting)  
- Awareness Quiz logic & flow  
- Dashboard display & data synchronization  
- Responsive design checks  
- Input validation & security for user data  

**Out of Scope:**

- Payment integrations (not applicable in this cycle)  
- Third-party API performance checks  
- Heavy-load stress tests (planned for future phases)

---

## 3️⃣ Test Items

| Feature | Related Test Cases / Defects |
| --- | --- |
| Sign-Up | TC-001, Defect #34, #35 |
| Authentication (RBAC) | TC-003 |
| Schedule Pickup | TC-002, TC-005, Defect #1, #6, #15–#17 |
| Profile Management | TC-005, Defect #9, #31–#33 |
| Responsive Design | TC-004 |
| Landing Page Usability | Defect #10, #11 |
| Blogs & Community | Defect #12–#20 |
| Awareness Quiz | Defect #21–#25, #29, #30 |
| Dashboard Display | Defect #26–#28 |
| Validation & Security | Cross-cutting across multiple areas |

---

## 4️⃣ Test Approach

- Manual functional testing using predefined test cases and exploratory techniques.  
- Selenium used for UI verification and automation support.  
- Defects logged and tracked using Jira.  
- Positive & negative test scenarios included.  
- Regression checks on high-risk defect fixes.  
- Cross-browser checks (Chrome and Firefox).

---

## 5️⃣ Test Deliverables

- Final QA Test Plan (this document)  
- Detailed Test Case Documents  
- Defect Log (with unique IDs, severity, and status)  
- QA Summary Report  
- Demo Video showcasing critical issues and flow

---

## 6️⃣ Schedule

| Activity | Dates |
| --- | --- |
| Test Case Design | July 10–12, 2025 |
| Test Execution | July 12–15, 2025 |
| Defect Logging & Retesting | July 13–16, 2025 |
| Final Report & Submission | July 16, 2025 |

---

## 7️⃣ Roles & Responsibilities

| Name | Role |
| --- | --- |
| Siphesihle | Test Execution Lead |
| Sharon | QA Documentation & Reports |
| Ishmael | Defect Logging & Retesting |

---

## 8️⃣ Risks & Mitigation

| Risk | Mitigation |
| --- | --- |
| Tight timeline for execution | Prioritize critical paths, daily team syncs |
| Incomplete or unclear requirements | Clarify directly with the project manager |
| Tool or environment configuration issues | Prepare manual fallback tests |
| Defects missed due to time constraints | Peer reviews and additional exploratory tests |

---

## 9️⃣ Exit Criteria

- All planned test cases executed.  
- All critical and high-severity defects resolved or workarounds documented.  
- No open high-severity bugs remain.  
- Final QA sign-off by the TestTribe team.

---


