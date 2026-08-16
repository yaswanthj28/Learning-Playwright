# 🎭 Learning Playwright

Welcome to the **Learning Playwright** repository! This project is dedicated to learning, exploring, and mastering web automation and end-to-end testing using [Playwright](https://playwright.dev/).

---

## 📌 Overview

This repository contains step-by-step scripts, exercises, and examples for web test automation using Playwright with JavaScript.

- **Cross-Browser**: Automated browser testing across Chromium, Firefox, and WebKit.
- **Modern Web Automation**: Auto-waiting, rich selectors, network interception, and robust assertions.
- **Structured Learning**: Chapter-by-chapter progression from basic to advanced concepts.

---

## 📁 Repository Structure

```text
Learning-Playwright/
├── chapter_01_Basics/     # Basic Playwright concepts and exercises
├── o1_basic.js            # Sample standalone Playwright automation script
├── .gitignore             # Git ignore rules for Node & Playwright artifacts
└── README.md              # Project documentation and guide
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v16+) installed.

Verify Node.js and npm installation:
```bash
node -v
npm -v
```

### 2. Installation
Install Playwright in your workspace:

```bash
npm install -D @playwright/test
```

Install Playwright browser binaries:
```bash
npx playwright install
```

---

## 🧪 Running Scripts

To execute the sample Playwright script:

```bash
node o1_basic.js
```

---

## 📚 Topics Covered

- [x] **Chapter 01 - Basics**
  - Browser instantiation (Chromium, Firefox, WebKit)
  - Page navigation & handling browser contexts
  - Locators & basic web element interactions
- [ ] **Chapter 02 - Intermediate**
  - Form interactions (click, fill, select, check)
  - Assertions & auto-waiting
  - Handling popups, frames, and dialogs
- [ ] **Chapter 03 - Advanced**
  - Page Object Model (POM) architecture
  - API testing & network mocking
  - Test reporting & CI/CD integration

---

## 📄 License

Maintained for learning and practice. Feel free to clone, fork, and experiment!
