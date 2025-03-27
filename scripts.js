let currentLanguage = 'en'; // Default language

// Data for profile and education, made for scalability and easy translation
let data = {
    "res": {
        "en": {
            "contacts": "Contacts",
            "education": "Education",
            "achievements": "Achievements",
            "skills": "Skills and Competencies",
            "level": "Level",
        },
        "hu": {
            "contacts": "Elérhetőségek",
            "education": "Tanulmányok",
            "achievements": "Eredmények",
            "skills": "Képességek és Kompetenciák",
            "level": "Szint",
        }
    },
    "profile": {
        "en": {
            "name": "Benedek Pongrácz",
            "job": "Computer Science Student at University of Pannonia"
        },
        "hu": {
            "name": "Pongrácz Benedek",
            "job": "Programtervező Informatikus Hallgató itt: Pannon Egyetem"
        }
    },
    "contacts": {
        "email": "pongraczbenedek222@gmail.com",
        "phone": "+36703022508",
        "github": "https://github.com/BenTheFire",
        "linkedin": "https://www.linkedin.com/in/benedekpongracz22/"
    },
    "education": {
        "en": [
            { "school": "Árpád-Házi Szent Margit High School At: Kőszeg, Hungary", "degree": "High School Diploma", "year": "Graduated: 2023", "site": "https://arpadhazi.hu/hu/gimnazium/" },
            { "school": "University of Pannonia, Faculty of Information Technology", "degree": "B.Sc. in Computer Science (Ongoing)", "year": "Expected Graduation: 2026", "site": "https://mik.uni-pannon.hu/en/" }
        ],
        "hu": [
            { "school": "Árpád-Házi Szent Margit Gimnázium", "degree": "Érettségi", "year": "Érettségi éve: 2023", "site": "https://arpadhazi.hu/hu/gimnazium/" },
            { "school": "Pannon Egyetem, Műszaki informatikai Kar", "degree": "Programtervező Informatikus Alapképzés (Jelenlegi tanulmányok)", "year": "Várható végzés: 2026", "site": "https://mik.uni-pannon.hu/" }
        ]
    },
    "skills": {
        "en": [
            { "name": "Programming in Python", "level": "Intermediate", "source": "High School/Self Tought" },
            { "name": "Web Development (HTML, CSS, JS)", "level": "Intermediate", "source": "University/Self Tought" },
            { "name": "JS Development (React, Electron)", "level": "Beginner", "source": "Self Tought" },
            { "name": "C# Programming", "level": "Advanced", "source": "University/Self Tought" },
            { "name": "Java Programming", "level": "Beginner", "source": "University" },
            { "name": "Object Oriented Programming", "level": "Intermediate", "source": "University" },
            { "name": "C Programming Language", "level": "Beginner", "source": "University" },
            { "name": "SQL", "level": "Intermediate", "source": "University/Self Tought" },
            { "name": "Git", "level": "Beginner", "source": "University/Self Tought" },
            { "name": "Linux", "level": "Beginner", "source": "University" },
            { "name": "UI and 2D development in Unity", "source": "Self Tought/Projects" },
            { "name": "MongoDB", "level": "Beginner", "source": "Self Tought" },
            { "name": "Agile Development", "level": "Intermediate", "source": "University" },
            { "name": "CISCO NetAcad Basic", "level": "Basic", "source": "University CISCO partnership" },
            { "name": "Android Development", "level": "Beginner", "source": "University" },
            { "name": "Teamwork", "level": "Good", "source": "High School/University/My Projects" },
            { "name": "Team Communication", "level": "Good", "source": "University/My Projects" },
            { "name": "Problem Solving", "level": "Good", "source": "High School/My Projects" },
            { "name": "English", "level": "B2", "source": "LanguageCert" },
            { "name": "Hungarian", "level": "Native", "source": "Native" }
        ],
        "hu": [
            { "name": "Python Programozás", "level": "Középhaladó", "source": "Gimnázium/Saját tanulmányok" },
            { "name": "Webfejlesztés (HTML, CSS, JS)", "level": "Középhaladó", "source": "Gimnázium/Saját tanulmányok" },
            { "name": "JavaScript Programozás (React, Electron)", "level": "Kezdő", "source": "Saját tanulmányok" },
            { "name": "C# Programozás", "level": "Haladó", "source": "Egyetemi/Saját tanulmányok" },
            { "name": "Java Programozás", "level": "Kezdő", "source": "Egyetem" },
            { "name": "Objektum Orientált Programozás", "level": "Középhaladó", "source": "Egyetem" },
            { "name": "C Programozási Nyelv", "level": "Kezdő", "source": "Egyetem" },
            { "name": "SQL", "level": "Középhaladó", "source": "Egyetemi/Saját tanulmányok" },
            { "name": "Git", "level": "Kezdő", "source": "Egyetemi/Saját tanulmányok" },
            { "name": "Linux", "level": "Kezdő", "source": "Egyetem" },
            { "name": "Felhasználói Interfész és 2D fejlesztés Unity-ben", "source": "Saját tanulmányok/Projektek" },
            { "name": "MongoDB", "level": "Kezdő", "source": "Saját tanulmányok/Projektek" },
            { "name": "Agilis Fejlesztés", "level": "Középhaladó", "source": "Egyetem" },
            { "name": "CISCO NetAcad Alapok", "level": "Kezdő", "source": "Egyetemi CISCO partnerkapcsolat" },
            { "name": "Android Fejlesztés", "level": "Kezdő", "source": "Egyetem" },
            { "name": "Csapatmunka", "level": "Good", "source": "Egyetem/Projektek" },
            { "name": "Csapat Kommunikáció", "level": "Jó", "source": "Egyetem/Projektek" },
            { "name": "Problémamegoldás", "level": "Jó", "source": "Egyetem/Projektek" },
            { "name": "Angol Nyelv", "level": "B2", "source": "LanguageCert" },
            { "name": "Magyar", "level": "Anyanyelvi Szint", "source": "Anyanyelv" }
        ]
    },
    "achievements": {
        "en": [
            { "name": "B2 Language Certificate in English (LanguageCert)", "time": "2022 January" },
            { "name": "Regional 2rd place in the OKPV Problem Solving Competition", "time": "2022 February" },
            { "name": "High School Diploma", "time": "2023 May" },
            { "name": "Morus Leadership Program - Award for Community Organizers", "time": "2023 May" }
        ],
        "hu": [
            { "name": "B2 Language Certificate in English (LanguageCert)", "time": "2022 január" },
            { "name": "Regionális 2. helyezet az OKPV Problémamegoldó Versenyen", "time": "2022 február" },
            { "name": "Érettségi", "time": "2023 május" },
            { "name": "Morus Vezetőképző Akadémia - Közösségszervezésői Díj", "time": "2023 május" }
        ]
    }
};

