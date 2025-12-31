# 📖 Dictionary Web App

This is an online English dictionary, which was primarily built using **Vue 3 (Composition API)** and **Pinia**.

## 🔗 Live Demo

Live Site URL: [https://dictionary-web-app-vue.vercel.app/](https://dictionary-web-app-vue.vercel.app/)

## 📝 Description

This project is a solution to the [Dictionary web app](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL) challenge on _Frontend Mentor_. Using the [Free Dictionary API](https://dictionaryapi.dev/), this app allows users to look up word definitions, synonyms, usage examples, etc.

## ✨ Features

- Easy to search for words with the intuitive input field
- Real-time reminder message when the search field is empty or contains invalid characters
- Word pronunciations for users to play, if available from the API
- 3 types of fonts (serif/sans serif/monospace) for users to switch
- Dark mode for users to toggle
- Responsive UI for mobile and desktop (RWD)

## 📁 Structure

```
src/
├── assets/        # Static assets (images & fonts)
├── components/    # Vue components
├── stores/        # Pinia state management
├── styles/        # shared CSS/SCSS settings and variables
├── App.vue        # Root component
├── main.js        # Entry point
```

## 🚀 Key Challenges & Solutions

### Handling Inconsistent API Data Structures

Challenge: The Free Dictionary API returns phonetic data in various formats — sometimes as a top-level phonetic string, and other times nested within a phonetics array across multiple objects. This inconsistency caused potential crashes or "undefined" errors during data binding.

Solution: I implemented a defensive data-parsing strategy within my Vue logic. I created a computed property that prioritizes the most complete data source: it first checks the phonetics array for a non-empty text field, and falls back to the top-level phonetic property if necessary. This ensures the UI remains stable and displays the correct phonetic notation regardless of the API's response structure.

### Dynamic Audio Playback

Challenge: The Free Dictionary API returns multiple audio files for different dialects (UK/US), and sometimes the audio link is missing.

Solution: I implemented a robust audio handling logic that filters the API response to find the first valid audio URL. I also added conditional rendering to the play button to prevent errors when no audio is available.

## 🛠️ Technologies

- **Vue** v3.5.25
- **Pinia** v3.0.4
- **Vite** v7.2.4
- **axios** v1.13.2
- **SASS/SCSS** v1.97.1
