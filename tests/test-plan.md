# CleanCity: Test Plan Document - Team KCS

## 📋 **Document Information**

**Document Version:** 1.0  
**Date:** July 2, 2025  
**Project:** CleanCity - Waste Pickup Scheduler  
**Test Plan ID:** TP-CC-KCS-001  
**Team:** KCS  
**Team Members:**
- Stephen Muhoho
- Salma Adam  
- Christian Machira

---

## 🎯 **1. Test Objectives**

### **1.1 Primary Objectives**
- **Validate core business functionality** - Ensure all critical waste pickup scheduling workflows operate correctly
- **Identify critical defects** - Discover and document defects that could impact system reliability or user experience
- **Assess user experience quality** - Evaluate usability, navigation, and overall user satisfaction
- **Validate data integrity** - Confirm data persistence, accuracy, and consistency across all operations

### **1.2 Success Criteria**
- All critical business workflows function without blocking defects
- User can successfully complete end-to-end waste pickup scheduling
- Data persists correctly in localStorage across browser sessions
- Application meets basic accessibility and usability standards
- No critical or high-severity defects remain unresolved

---

## 🔍 **2. Scope**

### **2.1 Functional Areas In Scope**

#### **Core Application Pages**
- **Home page waste pickup request form** - Primary user entry point and booking functionality
- **Dashboard request viewing and filtering** - User's personal request management interface
- **Admin panel request management** - Administrative oversight and control functions
- **Feedback page functionality** - User feedback collection and display
- **Awareness page content display** - Educational content and environmental information
- **Navigation between all pages** - Site-wide navigation and routing

#### **Data Operations**
- **Form data submission and validation** - Input validation and error handling
- **Data persistence in localStorage** - Client-side data storage and retrieval
- **Request status updates** - Status change workflows and notifications
- **Filtering and sorting operations** - Data organization and search functionality
- **Data display accuracy** - Correct information presentation across all views

#### **User Interface Testing**
- **Visual layout and design consistency** - UI component alignment and styling
- **Responsive design** (Desktop, Tablet, Mobile) - Multi-device compatibility
- **Form field behavior and validation messages** - Interactive form elements
- **Button and link functionality** - Navigation and action element testing
- **Error message display** - User feedback and guidance systems

#### **User Experience Testing**
- **Core user workflow completion** - End-to-end user journey validation
- **Navigation usability** - Intuitive site navigation and flow
- **Form completion experience** - User-friendly data entry processes
- **Data viewing and management** - Information consumption and manipulation

#### **Accessibility Testing**
- **Keyboard navigation** - Non-mouse interaction support
- **Screen reader compatibility** - Assistive technology support
- **Image alt-text presence** - Visual content accessibility
- **Form label associations** - Proper form accessibility
- **Color contrast** (basic assessment) - Visual accessibility standards

#### **Performance Testing**
- **Page load times** - Response time measurement and validation
- **Basic responsiveness testing** - Interface performance under normal conditions
- **Large dataset handling** - System behavior with substantial data volumes

#### **Compatibility Testing**
- **Primary browser testing** (Chrome, Edge) - Cross-browser functionality
- **Mobile device simulation** - Mobile experience validation
- **Basic cross-platform validation** - Multi-environment compatibility

### **2.2 Out of Scope**
- Advanced security penetration testing
- Load testing with concurrent users
- Third-party integration testing
- Database performance optimization
- Advanced accessibility compliance (beyond basic WCAG checks)

---

## 🧪 **3. Testing Approach - Risk-Based Testing**

### **3.1 Risk Assessment Framework**

**Risk Priority = Business Impact × Probability of Failure × User Impact**

#### **3.2 Risk Categories and Testing Strategy**

### **CRITICAL RISKS** 
*Core business function failures that prevent primary application usage*

**Identified Critical Risk Areas:**
- Home page waste pickup request form failure
- User authentication system breakdown
- Data loss in localStorage
- Complete application crashes

