# 📁 Dataset Directory & Architecture

This repository contains real-world credit card transaction and customer demographic datasets.

> **Storage Location Note:**  
> To maintain single-source-of-truth integrity and avoid duplicating large CSV files across the repository, the physical dataset files are hosted in:  
> **[`public/data/`](../public/data/)**  
> Hosting them in `public/data/` ensures they are directly consumable by both the **SQL ingestion scripts**, **Power BI data connection layer**, and the **live React/Vite interactive web dashboard** deployed on Render.

---

## 1. Datasets Overview

The portfolio dataset consists of four CSV files structured into fact (transactions/cards) and dimension (customer demographics) tables:

| File Name | Location | Records | Size | Description |
| :--- | :--- | :--- | :--- | :--- |
| **`credit_card.csv`** | `public/data/credit_card.csv` | 10,108 | ~994 KB | Primary transaction spend, revolving balances, credit limits, interest, fees, and channel data. |
| **`customer.csv`** | `public/data/customer.csv` | 10,108 | ~838 KB | Primary customer demographics, age, income, education, occupation, state, and satisfaction scores. |
| **`credit_card_mysql_ready_uploaded.csv`** | `public/data/credit_card_mysql_ready_uploaded.csv` | 185 | ~19 KB | Incremental / supplement transaction records (e.g., Week-53 additions). |
| **`cust_add.csv`** | `public/data/cust_add.csv` | 185 | ~16 KB | Incremental / supplement customer profile records. |

---

## 2. Entity Relationship Model

The tables are joined via the unique account identifier: **`Client_Num`**.

```
  ┌─────────────────────────────────┐               ┌─────────────────────────────────┐
  │         DIM_CUSTOMER            │               │        FACT_CREDIT_CARD         │
  ├─────────────────────────────────┤               ├─────────────────────────────────┤
  │ Client_Num (Primary Key)        │◄─────────────►│ Client_Num (Foreign Key)        │
  │ Customer_Age                    │    1-to-1     │ Card_Category                   │
  │ Gender                          │               │ Annual_Fees                     │
  │ Dependent_Count                 │               │ Activation_30_Days              │
  │ Education_Level                 │               │ Customer_Acq_Cost               │
  │ Marital_Status                  │               │ Week_Start_Date                 │
  │ state_cd                        │               │ Week_Num                        │
  │ Zipcode                         │               │ Qtr                             │
  │ Car_Owner                       │               │ Credit_Limit                    │
  │ House_Owner                     │               │ Total_Revolving_Bal             │
  │ Personal_loan                   │               │ Total_Trans_Amt                 │
  │ contact                         │               │ Total_Trans_Ct                  │
  │ Customer_Job                    │               │ Avg_Utilization_Ratio           │
  │ Income                          │               │ Use_Chip                        │
  │ Cust_Satisfaction_Score         │               │ Exp_Type                        │
  └─────────────────────────────────┘               │ Interest_Earned                 │
                                                    │ Delinquent_Acc                  │
                                                    └─────────────────────────────────┘
```

---

## 3. Data Ingestion & Integration Workflow

1. **SQL Ingestion:** The scripts in [`SQL/01_database_schema.sql`](../SQL/01_database_schema.sql) define the relational schema and import statements for loading these CSV files into MySQL or PostgreSQL.
2. **Power BI Ingestion:** The steps in [`PowerBI/README.md`](../PowerBI/README.md) document importing and appending the primary and incremental datasets via Power Query.
3. **Web Dashboard Runtime:** The React/Vite application parses the CSV files client-side at runtime using `PapaParse` via [`src/utils/data.js`](../src/utils/data.js) and normalizes records via [`src/utils/normalize.js`](../src/utils/normalize.js).

For an exhaustive definition of each column and metric, see the **[Data Dictionary](../Documentation/data-dictionary.md)**.
