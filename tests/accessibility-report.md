# ♿ Accessibility Test Report 

## Overview
- **Testing Date:** 2025-07-12
- **Tester:** Salma
- **Tools Used:** axe, Lighthouse, NVDA, Chrome DevTools

## Summary Table

| Area/Feature  | Criteria Tested                | Issue Found? | Severity | Screenshot | Notes                         |
|---------------|-------------------------------|--------------|----------|------------|-------------------------------|
| Dashboard     | Keyboard Navigation           | Yes          | Major    | ![img3](screenshots/a11y1.png) | Cannot tab to filter button   |
| All Pages     | Color Contrast                | Yes          | Minor    | ![img4](screenshots/a11y2.png) | Text on green buttons fails WCAG AA |
| Login Page    | Screen Reader Labels          | No           | -        | -          | All inputs have ARIA labels   |

## Detailed Findings

### 1. Keyboard Navigation – Dashboard
- **Issue:** Filter button cannot be accessed via keyboard (Tab key skips it)
- **Severity:** Major
- **WCAG Reference:** 2.1.1 Keyboard
- **Screenshot:** ![img3](screenshots/a11y1.png)
- **Recommendation:** Add tabindex and ensure button is focusable

### 2. Color Contrast – All Pages
- **Issue:** Text on green buttons has insufficient contrast
- **Severity:** Minor
- **WCAG Reference:** 1.4.3 Contrast (Minimum)
- **Screenshot:** ![img4](screenshots/a11y2.png)
- **Recommendation:** Change button text color to improve contrast

## Recommendations
- Fix keyboard accessibility issues on dashboard
- Update button colors for contrast compliance
- Re-test after fixes

## Appendix
- Full axe and Lighthouse scan reports attached in `/tests/reports/`
