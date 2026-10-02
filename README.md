# 💳 Credit Card Financial Analytics Dashboard

[![SQL](https://img.shields.io/badge/SQL-MySQL%20%7C%20PostgreSQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](#-sql-analytics)
[![Power BI](https://img.shields.io/badge/Power_BI-Analytics%20%26%20DAX-F2C811?style=for-the-badge&logo=powerbi&logoColor=black)](#-power-bi-analytics--modeling)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](#-interactive-web-dashboard-react--vite)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](#-production-build)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#-tools--technologies)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](#-project-structure)
[![Render](https://img.shields.io/badge/Render-Static%20Site-46E3B7?style=for-the-badge&logo=render&logoColor=black)](#-render-deployment)

> **An End-to-End Financial Analytics Portfolio Project** integrating:
> 1. **SQL Data Pipeline & Warehousing Queries** (schema design, data cleaning, customer segmentation, transaction trends, financial KPIs).
> 2. **Power BI Modeling & DAX Documentation Layer** (star schema, DAX formulas, interactive visual blueprints).
> 3. **Production React/Vite Web Application** deployed live on Render for interactive stakeholder data exploration.

---

## 🌐 Live Web Demo

**Render Deployment:**  
🔗 **[Render URL]** *(Insert your Render deployed URL here once live)*

- **Service Type:** Static Site
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`

---

## 📑 Table of Contents

- [Project Overview](#-project-overview)
- [Business Problem & Objectives](#-business-problem--objectives)
- [Architecture & Tech Stack](#-architecture--tech-stack)
- [Datasets & Data Model](#-datasets--data-model)
- [SQL Analytics Suite](#-sql-analytics-suite)
- [Power BI Analytics & Modeling](#-power-bi-analytics--modeling)
- [Interactive Web Dashboard (React + Vite)](#-interactive-web-dashboard-react--vite)
- [Verified Financial KPIs](#-verified-financial-kpis)
- [Key Business Insights](#-key-business-insights)
- [Project Structure](#-project-structure)
- [How to Run Locally](#-how-to-run-locally)
- [Production Build & Deployment](#-production-build--deployment)
- [Documentation Links](#-documentation-links)

---

## 🔍 Project Overview

Consumer credit card operations generate massive volumes of transactional, behavioral, and demographic data. Financial institutions require multi-tiered analytics capabilities to monitor portfolio performance, manage credit risk, optimize acquisition costs, and identify high-value customer cohorts.

This project delivers an end-to-end analytics solution across three synchronized layers:
1. **Relational Database & SQL Layer (`SQL/`):** Full analytical query pipeline covering DDL, data cleaning, customer profiling, transaction spend distributions, and executive KPIs.
2. **Business Intelligence & DAX Layer (`PowerBI/`):** Detailed specification of star schema modeling, Power Query ETL steps, DAX calculations, and executive reporting canvas.
3. **Interactive Web Dashboard Layer (`src/` + `public/`):** A responsive, client-side React 18 single-page application built with Vite and Recharts, providing instant filtering and interactive exploration of 10,293 customer accounts.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           RAW CSV DATASETS                                  │
│       credit_card.csv  ·  customer.csv  ·  incremental additions            │
└───────────────────────┬───────────────────────────────┬─────────────────────┘
                        │                               │
                        ▼                               ▼
       ┌─────────────────────────────────┐   ┌─────────────────────────────┐
       │         SQL DATA LAYER          │   │      POWER BI LAYER         │
       │  • Relational Schema DDL        │   │  • Star Schema Model        │
       │  • Data Cleaning & Views        │   │  • Power Query ETL          │
       │  • Customer & Spend Analysis    │   │  • DAX Financial Measures   │
       │  • Risk & KPI Queries           │   │  • Executive Visual Specs   │
       └─────────────────────────────────┘   └─────────────────────────────┘
                        │                               │
                        └───────────────┬───────────────┘
                                        ▼
       ┌─────────────────────────────────────────────────────────────────┐
       │                LIVE INTERACTIVE WEB APPLICATION                 │
       │  • Built with React 18 + Vite 5 + Recharts                      │
       │  • Client-side data parsing & cross-filtering                   │
       │  • Deployed continuously on Render (Static Site)                │
       └─────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Business Problem & Objectives

### The Business Challenge
A retail banking portfolio managing over 10,000 credit card accounts needed answers to critical operational questions:
- **Revenue Drivers:** Where is the $56.5M portfolio revenue originating (fees, spend, interest)?
- **Product Imbalance:** Why does the entry-level Blue card account for over 83% of total revenue, and how can premium card adoption (Silver, Gold, Platinum) be accelerated?
- **Payment Method Adoption:** What proportion of spend occurs via physical POS (Swipe/Chip) versus online channels?
- **Credit Risk:** What is the portfolio's delinquency rate, and which customer occupations and utilization brackets present default vulnerabilities?
- **Acquisition Efficiency:** Are marketing acquisition costs (CAC) generating adequate returns, and why do 42.5% of accounts remain unactivated after 30 days?

### Analytical Objectives
1. Build an auditable relational data pipeline using SQL.
2. Formulate enterprise DAX measures for executive reporting.
3. Provide an interactive web dashboard with zero-latency cross-filtering for decision-makers.
4. Deliver actionable strategic recommendations to optimize profitability and reduce delinquency.

---

## 🛠️ Tools & Technologies

- **Database / Querying:** SQL (MySQL & PostgreSQL compatible DDL, DML, Window Functions, Views)
- **Business Intelligence:** Microsoft Power BI (Star Schema, Power Query M, DAX Time Intelligence)
- **Frontend Framework:** React 18, Vite 5, JavaScript (ES6+)
- **Data Visualization:** Recharts, custom SVG gauges and progress bars
- **Data Processing:** PapaParse (in-browser CSV parsing & relational joining)
- **Styling:** Modular CSS3 (responsive grid, themes, flexbox)
- **Version Control:** Git, GitHub
- **Cloud Hosting & CI/CD:** Render (Static Site deployment)

---

## 📊 Datasets & Data Model

The project utilizes real financial datasets located in [`public/data/`](public/data/):
- **`credit_card.csv`** (10,108 rows): Account transactions, credit limits, revolving balances, interest, fees, utilization, and delinquency flags.
- **`customer.csv`** (10,108 rows): Customer demographics, age, gender, education, marital status, state, occupation, income, and satisfaction scores.
- **`credit_card_mysql_ready_uploaded.csv`** & **`cust_add.csv`** (185 rows each): Incremental update records.

### Relational Model (Joined on `Client_Num`)

```
  ┌─────────────────────────────┐               ┌─────────────────────────────┐
  │        DIM_CUSTOMER         │               │      FACT_CREDIT_CARD       │
  ├─────────────────────────────┤               ├─────────────────────────────┤
  │ Client_Num (PK)             │◄─────────────►│ Client_Num (FK)             │
  │ Customer_Age                │    1-to-1     │ Card_Category               │
  │ Gender                      │               │ Annual_Fees                 │
  │ Dependent_Count             │               │ Activation_30_Days          │
  │ Education_Level             │               │ Customer_Acq_Cost           │
  │ Marital_Status              │               │ Week_Start_Date             │
  │ state_cd                    │               │ Week_Num                    │
  │ Zipcode                     │               │ Qtr                         │
  │ Car_Owner                   │               │ Credit_Limit                │
  │ House_Owner                 │               │ Total_Revolving_Bal         │
  │ Personal_loan               │               │ Total_Trans_Amt             │
  │ contact                     │               │ Total_Trans_Ct              │
  │ Customer_Job                │               │ Avg_Utilization_Ratio       │
  │ Income                      │               │ Use_Chip                    │
  │ Cust_Satisfaction_Score     │               │ Exp_Type                    │
  └─────────────────────────────┘               │ Interest_Earned             │
                                                │ Delinquent_Acc              │
                                                └─────────────────────────────┘
```

Detailed definitions are available in the **[Data Dictionary](Documentation/data-dictionary.md)**.

---

## 🗄️ SQL Analytics Suite

The [`SQL/`](SQL/) directory contains modular scripts addressing the entire analytical lifecycle:

| Script | Purpose & Coverage | Key Queries / Techniques |
| :--- | :--- | :--- |
| **[`01_database_schema.sql`](SQL/01_database_schema.sql)** | DDL schema creation | Table definitions, primary/foreign keys, indexes, bulk import syntax |
| **[`02_data_cleaning.sql`](SQL/02_data_cleaning.sql)** | Data cleaning & enrichment | Duplicate checks, whitespace trimming, date standardization, master view |
| **[`03_customer_analysis.sql`](SQL/03_customer_analysis.sql)** | Demographics & segmentation | Spend by gender, age groups, occupation breakdown, income brackets, states |
| **[`04_transaction_analysis.sql`](SQL/04_transaction_analysis.sql)** | Spend & transaction dynamics | Ticket size, expense categories, payment channels, quarterly & weekly trends (`LAG()`) |
| **[`05_kpi_analysis.sql`](SQL/05_kpi_analysis.sql)** | Executive KPIs & risk | Top-line scorecard, CAC ROI, 30-day activation, delinquency profiling, utilization tiers |

---

## 📈 Power BI Analytics & Modeling

The [`PowerBI/`](PowerBI/) folder documents the Power BI architecture:
- **Data Model:** Clean Star Schema linking `Fact_CreditCard` and `Dim_Customer` via `Client_Num`.
- **Power Query ETL:** Data cleaning, type conversion, duplicate handling, and conditional bucketing (Age Groups, Income Groups).
- **Core DAX Measures:**
  - `Total Revenue = SUM(Fact_CreditCard[Annual_Fees]) + SUM(Fact_CreditCard[Total_Trans_Amt]) + SUM(Fact_CreditCard[Interest_Earned])`
  - `Activation Rate = DIVIDE(CALCULATE(COUNTROWS(Fact_CreditCard), Fact_CreditCard[Activation_30_Days] = 1), COUNTROWS(Fact_CreditCard), 0)`
  - `Delinquency Rate = DIVIDE(CALCULATE(COUNTROWS(Fact_CreditCard), Fact_CreditCard[Delinquent_Acc] = 1), COUNTROWS(Fact_CreditCard), 0)`
  - `WoW Revenue Growth %` using `LAG` / `Week_Num - 1`.
- **Visual Canvas Design:** Specifications for Transaction Reports, Customer Demographics, and Weekly Momentum pages.

*See [PowerBI/README.md](PowerBI/README.md) for complete DAX formulas and visual configuration.*

---

## 💻 Interactive Web Dashboard (React + Vite)

The live web application serves as the production presentation layer for the analytics project:
- **Client-Side CSV Parsing:** Parses the four CSV datasets in parallel via PapaParse and normalizes records into an in-memory analytics store.
- **Three Specialized Analytical Views:**
  1. **Weekly Analysis:** Tracks 53 weeks of revenue momentum, Week-over-Week changes, and delinquency mix.
  2. **Transaction Report:** Deep-dive into card categories, quarterly comparisons, expense categories, and payment channels.
  3. **Customer Report:** Demographic analysis across gender, age brackets, income tiers, job classifications, and top states.
- **Cross-Filtering Panel:** Allows multi-dimensional filtering across 12 distinct attributes (quarter, card type, gender, spend category, payment method, etc.) with instant chart updates.

---

## 🏆 Verified Financial KPIs

All KPIs have been calculated and programmatically verified across the 10,293 customer accounts:

| KPI Metric | Verified Actual Value | Description / Calculation |
| :--- | :--- | :--- |
| **Total Portfolio Revenue** | **$56,517,010.81** (~$56.52M) | Annual Fees + Total Trans Amt + Interest Earned |
| **Total Transaction Amount** | **$45,533,021.00** (~$45.53M) | Gross customer purchase spend |
| **Total Transaction Count** | **667,234 transactions** | Total volume of transactions executed |
| **Net Interest Earned** | **$7,982,479.81** (~$7.98M) | Finance charges on revolving balances |
| **Blue Card Revenue** | **$47,188,611.62** (~$47.19M) | 83.5% of total portfolio revenue |
| **Male Cardholder Revenue** | **$30,929,733.66** (~$30.93M) | 54.7% revenue contribution |
| **Female Cardholder Revenue** | **$25,587,277.15** (~$25.59M) | 45.3% revenue contribution |
| **Top Job Revenue (Businessman)** | **$17,697,472.01** (~$17.70M) | Highest revenue generating occupation |
| **High-Income Segment Revenue** | **$29,841,026.07** (~$29.84M) | Accounts earning >$70,000 |
| **30-Day Card Activation Rate** | **57.46%** (5,914 accounts) | Accounts active within first month |
| **Portfolio Delinquency Rate** | **6.06%** (624 accounts) | Non-performing / delinquent accounts |

---

## 💡 Key Business Insights

1. **Card Tier Concentration:** The **Blue card** drives **83.5% ($47.19M)** of total portfolio revenue. Premium tiers (Silver, Gold, Platinum) represent significant untapped potential for upgrade campaigns targeting high-income cardholders.
2. **Channel Dynamics:** **Swipe transactions** dominate at **$35.0M (61.9%)**, followed by **Chip ($17.1M)** and **Online ($4.4M)**. Online spend is underrepresented, indicating an opportunity for digital wallet and recurring billing incentives.
3. **Spend Allocation:** **Bills ($14.6M)** and **Entertainment ($9.9M)** represent the top spend categories, accounting for over 43% of total expenditures.
4. **Demographics:** **High-Income accounts (>$70K)** generate **52.8% ($29.84M)** of total revenue. **Businessmen** are the single most profitable occupational cohort ($17.70M).
5. **Credit Risk & Activation:** **57.46%** of accounts activate within 30 days, leaving ~42.5% inactive. The **6.06% delinquency rate** is heavily concentrated among high-utilization accounts (>70%).

*Read the full report in **[Documentation/insights.md](Documentation/insights.md)**.*

---

## 📂 Project Structure

```
Credit-Card-Financial-Dashboard/
│
├── SQL/                                    # SQL Analytics Suite
│   ├── 01_database_schema.sql              # Schema DDL, keys, indexes & bulk load
│   ├── 02_data_cleaning.sql                # Data cleaning, deduplication & master view
│   ├── 03_customer_analysis.sql            # Demographics, age, income & job analysis
│   ├── 04_transaction_analysis.sql         # Spend amounts, channels & weekly trends
│   └── 05_kpi_analysis.sql                 # Executive KPIs, CAC, risk & segmentation
│
├── PowerBI/                                # Power BI Analytics & Modeling Layer
│   └── README.md                           # Star schema, DAX measures & visual specs
│
├── Documentation/                          # Project Documentation
│   ├── business-problem.md                 # Business context & stakeholder objectives
│   ├── data-dictionary.md                  # Comprehensive column-level dictionary
│   └── insights.md                         # Empirical insights & strategic recommendations
│
├── Data/                                   # Data Architecture
│   └── README.md                           # Dataset documentation & workflow
│
├── public/                                 # Static Assets & Datasets
│   └── data/                               # CSV Data Sources (served to web app & BI)
│       ├── credit_card.csv
│       ├── customer.csv
│       ├── credit_card_mysql_ready_uploaded.csv
│       └── cust_add.csv
│
├── src/                                    # React Web Application Source Code
│   ├── components/                         # UI components, Recharts visualizations
│   ├── hooks/                              # Custom React hooks (useDashboard)
│   ├── pages/                              # WeeklyPage, TransactionPage, CustomerPage
│   ├── utils/                              # Data loading, normalization & aggregations
│   ├── App.jsx                             # Main application container
│   ├── main.jsx                            # React DOM entry point
│   └── styles.css                          # Application styling
│
├── scripts/                                # Verification Scripts
│   └── verify.mjs                          # Statistical verification script
│
├── package.json                            # Node.js dependencies & scripts
├── package-lock.json                       # Dependency lockfile
├── vite.config.js                          # Vite build configuration
├── render.yaml                             # Render static site blueprint
├── index.html                              # HTML entry point
└── README.md                               # Project documentation showcase
```

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm (Node package manager)

### Installation & Development Server
```bash
# 1. Clone the repository
git clone https://github.com/khilenderrajput/Credit-Card-Financial-Dashboard.git

# 2. Navigate to the project directory
cd Credit-Card-Financial-Dashboard

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open your browser at `http://localhost:5173` to explore the dashboard.

### Run Statistical Verification
```bash
npm run verify
```
This runs the automated Node verification script against the raw CSV datasets, checking all financial metrics against the baseline.

---

## 📦 Production Build & Deployment

### Build Command
```bash
npm run build
```
Vite generates optimized production assets in the `dist/` directory, including automatic code splitting for charting libraries.

### Render Deployment Configuration
The application is pre-configured for automated deployment on **Render**:
- **Service Type:** `Static Site`
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`
- **Blueprint File:** [`render.yaml`](render.yaml)

---

## 📚 Documentation Links

- **[Business Problem & Context](Documentation/business-problem.md)**
- **[Data Dictionary](Documentation/data-dictionary.md)**
- **[Business Insights & Recommendations](Documentation/insights.md)**
- **[Power BI Architecture & DAX](PowerBI/README.md)**
- **[Data Directory Overview](Data/README.md)**
- **[SQL Scripts Directory](SQL/)**

---

### Author
**Khilender Rajput**  
*Data Analyst | Financial Analytics | BI Developer*  
GitHub: [@khilenderrajput](https://github.com/khilenderrajput)
