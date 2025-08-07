body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f5f5f5;
  margin: 20px;
  color: #222;
  transition: background-color 0.3s, color 0.3s;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

button#darkModeToggle {
  cursor: pointer;
  background: #444;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  font-size: 16px;
}

.body-map-container {
  max-width: 400px;
  margin: auto;
}

#muscleMap {
  width: 100%;
  height: auto;
}

.muscle {
  fill: #ddd;
  stroke: #444;
  stroke-width: 2;
  cursor: pointer;
  transition: fill 0.3s;
}

.muscle:hover {
  fill: #ff6f61;
}

.workout-list {
  max-width: 600px;
  margin: 20px auto;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
  min-height: 150px;
}

.dark-mode {
  background-color: #121212;
  color: #ddd;
}

.dark-mode button#darkModeToggle {
  background: #ddd;
  color: #121212;
}

.dark-mode .muscle {
  fill: #555;
  stroke: #aaa;
}

.dark-mode .muscle:hover {
  fill: #ff6655;
}

.dark-mode .workout-list {
  background: #222;
  box-shadow: 0 0 10px rgba(255 255 255, 0.1);
}
