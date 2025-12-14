📊 Sales Prediction using Machine Learning

A full-stack Machine Learning web application that predicts future sales based on advertising budgets using Linear Regression.
The project is deployed live on Render and provides real-time predictions through an interactive web interface.

Internship Project – CodeAlpha

🚀 Live Demo

🔗 Deployed Application:
👉 Add your Render URL here

https://saleshorizon.onrender.com

📌 Project Description

Sales forecasting plays a crucial role in business planning and marketing optimization.
This project predicts sales based on advertising expenditure across three major channels:

TV

Radio

Newspaper

The system uses data preprocessing, feature scaling, and regression modeling to generate accurate and interpretable predictions, delivered through a user-friendly web interface.

✨ Key Features

📈 Predict sales using advertising budgets

⚙️ Data preprocessing with StandardScaler

🧠 Trained Linear Regression model

🌐 Flask-based backend API

🎨 Clean and responsive frontend UI

☁️ Deployed live on Render

🔄 Real-time predictions

🧠 Machine Learning Workflow

Dataset loading and exploration

Data cleaning and feature selection

Feature scaling using StandardScaler

Model training using Linear Regression

Model evaluation using R² score

Saving trained model and scaler (.pkl)

Serving predictions via Flask API

🛠️ Technology Stack
🔹 Backend & Machine Learning

Python

Pandas

NumPy

Scikit-learn

Flask

🔹 Frontend

HTML

Tailwind CSS

JavaScript

🔹 Tools & Platforms

Jupyter Notebook

Git & GitHub

Render (Deployment)

📂 Project Structure
CodeAlpha_SalesPrediction
│
├── app.py
├── requirements.txt
├── README.md
│
├── model/
│   ├── sales_model.pkl
│   └── scaler.pkl
│
├── data/
│   └── Advertising.csv
│
├── notebooks/
│   └── sales_prediction.ipynb
│
├── templates/
│   └── index.html
│
└── static/
    └── script.js

⚙️ How to Run the Project Locally
1️⃣ Clone the Repository
git clone https://github.com/your-username/CodeAlpha_SalesPrediction.git
cd CodeAlpha_SalesPrediction

2️⃣ Create & Activate Virtual Environment
python -m venv venv


Windows

venv\Scripts\activate


Mac / Linux

source venv/bin/activate

3️⃣ Install Dependencies
pip install -r requirements.txt

4️⃣ Run the Flask App
python app.py


Open browser:

http://127.0.0.1:5000

📊 Sample Input & Output
🔹 Input (Advertising Budget in ₹)
Channel	Budget
TV	230.5
Radio	37.8
Newspaper	69.2
🔹 Output
Predicted Sales: XX.XX Units

📈 Business Insights

TV advertising shows the strongest impact on sales

Feature scaling improves model accuracy

Regression offers interpretability for marketing decisions

Helps businesses allocate advertising budgets effectively

☁️ Deployment Details

Platform: Render

Deployment Type: Flask Web Service

Runtime: Python

Model Artifacts: Stored as .pkl files

Environment Variables: Managed by Render automatically

📌 Internship Information

Internship Provider: CodeAlpha

Project Title: Sales Prediction using Machine Learning

Domain: Data Science / Machine Learning

Intern: Sayan Mondal

🔗 Links

GitHub Repository: (Add your repo link here)

Live Application: (Add Render URL here)

LinkedIn Post: (Add LinkedIn post link here)

📜 License

This project is developed for educational and internship purposes only.

🙌 Acknowledgements

Special thanks to CodeAlpha for providing this internship opportunity and enabling hands-on learning in Machine Learning and full-stack deployment.