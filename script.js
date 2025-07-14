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

// Span Elements for Previous Hours

const prevWorkHours = document.getElementById("prevWorkHours");
const prevPlayHours = document.getElementById("prevPlayHours");
const prevStudyHours = document.getElementById("prevStudyHours");
const prevExerciseHours = document.getElementById("prevExerciseHours");
const prevSocialHours = document.getElementById("prevSocialHours");
const prevSelfCareHours = document.getElementById("prevSelfCareHours");

// On page load display "Daily" data

dailyBtn.style.color = "white";
weeklyBtn.style.color = "#6f76c8ff";
monthlyBtn.style.color = "#6f76c8ff";
fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const workData = data.find((item) => item.title === "Work");
    const playData = data.find((item) => item.title === "Play");
    const studyData = data.find((item) => item.title === "Study");
    const exerciseData = data.find((item) => item.title === "Exercise");
    const socialData = data.find((item) => item.title === "Social");
    const selfCareData = data.find((item) => item.title === "Self Care");
    const workHoursData = workData.timeframes.daily.current;
    const playHoursData = playData.timeframes.daily.current;
    const studyHoursData = studyData.timeframes.daily.current;
    const exerciseHoursData = exerciseData.timeframes.daily.current;
    const socialHoursData = socialData.timeframes.daily.current;
    const selfCardHoursData = selfCareData.timeframes.daily.current;
    const workPrevHoursData = workData.timeframes.daily.previous;
    const playPrevHoursData = playData.timeframes.daily.previous;
    const prevStudyHoursData = studyData.timeframes.daily.previous;
    const prevExerciseHoursData = exerciseData.timeframes.daily.previous;
    const prevSocialHoursData = socialData.timeframes.daily.previous;
    const prevSelfCareHoursData = selfCareData.timeframes.daily.previous;

    workHours.innerHTML = workHoursData;
    playHours.innerHTML = playHoursData;
    studyHours.innerHTML = studyHoursData;
    exerciseHours.innerHTML = exerciseHoursData;
    socialHours.innerHTML = socialHoursData;
    selfCareHours.innerHTML = selfCardHoursData;
    prevWorkHours.innerHTML = workPrevHoursData;
    prevPlayHours.innerHTML = playPrevHoursData;
    prevStudyHours.innerHTML = prevStudyHoursData;
    prevExerciseHours.innerHTML = prevExerciseHoursData;
    prevSocialHours.innerHTML = prevSocialHoursData;
    prevSelfCareHours.innerHTML = prevSelfCareHoursData;
  })
  .catch((error) => console.error("Error loading data:", error));

// When "Daily" button is selected

dailyBtn.addEventListener("click", () => {
  dailyBtn.style.color = "white";
  weeklyBtn.style.color = "#6f76c8ff";
  monthlyBtn.style.color = "#6f76c8ff";
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      const workData = data.find((item) => item.title === "Work");
      const playData = data.find((item) => item.title === "Play");
      const studyData = data.find((item) => item.title === "Study");
      const exerciseData = data.find((item) => item.title === "Exercise");
      const socialData = data.find((item) => item.title === "Social");
      const selfCareData = data.find((item) => item.title === "Self Care");
      const workHoursData = workData.timeframes.daily.current;
      const playHoursData = playData.timeframes.daily.current;
      const studyHoursData = studyData.timeframes.daily.current;
      const exerciseHoursData = exerciseData.timeframes.daily.current;
      const socialHoursData = socialData.timeframes.daily.current;
      const selfCardHoursData = selfCareData.timeframes.daily.current;
      const workPrevHoursData = workData.timeframes.daily.previous;
      const playPrevHoursData = playData.timeframes.daily.previous;
      const prevStudyHoursData = studyData.timeframes.daily.previous;
      const prevExerciseHoursData = exerciseData.timeframes.daily.previous;
      const prevSocialHoursData = socialData.timeframes.daily.previous;
      const prevSelfCareHoursData = selfCareData.timeframes.daily.previous;

      workHours.innerHTML = workHoursData;
      playHours.innerHTML = playHoursData;
      studyHours.innerHTML = studyHoursData;
      exerciseHours.innerHTML = exerciseHoursData;
      socialHours.innerHTML = socialHoursData;
      selfCareHours.innerHTML = selfCardHoursData;
      prevWorkHours.innerHTML = workPrevHoursData;
      prevPlayHours.innerHTML = playPrevHoursData;
      prevStudyHours.innerHTML = prevStudyHoursData;
      prevExerciseHours.innerHTML = prevExerciseHoursData;
      prevSocialHours.innerHTML = prevSocialHoursData;
      prevSelfCareHours.innerHTML = prevSelfCareHoursData;
    })
    .catch((error) => console.error("Error loading data:", error));
});

