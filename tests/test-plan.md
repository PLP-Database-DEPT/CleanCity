# 1. Introduction

## 1.1 Overview
**Document Version:** 2.0  
**Date:** 2025-07-14  
**Author:** Martin    
**Phase:** Test Planning and Execution (STLC Phase 2–3)  

This test plan outlines the strategy, scope, methods, resources, and schedule for quality assurance (QA) testing of the CleanCity web application, a platform for waste management and community engagement. It consolidates deliverables for Week 1 (Phase 1, July 2, 2025) and Week 2 (Phase 2, July 9, 2025) and plans for Week 3 (Phase 3, July 16, 2025) per [`submission.md`](/docs/submission.md), aligning with the Software Testing Life Cycle (STLC) and [`functional-requirements.md`](/docs/functional-requirements.md).

## 1.2 Objectives
- Validate 100% coverage of functional requirements (FR-001–FR-097) for authentication, waste management, dashboard, content management, and admin functions.
- Ensure WCAG 2.1 AA compliance for accessibility (FR-071–FR-074).
- Verify cross-browser compatibility (Chrome, Firefox, Safari, Edge) per FR-086.
- Confirm responsive design across desktop, tablet, and mobile (FR-069–FR-070).
- Validate performance (page load <3 seconds, FR-084–FR-085) and security (FR-082–FR-083).
- Document at least 15 bugs (3 critical/major, 5 medium, 7 minor/cosmetic) per `faq.md`.
- Implement automated smoke tests using Jest for bonus points.

# 2. Scope

## 2.1 In-Scope
| Feature/Module          | Testing Areas                                                                 |
|-------------------------|-------------------------------------------------------------------------------|
| Authentication          | Registration, login, session management (FR-001–FR-011)                       |
| Pickup Request Form     | Field validation, scheduling logic, error states (FR-012–FR-019)             |
| Dashboard               | Stats display, filtering, `localStorage` updates (FR-023–FR-030)             |
| Community Feed          | Post submission, persistence, moderation (FR-036–FR-044)                     |
| Admin Panel             | Request status updates, cancellation, data display (FR-053–FR-064)           |
| Accessibility           | WCAG 2.1 AA, alt-text, tab order, screen readers (FR-071–FR-074)            |
| Responsive Design       | Layout integrity across desktop, tablet, mobile (FR-069–FR-070)             |
| Performance             | Page load time (<3s), resource usage (FR-084–FR-085)                        |
| Security                | Input validation, XSS prevention (FR-081–FR-083)                           |

## 2.2 Out-of-Scope
| Area                    | Rationale                                                             |
|-------------------------|-----------------------------------------------------------------------|
| Backend/API Testing     | Client-side only; uses `localStorage` (FR-078)                        |
| Real-Time Updates       | Not supported in current architecture                                 |
| IoT Device Integration  | Beyond project scope                                                 |
| Localization            | English-only per `functional-requirements.md`                        |

# 3. Test Approach

## 3.1 Testing Methods
| Type                   | Details                                                                 |
|------------------------|-------------------------------------------------------------------------|
| Manual Testing         | UI/UX, form validation, edge cases, exploratory testing, accessibility  |
| Automated Testing      | Jest for core logic (login, scheduling)                                 |
| Accessibility Testing   | Automated (axe, WAVE) and manual (NVDA, keyboard) testing              |
| Compatibility Testing   | Cross-browser (Chrome, Firefox, Safari, Edge) and device emulation     |
| Performance Testing    | Lighthouse for page load and resource metrics                         |
| Security Testing       | Manual XSS and input validation tests using `test-data.md` payloads   |

## 3.2 Testing Techniques
- **Black-box Testing**: Validate UI behavior and functional requirements (e.g., form submissions, dashboard filtering).
- **White-box Testing**: Inspect `localStorage` interactions (FR-078–FR-080, e.g., DEF-001).
- **Boundary Value Analysis**: Test input limits (e.g., max string length, date boundaries per `test-data.md`).
- **Equivalence Partitioning**: Test valid/invalid inputs (e.g., emails, request IDs per `test-data.md`).
- **Decision Table Testing**: Validate admin approval/cancellation logic (FR-054–FR-057).
- **Exploratory Testing**: Identify UI/UX and accessibility issues (FR-071–FR-077).

