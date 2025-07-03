<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ChiefArt - Haïti Cinéma</title>
    <style>
        body {
            margin: 0;
            font-family: 'Arial', sans-serif;
            background-color: #0d0d0d;
            color: #fff;
            background-image: url('https://i.imgur.com/3i1F4mu.jpg');
            background-size: cover;
            background-attachment: fixed;
        }
        header {
            background: rgba(0, 0, 0, 0.8);
            padding: 30px;
            text-align: center;
        }
        header h1 {
            color: #ffcc00;
            font-size: 50px;
        }
        nav {
            background: #111;
            display: flex;
            justify-content: center;
            gap: 25px;
            padding: 15px;
            border-bottom: 1px solid #333;
        }
        nav a {
            color: #ffcc00;
            text-decoration: none;
            font-weight: bold;
        }
        nav a:hover {
            color: white;
        }
        .main {
            padding: 30px;
            background: rgba(0,0,0,0.7);
        }
        .main h2 {
            color: #ffcc00;
            margin-bottom: 20px;
        }
        .payments img {
            width: 60px;
            margin: 10px;
            transition: transform 0.3s;
        }
        .payments img:hover {
            transform: scale(1.2);
        }
        footer {
            text-align: center;
            padding: 20px;
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
        <a href="index.html">Accueil</a>
        <a href="action.html">Action</a>
        <a href="drame.html">Drame</a>
        <a href="scifi.html">Science-Fiction</a>
        <a href="romance.html">Romance</a>
        <a href="psycho.html">Psychologique</a>
        <a href="signup.html">Inscription</a>
    </nav>

    <div class="main">
        <h2>Bienvenue sur ChiefArt</h2>
        <p>Découvre des courts-métrages haïtiens originaux et soutiens les créateurs locaux.</p>

        <h2>Nos Films Récents</h2>

        <video width="90%" controls>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
            Votre navigateur ne supporte pas la vidéo.
        </video>

        <div class="payments">
            <p>Soutiens-nous :</p>
            <img src="https://img.icons8.com/ios-filled/100/ffffff/cash-app.png" alt="Cash App">
            <img src="https://img.icons8.com/ios-filled/100/ffffff/paypal.png" alt="PayPal">
            <img src="https://img.icons8.com/ios-filled/100/ffffff/zelle.png" alt="Zelle">
            <img src="https://img.icons8.com/ios-filled/100/ffffff/money.png" alt="Mon Cash">
        </div>
    </div>

    <footer>
        © 2025 ChiefArt. Tous droits réservés.
    </footer>
</body>
</html>
