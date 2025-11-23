# BugBreakers CleanCity QA Test Cases

## 1. Introduction
This document outlines the test cases for the CleanCity project, developed by the BugBreakers team (Samuel, Martin, Bridget). The team shares the workload, with Samuel assigned 6 test cases, Martin 9 test cases, and Bridget 9 test cases, totaling 24 test cases to ensure comprehensive coverage of functional requirements (FRs).

### 1.1 Objective
To validate the CleanCity application’s functionality, accessibility, usability, performance, security, and compatibility per the requirements in [`functional-requirements.md`](/docs/functional-requirements.md). 
## 2. Test Case Summary
| Module                | Test Cases                          | FRs Covered                     | Tester       | Count |
|-----------------------|-------------------------------------|---------------------------------|--------------|-------|
| Authentication        | TC-SM-001–TC-SM-002, TC-MT-001–TC-MT-002, TC-SM-006 | FR-001, FR-002, FR-004–FR-005, FR-008 | Samuel, Martin | 5     |
| Pickup Request Form   | TC-MT-003–TC-MT-005                | FR-012–FR-013, FR-015         | Martin       | 3     |
| Scheduling            | TC-SM-003–TC-SM-004                | FR-013                        | Samuel       | 2     |
| Dashboard             | TC-BT-001–TC-BT-003, TC-MT-006     | FR-023, FR-025, FR-027        | Bridget, Martin | 4     |
| Community Feed        | TC-MT-007, TC-SM-005               | FR-041–FR-043                 | Martin, Samuel | 2     |
| Admin Panel           | TC-BT-004–TC-BT-006                | FR-053–FR-054, FR-057         | Bridget      | 3     |
| Accessibility         | TC-MT-008–TC-MT-009                | FR-071–FR-072                 | Martin       | 2     |
| Usability             | TC-BT-007                          | FR-075                        | Bridget      | 1     |
| `localStorage`        | TC-MT-012                          | FR-078                        | Martin       | 1     |
| Performance           | TC-BT-008                          | FR-084                        | Bridget      | 1     |
| Security              | TC-MT-013                          | FR-082                        | Martin       | 1     |
| Compatibility         | TC-BT-009                          | FR-086                        | Bridget      | 1     |
| **Total**             |                                     |                                 |              | **24** |

## 3. Test Cases

### 3.1 Authentication
| ID         | Description                                    | FR     | Test Data                  | Steps                                                                 | Expected Result                              | Actual Result | Defect ID | Tester |
|------------|------------------------------------------------|--------|----------------------------|----------------------------------------------------------------------|----------------------------------------------|---------------|-----------|--------|
| TC-SM-001 | Verify successful user registration            | FR-001 | `user1@test.com`, `Test123!` | 1. Navigate to Register. 2. Enter valid email, password. 3. Submit. | Success message, user in `localStorage`      | Pass          | -         | Samuel |
| TC-SM-002 | Verify login with valid credentials (Jest)     | FR-004–FR-005 | `user1@test.com`, `Test123!` | 1. Run Jest script to simulate login. 2. Check session in `localStorage`. | User logged in, session stored             | Pass          | -         | Samuel |
| TC-MT-001 | Verify login with invalid email                | FR-004 | `invalid-email`, `Test123!` | 1. Navigate to Login. 2. Enter invalid email, valid password. 3. Submit. | Error: “Invalid email format”              | Pass          | -         | Martin |
| TC-MT-002 | Verify password requirements enforcement       | FR-008 | `user1@test.com`, `weak`   | 1. Navigate to Register. 2. Enter valid email, weak password. 3. Submit. | Error: “Password must be 8+ chars, include uppercase, number” | Pass          | -         | Martin |
| TC-SM-006 | Verify account verification email sent         | FR-002 | `user1@test.com`           | 1. Register user. 2. Check email delivery.   | Verification email sent                     | To Do         | -         | Samuel |

