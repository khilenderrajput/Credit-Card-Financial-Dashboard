# 💳 Credit Card Financial Data Analysis

An end-to-end Data Analytics and Business Intelligence project focused on Credit Card financial data analysis using SQL and Power BI.

The project analyzes customer behavior, revenue, transactions, card categories, expenditure patterns, income groups, occupations, age groups, states, customer segmentation, credit utilization, activation, and delinquency risk.

A separate JavaScript + React + Vite dashboard is included as an interactive presentation layer to visualize the analytical findings.

<p align="center">
  <img src="https://img.shields.io/badge/Data%20Analytics-Portfolio%20Project-111827?style=for-the-badge&logo=googleanalytics&logoColor=white" />
  <img src="https://img.shields.io/badge/SQL-Data%20Analysis-0F766E?style=for-the-badge&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/Power%20BI-Business%20Intelligence-F2C811?style=for-the-badge&logo=powerbi&logoColor=black" />
  <img src="https://img.shields.io/badge/DAX-Financial%20Measures-E39600?style=for-the-badge" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Live%20Dashboard-Interactive%20Presentation-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Deployment-Render-46E3B7?style=for-the-badge&logo=render&logoColor=black" />
  <img src="https://img.shields.io/badge/Git-GitHub-F05032?style=for-the-badge&logo=git&logoColor=white" />
</p>

---

## 🌐 Live Interactive Dashboard

This project also includes a live JavaScript-based dashboard that provides an interactive way to explore and present the analytical findings.

<p align="center">
  <a href="https://credit-card-financial-dashboard-5p2g.onrender.com" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20OPEN%20LIVE%20DASHBOARD-000000?style=for-the-badge&logo=render&logoColor=white" />
  </a>
</p>

