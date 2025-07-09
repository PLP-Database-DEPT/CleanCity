# CleanCity: Test Plan Document - Team KCS

## 📋 _Document Information_

_Document Version:_ 1.0  
_Date:_ July 2, 2025  
_Project:_ CleanCity - Waste Pickup Scheduler  
_Team:_ KCS  
_Team Members:_

- Stephen Muhoho
- Salma Adam
- Christian Machira

---

## 🎯 _1. Test Objectives_

### _1.1 Primary Objectives_

- _Validate core business functionality_ - Ensure all critical waste pickup scheduling workflows operate correctly
- _Identify critical defects_ - Discover and document defects that could impact system reliability or user experience
- _Assess user experience quality_ - Evaluate usability, navigation, and overall user satisfaction
- _Validate data integrity_ - Confirm data persistence, accuracy, and consistency across all operations

### _1.2 Success Criteria_

- All critical business workflows function without blocking defects
- User can successfully complete end-to-end waste pickup scheduling
- Data persists correctly in localStorage across browser sessions
- Application meets basic accessibility and usability standards
- No critical or high-severity defects remain unresolved

---

## 🔍 _2. Scope_

### _2.1 Functional Areas In Scope_

#### _Core Application Pages_

- _Home page waste pickup request form_ - Primary user entry point and booking functionality
- _Dashboard request viewing and filtering_ - User's personal request management interface
- _Admin panel request management_ - Administrative oversight and control functions
- _Feedback page functionality_ - User feedback collection and display
- _Awareness page content display_ - Educational content and environmental information
- _Navigation between all pages_ - Site-wide navigation and routing

#### _Data Operations_

- _Form data submission and validation_ - Input validation and error handling
- _Data persistence in localStorage_ - Client-side data storage and retrieval
- _Request status updates_ - Status change workflows and notifications
- _Filtering and sorting operations_ - Data organization and search functionality
- _Data display accuracy_ - Correct information presentation across all views

#### _User Interface Testing_

- _Visual layout and design consistency_ - UI component alignment and styling
- _Responsive design_ (Desktop, Tablet, Mobile) - Multi-device compatibility
- _Form field behavior and validation messages_ - Interactive form elements
- _Button and link functionality_ - Navigation and action element testing
- _Error message display_ - User feedback and guidance systems

#### _User Experience Testing_

- _Core user workflow completion_ - End-to-end user journey validation
- _Navigation usability_ - Intuitive site navigation and flow
- _Form completion experience_ - User-friendly data entry processes
- _Data viewing and management_ - Information consumption and manipulation

#### _Accessibility Testing_

- _Keyboard navigation_ - Non-mouse interaction support
- _Screen reader compatibility_ - Assistive technology support
- _Image alt-text presence_ - Visual content accessibility
- _Form label associations_ - Proper form accessibility
- _Color contrast_ (basic assessment) - Visual accessibility standards

#### _Performance Testing_

- _Page load times_ - Response time measurement and validation
- _Basic responsiveness testing_ - Interface performance under normal conditions
- _Large dataset handling_ - System behavior with substantial data volumes

#### _Compatibility Testing_

- _Primary browser testing_ (Chrome, Edge) - Cross-browser functionality
- _Mobile device simulation_ - Mobile experience validation
- _Basic cross-platform validation_ - Multi-environment compatibility

### _2.2 Out of Scope_

- Advanced security penetration testing
- Load testing with concurrent users
- Third-party integration testing
- Database performance optimization
- Advanced accessibility compliance (beyond basic WCAG checks)

---

## 🧪 _3. Testing Approach - Risk-Based Testing_

### _3.1 Risk Assessment Framework_

_Risk Priority = Business Impact × Probability of Failure × User Impact_

#### _3.2 Risk Categories and Testing Strategy_

### _CRITICAL RISKS_

Core business function failures that prevent primary application usage

_Identified Critical Risk Areas:_

- Home page waste pickup request form failure
- User authentication system breakdown
- Data loss in localStorage
- Complete application crashes

_Testing Techniques for Critical Risks:_

- _Positive Testing:_ Verify happy path scenarios work correctly
- _Negative Testing:_ Validate error handling and edge cases
- _End-to-End Testing:_ Complete user workflow validation
- _Data Validation:_ Confirm data integrity and persistence

