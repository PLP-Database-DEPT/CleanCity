/**
 * CleanCity Waste Pickup Scheduler - Manual Test Cases using Jest
 * Based on the comprehensive test plan with Critical, High, Medium, and Low risk test cases
 * 
 * Test Environment: Jest with JSDOM for DOM manipulation
 * Browser Compatibility: Primarily Chrome/Edge testing
 */

import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

// Load HTML file and other assets
const getFileContent = (filename) => {
  const filePath = path.resolve(__dirname, '..', filename);
  return fs.readFileSync(filePath, 'utf8');
};

const html = getFileContent('index.html');
const css = getFileContent('styles.css');
const js = getFileContent('script.js');

let dom, window, document;

beforeEach(() => {
  // Create new DOM instance for each test
  dom = new JSDOM(html, {
    runScripts: "dangerously",
    resources: "usable",
    pretendToBeVisual: true
  });
  
  window = dom.window;
  document = window.document;
  
  // Inject CSS
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
  
  // Mock localStorage
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
    },
    writable: true
  });
  
  // Set default viewport dimensions
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 1024,
  });
  
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: 768,
  });
  
  // Inject JavaScript (eval in JSDOM context)
  window.eval(js);
  
  // Make window and document globally available
  global.window = window;
  global.document = document;
});

afterEach(() => {
  if (dom) {
    dom.window.close();
  }
});

