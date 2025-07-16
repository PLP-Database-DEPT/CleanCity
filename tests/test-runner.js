#!/usr/bin/env node

/**
 * CleanCity Manual Test Runner
 * Provides an interactive way to run different test categories
 */

const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n🧪 CleanCity Manual Test Runner');
console.log('=====================================\n');

console.log('Based on your comprehensive test plan, you can run:');
console.log('');
console.log('1. All Tests - Complete test suite');
console.log('2. Critical Risk (CR) - Core business functionality');
console.log('3. High Risk (HR) - Dashboard and admin features');
console.log('4. Medium Risk (MR) - UI consistency and accessibility');
console.log('5. Low Risk (LR) - Performance and edge cases');
console.log('6. Watch Mode - Run tests continuously');
console.log('7. Coverage Report - Generate test coverage');
console.log('8. Exit');
console.log('');

function runCommand(command) {
  try {
    console.log(`\n🚀 Running: ${command}\n`);
    execSync(command, { stdio: 'inherit' });
    console.log('\n✅ Tests completed successfully!\n');
  } catch (error) {
    console.log('\n❌ Some tests failed. Check the output above for details.\n');
  }
}

function showMenu() {
  rl.question('Choose an option (1-8): ', (answer) => {
    console.log('');
    
    switch(answer.trim()) {
      case '1':
        runCommand('npm run test:manual');
        break;
      case '2':
        console.log('Running Critical Risk Tests (Authentication, Core Forms, Data Persistence)...');
        runCommand('npm run test:critical');
        break;
      case '3':
        console.log('Running High Risk Tests (Dashboard, Admin Panel)...');
        runCommand('npm run test:high');
        break;
      case '4':
        console.log('Running Medium Risk Tests (Responsive Design, Accessibility, UI Consistency)...');
        runCommand('npm run test:medium');
        break;
      case '5':
        console.log('Running Low Risk Tests (Performance, Edge Cases, Browser Compatibility)...');
        runCommand('npm run test:low');
        break;
      case '6':
        console.log('Starting watch mode (tests will re-run when files change)...');
        runCommand('npm run test:manual:watch');
        break;
      case '7':
        console.log('Generating test coverage report...');
        runCommand('npm run test:manual:coverage');
        break;
      case '8':
        console.log('Goodbye! 👋');
        rl.close();
        return;
      default:
        console.log('Invalid option. Please choose 1-8.');
        break;
    }
    
    if (answer.trim() !== '8') {
      setTimeout(showMenu, 1000);
    }
  });
}

// Show test plan overview
console.log('📋 Test Plan Overview:');
console.log('----------------------');
console.log('✦ Critical Risk (CR): 9 test cases - Authentication, form validation, data persistence');
console.log('✦ High Risk (HR): 8 test cases - Dashboard functionality, admin panel management');
console.log('✦ Medium Risk (MR): 21 test cases - Responsive design, accessibility, UI consistency');
console.log('✦ Low Risk (LR): 18 test cases - Performance, edge cases, browser compatibility');
console.log('');
console.log('📊 Total: 56 comprehensive manual test cases');
console.log('');
showMenu();
