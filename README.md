# 📖 Dictionary Web App

This is an online English dictionary primarily built with **Vue 3 (Composition API)** and **Pinia**.

## 🔗 Live Demo

Live Site URL: [https://dictionary-web-app-vue.vercel.app/](https://dictionary-web-app-vue.vercel.app/)

## 📝 Description

This project is a solution to the [Dictionary web app](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL) challenge on _Frontend Mentor_. By leveraging the [Free Dictionary API](https://dictionaryapi.dev/), this app enables users to look up word definitions, synonyms, usage examples, and more.

## ✨ Features

- Easy word search with an intuitive input field
- Real-time validation reminders when search input is empty or invalid
- Audio for word pronunciations (if available from the API)
- Three font options (serif/sans-serif/monospace) for users to switch between
- Toggleable dark and light mode
- Responsive UI for mobile, tablet, and desktop devices (RWD)

## 📁 Structure

```
src/
├── assets/        # Static assets (images & fonts)
├── components/    # Vue components
├── stores/        # Pinia state management
├── styles/        # Shared CSS/SCSS settings and variables
├── App.vue        # Root component
└── main.js        # Entry point
```

## 🚀 Key Challenges & Solutions

### Handling Inconsistent API Response Structures

**Challenge:** The Free Dictionary API may return phonetic data in various formats — sometimes as a top-level "phonetic" property, sometimes nested within an array as "text" properties of multiple objects, and other times missing. This inconsistency may lead to crashes or "undefined" errors during data binding.

**Solution:** I implemented defensive strategies to handle these inconsistencies. The logic first checks if the top-level "phonetic" property exists with valid phonetic data. If not, then it checks the "phonetics" array to see if any "text" property containing valid phonetic data can be found. This ensures the UI remains stable and displays the phonetic notation only when available from the API.

### Multiple Audio Files

**Challenge:** The Free Dictionary API may return multiple audio files for a single word, and sometimes the audio link is missing.

**Solution:** I implemented logic to filter the API response to find the first valid audio URL. I also added conditional rendering to the play button to prevent errors when no audio is available.

## 🛠️ Technologies

- **Vue** v3.5.25
- **Pinia** v3.0.4
- **Vite** v7.2.4
- **axios** v1.13.2
- **SASS/SCSS** v1.97.1
