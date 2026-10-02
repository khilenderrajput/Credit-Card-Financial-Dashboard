# 📊 Power BI Analytics & Dashboard Architecture

This documentation layer outlines the enterprise Power BI design, data modeling, Power Query ETL steps, DAX calculations, and report visualization architecture for the **Credit Card Financial Analytics Dashboard**.

> **Note on Power BI Artifacts:**  
> This directory represents the **Power BI Analytics Specification & Documentation Layer**. It contains the comprehensive data modeling guidelines, DAX measures, and visual configuration instructions required to build or connect this dataset in Microsoft Power BI Desktop. The live interactive web demonstration of this dashboard is powered by the accompanying React + Vite production application.

---

## 1. Dashboard Objective

The objective of the Power BI Credit Card Financial Dashboard is to provide C-suite executives, credit product managers, and financial analysts with:
- **Financial Performance Tracking:** Real-time visibility into portfolio revenue ($56.52M), total transaction volume ($45.53M), fee income, and interest earnings ($7.98M).
- **Product & Channel Optimization:** Analyzing revenue share across card categories (Blue, Silver, Gold, Platinum) and transaction channels (Swipe, Chip, Online).
- **Customer Segmentation:** Deep demographic breakdown across income levels, occupations, age brackets, and geographic distribution.
- **Credit Risk & Portfolio Health:** Monitoring account delinquency rates (6.06%), credit utilization trends, and 30-day card activation velocity (57.46%).
- **Weekly Momentum:** Week-over-Week (WoW) revenue trends across 53 weeks.

---

## 2. Data Sources

The report imports four standard CSV datasets located in `public/data/`:
1. `credit_card.csv`: Primary transactional and account metrics (10,108 rows).
2. `customer.csv`: Primary customer demographic and profile attributes (10,108 rows).
3. `credit_card_mysql_ready_uploaded.csv`: Incremental/supplementary transaction records (185 rows).
4. `cust_add.csv`: Incremental/supplementary customer profile records (185 rows).

---

## 3. Data Model & Relationships

The Power BI model follows a standard **Star / Snowflake Schema** centered around the primary account key: `Client_Num`.

```
        ┌────────────────────────────┐
        │        Dim_Customer        │
        ├────────────────────────────┤
        │ PK: Client_Num             │
        │     Customer_Age           │
        │     Gender                 │
        │     Dependent_Count        │
        │     Education_Level        │
        │     Marital_Status         │
        │     state_cd               │
        │     Zipcode                │
        │     Customer_Job           │
        │     Income                 │
        │     Cust_Satisfaction_Score│
        └─────────────┬──────────────┘
                      │ 1
                      │ 
                      │ 1 (or 1-to-Many if multi-period)
                      ▼
        ┌────────────────────────────┐
        │      Fact_CreditCard       │
        ├────────────────────────────┤
        │ FK: Client_Num             │
        │     Card_Category          │
        │     Annual_Fees            │
        │     Activation_30_Days     │
        │     Customer_Acq_Cost      │
        │     Week_Start_Date        │
        │     Week_Num               │
        │     Qtr                    │
        │     Credit_Limit           │
        │     Total_Revolving_Bal    │
        │     Total_Trans_Amt        │
        │     Total_Trans_Ct         │
        │     Avg_Utilization_Ratio  │
        │     Use_Chip               │
        │     Exp_Type               │
        │     Interest_Earned        │
        │     Delinquent_Acc         │
        └────────────────────────────┘
```

### Relationship Properties:
- **From:** `Dim_Customer[Client_Num]`
- **To:** `Fact_CreditCard[Client_Num]`
- **Cardinality:** 1 to 1 (or 1 to Many)
- **Cross filter direction:** Single (Dim_Customer filters Fact_CreditCard)

---

## 4. Power Query ETL & Data Cleaning

In Power Query Editor (Transform Data):
1. **Append Incremental Data:**
   - Append `credit_card_mysql_ready_uploaded` into `credit_card` to create the consolidated `Fact_CreditCard` table.
   - Append `cust_add` into `customer` to create the consolidated `Dim_Customer` table.
