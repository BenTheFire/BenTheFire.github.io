let currentLanguage = 'en'; // Default language

// Function to load education data
async function loadEducation() {
    try {
        const response = await fetch('resources.json');
        const data = await response.json();
        const educationList = document.getElementById("educationList");
        educationList.innerHTML = ""; // Clear previous content

        data.education[currentLanguage].forEach(edu => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${edu.degree}</strong><br>${edu.school} (${edu.year})`;
            educationList.appendChild(li);
        });
    } catch (error) {
        console.error("Error loading education data:", error);
    }
}

// Function to switch language
function switchLanguage(lang) {
    currentLanguage = lang;
    loadEducation(); // Reload with new language
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Load education data on page load
document.addEventListener("DOMContentLoaded", loadEducation);