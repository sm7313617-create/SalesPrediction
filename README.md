Sales Horizon – Sales Prediction Using Machine Learning
Project Overview

Sales Horizon is a machine learning–based project designed to predict future sales based on advertising expenditure across different marketing channels. The project demonstrates a complete data science workflow, including data preprocessing, feature scaling, regression modeling, and deployment using Flask.

This project was developed as part of an internship at CodeAlpha.

Problem Statement

Businesses invest in multiple advertising channels such as TV, radio, and newspapers, but understanding how these investments impact sales is challenging. The goal of this project is to build a predictive model that estimates sales outcomes based on advertising spend, helping businesses make data-driven marketing decisions.

Objective

Predict sales using historical advertising data

Analyze the impact of different advertising channels

Build a regression model for continuous value prediction

Deploy the model as a web application

Dataset Description

The dataset contains advertising expenditure and corresponding sales values.

Feature	Description
TV	Advertising budget spent on TV
Radio	Advertising budget spent on Radio
Newspaper	Advertising budget spent on Newspaper
Sales	Target variable representing total sales
Data Preprocessing

Checked and handled missing values

Performed exploratory data analysis

Applied StandardScaler to normalize features

Split data into training and testing sets

Machine Learning Model

Algorithm: Linear Regression

Problem Type: Regression

The model learns the relationship between advertising budgets and sales output.

Model Evaluation

The model was evaluated using regression metrics:

R² Score (Coefficient of Determination)

Root Mean Squared Error (RMSE)

These metrics indicate how well the model explains sales variability and the average prediction error.

Web Application

The project includes a Flask-based web interface where users can:

Input advertising budgets

Get an instant sales prediction

Understand how changes in ad spend affect sales outcomes

Project Structure
Sales_Horizon/
│
├── app.py
├── requirements.txt
├── model/
│   ├── sales_model.pkl
│   └── scaler.pkl
│
├── templates/
│   └── index.html
│
├── static/
│   └── script.js
│
├── notebooks/
│   └── sales_prediction.ipynb
│
└── data/
    └── advertising.csv

How to Run Locally
git clone <repository-link>
cd Sales_Horizon
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py

Key Learnings

Regression-based sales forecasting

Feature scaling and preprocessing

Flask API development

Frontend and backend integration

Real-world deployment workflow

Author

Sayan Mondal
Intern at CodeAlpha

License

This project is intended for educational and internship purposes only.