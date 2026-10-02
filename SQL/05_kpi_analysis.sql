-- 05_kpi_analysis.sql
-- Credit Card Financial Analytics - Executive KPIs, Risk & Portfolio Metrics
USE credit_card_db;


-- 1. Executive Master KPI Scorecard
-- High-level financial summary matching the dashboard top-line metrics

SELECT 
    COUNT(DISTINCT Client_Num) AS total_accounts,
    ROUND(SUM(Total_Revenue), 2) AS total_portfolio_revenue,
    ROUND(SUM(Total_Trans_Amt), 2) AS total_spend_amount,
    SUM(Total_Trans_Ct) AS total_transactions_count,
    ROUND(SUM(Interest_Earned), 2) AS total_interest_earned,
    ROUND(SUM(Annual_Fees), 2) AS total_annual_fees,
    ROUND(SUM(Customer_Acq_Cost), 2) AS total_acquisition_cost,
    ROUND(SUM(Total_Revenue) / SUM(Customer_Acq_Cost), 2) AS revenue_to_cac_ratio,
    ROUND(AVG(Credit_Limit), 2) AS avg_credit_limit,
    ROUND(AVG(Avg_Utilization_Ratio) * 100.0, 2) AS avg_utilization_pct,
    ROUND(SUM(Activation_30_Days) * 100.0 / COUNT(*), 2) AS activation_rate_pct,
    ROUND(SUM(Delinquent_Acc) * 100.0 / COUNT(*), 2) AS delinquency_rate_pct
FROM vw_credit_card_master;


-- 2. Card Category Performance Matrix (Blue, Silver, Gold, Platinum)
-- Detailed unit economics and revenue contributions across card tiers

SELECT 
    Card_Category,
    COUNT(Client_Num) AS total_accounts,
    ROUND(COUNT(Client_Num) * 100.0 / (SELECT COUNT(*) FROM vw_credit_card_master), 2) AS account_share_pct,
    ROUND(SUM(Total_Revenue), 2) AS total_revenue,
    ROUND(SUM(Total_Revenue) * 100.0 / (SELECT SUM(Total_Revenue) FROM vw_credit_card_master), 2) AS revenue_share_pct,
    ROUND(SUM(Total_Trans_Amt), 2) AS total_trans_amount,
    ROUND(SUM(Interest_Earned), 2) AS total_interest_earned,
    ROUND(SUM(Annual_Fees), 2) AS total_annual_fees,
    ROUND(AVG(Credit_Limit), 2) AS avg_credit_limit,
    ROUND(AVG(Total_Revolving_Bal), 2) AS avg_revolving_bal,
    ROUND(AVG(Avg_Utilization_Ratio), 3) AS avg_utilization_ratio,
    ROUND(SUM(Activation_30_Days) * 100.0 / COUNT(*), 2) AS activation_rate_pct,
    ROUND(SUM(Delinquent_Acc) * 100.0 / COUNT(*), 2) AS delinquency_rate_pct
FROM vw_credit_card_master
GROUP BY Card_Category
ORDER BY total_revenue DESC;


-- 3. Customer Acquisition Cost (CAC) vs Revenue Generation (LTV / ROI)
-- Evaluates marketing spend efficiency by Card Category and Job

SELECT 
    Card_Category,
    ROUND(SUM(Customer_Acq_Cost), 2) AS total_cac_spent,
    ROUND(AVG(Customer_Acq_Cost), 2) AS avg_cac_per_user,
    ROUND(SUM(Total_Revenue), 2) AS total_revenue_generated,
    ROUND(SUM(Total_Revenue) / SUM(Customer_Acq_Cost), 2) AS revenue_multiple_on_cac
FROM vw_credit_card_master
GROUP BY Card_Category
ORDER BY revenue_multiple_on_cac DESC;


-- 4. 30-Day Card Activation Rate Drivers
-- Breakdown by card category, gender, and income segment

SELECT 
    Card_Category,
    COUNT(Client_Num) AS total_issued,
    SUM(Activation_30_Days) AS activated_count,
    ROUND(SUM(Activation_30_Days) * 100.0 / COUNT(*), 2) AS activation_rate_pct,
    ROUND(AVG(Total_Trans_Amt), 2) AS avg_spend_if_activated
FROM vw_credit_card_master
GROUP BY Card_Category
ORDER BY activation_rate_pct DESC;

SELECT 
    Income_Group,
    COUNT(Client_Num) AS total_issued,
    SUM(Activation_30_Days) AS activated_count,
    ROUND(SUM(Activation_30_Days) * 100.0 / COUNT(*), 2) AS activation_rate_pct
