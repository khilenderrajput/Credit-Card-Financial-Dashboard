# 💳 Credit Card Financial Data Analysis

An end-to-end **Data Analytics and Business Intelligence project** focused on Credit Card financial data analysis using **SQL and Power BI**.

The project analyzes customer behavior, revenue, transactions, card categories, expenditure patterns, income groups, occupations, age groups, geographical distribution, customer segmentation, credit utilization, activation, and delinquency risk.

The primary analytical dashboard was developed in **Power BI**. A **JavaScript + React + Vite** implementation is also included to provide a live web-based presentation of the dashboard and its analytical insights.

<p align="center">
  <img src="https://img.shields.io/badge/Data%20Analytics-Portfolio%20Project-111827?style=for-the-badge&logo=googleanalytics&logoColor=white" />
  <img src="https://img.shields.io/badge/SQL-Core%20Analysis-0F766E?style=for-the-badge&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/Power%20BI-Primary%20Dashboard-F2C811?style=for-the-badge&logo=powerbi&logoColor=black" />
  <img src="https://img.shields.io/badge/DAX-Business%20Intelligence-E39600?style=for-the-badge" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Live%20Presentation-Web%20Dashboard-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Hosting-Render-46E3B7?style=for-the-badge&logo=render&logoColor=black" />
  <img src="https://img.shields.io/badge/Git-GitHub-F05032?style=for-the-badge&logo=git&logoColor=white" />
</p>

---

## 🚀 Live Dashboard

<a href="https://credit-card-financial-dashboard-5p2g.onrender.com" target="_blank">
  <img src="https://img.shields.io/badge/🚀%20LIVE%20DASHBOARD-OPEN%20PROJECT-111827?style=for-the-badge" />
</a>

The live dashboard provides an interactive way to explore and present the analytical findings from the project.

---

## 📊 Project Architecture

```text
DATA ANALYTICS
      ↓
     SQL
      ↓
   POWER BI
      ↓
BUSINESS INSIGHTS
      ↓
REACT/JAVASCRIPT LIVE PRESENTATION
```

### 1. SQL — Data Analysis Layer
SQL was used for data preparation, cleaning, customer analysis, transaction analysis, KPI analysis, and financial metrics.

### 2. Power BI — Analytics & BI Layer
Power BI was used as the primary dashboard and business intelligence tool for transforming the analyzed data into KPIs, visualizations, customer insights, revenue analysis, transaction trends, and risk analysis.

### 3. React + JavaScript — Live Presentation Layer
The Power BI dashboard was difficult to expose directly in the required HTML/live web format. Therefore, a React + JavaScript implementation was created to provide a live web-accessible presentation of the dashboard and its analytical insights.

This layer is intended for portfolio presentation and interactive web access. It is not the primary analytical methodology of the project.

---

## 👨‍💻 My Role

I worked on the project across the complete analytics workflow:

- **Data preparation** — Ingesting, profiling, and inspecting raw customer and transaction CSV datasets.
- **SQL data analysis** — Creating relational schemas, standardizing columns, removing duplicates, and writing analytical queries.
- **KPI development** — Designing measurable business metrics for portfolio revenue, spend amounts, interest earned, and acquisition costs.
- **Customer analysis** — Segmenting customers by age brackets, income tiers, occupations, and geographic distribution.
- **Transaction analysis** — Examining spending behavior across merchant categories, payment methods, quarters, and weeks.
- **Financial analysis** — Assessing revenue composition across card tiers (Blue, Silver, Gold, Platinum).
- **Risk analysis** — Measuring credit utilization ratios and delinquency patterns to flag vulnerable accounts.
- **Power BI reporting** — Designing the Star Schema data model, Power Query cleaning steps, and visual layout specifications.
- **DAX measures** — Formulating calculated metrics, portfolio totals, and performance ratios.
- **Data visualization & presentation** — Building an interactive presentation layer using JavaScript, React, and Vite to share the findings via a live web link.

---

## 📊 Why This Is a Data Analytics Project

The core of this project is focused on extracting business insights from financial data.

The primary analytical workflow is:

```text
SQL → Data Cleaning → Analysis → KPIs → Power BI → Business Insights
```

The JavaScript/React dashboard is an additional interactive layer created to present those insights through a live web interface.

---

## 🎯 Business Problem & Objectives

### Business Problem
Credit card operations generate substantial volumes of transaction and customer data. To manage portfolio profitability and risk effectively, decision-makers must understand:

- **Revenue Composition:** How revenue is generated across purchase spend, annual card fees, and revolving interest charges.
- **Card Tier Performance:** Why the entry-level Blue card generates the majority of revenue, and where upgrade opportunities exist for premium cards (Silver, Gold, Platinum).
- **Spending Behavior:** What expense categories dominate customer spending (Bills, Entertainment, Fuel, Grocery, Food, Travel), and how customers choose to pay (Swipe, Chip, Online).
- **Customer Demographics:** Which income groups, age segments, and professions represent the highest financial contribution.
- **Credit Risk & Delinquency:** What proportion of accounts are delinquent, and how credit utilization correlates with default risk.
- **Customer Acquisition & Activation:** How acquisition costs compare to customer value, and what percentage of accounts activate within 30 days.