### 3.2 Pickup Request Form
| ID         | Description                                    | FR     | Test Data                  | Steps                                                                 | Expected Result                              | Actual Result | Defect ID | Tester |
|------------|------------------------------------------------|--------|----------------------------|----------------------------------------------------------------------|----------------------------------------------|---------------|-----------|--------|
| TC-MT-003 | Verify form submission with valid data         | FR-012 | Organic waste, 2025-07-20  | 1. Login. 2. Fill form with valid data. 3. Submit.                   | Success message, request in `localStorage`   | Pass          | -         | Martin |
| TC-MT-004 | Verify form with empty fields                  | FR-015 | Empty fields               | 1. Login. 2. Submit empty form.                                      | Error: “All fields required”                | Pass          | -         | Martin |
| TC-MT-005 | Verify form with invalid waste type            | FR-012 | `invalid-type`             | 1. Login. 2. Enter invalid waste type. 3. Submit.                    | Error: “Invalid waste type”                 | Pass          | -         | Martin |

### 3.3 Scheduling
| ID         | Description                                    | FR     | Test Data                  | Steps                                                                 | Expected Result                              | Actual Result | Defect ID | Tester |
|------------|------------------------------------------------|--------|----------------------------|----------------------------------------------------------------------|----------------------------------------------|---------------|-----------|--------|
| TC-SM-003 | Verify scheduling with future date (Jest)      | FR-013 | 2025-07-20                 | 1. Run Jest script for scheduling. 2. Check `localStorage`.          | Schedule saved, confirmation displayed       | Pass          | -         | Samuel |
| TC-SM-004 | Verify scheduling with past date               | FR-013 | 2025-07-10                 | 1. Login. 2. Schedule pickup for past date. 3. Submit.               | Error: “Cannot schedule past date”          | Fail          | DEF-001   | Samuel |

### 3.4 Dashboard
| ID         | Description                                    | FR     | Test Data                  | Steps                                                                 | Expected Result                              | Actual Result | Defect ID | Tester |
|------------|------------------------------------------------|--------|----------------------------|----------------------------------------------------------------------|----------------------------------------------|---------------|-----------|--------|
| TC-BT-001 | Verify dashboard stats display                 | FR-023 | `user1@test.com`           | 1. Login. 2. Check dashboard stats.                                  | Stats display correctly                     | Pass          | -         | Bridget |
| TC-BT-002 | Verify dashboard filter by status              | FR-025 | `Pending` filter           | 1. Login. 2. Apply status filter. 3. Check results.                  | Only `Pending` requests shown               | Pass          | -         | Bridget |
| TC-BT-003 | Verify dashboard sorting by date               | FR-027 | Sort by `Date`             | 1. Login. 2. Sort dashboard by date. 3. Check order.                 | Requests sorted by date                     | Pass          | -         | Bridget |
| TC-MT-006 | Verify dashboard with localStorage overflow    | FR-027 | 10MB data                  | 1. Login. 2. Fill `localStorage` to limit. 3. Check dashboard.       | Error: “Storage limit exceeded”             | Fail          | DEF-001   | Martin |

### 3.5 Community Feed
| ID         | Description                                    | FR     | Test Data                  | Steps                                                                 | Expected Result                              | Actual Result | Defect ID | Tester |
|------------|------------------------------------------------|--------|----------------------------|----------------------------------------------------------------------|----------------------------------------------|---------------|-----------|--------|
| TC-SM-005 | Verify community post submission               | FR-041–FR-043 | `Test post`            | 1. Login. 2. Submit post. 3. Check feed.                            | Post appears in feed                        | Fail          | DEF-003   | Samuel |
| TC-MT-007 | Verify post with XSS payload                   | FR-042 | `<script>alert(1)</script>` | 1. Login. 2. Submit post with XSS. 3. Check sanitization.           | XSS sanitized, no alert executed            | Pass          | -         | Martin |

### 3.6 Admin Panel
| ID         | Description                                    | FR     | Test Data                  | Steps                                                                 | Expected Result                              | Actual Result | Defect ID | Tester |
|------------|------------------------------------------------|--------|----------------------------|----------------------------------------------------------------------|----------------------------------------------|---------------|-----------|--------|
| TC-BT-004 | Verify request status update                   | FR-053 | `Pending` to `Approved`    | 1. Login as admin. 2. Update request status. 3. Check update.        | Status updated in `localStorage`            | Pass          | -         | Bridget |
| TC-BT-005 | Verify request cancellation                    | FR-054 | `Pending` request          | 1. Login as admin. 2. Cancel request. 3. Check status.              | Request canceled, user notified             | Pass          | -         | Bridget |
| TC-BT-006 | Verify admin data display                      | FR-057 | `user1@test.com`           | 1. Login as admin. 2. Check data display.                            | All requests displayed correctly            | Pass          | -         | Bridget |

