## 📋 Test Plan: Phase 1 – CleanCity QA Strategy

---

### 1️⃣ Testing Scope & Objectives

**Scope:**
This QA plan applies to the following core modules of the CleanCity Web Application:

1. 🏠 Home – Waste pickup request form
2. 📊 Dashboard – User analytics and trends
3. 📣 Feedback – Missed pickup reporting
4. 🌱 Awareness – Eco tips, quizzes, educational content
5. ⚙️ Admin – Admin panel for user and content management

**Objectives:**

* ✅ Identify **functional** and **non-functional** defects
* ✅ Validate **usability** and **accessibility** across devices
* ✅ Confirm **data persistence** using browser `localStorage`
* ✅ Assess **responsive design** under various breakpoints
* ✅ Ensure good **performance** under network constraints

---

### 2️⃣ Test Environments & Tools

| Category                | Setup Details                                           |
| ----------------------- | ------------------------------------------------------- |
| **Browsers**            | Chrome, Firefox, Safari, Edge (latest stable versions)  |
| **Devices**             | Windows 10 PC, Android smartphone, iPad simulator       |
| **Network Conditions**  | 3G, 4G, Wi-Fi (throttled via DevTools)                  |
| **Accessibility Tools** | axe DevTools, Lighthouse, NVDA screen reader            |
| **QA Tools**            | GitHub Kanban, Git, GitLens, Markdown docs              |
| **Execution Tools**     | React Testing Library (for automation - optional bonus) |

---

### 3️⃣ Test Data Requirements

#### 👥 User Roles:

* Regular user
* Admin user

#### 📦 Data Sets:

* **Valid Samples:**

  * Names: “Test User”, “Josephat Musyoka”
  * Locations: “Nairobi”, “Kirinyaga”
  * Dates: “July 5, 2025”, “2025-07-06”

* **Invalid Samples:**

  * Empty strings (`""`)
  * Nonsense input: `!!@@`, `1234567890@#`
  * Extremely long strings (255+ chars)
  * Emojis or unsupported Unicode: 😎💥

#### ⚠️ Edge Cases:

* 0-character input
* 255+ character strings
* Special characters, numbers in name fields
* Unexpected formats in date pickers

---

### 4️⃣ Defect Reporting Standards

#### 🔺 Severity Levels:

| Level        | Description                                                 |
| ------------ | ----------------------------------------------------------- |
| **Critical** | Breaks major functionality (e.g., form won’t submit)        |
| **Major**    | Affects usability/data flow (e.g., incorrect filter result) |
| **Minor**    | Doesn’t break flow but noticeable (e.g., missing label)     |
| **Cosmetic** | Purely visual (e.g., alignment issue)                       |

---

#### 🐞 Bug Report Format (Markdown Sample)

```markdown
## Bug Summary

- **Page**: Dashboard  
- **Issue**: Filter returns wrong region results  
- **Steps to Reproduce**:  
  1. Go to Dashboard  
  2. Select “Kilimani” from filter  
  3. Observe the results  

- **Expected**: Only Kilimani-related requests  
- **Actual**: Mixed results from other regions  
- **Severity**: Major  
- **Attachments**: Screenshot.png
```

> Use **GitHub Issues**, **Jira**, or `defect-log.md` to record all bugs. Organize by module or test date.

---

### 5️⃣ Jira / Kanban Setup

#### 📌 GitHub Projects (Free Kanban Alternative)

* **Columns:**

  * `To Do` → `In Progress` → `Review` → `Done`

* **Cards:**

  * Create cards for each: feature, test area, bug, or task
  * Assign cards to **Josephat**, **Morgan**, or **Elizabeth**

* **Labels:**

  * Use tags like:

    * `ui`, `form-validation`, `security`, `dashboard`, `mobile`, `accessibility`

* ✅ Update card status daily for visibility

* 📎 Link cards to related Epics or Stories

---

### 6️⃣ Test Environment Setup

| Aspect                       | Details                                                                |
| ---------------------------- | ---------------------------------------------------------------------- |
| **Browser Matrix**           | Chrome 124, Firefox 123, Safari 16.4, Edge 122                         |
| **Devices**                  | Windows 10 laptop, Android phone, iPad simulator/emulator              |
| **Network Simulation**       | Chrome DevTools → Network → Throttling (3G, 4G)                        |
| **Accessibility Validation** | axe DevTools, NVDA screen reader, Tab-key navigation, contrast checker |

---

### 🧠 Notes

* Automation is **optional but earns bonus** (up to +10%)
* Focus on **cross-browser compatibility**, **mobile behavior**, and **form validation**
* Prioritize **critical and major** bugs during execution
* Use this test plan to align your `test-cases.md` and Jira board structure

---
