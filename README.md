# 💳 Credit Card Financial Data Analysis

An end-to-end **Data Analytics and Business Intelligence project** focused on Credit Card financial data analysis using **SQL and Power BI**.

The project analyzes customer behavior, revenue, transactions, card categories, expenditure patterns, income groups, occupations, age groups, geographical distribution, customer segmentation, credit utilization, activation, and delinquency risk.

A separate **JavaScript + React + Vite live dashboard** is included as an interactive visualization layer for presenting the analytical findings.

<p align="center">
  <img src="https://img.shields.io/badge/Financial%20Analytics-Project-111827?style=for-the-badge&logo=googleanalytics&logoColor=white" />
  <img src="https://img.shields.io/badge/SQL-Analytics-0F766E?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Power%20BI-Business%20Intelligence-F2C811?style=for-the-badge&logo=powerbi&logoColor=black" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Render-Deployed-46E3B7?style=for-the-badge&logo=render&logoColor=black" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Git-GitHub-F05032?style=for-the-badge&logo=git&logoColor=white" />
  <img src="https://img.shields.io/badge/CSV-Data%20Analysis-217346?style=for-the-badge&logo=files&logoColor=white" />
  <img src="https://img.shields.io/badge/Data%20Visualization-Recharts-8884D8?style=for-the-badge" />
</p>

---

## ✦ Live Dashboard

<p align="center">

<a href="https://credit-card-financial-dashboard-5p2g.onrender.com" target="_blank">

<img src="https://img.shields.io/badge/🚀%20OPEN%20LIVE%20DASHBOARD-000000?style=for-the-badge&logo=render&logoColor=white" />

</a>

</p>

<p align="center">
<b>Interactive production dashboard deployed on Render</b>
</p>

> 🔗 **Live Demo:**
> https://credit-card-financial-dashboard-5p2g.onrender.com

---

## ✦ Project Overview

**Credit Card Financial Analytics Dashboard** is an end-to-end financial analytics portfolio project designed to transform raw credit-card customer and transaction data into meaningful business intelligence.

The project combines:

* 🗄️ **SQL** for structured data analysis
* 📊 **Power BI** for business-intelligence modeling and reporting design
* 💻 **React + Vite** for an interactive web-based analytics dashboard
* 📈 **Recharts** for dynamic data visualization
* 📁 **CSV datasets** for financial and customer analytics
* 🚀 **Render** for production deployment

The objective is to provide a centralized analytical view of:

**Revenue → Transactions → Customers → Card Categories → Spending → Risk → Acquisition → Financial KPIs**

---

# ✦ Business Problem

Credit-card businesses generate large volumes of transactional and customer data.

Raw datasets alone do not provide an immediate understanding of:

* Which card categories generate the most revenue?
* How are transactions changing over time?
* Which customer segments contribute the highest revenue?
* Which expenditure categories dominate customer spending?
* How does customer acquisition cost compare with portfolio performance?
* What percentage of accounts become delinquent?
* Which demographic groups contribute significantly to revenue?
* How does credit utilization relate to financial risk?

This project transforms those raw datasets into an analytics system designed for business exploration and decision support.

---

# ✦ Project Objectives

### 01 — Financial Performance

Analyze:

* Total revenue
* Transaction amount
* Transaction count
* Interest earned
* Annual fees
* Card-category performance

### 02 — Customer Analytics

Understand:

* Age groups
* Gender distribution
* Income groups
* Education
* Occupation
* State-level performance
* Customer segmentation

### 03 — Transaction Analytics

Analyze:

* Spending categories
* Payment channels
* Card categories
* Weekly trends
* Quarterly trends
* Transaction frequency

### 04 — Risk Analytics

Monitor:

* Delinquent accounts
* Credit utilization
* Revolving balances
* Activation behavior

### 05 — Business Intelligence

Build a reusable analytics structure combining:

**SQL + Power BI + Interactive Web Dashboard**

---

# ✦ Analytics Architecture

```text
                         ┌──────────────────────────┐
                         │       RAW DATASETS       │
                         │                          │
                         │  Customer CSV            │
                         │  Credit Card CSV         │
                         │  Additional CSV Data     │
                         └────────────┬─────────────┘
                                      │
                    ┌─────────────────┴─────────────────┐
                    │                                   │
                    ▼                                   ▼
          ┌──────────────────┐                ┌──────────────────┐
          │    SQL LAYER     │                │   POWER BI LAYER │
          │                  │                │                  │
          │ Data Cleaning    │                │ Data Modeling    │
          │ Aggregations     │                │ Power Query      │
          │ KPIs             │                │ DAX              │
          │ Segmentation     │                │ Visualization    │
          └─────────┬────────┘                └─────────┬────────┘
                    │                                   │
                    └─────────────────┬─────────────────┘
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │   INTERACTIVE DASHBOARD  │
                         │                          │
                         │       React + Vite       │
                         │       Recharts            │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │          RENDER          │
                         │     Production Hosting   │
                         └──────────────────────────┘
```