**Testing Techniques for Critical Risks:**
- **Positive Testing:** Verify happy path scenarios work correctly
- **Negative Testing:** Validate error handling and edge cases  
- **End-to-End Testing:** Complete user workflow validation
- **Data Validation:** Confirm data integrity and persistence

### **HIGH RISKS**
*Known bugs and operational impacts that significantly affect user experience*

**Identified High Risk Areas:**
- Dashboard filtering and viewing functionality
- Admin panel request management operations
- Form validation and error message display
- Navigation between pages

**Testing Techniques for High Risks:**
- **Exploratory Testing:** Investigate known problem areas
- **Boundary Testing:** Test limits and edge conditions
- **Integration Testing:** Verify component interactions
- **Regression Testing:** Ensure fixes don't break existing functionality

### **MEDIUM RISKS**
*User experience and accessibility issues that impact usability*

**Identified Medium Risk Areas:**
- Responsive design across devices
- Accessibility compliance
- User interface consistency
- Feedback page functionality

**Testing Techniques for Medium Risks:**
- **Usability Testing:** Assess user experience across devices
- **Accessibility Testing:** Validate compliance with accessibility standards
- **Compatibility Testing:** Verify cross-browser functionality

### **LOW RISKS**
*Edge cases and performance optimization that have minimal business impact*

**Identified Low Risk Areas:**
- Advanced performance optimization
- Edge case scenarios
- Non-critical UI enhancements
- Extended browser compatibility

**Testing Techniques for Low Risks:**
- **Performance Testing:** Basic load time and responsiveness checks
- **Stress Testing:** Evaluate behavior under extreme conditions

---

## 📋 **4. Detailed Test Cases by Risk Priority**

### **4.1 CRITICAL RISK TEST CASES**

#### **Test Suite: CR-001 - Home Page Waste Pickup Request Form**
**Risk Level:** Critical | **Priority:** P1

| Test Case ID | Test Scenario | Test Steps | Expected Result |
|--------------|---------------|------------|-----------------|
| CR-001-001 | Valid waste pickup request submission | 1. Navigate to home page<br>2. Fill all required fields with valid data<br>3. Select waste type, quantity, pickup date<br>4. Submit form | Form submits successfully, confirmation message displayed, data stored in localStorage |
| CR-001-002 | Form validation with empty required fields | 1. Navigate to home page<br>2. Leave required fields empty<br>3. Attempt to submit form | Form submission prevented, validation errors displayed for empty fields |
| CR-001-003 | Pickup date validation (24-hour rule) | 1. Navigate to home page<br>2. Select pickup date within 24 hours<br>3. Submit form | Error message displayed, form submission prevented |
| CR-001-004 | Data persistence after form submission | 1. Submit valid waste pickup request<br>2. Navigate away from home page<br>3. Check dashboard for submitted request | Request appears in dashboard with correct details |

#### **Test Suite: CR-002 - Authentication System**
**Risk Level:** Critical | **Priority:** P1

| Test Case ID | Test Scenario | Test Steps | Expected Result |
|--------------|---------------|------------|-----------------|
| CR-002-001 | User registration with valid data | 1. Navigate to registration page<br>2. Enter valid email, password, name<br>3. Submit registration form | Account created successfully, user logged in automatically |
| CR-002-002 | User login with valid credentials | 1. Navigate to login page<br>2. Enter registered email and password<br>3. Submit login form | User logged in successfully, redirected to dashboard |
| CR-002-003 | Session persistence across browser refresh | 1. Log in successfully<br>2. Refresh browser page<br>3. Check login status | User remains logged in, session maintained |
| CR-002-004 | Role-based access control | 1. Log in as regular user<br>2. Attempt to access admin panel<br>3. Verify access restrictions | Access denied, appropriate error message shown |

#### **Test Suite: CR-003 - Data Integrity**
**Risk Level:** Critical | **Priority:** P1