### 3.7 Accessibility
| ID         | Description                                    | FR     | Test Data                  | Steps                                                                 | Expected Result                              | Actual Result | Defect ID | Tester |
|------------|------------------------------------------------|--------|----------------------------|----------------------------------------------------------------------|----------------------------------------------|---------------|-----------|--------|
| TC-MT-008 | Verify WCAG 2.1 AA compliance (axe scan)       | FR-071 | axe DevTools               | 1. Run axe scan on homepage. 2. Check violations.                   | No WCAG 2.1 AA violations                 | Fail          | DEF-002   | Martin |
| TC-MT-009 | Verify keyboard navigation                    | FR-072 | Keyboard only              | 1. Navigate app using Tab/Enter. 2. Check all controls accessible.  | All controls reachable by keyboard         | Pass          | -         | Martin |

### 3.8 Usability
| ID         | Description                                    | FR     | Test Data                  | Steps                                                                 | Expected Result                              | Actual Result | Defect ID | Tester |
|------------|------------------------------------------------|--------|----------------------------|----------------------------------------------------------------------|----------------------------------------------|---------------|-----------|--------|
| TC-BT-007 | Verify intuitive navigation                    | FR-075 | `user1@test.com`           | 1. Login. 2. Navigate app. 3. Check ease of use.                     | All features accessible in <3 clicks        | Pass          | -         | Bridget |

### 3.9 localStorage
| ID         | Description                                    | FR     | Test Data                  | Steps                                                                 | Expected Result                              | Actual Result | Defect ID | Tester |
|------------|------------------------------------------------|--------|----------------------------|----------------------------------------------------------------------|----------------------------------------------|---------------|-----------|--------|
| TC-MT-012 | Verify data persistence in localStorage        | FR-078 | `user1@test.com`           | 1. Login. 2. Submit request. 3. Clear cache, reload.                 | Data persists in `localStorage`             | Fail          | DEF-004   | Martin |

### 3.10 Performance
| ID         | Description                                    | FR     | Test Data                  | Steps                                                                 | Expected Result                              | Actual Result | Defect ID | Tester |
|------------|------------------------------------------------|--------|----------------------------|----------------------------------------------------------------------|----------------------------------------------|---------------|-----------|--------|
| TC-BT-008 | Verify page load time (<3s)                    | FR-084 | Chrome, `user1@test.com`   | 1. Login. 2. Measure load time of dashboard.                         | Load time <3s                              | Pass          | -         | Bridget |

### 3.11 Security
| ID         | Description                                    | FR     | Test Data                  | Steps                                                                 | Expected Result                              | Actual Result | Defect ID | Tester |
|------------|------------------------------------------------|--------|----------------------------|----------------------------------------------------------------------|----------------------------------------------|---------------|-----------|--------|
| TC-MT-013 | Verify input validation against XSS            | FR-082 | `<script>alert(1)</script>` | 1. Login. 2. Submit form with XSS. 3. Check sanitization.           | XSS sanitized, no alert executed            | Pass          | -         | Martin |

### 3.12 Compatibility
| ID         | Description                                    | FR     | Test Data                  | Steps                                                                 | Expected Result                              | Actual Result | Defect ID | Tester |
|------------|------------------------------------------------|--------|----------------------------|----------------------------------------------------------------------|----------------------------------------------|---------------|-----------|--------|
| TC-BT-009 | Verify cross-browser compatibility            | FR-086 | Chrome, Firefox, Safari, Edge | 1. Login on each browser. 2. Test form submission, dashboard.       | Consistent UI/functionality across browsers | Pass          | -         | Bridget |

### 3.13 Non-Viable Test Cases
| ID         | Reason for Non-Viability | Impact | Action Taken | Tester |
|------------|-------------------------|--------|--------------|--------|
| TC-SM-005  | Community feed not implemented | Cannot test FR-041–FR-043, DEF-003 | Log DEF-005, monitor for implementation | Samuel |

