<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Visitor Tracker – CrapsEdge™</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <style>
    body {
      background-color: #000;
      color: white;
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 40px;
    }

    h1 {
      color: #00ff88;
      margin-bottom: 10px;
    }

    p {
      color: #ccc;
      font-size: 18px;
    }

    .counter {
      font-size: 72px;
      color: #0ff;
      font-weight: bold;
      margin-top: 20px;
      animation: pulse 1s ease-in-out infinite alternate;
    }

    @keyframes pulse {
      from { transform: scale(1); }
      to { transform: scale(1.05); }
    }

    a {
      display: inline-block;
      margin-top: 30px;
      color: #0ff;
      text-decoration: none;
      font-weight: bold;
    }

    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <h1>👁️ Visitor Tracker</h1>
  <p>You're visitor number:</p>
  <div class="counter" id="visitorCount">Loading...</div>

  <a href="index.html">⬅ Back to Home</a>

  <script>
    // Fake counter placeholder (upgradeable to real data)
    const base = 482;  // starting number
    const randomGrowth = Math.floor(Math.random() * 15) + 1;
    const today = new Date().getDate();
    const count = base + today + randomGrowth;
    document.getElementById("visitorCount").innerText = count.toLocaleString();
  </script>

</body>
</html>