### _HIGH RISKS_

Known bugs and operational impacts that significantly affect user experience

_Identified High Risk Areas:_

- Dashboard filtering and viewing functionality
- Admin panel request management operations
- Form validation and error message display
- Navigation between pages

_Testing Techniques for High Risks:_

- _Exploratory Testing:_ Investigate known problem areas
- _Boundary Testing:_ Test limits and edge conditions
- _Integration Testing:_ Verify component interactions
- _Regression Testing:_ Ensure fixes don't break existing functionality

### _MEDIUM RISKS_

User experience and accessibility issues that impact usability

_Identified Medium Risk Areas:_

- Responsive design across devices
- Accessibility compliance
- User interface consistency
- Feedback page functionality

_Testing Techniques for Medium Risks:_

- _Usability Testing:_ Assess user experience across devices
- _Accessibility Testing:_ Validate compliance with accessibility standards
- _Compatibility Testing:_ Verify cross-browser functionality

### _LOW RISKS_

Edge cases and performance optimization that have minimal business impact

_Identified Low Risk Areas:_

- Advanced performance optimization
- Edge case scenarios
- Non-critical UI enhancements
- Extended browser compatibility

_Testing Techniques for Low Risks:_

- _Performance Testing:_ Basic load time and responsiveness checks
- _Stress Testing:_ Evaluate behavior under extreme conditions

---

## 📋 _4. Detailed Test Cases by Risk Priority_

### _4.1 CRITICAL RISK TEST CASES_

#### _Test Suite: CR-001 - Home Page Waste Pickup Request Form_

_Risk Level:_ Critical | _Priority:_ P1

| Test Case ID | Test Scenario                              | Test Steps                                                                                                                               | Expected Result                                                                        |
| ------------ | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| CR-001-001   | Valid waste pickup request submission      | 1. Navigate to home page<br>2. Fill all required fields with valid data<br>3. Select waste type, quantity, pickup date<br>4. Submit form | Form submits successfully, confirmation message displayed, data stored in localStorage |
| CR-001-002   | Form validation with empty required fields | 1. Navigate to home page<br>2. Leave required fields empty<br>3. Attempt to submit form                                                  | Form submission prevented, validation errors displayed for empty fields                |
| CR-001-003   | Pickup date validation (24-hour rule)      | 1. Navigate to home page<br>2. Select pickup date within 24 hours<br>3. Submit form                                                      | Error message displayed, form submission prevented                                     |
| CR-001-004   | Data persistence after form submission     | 1. Submit valid waste pickup request<br>2. Navigate away from home page<br>3. Check dashboard for submitted request                      | Request appears in dashboard with correct details                                      |

#### _Test Suite: CR-002 - Authentication System_

_Risk Level:_ Critical | _Priority:_ P1

| Test Case ID | Test Scenario                              | Test Steps                                                                                              | Expected Result                                            |
| ------------ | ------------------------------------------ | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| CR-002-001   | User registration with valid data          | 1. Navigate to registration page<br>2. Enter valid email, password, name<br>3. Submit registration form | Account created successfully, user logged in automatically |
| CR-002-002   | User login with valid credentials          | 1. Navigate to login page<br>2. Enter registered email and password<br>3. Submit login form             | User logged in successfully, redirected to dashboard       |
| CR-002-003   | Session persistence across browser refresh | 1. Log in successfully<br>2. Refresh browser page<br>3. Check login status                              | User remains logged in, session maintained                 |
| CR-002-004   | Role-based access control                  | 1. Log in as regular user<br>2. Attempt to access admin panel<br>3. Verify access restrictions          | Access denied, appropriate error message shown             |

#### _Test Suite: CR-003 - Data Integrity_

_Risk Level:_ Critical | _Priority:_ P1

| Test Case ID | Test Scenario                 | Test Steps                                                                                                  | Expected Result                                           |
| ------------ | ----------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| CR-003-001   | localStorage data persistence | 1. Submit multiple waste pickup requests<br>2. Close browser completely<br>3. Reopen browser and check data | All submitted requests persist and display correctly      |
| CR-003-002   | Data consistency across pages | 1. Submit request on home page<br>2. View request on dashboard<br>3. Check admin panel (if admin)           | Same request data displayed consistently across all pages |

