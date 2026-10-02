-- ==============================================================================
-- 02_data_cleaning.sql
-- Credit Card Financial Analytics - Data Cleaning & Standardization Queries
-- ==============================================================================

USE credit_card_db;

-- ------------------------------------------------------------------------------
-- 1. Identify Duplicate Client Records
-- Check if any Client_Num appears multiple times in raw customer or card tables
-- ------------------------------------------------------------------------------
SELECT 
    Client_Num, 
    COUNT(*) AS record_count
FROM cc_detail
GROUP BY Client_Num
HAVING COUNT(*) > 1;

SELECT 
    Client_Num, 
    COUNT(*) AS record_count
FROM cust_detail
GROUP BY Client_Num
HAVING COUNT(*) > 1;

-- ------------------------------------------------------------------------------
-- 2. Clean and Standardize Whitespace in Categorical Columns
-- Raw CSV inputs often contain trailing whitespaces such as 'Chip ' or 'Swipe '
-- ------------------------------------------------------------------------------
UPDATE cc_detail
SET 
    Use_Chip = TRIM(Use_Chip),
    Exp_Type = TRIM(Exp_Type),
    Card_Category = TRIM(Card_Category),
    Week_Num = TRIM(Week_Num),
    Qtr = TRIM(Qtr);

UPDATE cust_detail
SET 
    Gender = TRIM(Gender),
    Education_Level = TRIM(Education_Level),
    Marital_Status = TRIM(Marital_Status),
    state_cd = TRIM(UPPER(state_cd)),
    Customer_Job = TRIM(Customer_Job);

-- ------------------------------------------------------------------------------
-- 3. Date Standardization and Formatting
-- Ensure Week_Start_Date is in ISO standard YYYY-MM-DD
-- ------------------------------------------------------------------------------
-- Check for any null or invalid dates
SELECT 
    COUNT(*) AS invalid_date_records
FROM cc_detail
WHERE Week_Start_Date IS NULL;

-- ------------------------------------------------------------------------------
-- 4. Check for Orphan Records (Referential Integrity Check)
-- Identify accounts in cc_detail that have no matching profile in cust_detail
-- ------------------------------------------------------------------------------
SELECT 
    cc.Client_Num AS unmatched_client_num,
    cc.Card_Category,
    cc.Total_Trans_Amt
FROM cc_detail cc
LEFT JOIN cust_detail cust ON cc.Client_Num = cust.Client_Num
WHERE cust.Client_Num IS NULL;

-- ------------------------------------------------------------------------------
-- 5. Data Sanity Checks & Boundary Validations
-- Verify ranges: Utilization ratio between 0 and 1, flags (0 or 1), positive amounts
-- ------------------------------------------------------------------------------
SELECT 
    COUNT(*) AS anomalous_records
FROM cc_detail
WHERE Total_Trans_Amt < 0
   OR Annual_Fees < 0
   OR Interest_Earned < 0
   OR Avg_Utilization_Ratio < 0
   OR Avg_Utilization_Ratio > 1.5
   OR Activation_30_Days NOT IN (0, 1)
   OR Delinquent_Acc NOT IN (0, 1);

-- ------------------------------------------------------------------------------
-- 6. Create Master Clean Analytics View
-- Joins credit card performance with customer demographics and calculates
-- financial metrics (Total Revenue, Age Group, Income Category)
-- ------------------------------------------------------------------------------
CREATE OR REPLACE VIEW vw_credit_card_master AS
SELECT 
    -- Primary Keys & Identifiers
    cc.Client_Num,
    
    -- Card Account Attributes
    cc.Card_Category,
    cc.Annual_Fees,
    cc.Activation_30_Days,
    cc.Customer_Acq_Cost,
    cc.Week_Start_Date,
    cc.Week_Num,
    CAST(REPLACE(cc.Week_Num, 'Week-', '') AS UNSIGNED) AS Week_Number,
    cc.Qtr,
    cc.current_year,
    cc.Credit_Limit,
    cc.Total_Revolving_Bal,
    cc.Total_Trans_Amt,
    cc.Total_Trans_Ct,
    cc.Avg_Utilization_Ratio,
    cc.Use_Chip,
    cc.Exp_Type,
    cc.Interest_Earned,
    cc.Delinquent_Acc,
    
    -- Calculated Revenue (Financial Definition: Fees + Transaction Spend + Interest)
    (cc.Annual_Fees + cc.Total_Trans_Amt + cc.Interest_Earned) AS Total_Revenue,
    
    -- Customer Demographics
    cust.Customer_Age,
    CASE 
        WHEN cust.Customer_Age < 30 THEN '20-30'
        WHEN cust.Customer_Age < 40 THEN '30-40'
        WHEN cust.Customer_Age < 50 THEN '40-50'
        WHEN cust.Customer_Age < 60 THEN '50-60'
        ELSE '60+'
    END AS Age_Group,
    cust.Gender,
    cust.Dependent_Count,
    cust.Education_Level,
    cust.Marital_Status,
    cust.state_cd,
    cust.Zipcode,
    cust.Car_Owner,
    cust.House_Owner,
    cust.Personal_loan,
    cust.contact,
    cust.Customer_Job,
    cust.Income,
    CASE 
        WHEN cust.Income < 35000 THEN 'Low'
        WHEN cust.Income < 70000 THEN 'Medium'
        ELSE 'High'
    END AS Income_Group,
    cust.Cust_Satisfaction_Score

FROM cc_detail cc
INNER JOIN cust_detail cust ON cc.Client_Num = cust.Client_Num;
