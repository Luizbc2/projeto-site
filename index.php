<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nis Mello Ateliê - Página Inicial</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="/projeto-site/styles.css">
</head>
<body>

    <nav class="navbar navbar-expand-lg fixed-top site-navbar">
        <div class="container">
            <div class="logo-div">
                <img src="imagens/logo.jpg" alt="Logo do Ateliê" class="logo"> 
                <a class="navbar-brand font-navbar" href="index.php">Nis Mello Ateliê</a>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link active" href="index.php">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="bolsas.php">Bolsas</a></li>
                    <li class="nav-item"><a class="nav-link" href="sobre.php">Sobre Mim</a></li>
                    <li class="nav-item"><a class="nav-link" href="contato.php">Contato</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <main>
        <section id="home" class="hero-section d-flex align-items-center">
            <div class="container text-center">
                <h1 class="hero-title">Nis Mello Ateliê</h1>
                <p class="hero-subtitle">Criações artesanais com alma, amor e elegância.</p>
                <a href="bolsas.php" class="btn btn-primary-custom mt-4">Descubra as Coleções</a>
            </div>
        </section>
    </main>

    <footer class="site-footer text-center py-4">
        <div class="container">
            <p>&copy; <span id="currentYear"></span> Nis Mello Ateliê. Todos os direitos reservados.</p>
            <p>Feito com <i class="fas fa-heart text-danger"></i> e muito carinho.</p>
        </div>
    </footer>

    <a href="https://www.instagram.com/nismelloatelie/" class="instagram-float" target="_blank" aria-label="Siga-nos no Instagram">
        <i class="fab fa-instagram"></i>
    </a>
    <a href="https://wa.me/554499629630" class="whatsapp-float" target="_blank" aria-label="Fale conosco no WhatsApp">
        <i class="fab fa-whatsapp"></i>
    </a>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <script src="script.js"></script>
</body>
</html>