### _4.2 HIGH RISK TEST CASES_

#### _Test Suite: HR-001 - Dashboard Functionality_

_Risk Level:_ High | _Priority:_ P2

| Test Case ID | Test Scenario                   | Test Steps                                                                                                       | Expected Result                                           |
| ------------ | ------------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| HR-001-001   | Dashboard request viewing       | 1. Log in as user with existing requests<br>2. Navigate to dashboard<br>3. Verify all requests display           | All user requests shown with correct details and status   |
| HR-001-002   | Request filtering functionality | 1. Navigate to dashboard with multiple requests<br>2. Apply status filter (e.g., "Pending")<br>3. Verify results | Only requests matching filter criteria displayed          |
| HR-001-003   | Request sorting functionality   | 1. Navigate to dashboard<br>2. Sort by date or status<br>3. Verify sort order                                    | Requests displayed in correct sorted order                |
| HR-001-004   | Request status updates          | 1. Navigate to dashboard<br>2. Check request status<br>3. Verify status accuracy                                 | Request status matches current state and updates properly |

#### _Test Suite: HR-002 - Admin Panel Request Management_

_Risk Level:_ High | _Priority:_ P2

| Test Case ID | Test Scenario                  | Test Steps                                                               | Expected Result                                     |
| ------------ | ------------------------------ | ------------------------------------------------------------------------ | --------------------------------------------------- |
| HR-002-001   | View all requests (admin only) | 1. Log in as admin<br>2. Navigate to admin panel<br>3. View all requests | All system requests displayed regardless of user    |
| HR-002-002   | Approve pickup request         | 1. Log in as admin<br>2. Select pending request<br>3. Approve request    | Request status changes to "Approved", user notified |
| HR-002-003   | Reject pickup request          | 1. Log in as admin<br>2. Select pending request<br>3. Reject with reason | Request status changes to "Rejected", reason stored |
| HR-002-004   | Modify pickup request details  | 1. Log in as admin<br>2. Select request<br>3. Modify details and save    | Changes saved and reflected across system           |

### _4.3 MEDIUM RISK TEST CASES_

#### _Test Suite: MR-001 - Responsive Design_

_Risk Level:_ Medium | _Priority:_ P3

| Test Case ID | Test Scenario                | Test Steps                                                                                                     | Expected Result                                                          |
| ------------ | ---------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| MR-001-001   | Desktop layout (1920x1080)   | 1. Open application on desktop<br>2. Test all pages and functionality<br>3. Verify layout and usability        | All elements properly sized and positioned, full functionality available |
| MR-001-002   | Tablet layout (768px-1024px) | 1. Resize browser to tablet dimensions<br>2. Test all pages and functionality<br>3. Verify responsive behavior | Layout adapts appropriately, touch-friendly interface                    |
| MR-001-003   | Mobile layout (320px-767px)  | 1. Resize browser to mobile dimensions<br>2. Test all pages and functionality<br>3. Verify mobile optimization | Mobile-optimized layout, essential functionality preserved               |

#### _Test Suite: MR-002 - Accessibility Testing_

_Risk Level:_ Medium | _Priority:_ P3

| Test Case ID | Test Scenario           | Test Steps                                                                                                                | Expected Result                                              |
| ------------ | ----------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| MR-002-001   | Keyboard navigation     | 1. Use only keyboard to navigate<br>2. Tab through all interactive elements<br>3. Test form completion with keyboard only | All functionality accessible via keyboard, logical tab order |
| MR-002-002   | Form label associations | 1. Inspect all forms<br>2. Verify label-input associations<br>3. Test with screen reader simulation                       | All form fields properly labeled and associated              |
| MR-002-003   | Image alt-text presence | 1. Inspect all images<br>2. Verify alt-text attributes<br>3. Test content accessibility                                   | All images have appropriate alt-text or decorative marking   |

### _4.4 LOW RISK TEST CASES_

#### _Test Suite: LR-001 - Performance Testing_

_Risk Level:_ Low | _Priority:_ P4