2. **Remove Duplicates:** Apply *Remove Duplicates* on `Client_Num` in both tables.
3. **Trim Text Columns:** Remove leading/trailing spaces from `Use_Chip` (e.g., `"Chip "` to `"Chip"`), `Exp_Type`, and `Card_Category`.
4. **Standardize Date Formats:** Ensure `Week_Start_Date` parses to `Date` type (handling both `dd-MM-yyyy` and `yyyy-MM-dd` inputs).
5. **Add Conditional Columns:**
   - **Age Group:**
     ```powerquery
     if [Customer_Age] < 30 then "20-30"
     else if [Customer_Age] < 40 then "30-40"
     else if [Customer_Age] < 50 then "40-50"
     else if [Customer_Age] < 60 then "50-60"
     else "60+"
     ```
   - **Income Group:**
     ```powerquery
     if [Income] < 35000 then "Low"
     else if [Income] < 70000 then "Medium"
     else "High"
     ```
   - **Week Number Integer:**
     ```powerquery
     Number.FromText(Text.Replace([Week_Num], "Week-", ""))
     ```

---

## 5. Enterprise DAX Measures

The following verified DAX formulas are used across all cards, matrix tables, and trend visuals:

### Core Financials & Revenue
```dax
-- Total Portfolio Revenue
Total Revenue = 
SUM(Fact_CreditCard[Annual_Fees]) + 
SUM(Fact_CreditCard[Total_Trans_Amt]) + 
SUM(Fact_CreditCard[Interest_Earned])

-- Total Transaction Spend Amount
Total Transaction Amount = 
SUM(Fact_CreditCard[Total_Trans_Amt])

-- Total Transaction Volume
Total Transaction Count = 
SUM(Fact_CreditCard[Total_Trans_Ct])

-- Total Interest Earned
Total Interest Earned = 
SUM(Fact_CreditCard[Interest_Earned])

-- Total Annual Fees
Total Annual Fees = 
SUM(Fact_CreditCard[Annual_Fees])

-- Average Ticket Size per Transaction
Avg Ticket Size = 
DIVIDE([Total Transaction Amount], [Total Transaction Count], 0)
```

### Risk & Portfolio Health Measures
```dax
-- 30-Day Card Activation Rate
Activation Rate = 
DIVIDE(
    CALCULATE(COUNTROWS(Fact_CreditCard), Fact_CreditCard[Activation_30_Days] = 1),
    COUNTROWS(Fact_CreditCard),
    0
)

-- Delinquent Accounts Count
Delinquent Accounts = 
CALCULATE(COUNTROWS(Fact_CreditCard), Fact_CreditCard[Delinquent_Acc] = 1)

-- Portfolio Delinquency Rate
Delinquency Rate = 
DIVIDE([Delinquent Accounts], COUNTROWS(Fact_CreditCard), 0)

-- Average Credit Utilization Ratio
Avg Utilization = 
AVERAGE(Fact_CreditCard[Avg_Utilization_Ratio])
```

### Customer & Unit Economics Measures
```dax
-- Total Customer Income
Total Customer Income = 
SUM(Dim_Customer[Income])

-- Average Customer Satisfaction Score
Avg Satisfaction Score = 
AVERAGE(Dim_Customer[Cust_Satisfaction_Score])

-- Total Customer Acquisition Cost (CAC)
Total CAC = 
SUM(Fact_CreditCard[Customer_Acq_Cost])

-- Revenue to CAC Multiplier (Marketing ROI)
Revenue Multiple on CAC = 
DIVIDE([Total Revenue], [Total CAC], 0)
```

### Week-over-Week (WoW) Time Intelligence
```dax
-- Previous Week Revenue
Previous Week Revenue = 
VAR CurrentWeek = SELECTEDVALUE(Fact_CreditCard[Week_Number])
RETURN
CALCULATE(
    [Total Revenue],
    FILTER(
        ALL(Fact_CreditCard),
        Fact_CreditCard[Week_Number] = CurrentWeek - 1
    )
)

-- Week-over-Week Revenue Growth %
WoW Revenue Growth % = 
VAR PrevRev = [Previous Week Revenue]
VAR CurrentRev = [Total Revenue]
RETURN
IF(
    ISBLANK(PrevRev) || PrevRev = 0,
    BLANK(),
    DIVIDE(CurrentRev - PrevRev, PrevRev)
)
```

---

## 6. Recommended Visual Layouts & Pages

### Page 1: Transaction & Revenue Report
1. **Top KPI Ribbon:**
   - Card 1: `Total Revenue` ($56.52M)
   - Card 2: `Total Transaction Amount` ($45.53M)
   - Card 3: `Total Transaction Count` (667K)
   - Card 4: `Total Interest Earned` ($7.98M)
2. **Card Category Summary (Matrix/Table):**
   - Rows: `Card_Category` (Blue, Silver, Gold, Platinum)
   - Values: `Sum of Interest_Earned`, `Sum of Total_Trans_Amt`, `Sum of Revenue`
