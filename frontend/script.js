document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const resultBox = document.getElementById("result");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const tv = parseFloat(document.getElementById("tv").value);
    const radio = parseFloat(document.getElementById("radio").value);
    const news = parseFloat(document.getElementById("news").value);

    if (isNaN(tv) || isNaN(radio) || isNaN(news)) {
      resultBox.textContent = "Invalid input";
      return;
    }

    try {
      const response = await fetch("/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          tv: tv,
          radio: radio,
          newspaper: news
        })
      });

      const data = await response.json();
      resultBox.textContent = `${data.predicted_sales} Units`;

    } catch (error) {
      resultBox.textContent = "Error predicting sales";
      console.error(error);
    }
  });
});
