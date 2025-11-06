07# CleanCity Manual Test Suite

This comprehensive test suite includes 56 manual test cases covering all risk levels of the CleanCity Waste Pickup Scheduler application.

## Quick Start

### Run Interactive Test Menu
```bash
npm run test:runner
# or
node test-runner.js
```

### Run All Tests
```bash
npm run test:manual
```

## Test Categories

### 🚨 Critical Risk Tests (9 test cases)
Core business functionality that could cause system failure:
```bash
npm run test:critical
```
- **CR-001**: Waste pickup request form validation
- **CR-002**: Authentication system (login/register)
- **CR-003**: Data persistence and consistency

### ⚠️ High Risk Tests (8 test cases)
Important features affecting user experience:
```bash
npm run test:high
```
- **HR-001**: Dashboard functionality (viewing, filtering, sorting)
- **HR-002**: Admin panel request management

### ⚖️ Medium Risk Tests (21 test cases)
UI consistency and accessibility features:
```bash
npm run test:medium
```
- **MR-001**: Responsive design (desktop, tablet, mobile)
- **MR-002**: Accessibility testing (keyboard navigation, screen readers)
- **MR-003**: User interface consistency
- **MR-004**: Cross-browser compatibility
- **MR-005**: Feedback page functionality

### 📊 Low Risk Tests (18 test cases)
Performance and edge case scenarios:
```bash
npm run test:low
```
- **LR-001**: Performance testing
- **LR-002**: Edge case scenarios
- **LR-003**: Extended browser support
- **LR-004**: Non-critical UI enhancements
- **LR-005**: Data export and utility features
- **LR-006**: Stress and boundary testing

## Development Commands

### Watch Mode
Automatically re-run tests when files change:
```bash
npm run test:manual:watch
```

### Coverage Report
Generate test coverage report:
```bash
npm run test:manual:coverage
```

## Test Features

### What's Tested
- ✅ Form validation and submission
- ✅ User authentication (login/register)
- ✅ Data persistence with localStorage
- ✅ Dashboard filtering and sorting
- ✅ Admin panel functionality
- ✅ Responsive design across device sizes
- ✅ Accessibility compliance
- ✅ Cross-browser compatibility
- ✅ Performance and edge cases

### Test Environment
- **Framework**: Jest with JSDOM
- **DOM Testing**: Complete DOM manipulation and event simulation
- **Mock Browser APIs**: localStorage, performance, fetch, etc.
- **Responsive Testing**: Viewport size simulation
- **Accessibility**: Form labels, keyboard navigation, ARIA compliance

### Test Data
Tests use the same demo data as the application:
- **Demo User**: user@cleancity.com / password123
- **Demo Admin**: admin@cleancity.com / admin123
- **Sample Requests**: REQ001-REQ005 with various statuses

## Test Structure

Each test follows the manual test plan structure:
```
Test Case ID | Test Scenario | Test Steps | Expected Result
```

For example:
- **CR-001-001**: Valid form submission with all required fields
- **HR-001-002**: Request filtering functionality
- **MR-001-001**: Desktop layout (1920x1080)
- **LR-001-001**: Page load time measurement

## Troubleshooting

### Common Issues

1. **Tests failing to start**
   - Ensure all dependencies are installed: `npm install`
   - Check that babel.config.json exists

2. **DOM-related errors**
   - Tests use JSDOM to simulate browser environment
   - Check tests/setup.js for browser API mocks

3. **Module resolution errors**
   - Ensure Jest configuration in package.json is correct
   - Check that setupFilesAfterEnv points to tests/setup.js

### Debug Mode
Run tests with additional debugging:
```bash
npm run test:manual -- --verbose --no-cache
```

## Contributing

When adding new test cases:
1. Follow the existing naming convention (e.g., CR-001-001)
2. Include clear test descriptions and expected results
3. Use the helper functions for common operations
4. Group related tests in describe blocks by risk level

## Test Metrics

- **Total Test Cases**: 56
- **Coverage**: Core functionality, UI, accessibility, performance
- **Risk-Based**: Prioritized by business impact
- **Manual Simulation**: Complete user interaction flows
