# 🌍 Test Environment Setup – CleanCity QA Project

**Project:** CleanCity – Waste Pickup Scheduler  
**Team Name:** CleanTrackers  
**Prepared by:** Samuel Mbai, Martin Kimani, Bridget Ngugi  
**Date:** July 4, 2025

---

## 🧰 Required Tools & Platforms

| Category              | Tool / Platform                  |
|-----------------------|----------------------------------|
| Version Control       | GitHub                           |
| Browser Testing       | Chrome, Firefox, Edge, Safari    |
| Device Emulation      | Chrome DevTools Responsive Mode  |
| Accessibility Testing | axe DevTools, WAVE, NVDA         |
| Performance Tools     | Google Lighthouse                |
| Project Management    | GitHub Projects (Kanban Board)   |
| Documentation         | Markdown (`.md`), GitHub Issues  |

---

## 🌐 Browser Compatibility Matrix

| Browser        | OS            | Version Tested |
|----------------|---------------|----------------|
| Chrome         | Windows/macOS | 114+           |
| Firefox        | Windows/macOS | 102+           |
| Safari         | macOS/iOS     | 15+            |
| Microsoft Edge | Windows       | 114+           |

---

## 📱 Device Coverage

| Device Type | Testing Method                   |
|-------------|----------------------------------|
| Desktop     | Manual + DevTools                |
| Tablet      | Chrome DevTools → iPad emulation |
| Mobile      | Chrome DevTools → iPhone/Android emulation |

---

## 📶 Network Conditions Tested

| Network Type | Tool/Method                      |
|--------------|----------------------------------|
| WiFi         | Real-time testing (stable)       |
| 4G / 3G      | Chrome DevTools → Throttling     |

---

## ♿ Accessibility Testing Tools

| Tool            | Purpose                                      |
|-----------------|----------------------------------------------|
| axe DevTools    | Automated WCAG compliance scans              |
| WAVE Extension  | Color contrast, landmarks, ARIA checks       |
| NVDA            | Screen reader simulation (keyboard support)  |
| Manual Keyboard | Tab/Shift navigation through all elements    |
---
## 📋 Project Management Platform

- **Tool:** GitHub Projects (Classic Kanban Board)
- **Workflow:** To Do → In Progress → In Review → Done
- **Issue Types:** Bug, Task, Story
- **Used for:** Task tracking, defect logging, test planning
---
## 📝 Notes
- All test environments were selected based on project guidelines, device/browser usage statistics, and CleanCity's responsive design expectations.
- Automation tools (e.g., Jest + React Testing Library) may be integrated in Week 2 or 3 for bonus marks.
