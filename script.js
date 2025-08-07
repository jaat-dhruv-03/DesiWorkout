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
  upperChest: [
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
  lowerBack: [
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

const workoutList = document.getElementById("workoutList");
const muscles = document.querySelectorAll(".muscle");
const darkModeToggle = document.getElementById("darkModeToggle");

function showWorkouts(muscle) {
  const list = workouts[muscle];
  if (!list) {
    workoutList.innerHTML = "<h2>No workouts found for this muscle.</h2>";
    return;
  }

  let html = `<h2>${muscle.replace(/([A-Z])/g, ' $1').toUpperCase()} Workouts</h2><ul>`;
  for (let w of list) {
    html += `<li>${w}</li>`;
  }
  html += "</ul>";
  workoutList.innerHTML = html;
}

muscles.forEach(muscle => {
  muscle.addEventListener("click", () => {
    showWorkouts(muscle.id);
  });
});

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if(document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "☀️ Light Mode";
  } else {
    darkModeToggle.textContent = "🌙 Dark Mode";
  }
});
