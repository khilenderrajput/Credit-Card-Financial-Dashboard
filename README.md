# 💳 Credit Card Financial Data Analysis

<p align="center">
  <strong>An End-to-End Data Analytics & Business Intelligence Project</strong><br/>
  Turning Financial Data into Actionable Business Insights
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Data%20Analytics-Portfolio%20Project-111827?style=for-the-badge&logo=googleanalytics&logoColor=white" alt="Data Analytics"/>
  <img src="https://img.shields.io/badge/SQL-MySQL-0F766E?style=for-the-badge&logo=mysql&logoColor=white" alt="SQL MySQL"/>
  <img src="https://img.shields.io/badge/Power%20BI-Business%20Intelligence-F2C811?style=for-the-badge&logo=powerbi&logoColor=black" alt="Power BI"/>
  <img src="https://img.shields.io/badge/DAX-KPI%20Analysis-E39600?style=for-the-badge" alt="DAX"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React%20%7C%20Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React and Vite"/>
  <img src="https://img.shields.io/badge/Deployment-Render%20%7C%20Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Deployment"/>
  <img src="https://img.shields.io/badge/Version%20Control-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
</p>

---

## 🚀 Live Dashboard

<p align="center">
  <a href="https://sparkling-treacle-fb042a.netlify.app/" target="_blank">
    <img src="https://img.shields.io/badge/🌐%20LIVE%20DASHBOARD-OPEN%20ON%20NETLIFY-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Open Live Dashboard on Netlify"/>
  </a>
  <a href="https://credit-card-financial-dashboard-5p2g.onrender.com" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20LIVE%20DASHBOARD-OPEN%20ON%20RENDER-111827?style=for-the-badge&logo=render&logoColor=white" alt="Open Live Dashboard on Render"/>
  </a>
</p>

**Live links:**
- 🌐 **Netlify:** https://sparkling-treacle-fb042a.netlify.app/
- 🚀 **Render:** https://credit-card-financial-dashboard-5p2g.onrender.com

Explore the interactive web presentation of the project's financial analytics and business insights.

---

## 📌 Project Overview

This is an end-to-end **Data Analytics and Business Intelligence project** focused on credit card financial data analysis using **SQL, MySQL, Power BI, Power Query, and DAX**.

The project analyzes customer behavior, revenue, transaction trends, card categories, expenditure patterns, income groups, occupations, age groups, geographical distribution, customer segmentation, credit utilization, card activation, and delinquency risk.

The primary analytical dashboard was developed in **Power BI**. A React and JavaScript implementation provides a live web-based presentation of the dashboard and its analytical insights.

## 🎯 Business Problem

Credit card businesses generate large amounts of customer and transaction data. Analyzing this data helps businesses understand portfolio performance, spending behavior, revenue composition, and potential credit risks.

This project focuses on answering questions such as:

- Which card categories contribute to portfolio revenue?
- Which expenditure categories account for the largest transaction amounts?
- How does customer behavior vary across demographic groups?
- What are the transaction trends across weeks and quarters?
- How can credit utilization and delinquency metrics support risk analysis?
- How can financial KPIs be presented in an easy-to-understand dashboard?

## 🎯 Project Objectives

- Clean and prepare financial datasets for analysis.
- Perform customer and transaction analysis using SQL.
- Develop financial KPIs and analytical metrics.
- Build a structured Power BI data model.
- Create DAX measures for business performance analysis.
- Visualize customer demographics, revenue, and transaction trends.
- Explore credit utilization, activation, and delinquency indicators.
- Publish a web-accessible dashboard for portfolio demonstration.

## ✨ Key Features

| Feature | Description |
|---|---|
| 💰 Revenue Analysis | Analyze revenue composition and financial performance. |
| 💳 Card Category Analysis | Compare Blue, Silver, Gold, and Platinum card categories. |
| 📈 Transaction Trends | Explore weekly and quarterly transaction patterns. |
| 👥 Customer Segmentation | Analyze age groups, income levels, occupations, and demographics. |
| 🛍️ Expenditure Analysis | Compare spending across expense categories and payment methods. |
| 📍 Geographic Analysis | Explore customer distribution by state and location. |
| ⚠️ Credit Risk Analysis | Examine credit utilization and delinquency indicators. |
| 📊 KPI Dashboard | Present key financial metrics through visual reports. |
| 🌐 Live Web Presentation | Access the analytical dashboard online. |

## 🛠️ Technology Stack

### 📊 Data Analytics & Business Intelligence

- **SQL** — Data preparation, querying, and analysis.
- **MySQL** — Relational database management.
- **Microsoft Power BI** — Dashboard development and reporting.
- **Power Query** — Data cleaning and transformation.
- **DAX** — Calculated measures and financial KPIs.

### 🌐 Web Presentation

- **JavaScript (ES6+)**
- **React**
- **Vite**
- **HTML5 & CSS3**
- **Recharts** — Data visualization.
- **Netlify & Render** — Web deployment.

### 🔧 Tools

- Git and GitHub
- CSV datasets
- Power BI Desktop
- MySQL Workbench

## 🔄 Project Workflow

```text
Raw Financial Data
        ↓
Data Cleaning & Preparation
        ↓
SQL / MySQL Analysis
        ↓
KPI Development
        ↓
Power BI Data Modeling
        ↓
DAX Measures & Visualizations
        ↓
Business Insights
        ↓
Live Web Presentation
```

## 🗄️ SQL Analysis

SQL is used to structure, clean, and analyze the customer and credit card datasets.

### Key Analysis Areas

- Database schema creation and table relationships.
- Data cleaning and duplicate checks.
- Customer demographic analysis.
- Transaction amount and payment method analysis.
- Spending category analysis.
- Weekly revenue trend analysis using window functions.
- Financial KPI calculations.
- Customer activation and delinquency analysis.

### Example SQL Concept

```sql
SELECT
    Card_Category,
    SUM(Total_Trans_Amt) AS Total_Transaction_Amount,
    SUM(Total_Trans_Ct) AS Total_Transaction_Count
FROM cc_detail
GROUP BY Card_Category
ORDER BY Total_Transaction_Amount DESC;
```

*This is an illustrative query; column and table names should match the actual database schema.*

## 📈 Power BI Dashboard

Power BI serves as the primary analytics and business intelligence layer.

### Main Components

- Data transformation through Power Query.
- Data modeling and table relationships.
- DAX measures for financial KPIs.
- Revenue and transaction visualizations.
- Customer demographic reports.
- Card category comparisons.
- Weekly performance analysis.
- Customer activation and credit risk indicators.

### Example DAX Measures

**Total Transaction Amount**

```dax
Total Transaction Amount =
SUM(cc_detail[Total_Trans_Amt])
```

**Total Transaction Count**

```dax
Total Transaction Count =
SUM(cc_detail[Total_Trans_Ct])
```

**Total Interest Earned**

```dax
Total Interest Earned =
SUM(cc_detail[Interest_Earned])
```

*These examples assume the corresponding columns exist in the Power BI model. Adjust table and column names to match your actual model.*

## 📊 Key Performance Indicators

| KPI | Purpose |
|---|---|
| Total Revenue | Understand overall portfolio revenue. |
| Total Transaction Amount | Measure total transaction value. |
| Total Transaction Count | Track transaction activity. |
| Total Interest Earned | Analyze interest income. |
| Card Category Performance | Compare financial contribution across card categories. |
| Activation Rate | Examine card activation performance. |
| Delinquency Rate | Monitor accounts flagged as delinquent. |
| Credit Utilization | Understand balance relative to available credit. |
| Customer Segmentation | Compare customer groups and their contribution. |

## 💡 Business