// Function to load basic data
async function loadBasicData() {
    try {
        const contactsTitle = document.getElementById("contactsTitle");
        const educationTitle = document.getElementById("educationTitle");
        const achievementsTitle = document.getElementById("achievementsTitle");
        const skillsTitle = document.getElementById("skillsTitle");

        contactsTitle.innerText = data.res[currentLanguage].contacts;
        educationTitle.innerText = data.res[currentLanguage].education;
        achievementsTitle.innerText = data.res[currentLanguage].achievements;
        skillsTitle.innerText = data.res[currentLanguage].skills;
    } catch (error) {
        console.error("Error loading basic data:", error);
    }
}

// Function to load profile data
async function loadProfile() {
    try {
        const nameTitle = document.getElementById("nameTitle");
        const jobTitle = document.getElementById("jobTitle");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const github = document.getElementById("github");
        const linkedin = document.getElementById("linkedin");

        nameTitle.innerText = data.profile[currentLanguage].name;
        jobTitle.innerText = data.profile[currentLanguage].job;
        email.innerHTML = `<a href="mailto:${data.contacts.email}"><img id="mailpic" class="iconpic" src="resources/email-logo.svg">${data.contacts.email}</a>`;
        phone.innerHTML = `<a href="tel:${data.contacts.phone}"><img id="phonepic" class="iconpic" src="resources/phone-logo.svg">${data.contacts.phone}</a>`;
        github.innerHTML = `<a href="${data.contacts.github}"><img id="githubpic" class="iconpic" src="resources/github-logo.svg" alt="IMG">GitHub</a>`;
        linkedin.innerHTML = `<a href="${data.contacts.linkedin}"><img id="linkedinpic" class="iconpic" src="resources/linkedin-logo.svg" alt="IMG">Linkedin</a>`;
    } catch (error) {
        console.error("Error loading profile data:", error);
    }
}

// Function to load education data
async function loadEducation() {
    try {
        const educationList = document.getElementById("educationList");
        educationList.innerHTML = ""; // Clear previous content

        data.education[currentLanguage].forEach(edu => {
            const li = document.createElement("li");
            li.innerHTML = `<strong><a href="${edu.site}">${edu.degree}</a></strong><br>${edu.school} (${edu.year})`;
            educationList.appendChild(li);
        });
    } catch (error) {
        console.error("Error loading education data:", error);
    }
}

// Function to load skills data
async function loadSkills() {
    try {
        const skillsList = document.getElementById("skillsList");
        skillsList.innerHTML = ""; // Clear previous content

        data.skills[currentLanguage].forEach(skill => {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>${skill.name}</strong>
                <span>${skill.level ? `${data.res[currentLanguage].level}: ${skill.level}` : ""}${skill.level && skill.source ? " | " : ""}${skill.source ? `${skill.source}` : ""}</span>
            `;
            skillsList.appendChild(li);
        });
    } catch (error) {
        console.error("Error loading skills data:", error);
    }
}

// Function to load achievements data
async function loadAchievements() {
    try {
        const achievementsList = document.getElementById("achievementsList");
        achievementsList.innerHTML = ""; // Clear previous content

        data.achievements[currentLanguage].forEach(ach => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${ach.name}</strong> (${ach.time})`;
            achievementsList.appendChild(li);
        });
    } catch (error) {
        console.error("Error loading achievements data:", error);
    }
}

// Function to switch language
function switchLanguage(lang) {
    currentLanguage = lang;
    loadProfile(); // Reload with new language
    loadEducation(); // Reload with new language
    loadBasicData(); // Reload with new language
    loadSkills(); // Reload with new language
    loadAchievements(); // Reload with new language
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Load data on page load
document.addEventListener("DOMContentLoaded", loadEducation);
document.addEventListener("DOMContentLoaded", loadProfile);
document.addEventListener("DOMContentLoaded", loadBasicData);
document.addEventListener("DOMContentLoaded", loadSkills);
document.addEventListener("DOMContentLoaded", loadAchievements);