> 🔗 **Live Dashboard URL:**  
> [https://credit-card-financial-dashboard-5p2g.onrender.com](https://credit-card-financial-dashboard-5p2g.onrender.com)

---

## 👨‍💻 My Role

I worked on the project across the complete analytics workflow:

- **Data preparation** — Ingesting, profiling, and verifying raw customer and transaction CSV datasets.
- **SQL data analysis** — Designing the relational schema, cleaning records, handling duplicates, and writing analytical queries.
- **KPI development** — Defining business-critical metrics for revenue, spend volume, interest margins, and acquisition costs.
- **Customer analysis** — Segmenting cardholders by age groups, income brackets, occupations, and geographic distribution.
- **Transaction analysis** — Slicing spend behavior across merchant categories, payment methods, quarters, and weeks.
- **Financial analysis** — Assessing revenue composition across card tiers (Blue, Silver, Gold, Platinum).
- **Risk analysis** — Measuring credit utilization ratios and delinquency patterns to flag high-risk accounts.
- **Power BI reporting** — Designing the Star Schema data model, Power Query cleaning steps, and report layout specifications.
- **DAX measures** — Formulating time-intelligence, portfolio aggregations, and performance ratios.
- **Data visualization & presentation** — Building an interactive presentation layer using JavaScript, React, and Vite to showcase the findings dynamically.

---

## 📊 Why This Is a Data Analytics Project

The core of this project is focused on extracting business insights from financial data.

The primary analytical workflow is:

```text
SQL → Data Cleaning → Analysis → KPIs → Power BI → Business Insights
```

The JavaScript/React dashboard is an additional interactive layer created to present those insights through a live web interface.

---

## 🔄 End-to-End Analytics Workflow

```text
┌────────────────────────────────────────────────────────┐
│                      RAW DATA                          │
│     credit_card.csv  ·  customer.csv  ·  add-ons       │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│              DATA CLEANING & PREPARATION               │
│  Trim whitespaces · Date standardization · Deduplication│
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│                      SQL ANALYSIS                      │
│ Schema DDL · Relational Joins · Window Functions · Views │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│                KPI & CUSTOMER ANALYSIS                 │
│ Revenue · Transactions · Demographics · Risk Profiling │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│                     POWER BI + DAX                     │
│ Star Schema Model · Power Query · DAX Measures · Specs │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│                   BUSINESS INSIGHTS                    │
│ Portfolio drivers · Tier concentration · Risk triggers │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│            JAVASCRIPT LIVE DASHBOARD                   │
│ Live presentation layer deployed on Render for demo    │
└────────────────────────────────────────────────────────┘
```

---

## 🎯 Business Problem & Objectives

### Business Problem
Consumer credit card businesses generate substantial transactional, demographic, and behavioral data. To effectively manage the portfolio, business decision-makers need answers to crucial operational questions:

- **Revenue Breakdown:** How is revenue generated across transaction spend, annual membership fees, and interest earned?
- **Card Tier Performance:** Which card tiers drive the portfolio, and how can premium cards (Silver, Gold, Platinum) be better positioned?
- **Spend Dynamics:** What merchant expense categories dominate customer expenditure, and what are cardholder payment method preferences (Swipe vs. Chip vs. Online)?
- **Customer Segmentation:** Which income brackets, age cohorts, and occupational groups contribute the highest lifetime value?
- **Credit Risk & Delinquency:** What is the portfolio delinquency rate, and which customer segments exhibit higher credit risk?
- **Acquisition & Activation:** How does customer acquisition cost compare to customer value, and what percentage of accounts activate within the first 30 days?

### Analytical Objectives
1. Perform structured data extraction and cleaning using SQL.
2. Build analytical SQL queries to segment customers and evaluate transaction patterns.
3. Design a Power BI data model with DAX measures for executive reporting.
4. Derive actionable business insights to improve revenue, customer retention, and risk management.
5. Provide a live interactive dashboard for stakeholders to test and explore the data.

---

## 🛠️ Technology Stack

### 📊 Data Analytics & Business Intelligence
- **SQL** (Structured Query Language)
- **MySQL** (Relational Database Management System)
- **Power BI** (Business Intelligence & Reporting)
- **Power Query** (Data Transformation & ETL)
- **DAX** (Data Analysis Expressions for calculated measures)

### 📈 Analytical Areas
- **Data Cleaning** (Handling nulls, trimming strings, date formatting, deduplication)
- **KPI Analysis** (Revenue, average ticket size, interest earned, annual fees)
- **Customer Analysis** (Demographic segmentation, age groups, income brackets, occupations)
- **Transaction Analysis** (Spend volume, velocity, payment channels, categories)
- **Revenue Analysis** (Card categories, quarterly seasonality, week-over-week trends)
- **Customer Segmentation** (Value tiers, behavioral clusters)
- **Credit Utilization Analysis** (Balance-to-limit ratios, risk tiers)
- **Delinquency Risk Analysis** (Default indicators, occupation risk profiling)
- **Business Insights** (Data-driven recommendations for portfolio management)

### 🌐 Live Dashboard (Presentation Layer)
- **JavaScript (ES6+)**
- **React 18**
- **Vite 5**
- **HTML5 & CSS3**
- **Recharts** (Interactive charting library)
- **PapaParse** (In-browser CSV parsing)
- **Render** (Static site production hosting)

---

## 🗄️ SQL Analysis

The [`SQL/`](SQL/) directory contains structured SQL scripts covering the entire database analysis lifecycle:

```text
SQL/
├── 01_database_schema.sql         # Relational schema DDL, primary/foreign keys & indexes
├── 02_data_cleaning.sql           # Deduplication, string cleaning, date handling & master view
├── 03_customer_analysis.sql       # Demographic slicing, income, age, job & state queries
├── 04_transaction_analysis.sql    # Spend distribution, payment channels, WoW trends (LAG)
└── 05_kpi_analysis.sql            # Top-line financial scorecard, CAC, activation & risk
```

### Key Areas Covered by SQL:
- **Database Schema:** Created `cc_detail` (fact table) and `cust_detail` (dimension table) with foreign key relationships on `Client_Num`.
- **Data Cleaning & Standardization:** Identified duplicate records, trimmed trailing whitespace in payment methods (e.g., `'Chip '` to `'Chip'`), validated date formats, and created a consolidated analytics view (`vw_credit_card_master`).
- **Customer Analysis:** Evaluated revenue contributions across gender, age brackets (`20-30`, `30-40`, `40-50`, `50-60`, `60+`), occupations, and income tiers.
- **Transaction Analysis:** Analyzed ticket sizes, expense categories (`Bills`, `Entertainment`, `Fuel`, `Grocery`, `Food`, `Travel`), and weekly momentum using SQL window functions (`LAG() OVER (ORDER BY Week_Number)`).
- **KPI & Risk Analysis:** Calculated portfolio revenue, delinquency rates (`Delinquent_Acc = 1`), 30-day card activation rates, and credit utilization distribution.

---

## 📈 Power BI Analytics & Modeling

The [`PowerBI/`](PowerBI/) folder documents the business intelligence modeling and DAX calculation layer:

### Power BI Workflow
```text
CSV Data Sources → Power Query ETL → Data Model (Star Schema) → DAX Calculations → Report Visuals
```

### Core Components Documented:
- **Data Model:** Star Schema linking `Fact_CreditCard` to `Dim_Customer` via `Client_Num`.
- **Power Query Cleaning:** Step-by-step guidance on type casting, trimming categorical columns, and creating conditional age and income groups.
- **DAX Calculations:** Formulated verified measures including:
  - `Total Revenue = SUM(Fact_CreditCard[Annual_Fees]) + SUM(Fact_CreditCard[Total_Trans_Amt]) + SUM(Fact_CreditCard[Interest_Earned])`
  - `Total Transaction Amount = SUM(Fact_CreditCard[Total_Trans_Amt])`
  - `Total Transaction Count = SUM(Fact_CreditCard[Total_Trans_Ct])`
  - `Total Interest Earned = SUM(Fact_CreditCard[Interest_Earned])`
  - `Activation Rate = DIVIDE(CALCULATE(COUNTROWS(Fact_CreditCard), Fact_CreditCard[Activation_30_Days] = 1), COUNTROWS(Fact_CreditCard), 0)`
  - `Delinquency Rate = DIVIDE(CALCULATE(COUNTROWS(Fact_CreditCard), Fact_CreditCard[Delinquent_Acc] = 1), COUNTROWS(Fact_CreditCard), 0)`
  - `WoW Revenue Growth %` using time-intelligence expressions.
- **Visual Specifications:** Layouts for Executive Overview, Transaction Report, Customer Demographics, and Weekly Risk Report pages.

*(Note: This folder serves as the Power BI documentation and architecture specification layer. A `.pbix` file is not included).*

---

## 💻 Live Interactive Dashboard (Presentation Layer)

The project includes an interactive web dashboard developed using **JavaScript, React, and Vite** as a presentation layer for the analytical findings.

### Features of the Interactive Layer:
- **Dynamic Filtering:** Filter data instantly across 12 analytical dimensions including quarter, card tier, gender, income group, occupation, and state.
- **Three Analytical Views:**
  1. **Weekly Analysis:** Visualizes weekly revenue momentum, WoW percentage changes, and delinquency mix across job roles.
  2. **Transaction Report:** Examines card category summaries, quarterly spend trends, expense type distributions, and payment methods.
  3. **Customer Report:** Breaks down revenue by gender, age groups, income brackets, marital status, and top states.
- **Client-Side Data Processing:** Loads and normalizes CSV data dynamically using PapaParse.

---

## 📊 Dataset & Core Dimensions

The analysis is based on financial and customer datasets stored in [`public/data/`](public/data/):
- **`credit_card.csv`** & **`credit_card_mysql_ready_uploaded.csv`**: Transaction amounts, counts, card categories, fees, credit limits, balances, utilization, interest, and delinquency status.
- **`customer.csv`** & **`cust_add.csv`**: Customer age, gender, dependent count, education, marital status, state, occupation, income, and satisfaction scores.

### Primary Keys & Relationships
- **Account Key:** `Client_Num` connects the credit card transaction table with customer demographic records.

For detailed column descriptions, see the **[Data Dictionary](Documentation/data-dictionary.md)**.

---

## 🏆 Key Financial KPIs

The analysis centers on verified financial and risk indicators calculated directly from the project data:

| Metric | Description |
| :--- | :--- |
| **Total Revenue** | Portfolio revenue combining transaction spend, annual membership fees, and interest earned |
| **Total Transaction Amount** | Total dollar purchase volume transacted by cardholders |
| **Total Transaction Count** | Total volume of transactions processed |
| **Net Interest Earned** | Revenue generated from revolving credit finance charges |
| **Card Category Performance** | Financial contribution across Blue, Silver, Gold, and Platinum tiers |
| **Activation Rate (30 Days)** | Percentage of issued cards activated and used within the first month |
| **Delinquency Rate** | Percentage of customer accounts flagged as past-due / non-performing |
| **Credit Utilization Ratio** | Ratio of revolving balance to available credit limit |
| **Customer Acquisition Cost** | Marketing cost per acquired customer versus lifetime revenue |

---

## 💡 Business Insights Summary

Key findings identified through the analytical queries:

1. **Card Category Dominance:** The **Blue card** represents the vast majority of portfolio accounts and revenue, while premium tiers (Silver, Gold, Platinum) represent growth opportunities for targeted upgrade campaigns.
2. **Payment Channel Patterns:** In-person **Swipe transactions** account for the majority of spend, followed by Chip transactions. Online transactions represent a smaller share, indicating opportunity for digital wallet and recurring billing initiatives.
3. **Primary Spend Categories:** Essential spend categories—specifically **Bills, Entertainment, Fuel, and Grocery**—account for the bulk of customer transaction volume.
4. **High-Value Customer Profiles:** **High-income cardholders** and customers in the **Businessman** occupation category contribute significantly higher revenue and transaction amounts compared to other segments.
5. **Credit Risk Concentration:** Delinquency is concentrated among accounts with high revolving balances and credit utilization exceeding 70%, highlighting the need for proactive credit limit management.

*For detailed business analysis, see **[Documentation/insights.md](Documentation/insights.md)**.*

---

## 🎙️ Interview Talking Points

When asked:  
*"Walk me through a data project you've built."*

**Situation:**  
*"I wanted to build an end-to-end financial data analytics project using credit card data, where I could analyze customer behavior, revenue, transactions and credit risk from a business perspective."*

**Task:**  
*"My goal was to take raw customer and transaction data, clean and analyze it using SQL, create meaningful KPIs and business insights in Power BI, and then present the findings through a live interactive dashboard."*

**Action:**  
*"I first structured and cleaned the data using SQL and performed customer, transaction, revenue and KPI analysis. I then used Power BI, Power Query and DAX to build analytical measures and visualize metrics such as total revenue, transaction trends, activation rate, delinquency rate, credit utilization and customer segments. Finally, I created a JavaScript-based React dashboard as a live presentation layer for the analysis."*

**Result:**  
*"The project helped me identify patterns across card categories, customer segments, income groups, spending behavior, credit utilization and delinquency. These insights can be used to understand customer value, monitor portfolio performance, identify higher-risk segments and support data-driven financial decisions."*

---

## 📂 Repository Structure

```text
Credit-Card-Financial-Dashboard/
│
├── SQL/                                    # SQL Data Analytics Suite
│   ├── 01_database_schema.sql              # Relational schema DDL & indexes
│   ├── 02_data_cleaning.sql                # Data cleaning, deduplication & master view
│   ├── 03_customer_analysis.sql            # Demographics, age, income & job analysis
│   ├── 04_transaction_analysis.sql         # Spend amounts, channels & weekly trends
│   └── 05_kpi_analysis.sql                 # Executive KPIs, CAC & delinquency risk
│
├── PowerBI/                                # Power BI Modeling & DAX Documentation
│   └── README.md                           # Star schema, DAX measures & visual specs
│
├── Documentation/                          # Project Documentation
│   ├── business-problem.md                 # Business background & analytical goals
│   ├── data-dictionary.md                  # Detailed column definitions
│   └── insights.md                         # Business findings & recommendations
│
├── Data/                                   # Data Architecture
│   └── README.md                           # Dataset documentation & workflow
│
├── public/                                 # Datasets & Assets
│   └── data/                               # CSV datasets used across SQL, BI & Web
│       ├── credit_card.csv
│       ├── customer.csv
│       ├── credit_card_mysql_ready_uploaded.csv
│       └── cust_add.csv
│
├── src/                                    # Interactive Dashboard (Presentation Layer)
│   ├── components/                         # Chart and UI components
│   ├── hooks/                              # Data hooks (useDashboard)
│   ├── pages/                              # Weekly, Transaction, Customer views
│   ├── utils/                              # Normalization & aggregations
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── package.json                            # Build configuration & scripts
├── package-lock.json
├── vite.config.js
├── render.yaml                             # Render static site deployment configuration
├── index.html
└── README.md                               # Project presentation & portfolio overview
```

---

## 🚀 How to Run the Presentation Dashboard Locally

### Prerequisites
- Node.js (v18+)
- npm

### Setup
```bash
# 1. Clone repository
git clone https://github.com/khilenderrajput/Credit-Card-Financial-Dashboard.git

# 2. Navigate to folder
cd Credit-Card-Financial-Dashboard

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

Open `http://localhost:5173` to explore the interactive dashboard.

### Production Build
```bash
npm run build
```

The production assets are generated in the `dist/` directory.

---

## 🚀 Deployment

The live interactive dashboard is deployed as a **Static Site on Render**:
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`
- **Configuration File:** [`render.yaml`](render.yaml)

---

### Author
**Khilender Rajput**  
*Data Analyst | SQL | Power BI | Financial Analytics*  
GitHub: [@khilenderrajput](https://github.com/khilenderrajput)