## 3.3 Test Data
- **Accounts**: `user1@test.com`/`Test123!` (resident), `admin@test.com`/`Admin123!` (admin) per `test-data.md`.
- **Inputs**: Valid/invalid emails (e.g., `invalid-email`), long strings, Unicode characters, XSS payloads (e.g., `<script>alert('XSS')</script>`) per `test-data.md`.
- **Scenarios**: Empty inputs, maximum file sizes, `localStorage` limits.

# 4. Tools and Environment
| Category           | Tools                                              |
|--------------------|----------------------------------------------------|
| Testing            | Chrome DevTools, axe DevTools, WAVE, NVDA, Lighthouse |
| Automation         | Jest (logic)                                       |
| Browsers           | Chrome (114+), Firefox (102+), Safari (15+), Edge (114+) |
| Devices            | Desktop, tablet (iPad emulation), mobile (iPhone/Android emulation) |
| Network            | WiFi, 4G/3G emulation via DevTools                 |
| Project Management | GitHub Projects (`jira-setup.md`)                  |
| Development        | VS Code for test script writing                    |
| Test Data          | `test-data.md` (e.g., test accounts, XSS payloads) |

# 5. Roles and Responsibilities

| Team Member | Role                              | Responsibilities                                                                 |
|-------------|-----------------------------------|---------------------------------------------------------------------------------|
| Samuel      | Team Lead & QA Coordinator       | Oversees test strategy, manages GitHub Projects, reviews documentation, implements Jest automation |
| Martin      | Manual Tester & Accessibility Specialist | Writes/executes test cases for forms, scheduling, dashboard, accessibility; maintains `test-plan.md`, `test-cases.md` |
| Bridget     | Functional Tester & Bug Analyst   | Designs/executes test cases, logs defects in `defect-log.md`, performs compatibility/performance testing, assists with final report |

# 6. Entry and Exit Criteria

## 6.1 Entry Criteria
- Test environment documented in `environment.md` (Week 1).
- Test cases drafted for 100% functional coverage in `test-cases.md` (Week 2).
- GitHub Projects configured per `jira-setup.md` (Week 1).
- Test data prepared per `test-data.md` (Week 1).
- Functional and non-functional requirements reviewed (`functional-requirements.md`, Week 1).

## 6.2 Exit Criteria
- 100% test case execution for functional requirements (FR-001–FR-097).
- At least 15 bugs logged (3 critical/major, 5 medium, 7 minor/cosmetic) in `defect-log.md`.
- All critical/major defects resolved or in “Fixed, Awaiting Retest” status.
- WCAG 2.1 AA compliance verified via axe/WAVE and manual tests.
- Cross-browser compatibility confirmed (Chrome, Firefox, Safari, Edge).
- Performance metrics meet FR-084–FR-085 (page load <3s).
- Traceability matrix in [`traceability-matrix.md`](./traceability-matrix.md
) confirms requirement coverage.
- Final report [`final-report.md`](./final-report) and video submitted per [`submission.md`](/docs/submission.md).

# 7. Risk Assessment
| Risk                                      | Likelihood | Impact | Mitigation                                                               |
|-------------------------------------------|------------|--------|--------------------------------------------------------------------------|
| `localStorage` limitations cause data loss | High       | High   | Test `localStorage` capacity, log defects (e.g., DEF-001), recommend fallback |
| Accessibility fails WCAG 2.1 (e.g., DEF-002) | Medium     | Medium | Run axe/WAVE scans, manual NVDA/keyboard tests (Martin)                  |
| Insufficient defect count (<15)           | High       | High   | Expand testing to authentication, performance, security, edge cases (Martin, Bridget) |
| Unresolved critical defects (e.g., DEF-001) | Medium     | High   | Prioritize fixes, retest by July 15 (Samuel, Martin)                     |
| Cross-browser issues on Safari/Edge       | Medium     | Medium | Test compatibility early, log defects (Bridget)                          |
| Limited team bandwidth                    | Medium     | Medium | Redistribute tasks, document solo efforts if needed (Martin, Samuel)     |

