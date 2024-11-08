const btn = document.querySelector("#btn");
const content = document.querySelector("#content");
const voice = document.querySelector("#voice");

// Speech Synthesis Function (for speaking)
function speak(text) {
  const textSpeak = new SpeechSynthesisUtterance(text);
  textSpeak.rate = 1;
  textSpeak.pitch = 1;
  textSpeak.volume = 1;
  textSpeak.lang = "hi-GB"; // You can change the language to 'en-US' or others
  window.speechSynthesis.speak(textSpeak);
}



// Greeting Function
function wishMe() {
  const day = new Date();
  const hours = day.getHours();
  if (hours >= 0 && hours < 12) {
    speak("Good Morning Sir");
  } else if (hours >= 12 && hours < 16) {
    speak("Good Afternoon Sir");
  } else {
    speak("Good Evening Sir");
  }
}
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();
recognition.continuous = false;  // Set to true for continuous listening
recognition.lang = 'en-US';      // Set language as per requirement
recognition.interimResults = false;

// Event when recognition gets results
recognition.onresult = (event) => {
  const currentIndex = event.resultIndex;
  const transcript = event.results[currentIndex][0].transcript; // Captures the speech
  content.innerText = transcript; // Display speech to text on the webpage
  takeCommand(transcript.toLowerCase()); // Pass recognized speech to handle commands
};

// Start recognition on button click
btn.addEventListener("click", () => {
  recognition.start();  // Start speech recognition
  voice.style.display = "block";
  btn.style.display = "none";
});