---

# ✦ Technology Stack

| Category              | Technologies    |
| --------------------- | --------------- |
| Database & Analytics  | SQL             |
| Business Intelligence | Power BI        |
| Frontend              | React 18        |
| Build Tool            | Vite 5          |
| Programming           | JavaScript ES6+ |
| Visualization         | Recharts        |
| Data Source           | CSV             |
| Data Parsing          | PapaParse       |
| Version Control       | Git + GitHub    |
| Deployment            | Render          |
| Documentation         | Markdown        |

---

# ✦ SQL Analytics

The `SQL/` directory contains the analytical SQL layer of the project.

### SQL Modules

```text
SQL/
│
├── 01_database_schema.sql
├── 02_data_cleaning.sql
├── 03_customer_analysis.sql
├── 04_transaction_analysis.sql
└── 05_kpi_analysis.sql
```

### Analysis Areas

#### Customer Analytics

* Customer segmentation
* Gender analysis
* Age-group analysis
* Income-group analysis
* Occupation analysis
* State-level analysis

#### Transaction Analytics

* Transaction amount
* Transaction count
* Average transaction value
* Expense categories
* Payment channels
* Weekly trends
* Quarterly trends

#### Financial KPIs

* Revenue
* Annual fees
* Interest earned
* Customer acquisition cost
* Activation rate
* Delinquency rate
* Credit utilization

---

# ✦ Power BI Analytics

The `PowerBI/` directory documents the Business Intelligence layer of the project.

### Power BI Workflow

```text
CSV Data
   ↓
Power Query
   ↓
Data Cleaning
   ↓
Data Modeling
   ↓
Relationships
   ↓
DAX Measures
   ↓
KPI Cards
   ↓
Interactive Visualizations
```

### Recommended Power BI Pages

#### 📊 Executive Overview

* Total Revenue
* Total Transactions
* Total Customers
* Interest Earned
* Activation Rate
* Delinquency Rate

#### 💳 Transaction Analysis

* Transaction trends
* Card category performance
* Expense type analysis
* Payment method analysis

#### 👥 Customer Analysis

* Age groups
* Gender
* Income
* Education
* Occupation
* State

#### 📈 Weekly Analysis

* Weekly revenue
* Transaction trends
* Week-over-week movement
* Delinquency trends

---

# ✦ Interactive Web Dashboard

The production web application is built with **React + Vite**.

### Dashboard Views

#### 📈 Weekly Analysis

Explore:

* Weekly revenue
* Transaction momentum
* Trend analysis
* Delinquency mix

#### 💳 Transaction Report

Explore:

* Card categories
* Expense categories
* Payment methods
* Quarterly trends
* Transaction performance

#### 👥 Customer Report

Explore:

* Gender
* Age
* Income
* Occupation
* Education
* State-level customer distribution

### Interactive Filtering

The dashboard provides dynamic filtering across multiple analytical dimensions.

---

# ✦ Dataset

The project uses structured CSV datasets containing customer and credit-card financial information.

### Primary datasets

```text
public/data/
│
├── credit_card.csv
├── customer.csv
├── credit_card_mysql_ready_uploaded.csv
└── cust_add.csv
```

### Core analytical dimensions

```text
Customer
├── Client Number
├── Age
├── Gender
├── Education
├── Marital Status
├── State
├── Occupation
└── Income

Credit Card
├── Card Category
├── Annual Fees
├── Credit Limit
├── Revolving Balance
├── Transaction Amount
├── Transaction Count
├── Utilization Ratio
├── Expense Type
├── Payment Method
├── Interest Earned
└── Delinquency
```

---

# ✦ Key Financial KPIs

The dashboard and analytical layer focus on KPIs such as:

| KPI                       | Business Meaning               |
| ------------------------- | ------------------------------ |
| Total Revenue             | Overall financial contribution |
| Transaction Amount        | Customer spending volume       |
| Transaction Count         | Transaction activity           |
| Interest Earned           | Interest contribution          |
| Annual Fees               | Fee-based revenue              |
| Activation Rate           | Early customer activation      |
| Delinquency Rate          | Portfolio risk indicator       |
| Credit Utilization        | Credit usage behavior          |
| Customer Acquisition Cost | Acquisition efficiency         |

> KPI values should be interpreted directly from the underlying datasets and analytical queries.

