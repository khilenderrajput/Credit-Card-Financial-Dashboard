
-- 01_database_schema.sql
-- Credit Card Financial Analytics - Database Schema Definition

-- 1. Create Analytics Database
CREATE DATABASE IF NOT EXISTS credit_card_db;
USE credit_card_db;

-- 2. Drop existing tables if recreating
DROP TABLE IF EXISTS cc_detail;
DROP TABLE IF EXISTS cust_detail;


-- Table: cust_detail (Customer Profile Dimension)

CREATE TABLE cust_detail (
    Client_Num BIGINT NOT NULL,
    Customer_Age INT NOT NULL,
    Gender VARCHAR(10) NOT NULL,
    Dependent_Count INT NOT NULL,
    Education_Level VARCHAR(50) NOT NULL,
    Marital_Status VARCHAR(20) NOT NULL,
    state_cd VARCHAR(10) NOT NULL,
    Zipcode VARCHAR(20) NOT NULL,
    Car_Owner VARCHAR(10) NOT NULL,
    House_Owner VARCHAR(10) NOT NULL,
    Personal_loan VARCHAR(10) NOT NULL,
    contact VARCHAR(20) NOT NULL,
    Customer_Job VARCHAR(50) NOT NULL,
    Income DECIMAL(12, 2) NOT NULL,
    Cust_Satisfaction_Score INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_customer PRIMARY KEY (Client_Num)
);


-- Table: cc_detail (Credit Card Transactions & Account Performance Fact Table)

CREATE TABLE cc_detail (
    Client_Num BIGINT NOT NULL,
    Card_Category VARCHAR(20) NOT NULL,
    Annual_Fees DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    Activation_30_Days TINYINT NOT NULL DEFAULT 0,
    Customer_Acq_Cost DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    Week_Start_Date DATE NOT NULL,
    Week_Num VARCHAR(20) NOT NULL,
    Qtr VARCHAR(10) NOT NULL,
    current_year INT NOT NULL,
    Credit_Limit DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    Total_Revolving_Bal DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    Total_Trans_Amt DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    Total_Trans_Ct INT NOT NULL DEFAULT 0,
    Avg_Utilization_Ratio DECIMAL(6, 4) NOT NULL DEFAULT 0.0000,
    Use_Chip VARCHAR(20) NOT NULL,
    Exp_Type VARCHAR(50) NOT NULL,
    Interest_Earned DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    Delinquent_Acc TINYINT NOT NULL DEFAULT 0,
    CONSTRAINT pk_credit_card PRIMARY KEY (Client_Num),
    CONSTRAINT fk_customer_card FOREIGN KEY (Client_Num) REFERENCES cust_detail(Client_Num)
        ON DELETE CASCADE ON UPDATE CASCADE
);


-- Indexes for Performance Optimization

CREATE INDEX idx_cc_card_category ON cc_detail (Card_Category);
CREATE INDEX idx_cc_qtr ON cc_detail (Qtr);
CREATE INDEX idx_cc_week_start ON cc_detail (Week_Start_Date);
CREATE INDEX idx_cc_delinquent ON cc_detail (Delinquent_Acc);
CREATE INDEX idx_cc_exp_type ON cc_detail (Exp_Type);
CREATE INDEX idx_cust_gender ON cust_detail (Gender);
CREATE INDEX idx_cust_job ON cust_detail (Customer_Job);
CREATE INDEX idx_cust_state ON cust_detail (state_cd);


-- (Client_Num, Card_Category, Annual_Fees, Activation_30_Days, Customer_Acq_Cost, @Week_Start_Date, Week_Num, Qtr, current_year, Credit_Limit, Total_Revolving_Bal, Total_Trans_Amt, Total_Trans_Ct, Avg_Utilization_Ratio, Use_Chip, Exp_Type, Interest_Earned, Delinquent_Acc)
-- SET Week_Start_Date = STR_TO_DATE(@Week_Start_Date, '%d-%m-%Y');