# 8. Test Schedule
| Phase                  | Dates               | Notes                                   |
|------------------------|---------------------|-----------------------------------------|
| Requirement Analysis   | 26–28 June 2025     | Completed, per [`functional-requirements.md`](/docs/functional-requirements.md) |
| Risk Assessment        | 28–29 June 2025     | Completed, documented in this plan     |
| Test Planning          | 29 June – 1 July 2025 | Completed, `test-plan.md`        |
| Test Case Design       | 1–7 July 2025       | Completed, `tests/test-cases.md` (Week 2) |
| Test Execution         | 7–14 July 2025      | Ongoing, manual (Martin, Bridget), automated (Samuel) |
| Final Reporting        | 14–16 July 2025     | `tests/final-report.md`, video submission |

**Week 2 Summary (Phase 2, July 9, 2025)**:
- Drafted 6 test cases in `test-cases.md` (e.g., TC-SM-001 for dashboard, TC-MK-001 for accessibility), covering forms, scheduling, dashboard, accessibility.
- Initialized `defect-log.md` with 5 defects (2 high, 3 medium, e.g., DEF-001, DEF-002).
- Challenges: Incomplete TC-SM-002 (community post, FR-041–FR-043); `localStorage` issues (DEF-001).

**Week 3 Plan (Phase 3, July 14–16, 2025)**:
- Finalize 20+ test cases, execute 100% (Martin, Bridget).
- Log 10+ more defects (3 critical/major, 5 medium, 7 minor) (Bridget, Martin).
- Develop Jest scripts for login (FR-004–FR-005) and scheduling (FR-012–FR-013) in `tests/scripts/` (Samuel).
- Create `traceability-matrix.md` and `final-report.md`.
- Record 5-minute video (MP4, <100MB) per `video-guide.md`.

# 9. Defect Management
- Defects logged in `tests/defect-log.md` and tracked on GitHub Projects per `jira-setup.md`.
- Fields: Summary, description, environment, severity, steps, attachments, linked test case.
- Workflow: Bridget logs defects, Samuel assigns fixes, Martin retests.
- Target: 15 defects (3 critical/major, 5 medium, 7 minor) by July 16.

# 10. Automation Plan
- **Tool**: Jest for smoke tests (login, scheduling).
- **Scope**: Validate critical paths (FR-004–FR-005, FR-012–FR-013).
- **Timeline**: Scripts drafted by July 14, executed by July 16 (Samuel).
- **Storage**: `tests/scripts/` folder in repository.
- **Goal**: Achieve 10% bonus per `faq.md` by demonstrating automation in video.

# 11. Test Deliverables
| Document/Artifact         | Description                                                                 | Phase  |
|---------------------------|-----------------------------------------------------------------------------|--------|
| `tests/team-roles.md`     | Team roles and responsibilities                                             | Week 1 |
| `tests/environment.md`    | Test environment setup (browsers, devices, tools)                           | Week 1 |
| `tests/test-plan.md`      | Test strategy, scope, schedule (this document)                              | Week 1, 2 |
| `tests/test-cases.md`     | Manual and automated test cases with results                                | Week 2, 3 |
| `tests/defect-log.md`     | Logged defects with status, severity, and traceability                      | Week 2, 3 |
| `tests/traceability-matrix.md` | Maps test cases to functional requirements (FR-001–FR-097)                | Week 3 |
| `tests/final-report.md`   | Test summary, metrics, recommendations                                      | Week 3 |
| Video Presentation        | 5-minute MP4 (<100MB) per `video-guide.md`                                 | Week 3 |
| Test Report               | PDF (<50MB) per `submission.md`                                            | Week 3 |