# 📖 Credit Card Analytics: Comprehensive Data Dictionary

This document details every field present across the credit card and customer datasets utilized in the project.

---

## 1. Credit Card Performance Dataset (`credit_card.csv` & `credit_card_mysql_ready_uploaded.csv`)

| Column Name | Data Type | Description | Example Values | Business Role / Analytics Use |
| :--- | :--- | :--- | :--- | :--- |
| **`Client_Num`** | `BIGINT` | Unique identifier for each credit card account | `708082083`, `963607849` | Primary Key used to join with customer demographic data. |
| **`Card_Category`** | `VARCHAR(20)` | Tier / product level of the issued credit card | `Blue`, `Silver`, `Gold`, `Platinum` | Product segmentation and tier profitability analysis. |
| **`Annual_Fees`** | `DECIMAL(10,2)` | Annual membership charge assessed on the card | `100`, `200`, `300`, `450` | Component of Total Revenue. |
| **`Activation_30_Days`**| `TINYINT` | Binary flag indicating if the card was activated within 30 days of issuance | `1` (Yes), `0` (No) | Customer onboarding and activation efficiency KPI. |
| **`Customer_Acq_Cost`** | `DECIMAL(10,2)` | Marketing and underwriting cost incurred to acquire the customer | `64.00`, `87.00`, `150.00` | CAC calculation, Marketing ROI, and Customer LTV analysis. |
| **`Week_Start_Date`** | `DATE` / `STRING` | Starting date of the reporting transaction week | `01-01-2023`, `2023-12-31` | Time dimension for weekly trend analysis and time intelligence. |
| **`Week_Num`** | `VARCHAR(20)` | Week identifier string within the operating year | `Week-1`, `Week-26`, `Week-53` | Weekly grouping and Week-over-Week (WoW) revenue comparison. |
| **`Qtr`** | `VARCHAR(10)` | Operating fiscal quarter | `Q1`, `Q2`, `Q3`, `Q4` | Quarterly seasonality and target performance tracking. |
| **`current_year`** | `INT` | Calendar year of reporting | `2023` | Annual filtering and multi-year partitioning. |
| **`Credit_Limit`** | `DECIMAL(10,2)` | Total maximum credit line extended to the account | `3544.00`, `14315.00` | Exposure sizing, risk tiering, and credit limit optimization. |
| **`Total_Revolving_Bal`**| `DECIMAL(10,2)`| Outstanding balance carried forward generating interest | `0.00`, `1661.00`, `2517.00` | Liquidity, interest generation, and revolving debt monitoring. |
| **`Total_Trans_Amt`** | `DECIMAL(10,2)` | Total dollar spend transacted on the account | `15149.00`, `3940.00` | Core spend volume KPI; primary driver of interchange revenue. |
| **`Total_Trans_Vol`** / **`Total_Trans_Ct`** | `INT` | Total number of individual transactions executed | `111`, `82`, `23` | Transaction velocity and average ticket size calculations. |
| **`Avg_Utilization_Ratio`**| `DECIMAL(6,4)` | Ratio of balance used relative to total available credit limit | `0.469`, `0.736`, `0.000` | Credit risk indicator and balance health metric. |
| **`Use Chip`** / **`Use_Chip`** | `VARCHAR(20)` | Point-of-sale or digital technology used for transaction | `Chip`, `Swipe`, `Online` | Channel preference analysis and technology adoption. |
| **`Exp Type`** / **`Exp_Type`** | `VARCHAR(50)` | Primary merchant category where card spend occurred | `Bills`, `Entertainment`, `Fuel`, `Grocery`, `Food`, `Travel` | Category-level consumer spending habit insights. |
| **`Interest_Earned`** | `DECIMAL(10,2)` | Finance charge and interest collected from revolving balances | `4393.21`, `202.58`, `69.44` | Component of Total Revenue; measures interest margins. |
| **`Delinquent_Acc`** | `TINYINT` | Binary flag indicating 60+ days past-due non-performing status | `1` (Delinquent), `0` (Current) | Core credit risk metric; portfolio delinquency rate KPI. |

---

## 2. Customer Profile Dataset (`customer.csv` & `cust_add.csv`)

