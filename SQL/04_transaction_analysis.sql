
-- 04_transaction_analysis.sql

USE credit_card_db;

-- ------------------------------------------------------------------------------
-- 1. High-Level Transaction Portfolio Metrics
-- Total transactions, total spend, and average transaction ticket size

SELECT 
    SUM(Total_Trans_Ct) AS total_transaction_count,
    ROUND(SUM(Total_Trans_Amt), 2) AS total_transaction_amount,
    ROUND(SUM(Total_Trans_Amt) / SUM(Total_Trans_Ct), 2) AS avg_ticket_size_per_swipe,
    ROUND(AVG(Total_Trans_Amt), 2) AS avg_annual_spend_per_account,
    ROUND(AVG(Total_Trans_Ct), 1) AS avg_transactions_per_account
FROM vw_credit_card_master;


-- 2. Transaction Spend & Revenue by Expense Category (Exp_Type)
-- Categories: Bills, Entertainment, Fuel, Grocery, Food, Travel

SELECT 
    Exp_Type,
    COUNT(Client_Num) AS account_count,
    ROUND(SUM(Total_Trans_Amt), 2) AS total_spend_amount,
    ROUND(SUM(Total_Trans_Amt) * 100.0 / (SELECT SUM(Total_Trans_Amt) FROM vw_credit_card_master), 2) AS spend_share_pct,
    ROUND(SUM(Total_Revenue), 2) AS total_revenue,
    ROUND(SUM(Total_Revenue) * 100.0 / (SELECT SUM(Total_Revenue) FROM vw_credit_card_master), 2) AS revenue_share_pct,
    SUM(Total_Trans_Ct) AS total_transaction_volume,
    ROUND(AVG(Total_Trans_Amt), 2) AS avg_spend_per_account
FROM vw_credit_card_master
GROUP BY Exp_Type
ORDER BY total_revenue DESC;

-- ------------------------------------------------------------------------------
-- 3. Spend & Revenue by Expenditure Method / Channel (Use_Chip)
-- Channels: Swipe, Chip, Online

SELECT 
    Use_Chip AS payment_method,
    COUNT(Client_Num) AS account_count,
    ROUND(SUM(Total_Revenue), 2) AS total_revenue,
    ROUND(SUM(Total_Revenue) * 100.0 / (SELECT SUM(Total_Revenue) FROM vw_credit_card_master), 2) AS revenue_share_pct,
    ROUND(SUM(Total_Trans_Amt), 2) AS total_spend_amount,
    SUM(Total_Trans_Ct) AS total_trans_count,
    ROUND(SUM(Total_Trans_Amt) / SUM(Total_Trans_Ct), 2) AS avg_spend_per_transaction
FROM vw_credit_card_master
GROUP BY Use_Chip
ORDER BY total_revenue DESC;


-- 4. Cross-Analysis: Expense Category by Payment Method
-- Matrix of how customers pay for different spending categories

SELECT 
    Exp_Type,
    ROUND(SUM(CASE WHEN Use_Chip = 'Swipe' THEN Total_Revenue ELSE 0 END), 2) AS swipe_revenue,
    ROUND(SUM(CASE WHEN Use_Chip = 'Chip' THEN Total_Revenue ELSE 0 END), 2) AS chip_revenue,
    ROUND(SUM(CASE WHEN Use_Chip = 'Online' THEN Total_Revenue ELSE 0 END), 2) AS online_revenue,
    ROUND(SUM(Total_Revenue), 2) AS total_category_revenue
FROM vw_credit_card_master
GROUP BY Exp_Type
ORDER BY total_category_revenue DESC;

-- ------------------------------------------------------------------------------
-- 5. Quarterly Transaction & Revenue Trends (Q1 - Q4)
-- Tracks seasonality, quarter-over-quarter trajectory, and volume

SELECT 
    Qtr,
    COUNT(Client_Num) AS accounts_active,
    ROUND(SUM(Total_Revenue), 2) AS quarterly_revenue,
    ROUND(SUM(Total_Trans_Amt), 2) AS quarterly_spend,
    SUM(Total_Trans_Ct) AS quarterly_trans_count,
    ROUND(AVG(Total_Trans_Amt), 2) AS avg_spend_per_account,
    ROUND(SUM(Interest_Earned), 2) AS quarterly_interest
FROM vw_credit_card_master
GROUP BY Qtr
ORDER BY Qtr ASC;

-- ------------------------------------------------------------------------------
-- 6. Weekly Revenue & Week-over-Week (WoW) Momentum
-- Utilizes LAG() window function to calculate WoW change in dollar and percentage

WITH weekly_summary AS (
    SELECT 
        Week_Number,
        Week_Num,
        MIN(Week_Start_Date) AS week_start_date,
        COUNT(Client_Num) AS accounts_active,
        ROUND(SUM(Total_Revenue), 2) AS current_week_revenue,
        ROUND(SUM(Total_Trans_Amt), 2) AS current_week_trans_amt,
        SUM(Total_Trans_Ct) AS current_week_trans_ct
    FROM vw_credit_card_master
    GROUP BY Week_Number, Week_Num
)
SELECT 
    Week_Number,
    Week_Num,
    week_start_date,
    accounts_active,
    current_week_revenue,
    LAG(current_week_revenue, 1) OVER (ORDER BY Week_Number) AS prior_week_revenue,
    ROUND(current_week_revenue - LAG(current_week_revenue, 1) OVER (ORDER BY Week_Number), 2) AS wow_revenue_diff,
    ROUND(
        (current_week_revenue - LAG(current_week_revenue, 1) OVER (ORDER BY Week_Number)) 
        * 100.0 / LAG(current_week_revenue, 1) OVER (ORDER BY Week_Number), 
        2
    ) AS wow_revenue_growth_pct,
    current_week_trans_amt,
    current_week_trans_ct
FROM weekly_summary
ORDER BY Week_Number ASC;

-- ------------------------------------------------------------------------------
-- 7. High-Volume vs Low-Volume Spender Segmentation
-- Groups accounts by transaction frequency to examine revenue concentration

SELECT 
    CASE 
        WHEN Total_Trans_Ct >= 100 THEN 'Very High Frequency (100+)'
        WHEN Total_Trans_Ct >= 70 THEN 'High Frequency (70-99)'
        WHEN Total_Trans_Ct >= 40 THEN 'Moderate Frequency (40-69)'
        ELSE 'Low Frequency (<40)'
    END AS transaction_frequency_segment,
    COUNT(Client_Num) AS account_count,
    ROUND(SUM(Total_Revenue), 2) AS total_revenue,
    ROUND(SUM(Total_Trans_Amt), 2) AS total_spend,
    ROUND(AVG(Total_Trans_Amt), 2) AS avg_spend,
    ROUND(AVG(Avg_Utilization_Ratio), 3) AS avg_utilization
FROM vw_credit_card_master
GROUP BY 
    CASE 
        WHEN Total_Trans_Ct >= 100 THEN 'Very High Frequency (100+)'
        WHEN Total_Trans_Ct >= 70 THEN 'High Frequency (70-99)'
        WHEN Total_Trans_Ct >= 40 THEN 'Moderate Frequency (40-69)'
        ELSE 'Low Frequency (<40)'
    END
ORDER BY total_revenue DESC;