3. **Quarterly Performance (Combo Bar & Line Chart):**
   - X-Axis: `Qtr` (Q1, Q2, Q3, Q4)
   - Column Y-Axis: `Total Revenue`
   - Line Y-Axis: `Total Transaction Count`
4. **Revenue by Expenditure Type (Horizontal Bar Chart):**
   - Y-Axis: `Use_Chip` (Swipe, Chip, Online)
   - X-Axis: `Total Revenue`
5. **Expense Category Breakdown (Horizontal Bar Chart):**
   - Y-Axis: `Exp_Type` (Bills, Entertainment, Fuel, Grocery, Food, Travel)
   - X-Axis: `Total Revenue`

### Page 2: Customer Demographics Report
1. **Top KPI Ribbon:**
   - Card 1: `Total Revenue` ($56.52M)
   - Card 2: `Total Customer Income` ($599.29M)
   - Card 3: `Avg Satisfaction Score` (3.19 / 5.0)
   - Card 4: `Total Interest Earned` ($7.98M)
2. **Weekly Revenue by Gender Trend (Multi-Line Chart):**
   - X-Axis: `Week_Start_Date`
   - Legend: `Gender` (Male, Female)
   - Y-Axis: `Total Revenue`
3. **Demographic Stacked Bar Visuals:**
   - Revenue by Age Group (`20-30`, `30-40`, `40-50`, `50-60`, `60+`)
   - Revenue by Income Group (`High`, `Medium`, `Low`)
   - Revenue by Marital Status (`Married`, `Single`, `Unknown`)
   - Revenue by Dependents (0 to 5)
   - Top 5 States by Revenue (`TX`, `NY`, `CA`, `FL`, `NJ`)
4. **Customer Job Summary (Matrix/Table):**
   - Rows: `Customer_Job` (Businessman, White-collar, Govt, etc.)
   - Values: `Total Revenue`, `Interest Earned`, `Total Income`

### Page 3: Weekly Momentum & Credit Risk Report
1. **Top KPI Ribbon:**
   - Card 1: `Latest Week Revenue` (Week-53: $1.20M)
   - Card 2: `WoW Revenue Growth %` (+28.8%)
   - Card 3: `Activation Rate` (57.5%)
   - Card 4: `Delinquent Accounts` (624 accounts / 6.06%)
2. **Week-over-Week Revenue Matrix:**
   - Columns: `Week_Num`, `Accounts`, `Prior Week Revenue`, `Current Week Revenue`, `WoW %`
3. **Weekly Transaction Spend Trend:**
   - Line chart showing `Total_Trans_Amt` across weeks 1 to 53.
4. **Delinquency & Job Mix Table:**
   - Comparison of account share vs delinquent share by job role.

---

## 7. Recommended Filters / Slicers

Place a collapsible or persistent filter panel on the canvas containing:
- **Quarter:** `Qtr` (Q1, Q2, Q3, Q4)
- **Card Category:** `Card_Category` (Blue, Silver, Gold, Platinum)
- **Gender:** `Gender` (M, F)
- **Payment Method:** `Use_Chip` (Swipe, Chip, Online)
- **Expense Category:** `Exp_Type` (Bills, Entertainment, Fuel, Grocery, Food, Travel)
- **Income Group:** `Income_Group` (High, Medium, Low)
- **State:** `state_cd` (Dropdown)

---

## 8. Verified Analytical Highlights

Based on actual data computations:
- **Total Portfolio Revenue:** **$56,517,010.81** ($56.52M).
- **Transaction Amount:** **$45,533,021.00** ($45.53M).
- **Transaction Volume:** **667,234 transactions**.
- **Net Interest Earned:** **$7,982,479.81** ($7.98M).
- **Product Dominance:** The **Blue card** generates **$47.19M (83.5%)** of total revenue.
- **Top Profession:** **Businessmen** drive **$17.70M** of revenue (~31.3% of total).
- **Primary Spend Channels:** **Swipe** represents **$35.0M** in revenue, **Chip** represents **$17.1M**, and **Online** represents **$4.4M**.
- **Delinquency Baseline:** 624 accounts (6.06%) flagged as delinquent.

---

## 9. Power BI Dashboard Preview & Artifact Placeholder

To add a Power BI report screenshot to this repository:
1. Export a report page screenshot from Power BI Desktop (`File > Export` or screenshot utility).
2. Save the image file as:
   ```
   PowerBI/dashboard-preview.png
   ```
3. Link the image in this README or the root project README:
   ```markdown
   ![Power BI Dashboard Preview](dashboard-preview.png)
   ```