---

# ✦ Business Insights

The project enables analysis of several important business questions:

### 💳 Card Portfolio

Which card categories contribute the highest financial value?

### 📈 Transaction Momentum

How does transaction activity change across weeks and quarters?

### 👥 Customer Segmentation

Which demographic and income segments contribute the most revenue?

### 💰 Spending Behavior

Which expenditure categories dominate customer spending?

### ⚠️ Credit Risk

How are delinquency and utilization distributed across customer segments?

### 🎯 Acquisition

How does customer acquisition cost relate to activation and portfolio value?

---

# ✦ Repository Structure

```text
Credit-Card-Financial-Dashboard/
│
├── 📊 PowerBI/
│   └── README.md
│
├── 🗄️ SQL/
│   ├── 01_database_schema.sql
│   ├── 02_data_cleaning.sql
│   ├── 03_customer_analysis.sql
│   ├── 04_transaction_analysis.sql
│   └── 05_kpi_analysis.sql
│
├── 📚 Documentation/
│   ├── business-problem.md
│   ├── data-dictionary.md
│   └── insights.md
│
├── 📁 Data/
│   └── README.md
│
├── 📦 public/
│   └── data/
│
├── 💻 src/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── scripts/
│   └── verify.mjs
│
├── index.html
├── package.json
├── package-lock.json
├── render.yaml
├── vite.config.js
└── README.md
```

---

# ✦ Run Locally

### Prerequisites

* Node.js 18+
* npm
* Git

### Clone Repository

```bash
git clone https://github.com/khilenderrajput/Credit-Card-Financial-Dashboard.git
```

### Enter Project

```bash
cd Credit-Card-Financial-Dashboard
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

# ✦ Production Build

Create an optimized production build:

```bash
npm run build
```

Vite generates the production files inside:

```text
dist/
```

---

# ✦ Render Deployment

The web dashboard is deployed as a **Static Site on Render**.

### Production configuration

```text
Service Type:
Static Site

Build Command:
npm install && npm run build

Publish Directory:
dist
```

### 🚀 Live Application

<a href="https://credit-card-financial-dashboard-5p2g.onrender.com" target="_blank">

**OPEN LIVE CREDIT CARD DASHBOARD →**

</a>

---

# ✦ GitHub Repository

<a href="https://github.com/khilenderrajput/Credit-Card-Financial-Dashboard" target="_blank">

**VIEW SOURCE CODE ON GITHUB →**

</a>

---

# ✦ Project Highlights

```text
✓ End-to-End Financial Analytics
✓ SQL-Based Analytical Layer
✓ Power BI Modeling Documentation
✓ Interactive React Dashboard
✓ Dynamic Financial Visualizations
✓ Customer Segmentation
✓ Transaction Analysis
✓ Revenue Analysis
✓ Credit Risk Analysis
✓ Production Deployment
✓ GitHub Version Control
✓ Responsive Web Interface
```

---

# ✦ Why This Project Matters

This project demonstrates the complete analytical workflow:

```text
Raw Data
   ↓
Data Cleaning
   ↓
SQL Analysis
   ↓
Business Metrics
   ↓
Power BI Modeling
   ↓
Interactive Visualization
   ↓
Business Insights
   ↓
Production Dashboard
```

It demonstrates practical experience across both **technical analytics** and **business intelligence** workflows.

---

# ✦ Documentation

| Resource         | Description                           |
| ---------------- | ------------------------------------- |
| 🗄️ SQL          | Analytical SQL scripts                |
| 📊 Power BI      | BI modeling & dashboard documentation |
| 📚 Documentation | Business context & insights           |
| 📁 Data          | Dataset documentation                 |
| 💻 Web Dashboard | React/Vite implementation             |

---

# ✦ Author

### Khilender Rajput

**Aspiring Data Analyst / Data Analytics Engineer**

Interested in:

`Data Analytics` · `SQL` · `Power BI` · `Python` · `Business Intelligence` · `Data Visualization`

---

<p align="center">

### ✦ Explore the Dashboard ✦

<a href="https://credit-card-financial-dashboard-5p2g.onrender.com">

<img src="https://img.shields.io/badge/🚀%20LIVE%20DASHBOARD-Explore%20Now-111827?style=for-the-badge" />

</a>

  

<a href="https://github.com/khilenderrajput/Credit-Card-Financial-Dashboard">

<img src="https://img.shields.io/badge/⌘%20GITHUB-VIEW%20SOURCE-111827?style=for-the-badge&logo=github&logoColor=white" />

</a>

</p>

---

<p align="center">

**Built with data, analysis, visualization & curiosity.**

</p>