| Column Name | Data Type | Description | Example Values | Business Role / Analytics Use |
| :--- | :--- | :--- | :--- | :--- |
| **`Client_Num`** | `BIGINT` | Unique identifier for each customer | `708082083`, `963607849` | Primary Key linking demographics to card performance. |
| **`Customer_Age`** | `INT` | Age of the cardholder in years | `24`, `42`, `58` | Demographic age group segmentation (`20-30` to `60+`). |
| **`Gender`** | `VARCHAR(10)` | Gender of the customer | `M` (Male), `F` (Female) | Demographic spend and revenue share analysis. |
| **`Dependent_Count`** | `INT` | Number of financial dependents supported by customer | `0`, `1`, `3`, `5` | Household structure and discretionary spend analysis. |
| **`Education_Level`** | `VARCHAR(50)` | Highest completed educational attainment | `Graduate`, `High School`, `Uneducated`, `College`, `Doctorate` | Socioeconomic profile and educational cohort spending. |
| **`Marital_Status`** | `VARCHAR(20)` | Legal marital status of the customer | `Married`, `Single`, `Divorced`, `Unknown` | Lifestyle segmentation and joint-credit opportunities. |
| **`state_cd`** | `VARCHAR(10)` | Two-letter US state code of residence | `TX`, `NY`, `CA`, `FL`, `NJ` | Geographic concentration and regional performance. |
| **`Zipcode`** | `VARCHAR(20)` | Residential postal code | `91750` | Micro-geographic clustering and local branch alignment. |
| **`Car_Owner`** | `VARCHAR(10)` | Indicates whether customer owns a motor vehicle | `yes`, `no` | Asset ownership indicator; correlates with fuel spending. |
| **`House_Owner`** | `VARCHAR(10)` | Indicates whether customer owns real estate property | `yes`, `no` | Wealth indicator; correlates with bills and home spending. |
| **`Personal_loan`** | `VARCHAR(10)` | Indicates whether customer holds an active personal loan | `yes`, `no` | Existing debt burden and multi-product relationship flag. |
| **`contact`** | `VARCHAR(20)` | Primary customer communication channel | `cellular`, `telephone`, `unknown` | Marketing contact preference and channel response rate. |
| **`Customer_Job`** | `VARCHAR(50)` | Customer occupational classification | `Businessman`, `White-collar`, `Govt`, `Blue-collar`, `Salaried` | Occupational profitability and delinquency risk profiling. |
| **`Income`** | `DECIMAL(12,2)` | Annual declared customer income in USD | `202326`, `30574`, `68000` | Income grouping (`Low <$35K`, `Medium`, `High >$70K`). |
| **`Cust_Satisfaction_Score`**| `INT` | Measured customer satisfaction score (scale 1 to 5) | `1`, `2`, `3`, `4`, `5` | CSAT tracking and retention correlation. |

---

## 3. Derived Analytical & Financial Metrics

| Metric Name | Calculation / Formula | Business Meaning |
| :--- | :--- | :--- |
| **`Total Revenue`** | `Annual_Fees + Total_Trans_Amt + Interest_Earned` | Overall gross economic value generated per account. |
| **`Avg Ticket Size`** | `Total_Trans_Amt / Total_Trans_Ct` | Average transaction spend per swipe/purchase. |
| **`Activation Rate`** | `COUNT(Activation_30_Days = 1) / Total Accounts` | Percentage of newly issued accounts actively transacting within 30 days. |
| **`Delinquency Rate`** | `COUNT(Delinquent_Acc = 1) / Total Accounts` | Percentage of portfolio accounts exhibiting credit distress (60+ days past-due). |
| **`CAC Multiple (ROI)`** | `Total_Revenue / Customer_Acq_Cost` | Return multiple generated per marketing dollar invested. |
| **`Age Group`** | `CASE: <30 ('20-30'), <40 ('30-40'), <50 ('40-50'), <60 ('50-60'), ELSE '60+'` | Standardized generation bracket. |
| **`Income Group`** | `CASE: <$35,000 ('Low'), <$70,000 ('Medium'), ELSE 'High'` | Standardized purchasing power tier. |