| Test Case ID | Test Scenario              | Test Steps                                                                                                   | Expected Result                                                           |
| ------------ | -------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| LR-001-001   | Page load time measurement | 1. Clear browser cache<br>2. Load each page and measure time<br>3. Record load times                         | All pages load within 3 seconds on standard connection                    |
| LR-001-002   | Large dataset handling     | 1. Create 50+ waste pickup requests<br>2. Navigate to dashboard<br>3. Test filtering and sorting performance | System handles large datasets without significant performance degradation |

---

## 🛠 _5. Test Design Techniques_

### _5.1 Equivalence Partitioning_

- _Valid Data Classes:_ Proper email formats, valid phone numbers, acceptable passwords
- _Invalid Data Classes:_ Malformed emails, invalid characters, password violations
- _Boundary Classes:_ Minimum/maximum character limits, date ranges

### _5.2 Boundary Value Analysis_

- _Character Limits:_ Test at 1, 2, 49, 50, 51 characters for name fields
- _Date Boundaries:_ Test dates at 23 hours, 24 hours, 25 hours from current time
- _Quantity Limits:_ Test minimum and maximum allowable quantities

### _5.3 Error Guessing_

- Based on common user mistakes and system vulnerabilities
- Focus on areas where previous bugs have been found
- Test unusual but possible user behaviors

### _5.4 Checklist-Based Testing_

- Systematic verification of all functional requirements
- UI consistency across all pages
- Data validation completeness

---

## 🔧 _6. Test Environment and Tools_

### _6.1 Test Environment Setup_

- _Primary Browsers:_ Google Chrome (latest), Microsoft Edge (latest)
- _Operating Systems:_ Windows 10/11
- _Mobile Simulation:_ Chrome DevTools, Firefox Responsive Design Mode
- _Screen Sizes:_ 1920x1080 (Desktop), 1024x768 (Tablet), 375x667 (Mobile)

### _6.2 Testing Tools_

- _Manual Testing:_ Primary methodology using browser developer tools
- _Accessibility:_ Browser accessibility inspector, keyboard-only navigation
- _Performance:_ Browser network panel, timing measurements
- _Documentation:_ Screenshots, detailed written observations
- _Bug Tracking:_ [Jira or GitHub Issues]

---

## 📊 _7. Test Execution Strategy_

### _7.1 Test Execution Phases_

#### _Phase 1: Critical Risk Testing (Week 1)_

- Focus on core business functionality
- Home page waste pickup request form
- Authentication system validation
- Data persistence verification

#### _Phase 2: High Risk Testing (Week 2)_

- Dashboard functionality testing
- Admin panel operations
- Form validation and error handling
- Navigation testing

#### _Phase 3: Medium Risk Testing (Week 3)_

- Responsive design validation
- Accessibility compliance testing
- Cross-browser compatibility
- User experience assessment

#### _Phase 4: Low Risk and Final Validation (Week 4)_

- Performance testing
- Edge case scenarios
- Regression testing of fixes
- Final end-to-end validation

### _7.2 Test Execution Approach_

#### _Manual Testing Protocol_

1. _Structured Execution:_ Follow documented test cases step-by-step
2. _Exploratory Sessions:_ Time-boxed investigation (30-60 minutes per session)
3. _Evidence Collection:_ Screenshots and detailed observations for all issues
4. _Defect Retesting:_ Immediate verification of fixes

#### _Daily Testing Activities_

- Execute 8-12 test cases per person per day
- Document all findings immediately
- Conduct brief team sync on critical issues
- Update test execution tracking

---

## 🐛 _8. Defect Management_

### _8.1 Defect Severity Classification_

- _Critical (S1):_ Application crash, data loss, core functionality completely broken
- _High (S2):_ Major feature not working, significant user impact, workaround difficult
- _Medium (S3):_ Feature partially working, moderate user impact, workaround available
- _Low (S4):_ Minor UI issues, cosmetic problems, minimal user impact

### _8.2 Defect Priority Classification_

- _P1:_ Fix immediately, blocks testing or critical functionality
- _P2:_ Fix in current iteration, impacts key workflows
- _P3:_ Fix in next iteration, affects user experience
- _P4:_ Fix when resources available, minor issues

### _8.3 Defect Reporting Standards_

#### _Defect Report Template_

**Title:** [Clear, concise summary of the issue]
**Severity:** [S1/S2/S3/S4]
**Priority:** [P1/P2/P3/P4]
**Environment:** [Browser, OS, Screen Size]
**Preconditions:** [System state before test]
**Steps to Reproduce:**

