// Fonction appelée depuis la console ou tes futurs boutons UI
async function callGemini(prompt) {
  const apiKey = localStorage.getItem("GEMINI_API_KEY");

  if (!apiKey) {
    alert("Clé API manquante !");
    return;
  }

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + apiKey,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    }
  );

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || "Réponse vide";
}
