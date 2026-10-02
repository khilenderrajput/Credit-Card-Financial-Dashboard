-- ==============================================================================
-- 03_customer_analysis.sql
-- Credit Card Financial Analytics - Customer Demographics & Behavior Queries
-- ==============================================================================

USE credit_card_db;

-- ------------------------------------------------------------------------------
-- 1. Total Customer Base & High-Level Summary
-- Total active accounts, avg age, avg income, avg satisfaction
-- ------------------------------------------------------------------------------
SELECT 
    COUNT(DISTINCT Client_Num) AS total_customers,
    ROUND(AVG(Customer_Age), 1) AS avg_customer_age,
    ROUND(AVG(Income), 2) AS avg_customer_income,
    ROUND(AVG(Cust_Satisfaction_Score), 2) AS avg_satisfaction_score
FROM vw_credit_card_master;

-- ------------------------------------------------------------------------------
-- 2. Customer Gender Breakdown & Revenue Contribution
-- Evaluates transaction volume, total revenue, and average spend by gender
-- ------------------------------------------------------------------------------
SELECT 
    Gender,
    COUNT(Client_Num) AS customer_count,
    ROUND(COUNT(Client_Num) * 100.0 / (SELECT COUNT(*) FROM vw_credit_card_master), 2) AS pct_customers,
    ROUND(SUM(Total_Revenue), 2) AS total_revenue,
    ROUND(SUM(Total_Revenue) * 100.0 / (SELECT SUM(Total_Revenue) FROM vw_credit_card_master), 2) AS pct_revenue,
    ROUND(SUM(Total_Trans_Amt), 2) AS total_trans_amount,
    ROUND(SUM(Interest_Earned), 2) AS total_interest_earned,
    ROUND(AVG(Total_Trans_Amt), 2) AS avg_trans_amt_per_account
FROM vw_credit_card_master
GROUP BY Gender
ORDER BY total_revenue DESC;

-- ------------------------------------------------------------------------------
-- 3. Customer Segmentation by Age Group
-- Grouped into: 20-30, 30-40, 40-50, 50-60, 60+
-- ------------------------------------------------------------------------------
SELECT 
    Age_Group,
    COUNT(Client_Num) AS customer_count,
    ROUND(SUM(Total_Revenue), 2) AS total_revenue,
    ROUND(SUM(Total_Trans_Amt), 2) AS total_trans_amount,
    ROUND(AVG(Credit_Limit), 2) AS avg_credit_limit,
    ROUND(AVG(Avg_Utilization_Ratio), 3) AS avg_utilization_ratio,
    ROUND(AVG(Cust_Satisfaction_Score), 2) AS avg_satisfaction
FROM vw_credit_card_master
GROUP BY Age_Group
ORDER BY total_revenue DESC;

-- ------------------------------------------------------------------------------
-- 4. Customer Analysis by Occupation / Job Type
-- Identifies top revenue generating professions (Businessman, White-collar, etc.)
-- ------------------------------------------------------------------------------
SELECT 
    Customer_Job,
    COUNT(Client_Num) AS customer_count,
    ROUND(SUM(Total_Revenue), 2) AS total_revenue,
    ROUND(SUM(Interest_Earned), 2) AS total_interest,
    ROUND(SUM(Income), 2) AS total_customer_income,
    ROUND(AVG(Total_Trans_Amt), 2) AS avg_trans_amount,
    ROUND(SUM(Delinquent_Acc) * 100.0 / COUNT(*), 2) AS delinquency_rate_pct
FROM vw_credit_card_master
GROUP BY Customer_Job
ORDER BY total_revenue DESC;

-- ------------------------------------------------------------------------------
-- 5. Customer Segmentation by Income Bracket
-- High (>70K), Medium (35K-70K), Low (<35K)
-- ------------------------------------------------------------------------------
SELECT 
    Income_Group,
    COUNT(Client_Num) AS customer_count,
    ROUND(SUM(Total_Revenue), 2) AS total_revenue,
    ROUND(SUM(Total_Revenue) * 100.0 / (SELECT SUM(Total_Revenue) FROM vw_credit_card_master), 2) AS revenue_share_pct,
    ROUND(AVG(Credit_Limit), 2) AS avg_credit_limit,
    ROUND(AVG(Total_Revolving_Bal), 2) AS avg_revolving_balance,
    ROUND(AVG(Avg_Utilization_Ratio), 3) AS avg_utilization_ratio