### Analytical Objectives
1. Prepare, clean, and structure the data using SQL.
2. Conduct customer, transaction, and financial KPI analysis using SQL queries.
3. Design a Power BI analytical dashboard with a clean data model and DAX measures.
4. Derive actionable business insights to support data-driven decision-making.
5. Provide a live interactive web presentation of the dashboard for portfolio exploration.

---

## 🛠️ Technology Stack

### 📊 Core Data Analytics
- **SQL** (Structured Query Language)
- **MySQL** (Relational Database Management)
- **Power BI** (Business Intelligence & Primary Dashboard Tool)
- **Power Query** (Data Cleaning & ETL)
- **DAX** (Data Analysis Expressions for calculated measures)

### 📈 Analysis
- **Data Cleaning** (Handling missing values, whitespace trimming, date standardization, deduplication)
- **Customer Analysis** (Demographic segmentation, age groups, income levels, occupations)
- **Transaction Analysis** (Spend volume, average ticket size, payment channels, spending categories)
- **Revenue Analysis** (Card categories, quarterly seasonality, week-over-week trends)
- **KPI Analysis** (Portfolio revenue, transaction volume, interest earned, fees)
- **Customer Segmentation** (Demographic and behavioral clustering)
- **Credit Utilization** (Balance-to-limit ratios, risk tiers)
- **Delinquency Risk** (Default flags, non-performing account profiling)
- **Business Intelligence** (Data-driven insights for financial portfolio strategy)

### 🌐 Live Web Presentation
- **JavaScript (ES6+)**
- **React 18**
- **Vite 5**
- **HTML/CSS**
- **Recharts** (Charting library for live presentation)
- **Render** (Static site hosting platform)

---

## 🗄️ SQL — Data Analysis Layer

The [`SQL/`](SQL/) directory contains the core database analysis scripts:

```text
SQL/
├── 01_database_schema.sql         # Relational schema DDL, primary/foreign keys & indexes
├── 02_data_cleaning.sql           # Data cleaning, deduplication & master analytics view
├── 03_customer_analysis.sql       # Demographic slicing, income, age, job & state queries
├── 04_transaction_analysis.sql    # Spend distribution, payment channels, WoW trends (LAG)
└── 05_kpi_analysis.sql            # Top-line financial scorecard, CAC, activation & risk
```

### Analysis Performed in SQL:
- **Database Schema:** Defined `cc_detail` (fact table) and `cust_detail` (dimension table) with foreign key relationships on `Client_Num`.
- **Data Cleaning:** Checked for duplicates, trimmed whitespace in text columns (e.g., `'Chip '` to `'Chip'`), validated dates, and constructed a clean unified analytics view (`vw_credit_card_master`).
- **Customer Segmentation:** Analyzed spend and revenue contributions across gender, age brackets (`20-30` to `60+`), occupations, and income tiers.
- **Transaction & Trend Analysis:** Calculated average ticket sizes, analyzed spend across expense categories (`Bills`, `Entertainment`, `Fuel`, etc.), and evaluated weekly revenue growth using window functions (`LAG() OVER (ORDER BY Week_Number)`).
- **KPI & Risk Metrics:** Calculated portfolio revenue, 30-day card activation rate, credit utilization distribution, and delinquency rates (`Delinquent_Acc = 1`).

---

## 📈 Power BI — Analytics & BI Layer

Power BI served as the primary dashboard and business intelligence tool for the project:

### Power BI Analytical Workflow
```text
CSV Data Sources → Power Query ETL → Data Model (Star Schema) → DAX Calculations → Report Visualizations
```

### Key Components:
- **Data Model:** Star Schema linking `Fact_CreditCard` to `Dim_Customer` on `Client_Num`.
- **Power Query Cleaning:** Standardized column types, handled duplicates, trimmed trailing spaces, and created conditional columns for Age Groups and Income Groups.
- **DAX Calculations:** Formulated measures including:
  - `Total Revenue = SUM(Fact_CreditCard[Annual_Fees]) + SUM(Fact_CreditCard[Total_Trans_Amt]) + SUM(Fact_CreditCard[Interest_Earned])`
  - `Total Transaction Amount = SUM(Fact_CreditCard[Total_Trans_Amt])`
  - `Total Transaction Count = SUM(Fact_CreditCard[Total_Trans_Ct])`
  - `Total Interest Earned = SUM(Fact_CreditCard[Interest_Earned])`
  - `Activation Rate = DIVIDE(CALCULATE(COUNTROWS(Fact_CreditCard), Fact_CreditCard[Activation_30_Days] = 1), COUNTROWS(Fact_CreditCard), 0)`
  - `Delinquency Rate = DIVIDE(CALCULATE(COUNTROWS(Fact_CreditCard), Fact_CreditCard[Delinquent_Acc] = 1), COUNTROWS(Fact_CreditCard), 0)`
  - `WoW Revenue Growth %` using time-intelligence expressions.
