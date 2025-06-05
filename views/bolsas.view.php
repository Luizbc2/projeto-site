<main>
    <section id="bolsas" class="site-section" style="padding-top: 150px;">
        <div class="container">
            <h2 class="section-title text-center">Nossas Bolsas Exclusivas</h2>
            <p class="section-subtitle text-center">Peças únicas, feitas à mão com materiais de alta qualidade.</p>
            <div class="bag-carousel owl-carousel owl-theme mt-5">
                <?php foreach ($bolsas as $bolsa): ?>
                    <div class="item bag-item">
                        <div class="bag-img-container">
                            <img src="<?= htmlspecialchars($bolsa['imagem']) ?>" alt="<?= htmlspecialchars($bolsa['alt']) ?>" class="img-fluid">
                            <div class="bag-hover-overlay">
                                <h4 class="overlay-title"><?= htmlspecialchars($bolsa['overlay_titulo']) ?></h4>
                                <p class="overlay-text"><?= htmlspecialchars($bolsa['overlay_texto']) ?></p>
                                <a href="index.php?page=contato" class="btn btn-primary-custom btn-sm">Encomendar</a>
                            </div>
                        </div>
                        <h3 class="bag-name"><?= htmlspecialchars($bolsa['nome']) ?></h3>
                        <p class="bag-description"><?= htmlspecialchars($bolsa['descricao']) ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
            <div class="text-center mt-5">
                <a href="index.php?page=contato" class="btn btn-primary-custom">Encomende a Sua!</a>
            </div>
        </div>
    </section>
</main>