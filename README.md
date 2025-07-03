# Chiefart
Mon premier site 
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>ChiefArt</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      font-family: 'Orbitron', sans-serif;
      background: url('https://i.imgur.com/3i1F4mu.jpg') no-repeat center center fixed;
      background-size: cover;
      color: white;
    }
    header {
      background: rgba(0,0,0,0.8);
      padding: 50px 20px 20px 20px;
      text-align: center;
    }
    header h1 {
      font-size: 50px;
      color: #ffcc00;
      text-shadow: 2px 2px 10px #ffcc00;
      margin-bottom: 10px;
    }
    header p {
      font-size: 18px;
      color: #ccc;
    }
    nav {
      background-color: #111;
      display: flex;
      justify-content: center;
      padding: 15px 0;
      gap: 30px;
      border-bottom: 1px solid #333;
    }
    nav a {
      color: #ffcc00;
      text-decoration: none;
      font-weight: bold;
      transition: 0.3s;
    }
    nav a:hover {
      color: white;
    }
    .main {
      padding: 40px 20px;
      text-align: center;
      background-color: rgba(0,0,0,0.6);
    }
    .main h2 {
      font-size: 28px;
      margin-bottom: 20px;
      color: #ffcc00;
    }
    .main img {
      max-width: 90%;
      border-radius: 10px;
      margin-bottom: 20px;
      box-shadow: 0 0 15px #000;
    }
    .payments {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
      margin-top: 30px;
    }
    .payments img {
      width: 60px;
      transition: transform 0.3s;
    }
    .payments img:hover {
      transform: scale(1.1);
    }
    footer {
      text-align: center;
      padding: 30px 10px;
      font-size: 14px;
      color: #888;
      background-color: #000;
    }
  </style>
</head>
<body>

<header>
  <h1>ChiefArt</h1>
  <p>Haïti - Cinéma - Art - Révolution Culturelle</p>
</header>

<nav>
  <a href="#">Genres</a>
  <a href="#">Années</a>
  <a href="#">Jours</a>
  <a href="#">Acheter</a>
</nav>

<div class="main">
  <h2>Bienvenue sur ChiefArt</h2>
  <img src="https://i.imgur.com/pKquzAS.jpeg" alt="Art haïtien">
  <p>Plonge dans un univers où l'art haïtien fusionne avec le cinéma indépendant. Ici, chaque image, chaque mot, chaque court-métrage est une prise de pouvoir créatif.</p>

  <div class="payments">
    <a href="#"><img src="https://img.icons8.com/ios-filled/100/ffffff/cash-app.png" alt="Cash App"></a>
    <a href="#"><img src="https://img.icons8.com/ios-filled/100/ffffff/paypal.png" alt="PayPal"></a>
    <a href="#"><img src="https://img.icons8.com/ios-filled/100/ffffff/bank-cards.png" alt="Zelle"></a>
    <a href="#"><img src="https://img.icons8.com/ios-filled/100/ffffff/money.png" alt="MonCash"></a>
    <a href="#"><img src="https://img.icons8.com/ios-filled/100/ffffff/safe--v1.png" alt="NatCash"></a>
  </div>
</div>

<footer>
  © 2025 ChiefArt. Tous droits réservés.
</footer>

</body>
</html>