- **Report Design:** Layouts covering Executive Overview, Transaction Report, Customer Demographics, and Weekly Momentum.

*(Note: Detailed documentation of the Power BI architecture, data model, and DAX calculations is provided in [`PowerBI/README.md`](PowerBI/README.md)).*

---

## 💻 React + JavaScript — Live Presentation Layer

The React/JavaScript dashboard was created as an interactive web presentation layer for the Power BI analysis:

- **Purpose:** Enables live web-based access to the dashboard for portfolio demonstrations, since sharing Power BI reports directly has hosting constraints.
- **Interactive Slicers:** Allows filtering across 12 analytical dimensions (quarters, card tiers, gender, income groups, occupations, states).
- **Three Analytical Pages:**
  1. **Weekly Analysis:** Displays weekly revenue momentum, WoW change percentages, and delinquency mix across job roles.
  2. **Transaction Report:** Displays card category breakdowns, quarterly trends, expense type distributions, and payment methods.
  3. **Customer Report:** Analyzes revenue by gender, age groups, income levels, marital status, and top states.

---

## 📊 Dataset & Core Dimensions

The analysis is based on financial and customer datasets stored in [`public/data/`](public/data/):
- **`credit_card.csv`** & **`credit_card_mysql_ready_uploaded.csv`**: Transaction amounts, transaction counts, card categories, annual fees, credit limits, balances, utilization, interest, and delinquency status.
- **`customer.csv`** & **`cust_add.csv`**: Customer age, gender, dependents, education, marital status, state, occupation, income, and satisfaction scores.

### Primary Keys & Relationships
- **Join Key:** `Client_Num` links the credit card performance records with customer demographic profiles.

For detailed column descriptions, see the **[Data Dictionary](Documentation/data-dictionary.md)**.

---

## 🏆 Key Financial KPIs

The analysis focuses on verified financial and risk indicators calculated directly from the underlying data:

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

Key insights derived from the analysis:

1. **Card Category Concentration:** The **Blue card** represents the vast majority of portfolio accounts and revenue, while premium tiers (Silver, Gold, Platinum) represent high-margin growth opportunities through targeted customer upgrades.
2. **Payment Channels:** Point-of-sale **Swipe transactions** account for the largest share of spend, followed by Chip transactions. Online transactions represent a smaller proportion, highlighting opportunity for digital payment initiatives.
3. **Spend Allocation:** Everyday spend categories—such as **Bills, Entertainment, Fuel, and Grocery**—account for the bulk of customer spending volume.
4. **Customer Segments:** **High-income cardholders** and customers in the **Businessman** job category contribute significantly higher revenue and transaction amounts compared to other segments.
5. **Credit Risk Patterns:** Delinquency is heavily concentrated among accounts with high revolving balances and credit utilization exceeding 70%, identifying a clear focus area for risk management.

*For detailed business analysis, see **[Documentation/insights.md](Documentation/insights.md)**.*

---

## 🎙️ Interview Talking Points

When asked:  
*"Walk me through a data project you've built."*

**Situation:**  
*"I wanted to build an end-to-end Credit Card Data Analytics project using SQL and Power BI to understand customer behavior, revenue, transactions, and credit risk."*

**Task:**  
*"My goal was to clean and analyze the data using SQL, build the main analytical dashboard in Power BI, and present the dashboard through a live web interface for portfolio demonstration."*

**Action:**  
*"I used SQL for data preparation, cleaning, customer analysis, transaction analysis and KPI analysis. Then I used Power BI, Power Query and DAX to create the main analytical dashboard and business insights. Since I needed a live HTML-based version that could be accessed through a web link, I used JavaScript, React and Vite to recreate the dashboard as a web presentation layer."*

**Result:**  
*"The final project combines SQL-based analysis, Power BI business intelligence and a live web presentation, allowing me to demonstrate both my analytical workflow and how I communicate data insights interactively."*

---

## 📂 Repository Structure

```text
Credit-Card-Financial-Dashboard/
│
├── SQL/                                    # SQL Data Analysis Layer
│   ├── 01_database_schema.sql              # Relational schema DDL & indexes
│   ├── 02_data_cleaning.sql                # Data cleaning, deduplication & master view
│   ├── 03_customer_analysis.sql            # Demographics, age, income & job analysis
│   ├── 04_transaction_analysis.sql         # Spend amounts, channels & weekly trends
│   └── 05_kpi_analysis.sql                 # Executive KPIs, CAC & delinquency risk
│
├── PowerBI/                                # Power BI Analytics & BI Layer
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
├── src/                                    # Live Presentation Layer (Web Dashboard)
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

Production output is generated in the standard `dist/` directory.

---

## 🚀 Deployment

The live presentation dashboard is hosted on **Render** as a Static Site:
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`
- **Configuration:** [`render.yaml`](render.yaml)

---

### Author
**Khilender Rajput**  
*Data Analyst | SQL | Power BI | Financial Analytics*  
GitHub: [@khilenderrajput](https://github.com/khilenderrajput)