// Function to handle recognized commands
function takeCommand(message) {
  voice.style.display = "none";
  btn.style.display = "flex";


  // Basic Commands
  if (message.includes("shipra") || message.includes("hey")) {
    speak("Hello Sir, how can I assist you?");
    speak("I am your friend, what is your problem? Give me a task.");
}
   else if (message.includes("who are you")) {
    speak("I am your virtual assistant, created by Navneet's team.");
  }

  // Opening Websites
  else if (message.includes("open youtube")) {
    speak("Opening YouTube...");
    window.open("https://youtube.com/", "_blank");}
    // Opening Websites
  else if (message.includes("open netflix")) {
    speak("Opening netflix...");
    window.open("https://www.netflix.com/in/", "_blank");
  }  else if (message.includes("open jemes polytechnic collage website")) {
    speak("ok navneet team ...");
    window.open("https://gemspolytechnic.edu.in/", "_blank");
  }
  else if (message.includes("tell me about gems polytechnic college")) {
    speak("GEMS Polytechnic College, located in Aurangabad, Bihar, offers diploma courses in various engineering disciplines. It has well-equipped labs, experienced faculty, and a strong focus on practical learning. The college is known for its placements and industry-oriented training.");
  }
  
  else if (message.includes("open google")) {
    speak("Opening Google...");
    window.open("https://google.com/", "_blank");
  } else if (message.includes("open gems polytechnic college website")) {
    speak("Opening GEMS Polytechnic College website...");
    window.open("https://gems.edu.in/", "_blank");
  }  else if (message.includes("play song on youtube")) {
    speak("plying your song 'Sandha Aata Hai' on YouTube...");
    window.open("https://youtu.be/IFGM4pOPXvA?si=o_qWZXdS42vJKN9S", "_blank"); 
}


  // Location-based Queries
  else if (message.includes("where is gems polytechnic college")) {
    speak("GEMS Polytechnic College is located in Aurangabad, Bihar.");
    window.open("https://maps.google.com/?q=GEMS+Polytechnic+College+Aurangabad", "_blank");
  }

  // Health and Wellness Queries
  else if (message.includes("how to stay healthy")) {
    speak("To stay healthy, make sure to eat a balanced diet, exercise regularly, drink plenty of water, and get enough sleep.");
  } else if (message.includes("who is krishna")) {
    speak("krishna is a student of cse department 3rd year , from bhojpur district bihar , currently stay in gems polytechnic college hostel .");
    window.open("https://www.instagram.com/_krishna_kasyap?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank");
  }
  else if (message.includes("who is ranjit choudhary")) {
    speak("he is the good person, he work at head of department of computer science & engineering in gems polytechnic college.");
    window.open("https://www.facebook.com/photo/?fbid=4324140900989008&set=a.290932634309875", "_blank");
  }else if (message.includes("symptoms of covid")) {
    speak("Common symptoms of COVID-19 include fever, dry cough, tiredness, and difficulty breathing. Please consult a doctor if you're feeling unwell.");
  } else if (message.includes("find nearest hospital")) {
    speak("Finding the nearest hospital...");
    window.open("https://www.google.com/maps/search/nearest+hospital/", "_blank");
  }else if (message.includes("who is the prime minister of india")) {
    speak("narendra modi,In 2014 he led his party to victory in elections to the Lok Sabha (lower chamber of the Indian parliament), after which he was sworn in as prime minister of India. ");
    window.open("https://en.wikipedia.org/wiki/Narendra_Modi" ,"_blank" );
  }else if (message.includes("who is ragland royal")) {
    speak("he is the good person he is work at Faculty Lecturer in computer science & engineering department in gems polytechnic college ");
    window.open("https://scontent.fbom9-1.fna.fbcdn.net/v/t39.30808-6/244771187_1987749624762197_4029771058587708844_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=qbnx6LdxwBIQ7kNvgEWT7Q3&_nc_zt=23&_nc_ht=scontent.fbom9-1.fna&_nc_gid=AO9E061tsmO1I6rTZTn7Syd&oh=00_AYA8wH8p_q7YrWbMlxOfqhNBHk2NTsGCp2rVVjngOK9oXQ&oe=671D1162" ,"_blank" );
  }else if (message.includes("who is kumar sir")) {
    speak("he is the good person he is work at Faculty Lecturer in computer science & engineering department in gems polytechnic college ");
  }else if (message.includes("who is jenita man")) {
    speak("he is the good person he is work at Faculty Lecturer in computer science & engineering department in gems polytechnic college ");
  }else if (message.includes("who is sachin kumar")) {
    speak("sachin is a student of cse 3rd year , from vaishali district , bihar ,he is currently stay in gems polytechnic college hostel");
    window.open("https://www.instagram.com/sachin_sharma_s_77?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank");}
   else if (message.includes("who is utkarsh kumar")) {
    speak("he is a student of cse 3rd year , from hajipur district ,bihar, he is currently stay in gems polytechnic college hostel");
    window.open("https://www.instagram.com/rajput_utkarsh_singh_08?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw== " ,"_blank");
  }else if (message.includes("who is the chief minister of bihar")) {
    speak(" shree nitish kumar ");
    window.open("https://r.search.yahoo.com/_ylt=AwrKAzJiTRdn7QEAvQ.7HAx.;_ylu=Y29sbwNzZzMEcG9zAzMEdnRpZAMEc2VjA3Ny/RV=2/RE=1730789987/RO=10/RU=https%3a%2f%2fen.wikipedia.org%2fwiki%2fNitish_Kumar/RK=2/RS=Ho7lL.39TV2MU185.Xce6iWZ.rM-", "_blank");
  }else if (message.includes("who is the home minister of india")) {
    speak(" The current minister is Amit Shah of the Bharatiya Janata Party ");
    window.open("https://r.search.yahoo.com/_ylt=AwrKAzJmTxdnHQIAmhO7HAx.;_ylu=Y29sbwNzZzMEcG9zAzIEdnRpZAMEc2VjA3Ny/RV=2/RE=1730790503/RO=10/RU=https%3a%2f%2fwww.mha.gov.in%2fen%2fabout-us%2fmeet-the-minister%2funion-home-minister/RK=2/RS=MSLx_AKfl4be4ZHdzJzofn80_zA-","_blank")}
   else if (message.includes("when was the first world war started")) {
    speak("28 july 1914,if you want know more about first world war watch this video."); 
    window.open("https://youtu.be/aHTbtfluDpo?si=-r9-oR-AAgOY3TEk","_blank");
  }else if (message.includes("who is the ratan tata")) {
    speak("full name of ratan tata is Ratan Naval Tata his life period (28 December 1937.9 October 2024) was an Indian industrialist and philanthropist. He served as the chairman of Tata Group and Tata Sons from 1991 to 2012 and he held the position of interim chairman from October 2016 to February 2017.[2][3] In 2000, he received the Padma Bhushan, the third highest civilian honour in India, followed by the Padma Vibhushan, the country's second highest civilian honour, in 2008.");
    window.open("https://en.wikipedia.org/wiki/Ratan_Tata", "_blank");
  }else if (message.includes("best shopping site")) {
    speak("opening best shopping site");
    window.open("https://www.flipkart.com/big-diwali-sale-electronics-store?fm=neo%2Fmerchandising&iid=M_7c2e2079-e851-46e2-af35-46f32094145a_1_KUZ8W60OFFMO_MC.KCBBC8GGWR9V&otracker=hp_rich_navigation_4_1.navigationCard.RICH_NAVIGATION_Electronics_KCBBC8GGWR9V&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L0_view-all&cid=KCBBC8GGWR9V","_blank");
  }
    // Educational Queries
  else if (message.includes("what is aiml")) {
    speak("AIML stands for Artificial Intelligence and Machine Learning. It involves creating algorithms that allow computers to learn and make decisions without explicit programming.");
  } else if (message.includes("who is navneet mishra")) {
    speak("Navneet Mishra is a Computer Science and Engineering student from Barun, Bihar, currently studying at GEMS Polytechnic College.");
    window.open("https://www.instagram.com/navneetmishraji_07?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==","_blank")
  }else if (message.includes("who is mangalam tiwari")) {
    speak("mangalamis a Computer Science and Engineering student from , Bihar, currently studying at GEMS Polytechnic College, his is known as bhaiya ji.");
  }else if (message.includes("tell me a joke")) {
    speak("I found a book called How to Solve 50% of Your Problems. So I bought 2.");}

    // System Commands
  else if (message.includes("shutdown computer")) {
    speak("Shutting down the computer...");
    // Call system shutdown command (commented due to browser restrictions)
    // window.open("shutdown command", "_self");
  } else if (message.includes("restart computer")) {
    speak("Restarting the computer...");
    // Call system restart command
    // window.open("restart command", "_self");
  }

  // Media Controls
  else if (message.includes("play song")) {
    speak("Playing your favorite song...");
    window.open("http://localhost:8080/music/song.mp3", "_blank");
  } else if (message.includes("pause song")) {
    speak("Pausing the song...");
    // Add logic to pause the song
  }
  // Calculation Commands
  else if (message.includes("add") || message.includes("plus")) {
    calculate(message, "add");
  } else if (message.includes("subtract") || message.includes("minus")) {
    calculate(message, "subtract");
  } else if (message.includes("multiply") || message.includes("times")) {
    calculate(message, "multiply");
  } else if (message.includes("divide") || message.includes("division")) {
    calculate(message, "divide");
  }


  // Time and Date
  else if (message.includes("time")) {
    const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
    speak(`The time is ${time}`);
  } else if (message.includes("date")) {
    const date = new Date().toLocaleString(undefined, { day: "numeric", month: "short", year: "numeric" });
    speak(`Today's date is ${date}`);
  }

  // Weather
  else if (message.includes("weather")) {
    const location = message.split("weather in ")[1] || "Aurangabad"; // Default to Aurangabad if not specified
    weather(location);
  }

  // Setting Alarm
  else if (message.includes("set an alarm")) {
    setAlarm();
  }

  // Setting Reminder
  else if (message.includes("set a reminder")) {
    setReminder();
  }

  // Health Check
  else if (message.includes("check heart rate")) {
    speak("ok i will be given the website link you can cheak and talk the doctor");
    checkHeartRate( " https://www.medibuddy.in/");
  }

  // Search on Google
  else {
  {
      const finalText = "Here's what I found on the internet regarding " + message;
      speak(finalText);
      window.open(`https://www.google.com/search?q=${message}`, "_blank");
  }window.open(`https://www.google.com/search?q=${message}`, "_blank");

  
}
// Weather Function
function weather(location) {
  const weatherCont = document.querySelector(".temp").querySelectorAll("*");

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY`; // Replace with your actual API key
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (this.status === 200) {
      let data = JSON.parse(this.responseText);
      weatherCont[0].textContent = `Location: ${data.name}`;
      weatherCont[1].textContent = `Country: ${data.sys.country}`;
      weatherCont[2].textContent = `Weather type: ${data.weather[0].main}`;
      weatherCont[3].textContent = `Weather description: ${data.weather[0].description}`;
      weatherCont[4].src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weatherCont[5].textContent = `Original Temperature: ${ktc(data.main.temp)}`;
      weatherCont[6].textContent = `Feels like: ${ktc(data.main.feels_like)}`;
      weatherCont[7].textContent = `Min temperature: ${ktc(data.main.temp_min)}`;
      weatherCont[8].textContent = `Max temperature: ${ktc(data.main.temp_max)}`;
      let weatherStatement = `Sir, the weather in ${data.name} is ${data.weather[0].description} and the temperature feels like ${ktc(data.main.feels_like)}`;
      speak(weatherStatement);
    } else {
      weatherCont[0].textContent = "Weather Info Not Found";
      speak("Sorry sir, I couldn't find the weather information for that location.");
    }
  };

  xhr.onerror = function () {
    weatherCont[0].textContent = "Error fetching weather data";
    speak("There was an error connecting to the weather service. Please try again later.");
  };

  xhr.send();
}

// Additional Functions

// Call Function
function callNumber(number) {
  speak(`Calling ${number}...`);
  window.open(`tel:${number}`);
}

// Play Music
function playMusic() {
  speak("Playing music...");
  window.open("https://music.youtube.com/", "_blank");
}

// Set Alarm
function setAlarm() {
  speak("Please specify the time for the alarm.");
  // Implement alarm setting logic here, possibly using a prompt to get user input
}

// Set Reminder
function setReminder() {
  speak("What would you like to be reminded about?");
  // Implement reminder logic here, possibly using a prompt to get user input
}

// Health-Related Functionality
function checkHeartRate() {
  speak("Measuring your heart rate...");
  // Integrate heart rate measurement logic or health API here
}

// Event listeners for new functions
document.getElementById("call").addEventListener("click", () => {
  const number = "9110155364";
  callNumber(number);
});

// More advanced commands (System control, health, etc.)
document.getElementById("weather").addEventListener("click", () => {
  const city = "Aurangabad";
  weather(city);
});

// Further health-related function
document.getElementById("health-check").addEventListener("click", () => {
  checkHeartRate();
});}