FROM vw_credit_card_master
GROUP BY Income_Group
ORDER BY total_revenue DESC;

-- ------------------------------------------------------------------------------
-- 6. Geographic Distribution (Top 10 States by Revenue)
-- Identifies key regional markets
-- ------------------------------------------------------------------------------
SELECT 
    state_cd AS state,
    COUNT(Client_Num) AS customer_count,
    ROUND(SUM(Total_Revenue), 2) AS total_revenue,
    ROUND(SUM(Total_Trans_Amt), 2) AS total_trans_amount,
    ROUND(AVG(Total_Revenue), 2) AS avg_revenue_per_customer
FROM vw_credit_card_master
GROUP BY state_cd
ORDER BY total_revenue DESC
LIMIT 10;

-- ------------------------------------------------------------------------------
-- 7. Educational Attainment & Spending Patterns
-- Analyzes spend behavior and card adoption by education level
-- ------------------------------------------------------------------------------
SELECT 
    Education_Level,
    COUNT(Client_Num) AS customer_count,
    ROUND(SUM(Total_Revenue), 2) AS total_revenue,
    ROUND(AVG(Income), 2) AS avg_income,
    ROUND(AVG(Credit_Limit), 2) AS avg_credit_limit,
    ROUND(SUM(Delinquent_Acc) * 100.0 / COUNT(*), 2) AS delinquency_rate_pct
FROM vw_credit_card_master
GROUP BY Education_Level
ORDER BY total_revenue DESC;

-- ------------------------------------------------------------------------------
-- 8. Marital Status & Family Size (Dependent Count) Impact
-- ------------------------------------------------------------------------------
SELECT 
    Marital_Status,
    COUNT(Client_Num) AS customer_count,
    ROUND(SUM(Total_Revenue), 2) AS total_revenue,
    ROUND(AVG(Dependent_Count), 1) AS avg_dependents,
    ROUND(AVG(Total_Trans_Amt), 2) AS avg_spend
FROM vw_credit_card_master
GROUP BY Marital_Status
ORDER BY total_revenue DESC;

SELECT 
    Dependent_Count,
    COUNT(Client_Num) AS customer_count,
    ROUND(SUM(Total_Revenue), 2) AS total_revenue,
    ROUND(AVG(Total_Trans_Amt), 2) AS avg_trans_amt
FROM vw_credit_card_master
GROUP BY Dependent_Count
ORDER BY Dependent_Count ASC;

-- ------------------------------------------------------------------------------
-- 9. Asset Ownership & Personal Loan Correlation with Card Risk
-- ------------------------------------------------------------------------------
SELECT 
    House_Owner,
    Car_Owner,
    Personal_loan,
    COUNT(Client_Num) AS customer_count,
    ROUND(SUM(Total_Revenue), 2) AS total_revenue,
    ROUND(AVG(Credit_Limit), 2) AS avg_credit_limit,
    ROUND(SUM(Delinquent_Acc) * 100.0 / COUNT(*), 2) AS delinquency_rate_pct
FROM vw_credit_card_master
GROUP BY House_Owner, Car_Owner, Personal_loan
ORDER BY customer_count DESC;

-- ------------------------------------------------------------------------------
-- 10. Customer Satisfaction Score Distribution
-- Compares satisfaction scores (1 to 5) with revenue and delinquency
-- ------------------------------------------------------------------------------
SELECT 
    Cust_Satisfaction_Score,
    COUNT(Client_Num) AS customer_count,
    ROUND(SUM(Total_Revenue), 2) AS total_revenue,
    ROUND(AVG(Total_Trans_Amt), 2) AS avg_trans_amount,
    ROUND(SUM(Delinquent_Acc) * 100.0 / COUNT(*), 2) AS delinquency_rate_pct
FROM vw_credit_card_master
GROUP BY Cust_Satisfaction_Score
ORDER BY Cust_Satisfaction_Score ASC;
