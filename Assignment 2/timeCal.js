function displayFeature() {
  const selected = document.querySelectorAll('input[name="feature"]:checked');

  document.getElementById("ageCalculator").style.display = "none";
  document.getElementById("newYearCounter").style.display = "none";
  document.getElementById("liveTimer").style.display = "none";

  selected.forEach((checkbox) => {
    if (checkbox.value === "age") {
      document.getElementById("ageCalculator").style.display = "block";
    }

    if (checkbox.value === "newyear") {
      document.getElementById("newYearCounter").style.display = "block";
      showNewYearCountdown(); 
    }

    if (checkbox.value === "timer") {
      document.getElementById("liveTimer").style.display = "block";
      startLiveClock(); 
    }
  });
}

function calculateAge() {
    const dob = document.getElementById("dob").value;
    const tob = document.getElementById("tob").value;
    const result = document.getElementById("ageResult");

    if (!dob || !tob) {
        alert("Please enter both date and time of birth.");
        return;
    }
    const birthDateTime = new Date(dob + "T" + tob);
    const now = new Date();

    
    const difference = now - birthDateTime;

  
    const totalMinutes = Math.floor(difference / (1000 * 60));
    const totalHours = Math.floor(difference / (1000 * 60 * 60));
    const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));

    const birthYear = birthDateTime.getFullYear();
    const birthMonth = birthDateTime.getMonth();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();

    let years = currentYear - birthYear;
    let months = currentMonth - birthMonth;

    if (months < 0) {
        years--;
        months += 12;
    }

  // Show the result
    result.innerHTML =
        "Years: " + years +
        "Months: " + (years * 12 + months) + 
        "Days: " + totalDays + 
        "Hours: " + totalHours +
        "Minutes: " + totalMinutes;
}


function showNewYearCountdown() {

    const result = document.getElementById("newYearResult");

    const now = new Date();

    const nextYear = now.getFullYear() + 1;

    const newYearDate = new Date(nextYear, 0, 1); 

    const difference = newYearDate - now;
    const totalSeconds = Math.floor(difference / 1000);
    const seconds = totalSeconds % 60;

    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;

    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;

    const days = Math.floor(totalHours / 24);

    result.innerHTML = days + " Days, " + hours + " Hours, " + minutes + " Minutes, " + seconds + " Seconds left until " + nextYear;


    setInterval(() => {
        const now = new Date();
        document.getElementById("timer").textContent = now.toLocaleTimeString();
    }, 1000);

    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth() + 1; 
    let year = today.getFullYear();

    if (date < 10) date = '0' + date;
    if (month < 10) month = '0' + month;

    document.getElementById("currentDate").textContent = date + '-' + month + '-' + year;

}

function startLiveClock() {
  setInterval(() => {
    const now = new Date();
    document.getElementById("liveClock").textContent = now.toLocaleTimeString();
  }, 1000);
}
