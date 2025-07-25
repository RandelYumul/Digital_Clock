// Yumul, Randel Angelo L.
// CS - 301
// IMODSIM
// This is a dictionary for the 7 segments of each number, letters indicate which part will create the number.
const segmentMap = {
  "0": ["a", "b", "d", "e", "f", "g"],
  "1": ["b", "d"],
  "2": ["a", "b", "c", "f", "e"],
  "3": ["a", "b", "c", "d", "e"],
  "4": ["g", "c", "b", "d"],
  "5": ["a", "g", "c", "d", "e"],
  "6": ["a", "g", "c", "f", "d", "e"],
  "7": ["a", "b", "d"],
  "8": ["a", "b", "d", "e", "f", "g", "c"],
  "9": ["a", "b", "d", "e", "g", "c"],
};

// This creates the digits where it will loop 
function createDigit(num) {
  var digitDiv = document.createElement("div");
  digitDiv.classList.add("digit");

  var segments = ["a", "b", "c", "d", "e", "f", "g"];

  for (var i = 0; i < segments.length; i++) {
    var segmentName = segments[i];

    var segmentDiv = document.createElement("div");
    segmentDiv.classList.add("segment");
    segmentDiv.classList.add(segmentName);

    if (segmentMap[num] && segmentMap[num].includes(segmentName)) {
      segmentDiv.classList.add("on");
    }

    digitDiv.appendChild(segmentDiv);
  }

  return digitDiv;
}

function createColon() {
  const colon = document.createElement("div");
  colon.classList.add("colon");
  colon.innerHTML = `<div class="colon-dot"></div><div class="colon-dot"></div>`;
  return colon;
}

function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");

  const clock = document.getElementById("clock");
  clock.innerHTML = "";

  const hourDiv = document.createElement("div");
  hourDiv.classList.add("time-part");

  const minuteDiv = document.createElement("div");
  minuteDiv.classList.add("time-part");

  const secondDiv = document.createElement("div");
  secondDiv.classList.add("time-part", "small-second");

  for (let i = 0; i < h.length; i++) {
    hourDiv.appendChild(createDigit(h[i]));
  }

  for (let i = 0; i < m.length; i++) {
    minuteDiv.appendChild(createDigit(m[i]));
  }

  for (let i = 0; i < s.length; i++) {
    secondDiv.appendChild(createDigit(s[i]));
  }

  clock.appendChild(hourDiv);
  clock.appendChild(createColon());
  clock.appendChild(minuteDiv);
  clock.appendChild(secondDiv);
}

function updateDate() {
  const now = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const formattedDate = now.toLocaleDateString('en-US', options);
  document.getElementById("date").textContent = formattedDate;
}

// Initial update
updateClock();
updateDate();
setInterval(() => {
  updateClock();
  updateDate();
}, 1000);