1. [Detailed step-by-step instructions]
2. [Include specific data used]
3. [Clear navigation path]
   **Expected Result:** [What should happen]
   **Actual Result:** [What actually happened]
   **Attachments:** [Screenshots, error messages]
   **Additional Notes:** [Any relevant observations]

---

## 📈 _9. Test Metrics and Reporting_

### _9.1 Test Execution Metrics_

- _Test Case Execution Rate:_ Number of test cases executed per day
- _Pass/Fail Ratio:_ Percentage of test cases passing
- _Defect Discovery Rate:_ Number of defects found per testing hour
- _Risk Coverage:_ Percentage of identified risks tested

### _9.2 Quality Metrics_

- _Defect Density:_ Defects per functional area
- _Critical/High Defect Resolution Rate:_ Time to fix critical issues
- _Retest Success Rate:_ Percentage of defects fixed correctly on first retest

### _9.3 Reporting Schedule_

- _Daily:_ Brief status update and blocker identification
- _Weekly:_ Comprehensive progress report with metrics
- _End of Phase:_ Phase completion summary with risk assessment
- _Final:_ Complete test execution summary and quality assessment

---

## 👥 _10. Team Roles and Responsibilities_

### _10.1 Team Member Assignments_

#### _Stephen Muhoho_

- _Primary Responsibility:_ Critical Risk Testing (Authentication, Core Forms)
- _Secondary:_ Admin Panel Testing
- _Specialization:_ Data integrity and backend functionality

#### _Salma Adam_

- _Primary Responsibility:_ High Risk Testing (Dashboard, User Experience)
- _Secondary:_ Accessibility Testing
- _Specialization:_ User interface and experience validation

#### _Christian Machira_

- _Primary Responsibility:_ Medium/Low Risk Testing (Responsive Design, Performance)
- _Secondary:_ Cross-browser Compatibility
- _Specialization:_ Technical compatibility and performance

### _10.2 Shared Responsibilities_

- _All Team Members:_
  - Daily defect documentation and tracking
  - Exploratory testing sessions
  - Test case execution and reporting
  - Knowledge sharing and collaboration

---

## ⚠ _11. Risk Assessment and Mitigation_

### _11.1 Project Risks and Mitigation Strategies_

| Risk                                        | Impact | Probability | Mitigation Strategy                                          |
| ------------------------------------------- | ------ | ----------- | ------------------------------------------------------------ |
| Critical defects discovered late in testing | High   | Medium      | Prioritize critical risk testing early, daily defect review  |
| localStorage limitations cause data loss    | High   | Low         | Test data limits early, implement graceful degradation       |
| Team member unavailability                  | Medium | Medium      | Cross-train on all test areas, maintain shared documentation |
| Browser compatibility issues                | Medium | Medium      | Test on primary browsers early and frequently                |
| Performance issues under load               | Low    | Low         | Basic performance testing, identify major bottlenecks        |

### _11.2 Technical Risk Mitigation_

- _Environment Issues:_ Maintain backup testing environments
- _Tool Failures:_ Use multiple browsers and testing approaches
- _Data Corruption:_ Regular backup of test data and configurations

---

## ✅ _12. Entry and Exit Criteria_

### _12.1 Entry Criteria_

- Application deployed and accessible in test environment
- Test environment configured and validated
- Test cases reviewed and approved by team
- Test data prepared and available
- Team trained on application functionality

### _12.2 Exit Criteria_

- All critical and high-priority test cases executed
- All critical (S1) and high (S2) severity defects resolved
- 95% of planned test cases completed
- All identified risks tested and documented
- Team consensus on application readiness
- Test completion report approved

---

## 📚 _13. Deliverables_

### _13.1 Test Documentation_

- _Test Plan Document_ (this document)
- _Test Case Specifications_ with detailed steps
- _Test Execution Reports_ with daily/weekly status
- _Defect Reports_ with complete documentation
- _Final Test Summary Report_ with recommendations

### _13.2 Evidence Package_

- _Screenshots_ of all major functionality
- _Defect Evidence_ with reproduction steps
- _Test Coverage Report_ mapping tests to requirements
- _Risk Assessment Summary_ with mitigation status

---
