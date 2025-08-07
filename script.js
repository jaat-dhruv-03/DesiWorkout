const workouts = {
  neck: [
    "Neck rotations",
    "Front and back neck resistance using hands",
    "Side neck resistance using hands",
    "Towel neck pulls",
    "Pillow neck hold (lying down with a pillow under head)"
  ],
  shoulders: [
    "Wide-arm desi pushups (Hanuman Dand)",
    "Traditional shoulder-focused dand",
    "Bag front raises",
    "Water bottle lateral raises",
    "Wall handstand hold"
  ],
  biceps: [
    "Reverse-hand pushups",
    "Towel bucket curls",
    "Chin-ups (if you have a bar)",
    "Heavy bottle curls",
    "Brick hammer curls"
  ],
  triceps: [
    "Diamond pushups",
    "Chair or table dips",
    "Overhead towel extension with weight",
    "Close-grip pushups",
    "One-arm wall tricep push"
  ],
  chest: [
    "Normal desi pushups",
    "Wide grip pushups",
    "Elevated pushups (feet up)",
    "Decline pushups (hands elevated)",
    "Super slow pushups"
  ],
  "upper-chest": [
    "Incline pushups",
    "Wall pushups",
    "Dumbbell front raises",
    "Pike pushups",
    "Clap pushups"
  ],
  abs: [
    "Situps",
    "Leg raises",
    "Mountain climbers",
    "Bicycle crunches",
    "Plank"
  ],
  obliques: [
    "Side planks",
    "Russian twists",
    "Side crunches",
    "Heel taps",
    "Woodchoppers"
  ],
  forearms: [
    "Bucket hold",
    "Wet towel twist",
    "Brick wrist curls",
    "Wrist pushups",
    "Hand grip using towel or ball"
  ],
  back: [
    "Cobra pose (Bhujangasana)",
    "Superman hold",
    "Towel pull simulation",
    "Loaded bag bent-over row",
    "Reverse dand (arching pushup style)"
  ],
  "lower-back": [
    "Bird-dog",
    "Bridge pose",
    "Superman raise",
    "Back extensions",
    "Cat-cow stretch"
  ],
  glutes: [
    "Glute bridges",
    "Squats",
    "Lunges",
    "Donkey kicks",
    "Step-ups"
  ],
  legs: [
    "Hindu squats (Desi Baithak)",
    "Wall sit",
    "Forward and backward lunges",
    "Step-ups on stairs",
    "Jump squats"
  ],
  calves: [
    "Standing calf raises",
    "Single-leg calf raises",
    "Step edge calf raises",
    "Jumping jacks",
    "Towel calf press (seated)"
  ]
};

const bodyParts = document.querySelectorAll(".body-part");
const workoutList = document.getElementById("workoutList");
const searchInput = document.getElementById("searchInput");
const darkModeToggle = document.getElementById("darkModeToggle");

function showWorkouts(part) {
  const list = workouts[part];
  if (!list) {
    workoutList.innerHTML = "<h2>No workouts found for this part.</h2>";
    return;
  }

  let html = `<h2>${part.replace(/-/g, " ").toUpperCase()} Workouts</h2><ul>`;
  for (let w of list) {
    html += `<li>${w}</li>`;
  }
  html += "</ul>";

  workoutList.innerHTML = html;
}

bodyParts.forEach(part => {
  part.addEventListener("click", () => {
    showWorkouts(part.id);
  });
});

searchInput.addEventListener("input", () => {
  const val = searchInput.value.toLowerCase();

  if (val.trim() === "") {
    workoutList.innerHTML = "<h2>Click on a body part above to see workouts</h2>";
    return;
  }

  // Search all workouts and body parts
  let results = "";
  for (const [part, exercises] of Object.entries(workouts)) {
    const partName = part.replace(/-/g, " ");
    if (partName.includes(val)) {
      results += `<h3>${partName.toUpperCase()}</h3><ul>`;
      for (const ex of exercises) {
        results += `<li>${ex}</li>`;
      }
      results += "</ul>";
    } else {
      // Also search inside exercises
      const matched = exercises.filter(e => e.toLowerCase().includes(val));
      if (matched.length) {
        results += `<h3>${partName.toUpperCase()}</h3><ul>`;
        for (const ex of matched) {
          results += `<li>${ex}</li>`;
        }
        results += "</ul>";
      }
    }
  }

  workoutList.innerHTML = results || "<h2>No results found</h2>";
});

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if(document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "☀️ Light Mode";
  } else {
    darkModeToggle.textContent = "🌙 Dark Mode";
  }
});