| Test Case ID | Test Scenario | Test Steps | Expected Result |
|--------------|---------------|------------|-----------------|
| CR-003-001 | localStorage data persistence | 1. Submit multiple waste pickup requests<br>2. Close browser completely<br>3. Reopen browser and check data | All submitted requests persist and display correctly |
| CR-003-002 | Data consistency across pages | 1. Submit request on home page<br>2. View request on dashboard<br>3. Check admin panel (if admin) | Same request data displayed consistently across all pages |

### **4.2 HIGH RISK TEST CASES**

#### **Test Suite: HR-001 - Dashboard Functionality**
**Risk Level:** High | **Priority:** P2

| Test Case ID | Test Scenario | Test Steps | Expected Result |
|--------------|---------------|------------|-----------------|
| HR-001-001 | Dashboard request viewing | 1. Log in as user with existing requests<br>2. Navigate to dashboard<br>3. Verify all requests display | All user requests shown with correct details and status |
| HR-001-002 | Request filtering functionality | 1. Navigate to dashboard with multiple requests<br>2. Apply status filter (e.g., "Pending")<br>3. Verify results | Only requests matching filter criteria displayed |
| HR-001-003 | Request sorting functionality | 1. Navigate to dashboard<br>2. Sort by date or status<br>3. Verify sort order | Requests displayed in correct sorted order |
| HR-001-004 | Request status updates | 1. Navigate to dashboard<br>2. Check request status<br>3. Verify status accuracy | Request status matches current state and updates properly |

#### **Test Suite: HR-002 - Admin Panel Request Management**
**Risk Level:** High | **Priority:** P2

| Test Case ID | Test Scenario | Test Steps | Expected Result |
|--------------|---------------|------------|-----------------|
| HR-002-001 | View all requests (admin only) | 1. Log in as admin<br>2. Navigate to admin panel<br>3. View all requests | All system requests displayed regardless of user |
| HR-002-002 | Approve pickup request | 1. Log in as admin<br>2. Select pending request<br>3. Approve request | Request status changes to "Approved", user notified |
| HR-002-003 | Reject pickup request | 1. Log in as admin<br>2. Select pending request<br>3. Reject with reason | Request status changes to "Rejected", reason stored |
| HR-002-004 | Modify pickup request details | 1. Log in as admin<br>2. Select request<br>3. Modify details and save | Changes saved and reflected across system |

### **4.3 MEDIUM RISK TEST CASES**

#### **Test Suite: MR-001 - Responsive Design**
**Risk Level:** Medium | **Priority:** P3

| Test Case ID | Test Scenario | Test Steps | Expected Result |
|--------------|---------------|------------|-----------------|
| MR-001-001 | Desktop layout (1920x1080) | 1. Open application on desktop<br>2. Test all pages and functionality<br>3. Verify layout and usability | All elements properly sized and positioned, full functionality available |
| MR-001-002 | Tablet layout (768px-1024px) | 1. Resize browser to tablet dimensions<br>2. Test all pages and functionality<br>3. Verify responsive behavior | Layout adapts appropriately, touch-friendly interface |
| MR-001-003 | Mobile layout (320px-767px) | 1. Resize browser to mobile dimensions<br>2. Test all pages and functionality<br>3. Verify mobile optimization | Mobile-optimized layout, essential functionality preserved |

#### **Test Suite: MR-002 - Accessibility Testing**
**Risk Level:** Medium | **Priority:** P3

| Test Case ID | Test Scenario | Test Steps | Expected Result |
|--------------|---------------|------------|-----------------|
| MR-002-001 | Keyboard navigation | 1. Use only keyboard to navigate<br>2. Tab through all interactive elements<br>3. Test form completion with keyboard only | All functionality accessible via keyboard, logical tab order |
| MR-002-002 | Form label associations | 1. Inspect all forms<br>2. Verify label-input associations<br>3. Test with screen reader simulation | All form fields properly labeled and associated |
| MR-002-003 | Image alt-text presence | 1. Inspect all images<br>2. Verify alt-text attributes<br>3. Test content accessibility | All images have appropriate alt-text or decorative marking |

### **4.4 LOW RISK TEST CASES**