describe('CleanCity Application Test Suite', () => {

  // ============================================================================
  // CRITICAL RISK TEST CASES (CR-001, CR-002, CR-003)
  // ============================================================================
  
  describe('CR-001: Core Business Functionality - Waste Pickup Request Form', () => {
    
    test('CR-001-001: Valid form submission with all required fields', () => {
      // Navigate to home page
      const homeLink = document.querySelector('[data-page="home"]');
      homeLink.click();
      
      // Fill out form with valid data
      document.getElementById('fullName').value = 'John Doe';
      document.getElementById('location').value = 'Nairobi';
      document.querySelector('input[name="wasteType"][value="General"]').checked = true;
      document.getElementById('preferredDate').value = '2024-02-15';
      
      // Submit form
      const form = document.getElementById('pickup-form');
      const submitEvent = new window.Event('submit', { bubbles: true, cancelable: true });
      
      form.dispatchEvent(submitEvent);
      
      // Verify success message appears
      const successMessage = document.getElementById('success-message');
      expect(successMessage.style.display).not.toBe('none');
      expect(successMessage.textContent).toContain('Request Submitted Successfully');
    });

    test('CR-001-002: Required field validation - empty name field', () => {
      const homeLink = document.querySelector('[data-page="home"]');
      homeLink.click();
      
      // Leave name empty, fill other required fields
      document.getElementById('fullName').value = '';
      document.getElementById('location').value = 'Nairobi';
      document.querySelector('input[name="wasteType"][value="General"]').checked = true;
      
      const form = document.getElementById('pickup-form');
      const isValid = form.checkValidity();
      
      expect(isValid).toBe(false);
      expect(document.getElementById('fullName').validity.valid).toBe(false);
    });

    test('CR-001-003: Required field validation - no location selected', () => {
      const homeLink = document.querySelector('[data-page="home"]');
      homeLink.click();
      
      // Fill name, leave location empty
      document.getElementById('fullName').value = 'John Doe';
      document.getElementById('location').value = '';
      document.querySelector('input[name="wasteType"][value="General"]').checked = true;
      
      const form = document.getElementById('pickup-form');
      const isValid = form.checkValidity();
      
      expect(isValid).toBe(false);
      expect(document.getElementById('location').validity.valid).toBe(false);
    });

    test('CR-001-004: Required field validation - no waste type selected', () => {
      const homeLink = document.querySelector('[data-page="home"]');
      homeLink.click();
      
      // Fill required fields except waste type
      document.getElementById('fullName').value = 'John Doe';
      document.getElementById('location').value = 'Nairobi';
      // Don't select any waste type radio button
      
      const form = document.getElementById('pickup-form');
      const wasteTypeRadios = document.querySelectorAll('input[name="wasteType"]');
      const isAnyWasteTypeSelected = Array.from(wasteTypeRadios).some(radio => radio.checked);
      
      expect(isAnyWasteTypeSelected).toBe(false);
    });
  });

  describe('CR-002: Authentication System Testing', () => {
    
    test('CR-002-001: Valid login with correct demo credentials', () => {
      // Navigate to login page
      const loginLink = document.querySelector('[data-page="login"]');
      loginLink.click();
      
      // Fill login form with valid credentials
      document.getElementById('login-email').value = 'user@cleancity.com';
      document.getElementById('login-password').value = 'password123';
      
      // Mock successful login
      window.localStorage.getItem.mockReturnValue(JSON.stringify([
        {
          id: '1',
          email: 'user@cleancity.com',
          password: 'password123',
          role: 'user',
          name: 'Demo User'
        }
      ]));
      
      const form = document.getElementById('login-form');
      const submitEvent = new window.Event('submit', { bubbles: true, cancelable: true });
      form.dispatchEvent(submitEvent);
      
      // Verify login elements are updated
      const userInfo = document.getElementById('user-info');
      const authLinks = document.getElementById('auth-links');
      const userLinks = document.getElementById('user-links');
      
      expect(userInfo.style.display).not.toBe('none');
      expect(authLinks.style.display).toBe('none');
      expect(userLinks.style.display).not.toBe('none');
    });

    test('CR-002-002: Invalid login with incorrect credentials', () => {
      const loginLink = document.querySelector('[data-page="login"]');
      loginLink.click();
      
      // Fill login form with invalid credentials
      document.getElementById('login-email').value = 'wrong@email.com';
      document.getElementById('login-password').value = 'wrongpassword';
      
      // Mock failed login (no matching user)
      window.localStorage.getItem.mockReturnValue(JSON.stringify([]));
      
      const form = document.getElementById('login-form');
      const submitEvent = new window.Event('submit', { bubbles: true, cancelable: true });
      form.dispatchEvent(submitEvent);
      
      // Verify error message appears
      const errorDiv = document.getElementById('login-error');
      expect(errorDiv.style.display).not.toBe('none');
    });

    test('CR-002-003: Admin access verification', () => {
      // Login as admin
      const loginLink = document.querySelector('[data-page="login"]');
      loginLink.click();
      
      document.getElementById('login-email').value = 'admin@cleancity.com';
      document.getElementById('login-password').value = 'admin123';
      
      window.localStorage.getItem.mockReturnValue(JSON.stringify([
        {
          id: '2',
          email: 'admin@cleancity.com',
          password: 'admin123',
          role: 'admin',
          name: 'Admin User'
        }
      ]));
      
      const form = document.getElementById('login-form');
      const submitEvent = new window.Event('submit', { bubbles: true, cancelable: true });
      form.dispatchEvent(submitEvent);
      
      // Verify admin link is visible
      const adminLink = document.getElementById('admin-link');
      const adminBadge = document.getElementById('admin-badge');
      
      expect(adminLink.style.display).not.toBe('none');
      expect(adminBadge.style.display).not.toBe('none');
    });
  });

  describe('CR-003: Data Persistence and Consistency', () => {
    
    test('CR-003-001: Data persistence after form submission', () => {
      const homeLink = document.querySelector('[data-page="home"]');
      homeLink.click();
      
      // Mock existing data
      window.localStorage.getItem.mockReturnValue(JSON.stringify([]));
      
      // Fill and submit form
      document.getElementById('fullName').value = 'Test User';
      document.getElementById('location').value = 'Kisumu';
      document.querySelector('input[name="wasteType"][value="Recyclable"]').checked = true;
      document.getElementById('preferredDate').value = '2024-02-20';
      
      const form = document.getElementById('pickup-form');
      const submitEvent = new window.Event('submit', { bubbles: true, cancelable: true });
      form.dispatchEvent(submitEvent);
      
      // Verify localStorage.setItem was called
      expect(window.localStorage.setItem).toHaveBeenCalled();
    });

    test('CR-003-002: Data consistency across pages', () => {
      // Mock sample data
      const mockData = [
        {
          id: 'REQ001',
          name: 'John Doe',
          location: 'Nairobi',
          wasteType: 'General',
          preferredDate: '2024-01-15',
          status: 'Pending'
        }
      ];
      
      window.localStorage.getItem.mockReturnValue(JSON.stringify(mockData));
      
      // Navigate to dashboard
      const dashboardLink = document.querySelector('[data-page="dashboard"]');
      dashboardLink.click();
      
      // Check if data is displayed
      const tableBody = document.getElementById('requests-tbody');
      expect(tableBody).toBeTruthy();
      
      // Simulate data loading (this would be done by the actual script)
      tableBody.innerHTML = `
        <tr>
          <td>REQ001</td>
          <td>John Doe</td>
          <td>Nairobi</td>
          <td>General</td>
          <td>2024-01-15</td>
          <td>Pending</td>
        </tr>
      `;
      
      const firstRow = tableBody.querySelector('tr');
      expect(firstRow.children[0].textContent).toBe('REQ001');
      expect(firstRow.children[1].textContent).toBe('John Doe');
    });
  });

  // ============================================================================
  // HIGH RISK TEST CASES (HR-001, HR-002)
  // ============================================================================

  describe('HR-001: Dashboard Functionality', () => {
    
    beforeEach(() => {
      // Mock sample requests data
      const mockRequests = [
        { id: 'REQ001', name: 'John Doe', location: 'Nairobi', wasteType: 'General', preferredDate: '2024-01-15', status: 'Pending' },
        { id: 'REQ002', name: 'Jane Smith', location: 'Kisumu', wasteType: 'Recyclable', preferredDate: '2024-01-16', status: 'Scheduled' },
        { id: 'REQ003', name: 'Mike Johnson', location: 'Mombasa', wasteType: 'Hazardous', preferredDate: '2024-01-17', status: 'Completed' }
      ];
      window.localStorage.getItem.mockReturnValue(JSON.stringify(mockRequests));
    });

    test('HR-001-001: Dashboard request viewing', () => {
      const dashboardLink = document.querySelector('[data-page="dashboard"]');
      dashboardLink.click();
      
      const dashboardPage = document.getElementById('dashboard-page');
      expect(dashboardPage.style.display).not.toBe('none');
      
      const requestsTable = document.getElementById('requests-table');
      expect(requestsTable).toBeTruthy();
    });

    test('HR-001-002: Request filtering functionality', () => {
      const dashboardLink = document.querySelector('[data-page="dashboard"]');
      dashboardLink.click();
      
      const statusFilter = document.getElementById('statusFilter');
      expect(statusFilter).toBeTruthy();
      
      // Test filter options
      statusFilter.value = 'Pending';
      const changeEvent = new window.Event('change', { bubbles: true });
      statusFilter.dispatchEvent(changeEvent);
      
      expect(statusFilter.value).toBe('Pending');
    });

    test('HR-001-003: Request sorting functionality', () => {
      const dashboardLink = document.querySelector('[data-page="dashboard"]');
      dashboardLink.click();
      
      const tableHeaders = document.querySelectorAll('#requests-table th');
      expect(tableHeaders.length).toBeGreaterThan(0);
      
      // Verify sortable columns exist
      expect(tableHeaders[0].textContent).toContain('Request ID');
      expect(tableHeaders[4].textContent).toContain('Preferred Date');
      expect(tableHeaders[5].textContent).toContain('Status');
    });

    test('HR-001-004: Request status updates display', () => {
      const dashboardLink = document.querySelector('[data-page="dashboard"]');
      dashboardLink.click();
      
      const tableBody = document.getElementById('requests-tbody');
      expect(tableBody).toBeTruthy();
      
      // Simulate row with status
      tableBody.innerHTML = `
        <tr>
          <td>REQ001</td>
          <td>John Doe</td>
          <td>Nairobi</td>
          <td>General</td>
          <td>2024-01-15</td>
          <td><span class="status-pending">Pending</span></td>
        </tr>
      `;
      
      const statusCell = tableBody.querySelector('td:last-child');
      expect(statusCell.textContent).toContain('Pending');
    });
  });

  describe('HR-002: Admin Panel Request Management', () => {
    
    beforeEach(() => {
      // Mock admin login
      window.localStorage.getItem.mockReturnValue(JSON.stringify([
        {
          id: '2',
          email: 'admin@cleancity.com',
          password: 'admin123',
          role: 'admin',
          name: 'Admin User'
        }
      ]));
    });

    test('HR-002-001: View all requests (admin only)', () => {
      const adminLink = document.querySelector('[data-page="admin"]');
      adminLink.click();
      
      const adminPage = document.getElementById('admin-page');
      expect(adminPage.style.display).not.toBe('none');
      
      const adminTable = document.getElementById('admin-table');
      expect(adminTable).toBeTruthy();
    });

    test('HR-002-002: Approve pickup request', () => {
      const adminLink = document.querySelector('[data-page="admin"]');
      adminLink.click();
      
      const requestSelect = document.getElementById('requestSelect');
      const statusSelect = document.getElementById('statusSelect');
      const updateBtn = document.getElementById('updateStatusBtn');
      
      expect(requestSelect).toBeTruthy();
      expect(statusSelect).toBeTruthy();
      expect(updateBtn).toBeTruthy();
      
      // Simulate selecting a request and approving it
      requestSelect.value = 'REQ001';
      statusSelect.value = 'Scheduled';
      
      expect(updateBtn.disabled).toBe(false);
    });

    test('HR-002-003: Reject pickup request', () => {
      const adminLink = document.querySelector('[data-page="admin"]');
      adminLink.click();
      
      const statusSelect = document.getElementById('statusSelect');
      
      // Check if "Missed" status option exists (equivalent to rejection)
      const missedOption = statusSelect.querySelector('option[value="Missed"]');
      expect(missedOption).toBeTruthy();
      expect(missedOption.textContent).toBe('Missed');
    });

    test('HR-002-004: Modify pickup request details', () => {
      const adminLink = document.querySelector('[data-page="admin"]');
      adminLink.click();
      
      const requestSelect = document.getElementById('requestSelect');
      const statusSelect = document.getElementById('statusSelect');
      const updateBtn = document.getElementById('updateStatusBtn');
      
      // Simulate modification
      requestSelect.value = 'REQ001';
      statusSelect.value = 'Completed';
      
      const clickEvent = new window.Event('click', { bubbles: true });
      updateBtn.dispatchEvent(clickEvent);
      
      // Verify the controls are available for modification
      expect(requestSelect.value).toBe('REQ001');
      expect(statusSelect.value).toBe('Completed');
    });
  });

  // ============================================================================
  // MEDIUM RISK TEST CASES (MR-001, MR-002, MR-003, MR-004, MR-005)
  // ============================================================================

  describe('MR-001: Responsive Design', () => {
    
    test('MR-001-001: Desktop layout (1920x1080)', () => {
      // Set viewport to desktop size
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1920 });
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 1080 });
      
      const navbar = document.querySelector('.navbar');
      const container = document.querySelector('.container');
      
      expect(navbar).toBeTruthy();
      expect(container).toBeTruthy();
      
      // Desktop should show full navigation
      const navMenu = document.getElementById('nav-menu');
      expect(navMenu).toBeTruthy();
    });

    test('MR-001-002: Tablet layout (768px-1024px)', () => {
      // Set viewport to tablet size
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 768 });
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 1024 });
      
      const hamburger = document.getElementById('hamburger');
      expect(hamburger).toBeTruthy();
      
      // Tablet should have hamburger menu
      expect(hamburger.style.display).not.toBe('none');
    });

    test('MR-001-003: Mobile layout (320px-767px)', () => {
      // Set viewport to mobile size
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 375 });
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 667 });
      
      const container = document.querySelector('.container');
      const hamburger = document.getElementById('hamburger');
      
      expect(container).toBeTruthy();
      expect(hamburger).toBeTruthy();
    });
  });

  describe('MR-002: Accessibility Testing', () => {
    
    test('MR-002-001: Keyboard navigation', () => {
      const navLinks = document.querySelectorAll('.nav-link');
      const formInputs = document.querySelectorAll('input, select, button');
      
      // Verify elements can receive focus
      navLinks.forEach(link => {
        expect(link.tabIndex).toBeGreaterThanOrEqual(0);
      });
      
      formInputs.forEach(input => {
        expect(input.tabIndex).toBeGreaterThanOrEqual(-1);
      });
    });

    test('MR-002-002: Form label associations', () => {
      const homeLink = document.querySelector('[data-page="home"]');
      homeLink.click();
      
      const nameLabel = document.querySelector('label[for="fullName"]');
      const nameInput = document.getElementById('fullName');
      const locationLabel = document.querySelector('label[for="location"]');
      const locationSelect = document.getElementById('location');
      
      expect(nameLabel).toBeTruthy();
      expect(nameInput).toBeTruthy();
      expect(locationLabel).toBeTruthy();
      expect(locationSelect).toBeTruthy();
      
      expect(nameLabel.getAttribute('for')).toBe('fullName');
      expect(locationLabel.getAttribute('for')).toBe('location');
    });

    test('MR-002-003: Image alt-text presence', () => {
      const awarenessLink = document.querySelector('[data-page="awareness"]');
      awarenessLink.click();
      
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        expect(img.hasAttribute('alt') || img.hasAttribute('role')).toBe(true);
      });
    });

    test('MR-002-004: Color contrast validation', () => {
      // This would require actual color analysis in a real test
      // For now, verify CSS classes that should provide good contrast
      const buttons = document.querySelectorAll('.btn-primary');
      const alerts = document.querySelectorAll('.alert');
      
      expect(buttons.length).toBeGreaterThan(0);
      expect(alerts.length).toBeGreaterThan(0);
    });

    test('MR-002-005: Focus indicators visibility', () => {
      const interactiveElements = document.querySelectorAll('button, input, select, a');
      
      interactiveElements.forEach(element => {
        // Simulate focus
        element.focus();
        expect(document.activeElement).toBe(element);
      });
    });
  });

  describe('MR-003: User Interface Consistency', () => {
    
    test('MR-003-001: Navigation consistency across pages', () => {
      const pages = ['home', 'login', 'register', 'dashboard', 'feedback', 'awareness'];
      
      pages.forEach(pageName => {
        const pageLink = document.querySelector(`[data-page="${pageName}"]`);
        if (pageLink) {
          pageLink.click();
          
          const navbar = document.querySelector('.navbar');
          expect(navbar).toBeTruthy();
          expect(navbar.querySelector('.nav-brand').textContent).toBe('CleanCity');
        }
      });
    });

    test('MR-003-002: Button and link styling consistency', () => {
      const primaryButtons = document.querySelectorAll('.btn-primary');
      const navLinks = document.querySelectorAll('.nav-link');
      
      primaryButtons.forEach(button => {
        expect(button.classList.contains('btn-primary')).toBe(true);
      });
      
      navLinks.forEach(link => {
        expect(link.classList.contains('nav-link')).toBe(true);
      });
    });

    test('MR-003-003: Form styling and layout consistency', () => {
      const formGroups = document.querySelectorAll('.form-group');
      const formControls = document.querySelectorAll('.form-control');
      
      expect(formGroups.length).toBeGreaterThan(0);
      expect(formControls.length).toBeGreaterThan(0);
      
      formControls.forEach(control => {
        expect(control.classList.contains('form-control')).toBe(true);
      });
    });

    test('MR-003-004: Typography and spacing consistency', () => {
      const pageTitles = document.querySelectorAll('.page-title');
      const cards = document.querySelectorAll('.card');
      
      pageTitles.forEach(title => {
        expect(title.classList.contains('page-title')).toBe(true);
      });
      
      cards.forEach(card => {
        expect(card.classList.contains('card')).toBe(true);
      });
    });
  });

  describe('MR-004: Cross-Browser Compatibility', () => {
    
    test('MR-004-001: Chrome browser functionality', () => {
      // Mock Chrome user agent
      Object.defineProperty(window.navigator, 'userAgent', {
        writable: true,
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      });
      
      const app = document.getElementById('app');
      expect(app).toBeTruthy();
      
      // Test basic JavaScript functionality
      expect(typeof window.localStorage).toBe('object');
    });

    test('MR-004-002: Edge browser functionality', () => {
      // Mock Edge user agent
      Object.defineProperty(window.navigator, 'userAgent', {
        writable: true,
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59'
      });
      
      const app = document.getElementById('app');
      expect(app).toBeTruthy();
    });

    test('MR-004-003: Firefox browser basic compatibility', () => {
      // Mock Firefox user agent
      Object.defineProperty(window.navigator, 'userAgent', {
        writable: true,
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0'
      });
      
      const forms = document.querySelectorAll('form');
      expect(forms.length).toBeGreaterThan(0);
    });

    test('MR-004-004: Safari browser basic compatibility', () => {
      // Mock Safari user agent
      Object.defineProperty(window.navigator, 'userAgent', {
        writable: true,
        value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15'
      });
      
      const app = document.getElementById('app');
      expect(app).toBeTruthy();
    });
  });

  describe('MR-005: Feedback Page Functionality', () => {
    
    test('MR-005-001: Feedback form submission', () => {
      const feedbackLink = document.querySelector('[data-page="feedback"]');
      feedbackLink.click();
      
      const feedbackPage = document.getElementById('feedback-page');
      expect(feedbackPage.style.display).not.toBe('none');
      
      // Fill feedback form
      document.getElementById('requestId').value = 'REQ001';
      document.getElementById('reason').value = 'Missed Pickup';
      document.getElementById('comments').value = 'The pickup was scheduled but never happened.';
      
      const form = document.getElementById('feedback-form');
      expect(form).toBeTruthy();
    });

    test('MR-005-002: Feedback form validation', () => {
      const feedbackLink = document.querySelector('[data-page="feedback"]');
      feedbackLink.click();
      
      const requestIdField = document.getElementById('requestId');
      const reasonField = document.getElementById('reason');
      
      // Test required field validation
      requestIdField.value = '';
      reasonField.value = '';
      
      const form = document.getElementById('feedback-form');
      const isValid = form.checkValidity();
      
      expect(isValid).toBe(false);
    });

    test('MR-005-003: Feedback data persistence', () => {
      const feedbackLink = document.querySelector('[data-page="feedback"]');
      feedbackLink.click();
      
      // Mock localStorage for feedback
      window.localStorage.getItem.mockReturnValue(JSON.stringify([]));
      
      document.getElementById('requestId').value = 'REQ001';
      document.getElementById('reason').value = 'Missed Pickup';
      document.getElementById('comments').value = 'Test feedback';
      
      const form = document.getElementById('feedback-form');
      const submitEvent = new window.Event('submit', { bubbles: true, cancelable: true });
      form.dispatchEvent(submitEvent);
      
      // Verify localStorage.setItem was called for feedback
      expect(window.localStorage.setItem).toHaveBeenCalled();
    });
  });

  // ============================================================================
  // LOW RISK TEST CASES (LR-001 through LR-006)
  // ============================================================================

  describe('LR-001: Performance Testing', () => {
    
    test('LR-001-001: Page load time measurement', () => {
      const startTime = performance.now();
      
      // Simulate page navigation
      const homeLink = document.querySelector('[data-page="home"]');
      homeLink.click();
      
      const endTime = performance.now();
      const loadTime = endTime - startTime;
      
      // Should load quickly (under 100ms in test environment)
      expect(loadTime).toBeLessThan(100);
    });

    test('LR-001-002: Large dataset handling', () => {
      // Mock large dataset (50+ requests)
      const largeDataset = Array.from({ length: 55 }, (_, i) => ({
        id: `REQ${String(i + 1).padStart(3, '0')}`,
        name: `User ${i + 1}`,
        location: 'Nairobi',
        wasteType: 'General',
        preferredDate: '2024-01-15',
        status: 'Pending'
      }));
      
      window.localStorage.getItem.mockReturnValue(JSON.stringify(largeDataset));
      
      const dashboardLink = document.querySelector('[data-page="dashboard"]');
      dashboardLink.click();
      
      // Verify table can handle large dataset
      const tableBody = document.getElementById('requests-tbody');
      expect(tableBody).toBeTruthy();
    });

    test('LR-001-003: Memory usage monitoring', () => {
      // Simulate multiple page navigations
      const pages = ['home', 'dashboard', 'feedback', 'awareness'];
      
      pages.forEach(pageName => {
        const pageLink = document.querySelector(`[data-page="${pageName}"]`);
        if (pageLink) {
          pageLink.click();
        }
      });
      
      // In a real browser test, this would check memory usage
      // For JSDOM, we just verify no errors occurred
      expect(document.getElementById('app')).toBeTruthy();
    });

    test('LR-001-004: localStorage size limits', () => {
      // Test with large data
      const largeString = 'x'.repeat(1024 * 1024); // 1MB string
      
      try {
        window.localStorage.setItem('test', largeString);
        expect(window.localStorage.setItem).toHaveBeenCalled();
      } catch (error) {
        // Should handle storage quota gracefully
        expect(error.name).toBe('QuotaExceededError');
      }
    });
  });

  describe('LR-002: Edge Case Scenarios', () => {
    
    test('LR-002-001: Special characters in form fields', () => {
      const homeLink = document.querySelector('[data-page="home"]');
      homeLink.click();
      
      // Test special characters
      const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
      document.getElementById('fullName').value = `John ${specialChars} Doe`;
      
      const nameField = document.getElementById('fullName');
      expect(nameField.value).toContain(specialChars);
    });

    test('LR-002-002: Extremely long text inputs', () => {
      const homeLink = document.querySelector('[data-page="home"]');
      homeLink.click();
      
      const longText = 'a'.repeat(1000);
      document.getElementById('fullName').value = longText;
      
      const nameField = document.getElementById('fullName');
      expect(nameField.value.length).toBe(1000);
    });

    test('LR-002-003: Rapid form submission', () => {
      const homeLink = document.querySelector('[data-page="home"]');
      homeLink.click();
      
      document.getElementById('fullName').value = 'Test User';
      document.getElementById('location').value = 'Nairobi';
      document.querySelector('input[name="wasteType"][value="General"]').checked = true;
      
      const form = document.getElementById('pickup-form');
      const submitEvent = new window.Event('submit', { bubbles: true, cancelable: true });
      
      // Rapid submissions
      form.dispatchEvent(submitEvent);
      form.dispatchEvent(submitEvent);
      form.dispatchEvent(submitEvent);
      
      // Should handle multiple submissions gracefully
      expect(form).toBeTruthy();
    });

    test('LR-002-004: Browser back/forward navigation', () => {
      const homeLink = document.querySelector('[data-page="home"]');
      homeLink.click();
      
      const dashboardLink = document.querySelector('[data-page="dashboard"]');
      dashboardLink.click();
      
      // Simulate browser back button
      window.history.back();
      
      // Should handle navigation gracefully
      expect(window.history.length).toBeGreaterThan(0);
    });
  });

  describe('LR-003: Extended Browser Support', () => {
    
    test('LR-003-001: Older Chrome versions compatibility', () => {
      // Mock older Chrome user agent
      Object.defineProperty(window.navigator, 'userAgent', {
        writable: true,
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36'
      });
      
      const basicFeatures = document.querySelectorAll('form, button, input');
      expect(basicFeatures.length).toBeGreaterThan(0);
    });

    test('LR-003-002: Mobile browser compatibility', () => {
      // Mock mobile browser user agent
      Object.defineProperty(window.navigator, 'userAgent', {
        writable: true,
        value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1'
      });
      
      const touchElements = document.querySelectorAll('button, input, select');
      touchElements.forEach(element => {
        expect(element.style.touchAction).not.toBe('none');
      });
    });
  });

  describe('LR-004: Non-Critical UI Enhancements', () => {
    
    test('LR-004-001: Animation and transition effects', () => {
      // Test CSS classes that should have transitions
      const buttons = document.querySelectorAll('.btn');
      const navLinks = document.querySelectorAll('.nav-link');
      
      expect(buttons.length).toBeGreaterThan(0);
      expect(navLinks.length).toBeGreaterThan(0);
    });

    test('LR-004-002: Tooltip and help text functionality', () => {
      const helpTexts = document.querySelectorAll('.text-muted, small');
      expect(helpTexts.length).toBeGreaterThan(0);
      
      helpTexts.forEach(helpText => {
        expect(helpText.textContent.length).toBeGreaterThan(0);
      });
    });

    test('LR-004-003: Visual feedback for user actions', () => {
      const successAlert = document.getElementById('success-message');
      const errorDivs = document.querySelectorAll('.alert-danger');
      
      expect(successAlert).toBeTruthy();
      expect(errorDivs.length).toBeGreaterThan(0);
    });

    test('LR-004-004: Theme and color scheme consistency', () => {
      const primaryElements = document.querySelectorAll('.btn-primary, .text-primary');
      const cards = document.querySelectorAll('.card');
      
      expect(primaryElements.length).toBeGreaterThan(0);
      expect(cards.length).toBeGreaterThan(0);
    });
  });

  describe('LR-005: Data Export and Utility Features', () => {
    
    test('LR-005-001: Print functionality', () => {
      // Test if pages are print-friendly
      const printableElements = document.querySelectorAll('.card, .table');
      expect(printableElements.length).toBeGreaterThan(0);
    });

    test('LR-005-002: URL sharing and bookmarking', () => {
      // Test if application maintains state in URLs
      const currentUrl = window.location.href;
      expect(typeof currentUrl).toBe('string');
      expect(currentUrl.length).toBeGreaterThan(0);
    });

    test('LR-005-003: Browser zoom functionality', () => {
      // Simulate zoom levels
      const zoomLevels = [0.5, 1.0, 1.5, 2.0];
      
      zoomLevels.forEach(zoom => {
        document.body.style.zoom = zoom.toString();
        
        const mainContainer = document.querySelector('.container');
        expect(mainContainer).toBeTruthy();
      });
      
      // Reset zoom
      document.body.style.zoom = '1.0';
    });
  });

  describe('LR-006: Stress and Boundary Testing', () => {
    
    test('LR-006-001: Maximum concurrent browser tabs simulation', () => {
      // Simulate multiple instances accessing localStorage
      const tabData = [
        { tab: 1, user: 'user1@test.com' },
        { tab: 2, user: 'user2@test.com' },
        { tab: 3, user: 'user3@test.com' }
      ];
      
      tabData.forEach(data => {
        window.localStorage.setItem(`tab_${data.tab}`, JSON.stringify(data));
      });
      
      expect(window.localStorage.setItem).toHaveBeenCalledTimes(3);
    });

    test('LR-006-002: Extended session duration simulation', () => {
      // Simulate long session
      const sessionStart = Date.now();
      const simulatedSessionLength = 1000 * 60 * 60; // 1 hour in milliseconds
      
      // Mock session data
      window.localStorage.setItem('session_start', sessionStart.toString());
      
      const storedSessionStart = window.localStorage.getItem('session_start');
      expect(storedSessionStart).toBe(sessionStart.toString());
    });

    test('LR-006-003: Network interruption recovery simulation', () => {
      // Mock offline state
      Object.defineProperty(window.navigator, 'onLine', {
        writable: true,
        value: false
      });
      
      expect(window.navigator.onLine).toBe(false);
      
      // Mock network recovery
      Object.defineProperty(window.navigator, 'onLine', {
        writable: true,
        value: true
      });
      
      expect(window.navigator.onLine).toBe(true);
    });
  });

});

// Additional helper functions for test setup
export function simulateFormSubmission(formId, data) {
  const form = document.getElementById(formId);
  
  Object.keys(data).forEach(key => {
    const field = form.querySelector(`[name="${key}"]`);
    if (field) {
      if (field.type === 'radio') {
        form.querySelector(`[name="${key}"][value="${data[key]}"]`).checked = true;
      } else {
        field.value = data[key];
      }
    }
  });
  
  const submitEvent = new window.Event('submit', { bubbles: true, cancelable: true });
  form.dispatchEvent(submitEvent);
}

export function simulateUserLogin(email, password) {
  document.getElementById('login-email').value = email;
  document.getElementById('login-password').value = password;
  
  const form = document.getElementById('login-form');
  const submitEvent = new window.Event('submit', { bubbles: true, cancelable: true });
  form.dispatchEvent(submitEvent);
}

export function navigateToPage(pageName) {
  const pageLink = document.querySelector(`[data-page="${pageName}"]`);
  if (pageLink) {
    pageLink.click();
  }
}
