<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sobre Mim - Nis Mello Ateliê</title>

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
                    <li class="nav-item"><a class="nav-link" href="index.php">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="bolsas.php">Bolsas</a></li>
                    <li class="nav-item"><a class="nav-link active" href="sobre.php">Sobre Mim</a></li>
                    <li class="nav-item"><a class="nav-link" href="contato.php">Contato</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <main>
        <section id="sobre" class="site-section bg-contrast" style="padding-top: 150px;">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5 text-center text-lg-start mb-4 mb-lg-0">
                        <img src="imagens/foto nis.jpg" alt="Nis Mello" class="img-fluid rounded-circle profile-image shadow-lg">
                    </div>
                    <div class="col-lg-7">
                        <h2 class="section-title">Paixão em Cada Detalhe</h2>
                        <p class="lead">Olá! Me chamo Nislaine, ou carinhosamente apelidada de Nis, a artesã por trás de cada criação que você encontra aqui. Minha jornada no mundo do artesanato começou com um amor profundo por transformar materiais simples em peças de arte únicas e funcionais.</p>
                        <p>Cada pedido é concebido com dedicação, carinho e uma busca incessante pela perfeição. Utilizo técnicas tradicionais e contemporâneas, sempre com foco na qualidade e na exclusividade. Meu ateliê é um espaço onde a criatividade floresce e cada ponto conta uma história.</p>
                        <a href="contato.php" class="btn btn-secondary-custom mt-3">Entre em Contato</a>
                    </div>
                </div>
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