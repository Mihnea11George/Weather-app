# 🌤️ Aplicație Vreme - Glassmorphism UI

O aplicație web modernă care afișează starea vremii în timp real și prognoza pe următoarele 5 zile pentru orice oraș din lume. Interfața este construită folosind un design modern de tip **Glassmorphism** (efect de sticlă translucidă).

## ✨ Funcționalități
* **Căutare în timp real:** Poți căuta orice oraș pentru a vedea datele meteo actualizate.
* **Vremea curentă:** Afișează temperatura, descrierea vremii și o iconiță sugestivă.
* **Detalii avansate:** Informații despre umiditate, viteza vântului, presiunea atmosferică și temperatura resimțită.
* **Prognoză pe 5 zile:** Temperaturile și starea vremii anticipate pentru următoarele 5 zile (calculate la ora 12:00).
* **Design Responsive & Modern:** UI minimalist cu efect de blur și fundal dinamic, perfect vizibil pe orice rezoluție.

## 🛠️ Tehnologii folosite
* **HTML5** - Structura aplicației
* **CSS3** - Stilul și efectul de Glassmorphism
* **JavaScript (Vanilla)** - Logica și comunicarea cu serverul
* **[OpenWeatherMap API](https://openweathermap.org/)** - Sursa de date REST API (vreme curentă și prognoză)

## 🚀 Cum să rulezi proiectul local

Dacă vrei să descarci și să rulezi acest proiect pe calculatorul tău, urmează acești pași:

1. **Clonează sau descarcă** acest repository.
2. Creează un cont gratuit pe [OpenWeatherMap](https://openweathermap.org/) și generează o cheie API.
3. Deschide fișierul `script.js` (sau `app.js`) și înlocuiește variabila `apiKey` cu cheia ta:
   ```javascript
   const apiKey = 'CHEIA_TA_API_AICI';
