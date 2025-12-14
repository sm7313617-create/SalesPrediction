from flask import Flask, request, jsonify, render_template
import pickle
import numpy as np

app = Flask(__name__)

# Load model
with open("model/sales_model.pkl", "rb") as f:
    model = pickle.load(f)

# Load scaler
with open("model/scaler.pkl", "rb") as f:
    scaler = pickle.load(f)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    try:
        tv = float(data["tv"])
        radio = float(data["radio"])
        newspaper = float(data["newspaper"])

        input_data = np.array([[tv, radio, newspaper]])
        input_scaled = scaler.transform(input_data)

        prediction = model.predict(input_scaled)[0]

        return jsonify({
            "predicted_sales": round(float(prediction), 2)
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 400


if __name__ == "__main__":
    app.run(debug=True)