#### **Test Suite: LR-001 - Performance Testing**
**Risk Level:** Low | **Priority:** P4

| Test Case ID | Test Scenario | Test Steps | Expected Result |
|--------------|---------------|------------|-----------------|
| LR-001-001 | Page load time measurement | 1. Clear browser cache<br>2. Load each page and measure time<br>3. Record load times | All pages load within 3 seconds on standard connection |
| LR-001-002 | Large dataset handling | 1. Create 50+ waste pickup requests<br>2. Navigate to dashboard<br>3. Test filtering and sorting performance | System handles large datasets without significant performance degradation |

---

## 🛠️ **5. Test Design Techniques**

### **5.1 Equivalence Partitioning**
- **Valid Data Classes:** Proper email formats, valid phone numbers, acceptable passwords
- **Invalid Data Classes:** Malformed emails, invalid characters, password violations
- **Boundary Classes:** Minimum/maximum character limits, date ranges

### **5.2 Boundary Value Analysis**
- **Character Limits:** Test at 1, 2, 49, 50, 51 characters for name fields
- **Date Boundaries:** Test dates at 23 hours, 24 hours, 25 hours from current time
- **Quantity Limits:** Test minimum and maximum allowable quantities

### **5.3 Error Guessing**
- Based on common user mistakes and system vulnerabilities
- Focus on areas where previous bugs have been found
- Test unusual but possible user behaviors

### **5.4 Checklist-Based Testing**
- Systematic verification of all functional requirements
- UI consistency across all pages
- Data validation completeness

---

## 🔧 **6. Test Environment and Tools**

### **6.1 Test Environment Setup**
- **Primary Browsers:** Google Chrome (latest), Microsoft Edge (latest)
- **Operating Systems:** Windows 10/11, macOS (where available)
- **Mobile Simulation:** Chrome DevTools, Firefox Responsive Design Mode
- **Screen Sizes:** 1920x1080 (Desktop), 1024x768 (Tablet), 375x667 (Mobile)

### **6.2 Testing Tools**
- **Manual Testing:** Primary methodology using browser developer tools
- **Accessibility:** Browser accessibility inspector, keyboard-only navigation
- **Performance:** Browser network panel, timing measurements
- **Documentation:** Screenshots, detailed written observations
- **Bug Tracking:** [To be specified - Jira or GitHub Issues]

---

## 📊 **7. Test Execution Strategy**

### **7.1 Test Execution Phases**

#### **Phase 1: Critical Risk Testing (Week 1)**
- Focus on core business functionality
- Home page waste pickup request form
- Authentication system validation
- Data persistence verification

#### **Phase 2: High Risk Testing (Week 2)**
- Dashboard functionality testing
- Admin panel operations
- Form validation and error handling
- Navigation testing

#### **Phase 3: Medium Risk Testing (Week 3)**
- Responsive design validation
- Accessibility compliance testing
- Cross-browser compatibility
- User experience assessment

#### **Phase 4: Low Risk and Final Validation (Week 4)**
- Performance testing
- Edge case scenarios
- Regression testing of fixes
- Final end-to-end validation

### **7.2 Test Execution Approach**

#### **Manual Testing Protocol**
1. **Structured Execution:** Follow documented test cases step-by-step
2. **Exploratory Sessions:** Time-boxed investigation (30-60 minutes per session)
3. **Evidence Collection:** Screenshots and detailed observations for all issues
4. **Defect Retesting:** Immediate verification of fixes

#### **Daily Testing Activities**
- Execute 8-12 test cases per person per day
- Document all findings immediately
- Conduct brief team sync on critical issues
- Update test execution tracking

---

## 🐛 **8. Defect Management**

### **8.1 Defect Severity Classification**
- **Critical (S1):** Application crash, data loss, core functionality completely broken
- **High (S2):** Major feature not working, significant user impact, workaround difficult
- **Medium (S3):** Feature partially working, moderate user impact, workaround available
- **Low (S4):** Minor UI issues, cosmetic problems, minimal user impact