FROM vw_credit_card_master
GROUP BY Income_Group
ORDER BY activation_rate_pct DESC;


-- 5. Credit Delinquency Risk & Default Vulnerability Analysis
-- Profiles delinquent customers across Occupation, Age, and Utilization

SELECT 
    Customer_Job,
    COUNT(Client_Num) AS total_accounts,
    SUM(Delinquent_Acc) AS delinquent_accounts,
    ROUND(SUM(Delinquent_Acc) * 100.0 / COUNT(*), 2) AS delinquency_rate_pct,
    ROUND(SUM(Delinquent_Acc) * 100.0 / (SELECT SUM(Delinquent_Acc) FROM vw_credit_card_master), 2) AS share_of_all_delinquencies,
    ROUND(AVG(Total_Revolving_Bal), 2) AS avg_revolving_balance,
    ROUND(AVG(Credit_Limit), 2) AS avg_credit_limit
FROM vw_credit_card_master
GROUP BY Customer_Job
ORDER BY delinquency_rate_pct DESC;


-- 6. Credit Utilization Tiers vs Delinquency Correlation
-- Checks if higher utilization accounts carry higher delinquency rates

SELECT 
    CASE 
        WHEN Avg_Utilization_Ratio = 0 THEN '0% (Non-Users)'
        WHEN Avg_Utilization_Ratio <= 0.15 THEN '1% - 15% (Low Risk)'
        WHEN Avg_Utilization_Ratio <= 0.40 THEN '16% - 40% (Moderate Risk)'
        WHEN Avg_Utilization_Ratio <= 0.70 THEN '41% - 70% (High Risk)'
        ELSE '> 70% (Critical Risk)'
    END AS utilization_tier,
    COUNT(Client_Num) AS account_count,
    ROUND(COUNT(Client_Num) * 100.0 / (SELECT COUNT(*) FROM vw_credit_card_master), 2) AS account_share_pct,
    ROUND(SUM(Total_Revenue), 2) AS total_revenue,
    ROUND(AVG(Total_Revolving_Bal), 2) AS avg_revolving_bal,
    SUM(Delinquent_Acc) AS delinquent_count,
    ROUND(SUM(Delinquent_Acc) * 100.0 / COUNT(*), 2) AS delinquency_rate_pct
FROM vw_credit_card_master
GROUP BY 
    CASE 
        WHEN Avg_Utilization_Ratio = 0 THEN '0% (Non-Users)'
        WHEN Avg_Utilization_Ratio <= 0.15 THEN '1% - 15% (Low Risk)'
        WHEN Avg_Utilization_Ratio <= 0.40 THEN '16% - 40% (Moderate Risk)'
        WHEN Avg_Utilization_Ratio <= 0.70 THEN '41% - 70% (High Risk)'
        ELSE '> 70% (Critical Risk)'
    END
ORDER BY total_revenue DESC;

-- 7. Customer Value Segmentation Matrix (RFM-Style Unit Economics)
-- Classifies accounts into VIP, Core Profitable, Low Engagement, and At-Risk

SELECT 
    CASE 
        WHEN Total_Revenue >= 10000 AND Delinquent_Acc = 0 THEN 'Tier 1: VIP High-Value'
        WHEN Total_Revenue >= 5000 AND Delinquent_Acc = 0 THEN 'Tier 2: Prime Growth'
        WHEN Delinquent_Acc = 1 THEN 'Tier 3: Delinquent / At-Risk'
        ELSE 'Tier 4: Standard / Low Activity'
    END AS customer_value_segment,
    COUNT(Client_Num) AS customer_count,
    ROUND(SUM(Total_Revenue), 2) AS total_revenue,
    ROUND(SUM(Total_Revenue) * 100.0 / (SELECT SUM(Total_Revenue) FROM vw_credit_card_master), 2) AS revenue_contribution_pct,
    ROUND(AVG(Total_Trans_Amt), 2) AS avg_spend_amt,
    ROUND(AVG(Cust_Satisfaction_Score), 2) AS avg_satisfaction
FROM vw_credit_card_master
GROUP BY 
    CASE 
        WHEN Total_Revenue >= 10000 AND Delinquent_Acc = 0 THEN 'Tier 1: VIP High-Value'
        WHEN Total_Revenue >= 5000 AND Delinquent_Acc = 0 THEN 'Tier 2: Prime Growth'
        WHEN Delinquent_Acc = 1 THEN 'Tier 3: Delinquent / At-Risk'
        ELSE 'Tier 4: Standard / Low Activity'
    END
ORDER BY total_revenue DESC;
