// Buttons

const dailyBtn = document.getElementById("dailyBtn");
const weeklyBtn = document.getElementById("weeklyBtn");
const monthlyBtn = document.getElementById("monthlyBtn");

// Span Elements for Current Hours

const workHours = document.getElementById("workHours");
const playHours = document.getElementById("playHours");
const studyHours = document.getElementById("studyHours");
const exerciseHours = document.getElementById("exerciseHours");
const socialHours = document.getElementById("socialHours");
const selfCareHours = document.getElementById("selfCareHours");

// On page load display "Daily" data

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const workData = data.find((item) => item.title === "Work");
    const workHoursData = workData.timeframes.daily.current;
    const playData = data.find((item) => item.title === "Play");
    const playHoursData = playData.timeframes.daily.current;
    const studyData = data.find((item) => item.title === "Study");
    const studyHoursData = studyData.timeframes.daily.current;
    const exerciseData = data.find((item) => item.title === "Exercise");
    const exerciseHoursData = exerciseData.timeframes.daily.current;
    const socialData = data.find((item) => item.title === "Social");
    const socialHoursData = socialData.timeframes.daily.current;
    const selfCareData = data.find((item) => item.title === "Self Care");
    const selfCardHoursData = selfCareData.timeframes.daily.current;
    workHours.innerHTML = workHoursData;
    playHours.innerHTML = playHoursData;
    studyHours.innerHTML = studyHoursData;
    exerciseHours.innerHTML = exerciseHoursData;
    socialHours.innerHTML = socialHoursData;
    selfCareHours.innerHTML = selfCardHoursData;
  })
  .catch((error) => console.error("Error loading data:", error));

// When "Daily" button is selected

dailyBtn.addEventListener("click", () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      const workData = data.find((item) => item.title === "Work");
      const workHoursData = workData.timeframes.daily.current;
      const playData = data.find((item) => item.title === "Play");
      const playHoursData = playData.timeframes.daily.current;
      const studyData = data.find((item) => item.title === "Study");
      const studyHoursData = studyData.timeframes.daily.current;
      const exerciseData = data.find((item) => item.title === "Exercise");
      const exerciseHoursData = exerciseData.timeframes.daily.current;
      const socialData = data.find((item) => item.title === "Social");
      const socialHoursData = socialData.timeframes.daily.current;
      const selfCareData = data.find((item) => item.title === "Self Care");
      const selfCardHoursData = selfCareData.timeframes.daily.current;
      workHours.innerHTML = workHoursData;
      playHours.innerHTML = playHoursData;
      studyHours.innerHTML = studyHoursData;
      exerciseHours.innerHTML = exerciseHoursData;
      socialHours.innerHTML = socialHoursData;
      selfCareHours.innerHTML = selfCardHoursData;
    })
    .catch((error) => console.error("Error loading data:", error));
});

// When "Weekly" button is selected

weeklyBtn.addEventListener("click", () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      const workData = data.find((item) => item.title === "Work");
      const workHoursData = workData.timeframes.weekly.current;
      const playData = data.find((item) => item.title === "Play");
      const playHoursData = playData.timeframes.weekly.current;
      const studyData = data.find((item) => item.title === "Study");
      const studyHoursData = studyData.timeframes.weekly.current;
      const exerciseData = data.find((item) => item.title === "Exercise");
      const exerciseHoursData = exerciseData.timeframes.weekly.current;
      const socialData = data.find((item) => item.title === "Social");
      const socialHoursData = socialData.timeframes.weekly.current;
      const selfCareData = data.find((item) => item.title === "Self Care");
      const selfCardHoursData = selfCareData.timeframes.weekly.current;
      workHours.innerHTML = workHoursData;
      playHours.innerHTML = playHoursData;
      studyHours.innerHTML = studyHoursData;
      exerciseHours.innerHTML = exerciseHoursData;
      socialHours.innerHTML = socialHoursData;
      selfCareHours.innerHTML = selfCardHoursData;
    })
    .catch((error) => console.error("Error loading data:", error));
});
// When "Monthly" button is selected

monthlyBtn.addEventListener("click", () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      const workData = data.find((item) => item.title === "Work");
      const workHoursData = workData.timeframes.monthly.current;
      const playData = data.find((item) => item.title === "Play");
      const playHoursData = playData.timeframes.monthly.current;
      const studyData = data.find((item) => item.title === "Study");
      const studyHoursData = studyData.timeframes.monthly.current;
      const exerciseData = data.find((item) => item.title === "Exercise");
      const exerciseHoursData = exerciseData.timeframes.monthly.current;
      const socialData = data.find((item) => item.title === "Social");
      const socialHoursData = socialData.timeframes.monthly.current;
      const selfCareData = data.find((item) => item.title === "Self Care");
      const selfCardHoursData = selfCareData.timeframes.monthly.current;
      workHours.innerHTML = workHoursData;
      playHours.innerHTML = playHoursData;
      studyHours.innerHTML = studyHoursData;
      exerciseHours.innerHTML = exerciseHoursData;
      socialHours.innerHTML = socialHoursData;
      selfCareHours.innerHTML = selfCardHoursData;
    })
    .catch((error) => console.error("Error loading data:", error));
});
