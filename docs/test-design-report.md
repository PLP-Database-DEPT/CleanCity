Updated Test Plan & Strategy

🎯 Test Objectives

The objective of testing the CleanCity application is to verify that core functionalities work as expected, that users receive appropriate feedback during various flows, and that UI and logic bugs are detected early. This includes form validation, filtering, accessibility, UI state refresh, and responsiveness.

🔍 Scope

In Scope:

Form validation (Home, Feedback Pages)

Filtering by location and status (Dashboard)

Admin status updates and data persistence

Accessibility testing (alt text, keyboard nav)

UI responsiveness (mobile/tablet/desktop)

Boundary input handling

Out of Scope:

Backend/API testing (not implemented)

Performance/load testing

Authentication/authorization (not present)

🛠️ Tools & Resources

Manual: Browser DevTools, screen reader (NVDA/VoiceOver)

Automated: React Testing Library, Lighthouse

Collaboration: GitHub (issues, branches, pull requests)

Environment: Local development using Node.js and npm

🧪 Test Levels

Component Testing – Validate each form/page renders and handles input correctly.

Integration Testing – Ensure filters work across data sets.

System Testing – Test full end-to-end flows.

Regression Testing – Re-run tests after fixes or updates.

⚠️ Risk Analysis

Area

Risk Description

Likelihood

Impact

Priority

Form Validation

Invalid inputs bypass checks

High

High

Critical

Admin State Updates

UI doesn’t reflect status change

Medium

High

High

Accessibility

Missing alt text / screen reader issues

High

Medium

High

Filtering

Incorrect results returned

Medium

High

High

Responsiveness

Layout breaks on small screens

Medium

Medium

Medium

👥 Updated Roles & Responsibilities

Sharon – Test Plan Owner: Define test strategy, risks, scope, and documentation lead

Sphe – Manual/Automated Testing: Setup, execute tests, document findings

Ishmael – Reviewer: Review test artifacts, support test data creation, raise GitHub issues

📅 Timeline Adjustments

Initial plan set for 1 week

Mid-week alignment added based on findings from Sphe’s manual testing

Final review and merge scheduled for day 6