### **8.2 Defect Priority Classification**
- **P1:** Fix immediately, blocks testing or critical functionality
- **P2:** Fix in current iteration, impacts key workflows
- **P3:** Fix in next iteration, affects user experience
- **P4:** Fix when resources available, minor issues

### **8.3 Defect Reporting Standards**

#### **Defect Report Template**
```
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
```

---

## 📈 **9. Test Metrics and Reporting**

### **9.1 Test Execution Metrics**
- **Test Case Execution Rate:** Number of test cases executed per day
- **Pass/Fail Ratio:** Percentage of test cases passing
- **Defect Discovery Rate:** Number of defects found per testing hour
- **Risk Coverage:** Percentage of identified risks tested

### **9.2 Quality Metrics**
- **Defect Density:** Defects per functional area
- **Critical/High Defect Resolution Rate:** Time to fix critical issues
- **Retest Success Rate:** Percentage of defects fixed correctly on first retest

### **9.3 Reporting Schedule**
- **Daily:** Brief status update and blocker identification
- **Weekly:** Comprehensive progress report with metrics
- **End of Phase:** Phase completion summary with risk assessment
- **Final:** Complete test execution summary and quality assessment

---

## 👥 **10. Team Roles and Responsibilities**

### **10.1 Team Member Assignments**

#### **Stephen Muhoho**
- Authentication system testing
- Content management testing
- Create test folders

#### **Salma Adam**
- Dashboard and analytics testing
- Admin functions testing

#### **Christian Machira**
- Waste management testing
- Community features testing
- Non-functional testing

### **10.2 Shared Responsibilities**
- **All Team Members:**
  - Daily defect documentation and tracking
  - Exploratory testing sessions
  - Test case execution and reporting
  - Knowledge sharing and collaboration
  - adding web content

---

## ⚠️ **11. Risk Assessment and Mitigation**

### **11.1 Project Risks and Mitigation Strategies**

| Risk | Impact | Probability | Mitigation Strategy |
|------|--------|-------------|-------------------|
| Critical defects discovered late in testing | High | Medium | Prioritize critical risk testing early, daily defect review |
| localStorage limitations cause data loss | High | Low | Test data limits early, implement graceful degradation |
| Team member unavailability | Medium | Medium | Cross-train on all test areas, maintain shared documentation |
| Browser compatibility issues | Medium | Medium | Test on primary browsers early and frequently |
| Performance issues under load | Low | Low | Basic performance testing, identify major bottlenecks |

### **11.2 Technical Risk Mitigation**
- **Environment Issues:** Maintain backup testing environments
- **Tool Failures:** Use multiple browsers and testing approaches
- **Data Corruption:** Regular backup of test data and configurations

---

## ✅ **12. Entry and Exit Criteria**

### **12.1 Entry Criteria**
- Application deployed and accessible in test environment
- Test environment configured and validated
- Test cases reviewed and approved by team
- Test data prepared and available
- Team trained on application functionality

### **12.2 Exit Criteria**
- All critical and high-priority test cases executed
- All critical (S1) and high (S2) severity defects resolved
- 95% of planned test cases completed
- All identified risks tested and documented
- Team consensus on application readiness
- Test completion report approved

---

## 📚 **13. Deliverables**

### **13.1 Test Documentation**
- **Test Plan Document** (this document)
- **Test Case Specifications** with detailed steps
- **Test Execution Reports** with daily/weekly status
- **Defect Reports** with complete documentation
- **Final Test Summary Report** with recommendations

### **13.2 Evidence Package**
- **Screenshots** of all major functionality
- **Defect Evidence** with reproduction steps
- **Test Coverage Report** mapping tests to requirements
- **Risk Assessment Summary** with mitigation status

---

**Document Status:** Draft  
**Next Review Date:** [To be scheduled]  
**Document Owner:** Team KCS

---

*This test plan aligns with the CleanCity Functional Requirements Specification (FRS) and incorporates the team's risk-based testing approach to ensure comprehensive coverage of critical business functionality while maintaining focus on user experience quality and data integrity.*