// When "Weekly" button is selected

weeklyBtn.addEventListener("click", () => {
  dailyBtn.style.color = "#6f76c8ff";
  weeklyBtn.style.color = "white";
  monthlyBtn.style.color = "#6f76c8ff";
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      const workData = data.find((item) => item.title === "Work");
      const playData = data.find((item) => item.title === "Play");
      const studyData = data.find((item) => item.title === "Study");
      const exerciseData = data.find((item) => item.title === "Exercise");
      const socialData = data.find((item) => item.title === "Social");
      const selfCareData = data.find((item) => item.title === "Self Care");
      const workHoursData = workData.timeframes.weekly.current;
      const playHoursData = playData.timeframes.weekly.current;
      const studyHoursData = studyData.timeframes.weekly.current;
      const exerciseHoursData = exerciseData.timeframes.weekly.current;
      const socialHoursData = socialData.timeframes.weekly.current;
      const selfCardHoursData = selfCareData.timeframes.weekly.current;
      const workPrevHoursData = workData.timeframes.weekly.previous;
      const playPrevHoursData = playData.timeframes.weekly.previous;
      const prevStudyHoursData = studyData.timeframes.weekly.previous;
      const prevExerciseHoursData = exerciseData.timeframes.weekly.previous;
      const prevSocialHoursData = socialData.timeframes.weekly.previous;
      const prevSelfCareHoursData = selfCareData.timeframes.weekly.previous;

      workHours.innerHTML = workHoursData;
      playHours.innerHTML = playHoursData;
      studyHours.innerHTML = studyHoursData;
      exerciseHours.innerHTML = exerciseHoursData;
      socialHours.innerHTML = socialHoursData;
      selfCareHours.innerHTML = selfCardHoursData;
      prevWorkHours.innerHTML = workPrevHoursData;
      prevPlayHours.innerHTML = playPrevHoursData;
      prevStudyHours.innerHTML = prevStudyHoursData;
      prevExerciseHours.innerHTML = prevExerciseHoursData;
      prevSocialHours.innerHTML = prevSocialHoursData;
      prevSelfCareHours.innerHTML = prevSelfCareHoursData;
    })
    .catch((error) => console.error("Error loading data:", error));
});
// When "Monthly" button is selected

monthlyBtn.addEventListener("click", () => {
  dailyBtn.style.color = "#6f76c8ff";
  weeklyBtn.style.color = "#6f76c8ff";
  monthlyBtn.style.color = "white";
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      const workData = data.find((item) => item.title === "Work");
      const playData = data.find((item) => item.title === "Play");
      const studyData = data.find((item) => item.title === "Study");
      const exerciseData = data.find((item) => item.title === "Exercise");
      const socialData = data.find((item) => item.title === "Social");
      const selfCareData = data.find((item) => item.title === "Self Care");
      const workHoursData = workData.timeframes.monthly.current;
      const playHoursData = playData.timeframes.monthly.current;
      const studyHoursData = studyData.timeframes.monthly.current;
      const exerciseHoursData = exerciseData.timeframes.monthly.current;
      const socialHoursData = socialData.timeframes.monthly.current;
      const selfCardHoursData = selfCareData.timeframes.monthly.current;
      const workPrevHoursData = workData.timeframes.monthly.previous;
      const playPrevHoursData = playData.timeframes.monthly.previous;
      const prevStudyHoursData = studyData.timeframes.monthly.previous;
      const prevExerciseHoursData = exerciseData.timeframes.monthly.previous;
      const prevSocialHoursData = socialData.timeframes.monthly.previous;
      const prevSelfCareHoursData = selfCareData.timeframes.monthly.previous;

      workHours.innerHTML = workHoursData;
      playHours.innerHTML = playHoursData;
      studyHours.innerHTML = studyHoursData;
      exerciseHours.innerHTML = exerciseHoursData;
      socialHours.innerHTML = socialHoursData;
      selfCareHours.innerHTML = selfCardHoursData;
      prevWorkHours.innerHTML = workPrevHoursData;
      prevPlayHours.innerHTML = playPrevHoursData;
      prevStudyHours.innerHTML = prevStudyHoursData;
      prevExerciseHours.innerHTML = prevExerciseHoursData;
      prevSocialHours.innerHTML = prevSocialHoursData;
      prevSelfCareHours.innerHTML = prevSelfCareHoursData;
    })
    .catch((error) => console.error("Error loading data:", error));
});
