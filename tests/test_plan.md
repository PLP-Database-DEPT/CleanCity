#  CleanCity QA Test Plan   
**Prepared By**: Bug Slayhers 
**Testing Period**: July 1–16, 2025  

---

##  1. Test Objectives
 Do thorough testing to the web app- Clean City and ensure:  
- The app is compliant with functional requirements (FR-001 to FR-097)  
- The app is responsive, and compatible across different platforms  
- Ensure there is data security, business rule adherence, and proper error handling  
- Identify, categorize, and document all functional and non-functional defects. 

---

##  2. Test Scope  

###  In Scope 
 Testing will cover functional aspects like:
- Authentication & Role-Based Access  
- Waste Scheduling, Tracking, and Management  
- User Dashboard, rewards,and rankings  
- Blog, Community Interactions, Content Moderation  
- Help System and Activity Logging 

-Nonfunctional aspects:

###  Out of Scope 
Testing will exclude: 
- Backend database (handled via localStorage only)  
- 3rd-party integration (e.g., payment or APIs)  

---

##  3. Entry and Exit Criteria  

### Entry Criteria  
- Deployed CleanCity build accessible via Netlify  
- Test plan, test data, and environment prepared  
- Approved Functional requirement documentation and UI flows available.  

### Exit Criteria  
- All high/critical defects closed or accepted with risk  
- Test execution completed and reports submitted  
- 5-minute presentation video finalized  

---

## 4. Testing Schedule  

| Phase                               | Dates            | Activities                                             |
|-------------------------------------|------------------|--------------------------------------------------------|
| Test Planning                       | June 27 – July 1 | Repository setup, test plan creation, environment prep |
| Test Design / Case Creation         | July 3–4         | Writing test cases and defining test data scenarios    |
| Test Execution                      | July 5–12        | Running test cycles, logging bugs                      |
| Defect Analysis & Reporting         | July 12–15       | Retesting, defect verification, writing summary report |
| Final Presentation                  | July 16          | Submit 5-min video presentation and final report       |



## 5. Testing Strategy 

### Phase 1: Test Planning 

### Test Strategy Development
- Define testing scope and objectives  
- Identify test environments and tools  
- Create test data requirements  
- Establish defect reporting standards  
- **Jira Setup:** Create project, configure workflows  

### Test Environment Setup
- Browser compatibility matrix (Chrome, Firefox, Safari, Edge)  
- Device testing (Desktop, Tablet, Mobile)  
- Network conditions (3G, 4G, WiFi)  
- Accessibility testing tools  

---

### Phase 2: Test Design 

### Test Case Development
- Functional test cases for all features  
- Non-functional test cases (Performance, Security, Usability)  
- Accessibility test cases (WCAG 2.1 compliance)  
- Cross-browser compatibility test cases  
- **Jira Tasks:** Create stories for each testing area  

### Test Data Preparation
- User accounts (regular users, admins)  
- Sample content (blog posts, community posts)  
- Test scenarios for edge cases  

---

### Phase 3: Test Execution 

### Functional Testing
- User registration and authentication flows  
- Waste pickup scheduling and management  
- Blog and community features  
- Admin panel functionality  
- Form validation and error handling  
- **Jira Updates:** Log all testing activities and findings  

### Non-Functional Testing
- Performance testing (load times, responsiveness)  
- Security testing (data validation, XSS prevention)  
- Usability testing (user experience, navigation)  
- Accessibility testing (screen readers, keyboard navigation)  

### Compatibility Testing
- Cross-browser testing  
- Responsive design validation  
- Mobile device testing  

---

### Phase 4: Test Closure 

### Defect Analysis and Reporting
- Categorize and prioritize defects  
- Create detailed bug reports in Jira  
- Provide recommendations for improvements  
- **Jira Reports:** Generate defect summary reports  

### Test Metrics and Documentation
- Test execution summary  
- Defect density analysis  
- Risk assessment  

---


##  6. Test Case Format  

Each test case will include:  
- **Test Case ID & Title**  
- **Objective**   
- **Test Steps**  
- **Expected Result**  
- **Actual Result**  
- **Status (Pass/Fail)**  
- **Severity/Priority (if failed)**  


---

## 7. Risk Management  


### Risk-Based Testing

| Test Area                                   | Likelihood | Impact   | Priority     | Mitigation Strategy                                                  |
|--------------------------------------------|------------|----------|--------------|----------------------------------------------------------------------|
| **User Authentication** (Reg/Login/Reset)  | High       | High     | **Critical** | Test login, token handling, and invalid input. |
| **Waste Management** (Schedule/Cancel)     | High       | High     | **Critical** | Check full flow of operations, data accuracy, and behaviour for simultaneous user actions.           |
| **Admin Functions** (Moderation/Management)| Medium     | High     | **High**     | Use role-based access control and privilege boundary tests.          |
| **Content Features** (Blog/Comments)       | Medium     | Medium   | **Medium**   | Validate user input and test for cross-site scripting.  |
| **Data Persistence** (localStorage)        | High       | Medium   | **High**     | Use **State Transition Testing** and check for data sync issues.     |
| **Form Validation** (Inputs/Errors)        | High       | Medium   | **High**     | Apply **Boundary Value Analysis** and **Equivalence Partitioning**.  |
| **Performance** (Speed/Responsiveness)     | Medium     | High     | **High**     | Test load time and response under stress.              |
| **Usability** (Navigation/UI Design)       | Medium     | Medium   | **Medium**   | Apply **Exploratory Testing** and **Checklist-Based Testing**.       |
| **Accessibility** (WCAG/Screen Readers)    | Low        | High     | **High**     | Follow **WCAG 2.1** guidelines and test using tools like Axe.        |
| **Security** (Sanitization/Sessions)       | High       | Critical | **Critical** | Perform **Static Analysis** to detect XSS and session issues.        |
| **Compatibility** (Browser/Device)         | Medium     | Medium   | **Medium**   | Perform **Configuration Testing** across major browsers/devices.     |
| **Intentional Flaws** (Bug Injection)      | High       | Medium   | **High**     | Use **Exploratory Testing** and verify known edge case triggers.     |
| **Edge Cases** (Boundaries/Unexpected Input)| High       | Medium   | **High**     | Test with extreme or unexpected input values.         |
| **User Experience** (Workflow/UI Flow)     | Medium     | Medium   | **Medium**   | Check if users can complete tasks easily.        |
| **Data Integrity** (Consistency/Reliability)| Medium     | High     | **High**     | Apply **State Transition Testing** and verify transactional accuracy.|

---


## 8. Metrics for Evaluation  

| Metric                         | Goal       |
|--------------------------------|----------  |
| Test Case Coverage             | ≥ 95%      |
| Critical Bugs Fixed            | 100%       |
| Defect Detection Effectiveness | ≥ 85%      |
| Avg. Bug Resolution Time       | < 24 hrs   |
| Accessibility Failures         | 0 Blockers |

---



## 9. References  

- [Functional Requirements Specification](../docs/frs.md)  
- [Roles & Responsibilities](../docs/roles_responsibilities.md)  
- [Environment Setup](../scripts/env_setup.md)

---

