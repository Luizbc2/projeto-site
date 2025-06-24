<main>
    <section id="contato" class="site-section" style="padding-top: 150px;">
        <div class="container">
            <h2 class="section-title text-center">Fale Comigo</h2>
            <p class="section-subtitle text-center">Adoraria ouvir de você! Envie sua mensagem, tire dúvidas ou faça sua encomenda.</p>
            <div class="row justify-content-center mt-5">
                <div class="col-lg-11">
                    <div class="unified-contact-block">
                        <div class="row align-items-stretch">
                            <div class="col-lg-7">
                               <form id="contactForm" action="https://formsubmit.co/luiz.otavio3213@gmail.com" method="POST">
                                    <h3 class="form-section-title mb-4">Envie uma Mensagem</h3>
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label for="nome" class="form-label">Nome Completo</label>
                                            <input type="text" class="form-control" id="nome" name="nome" placeholder="Seu nome" required>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="email" class="form-label">Seu Melhor E-mail</label>
                                            <input type="email" class="form-control" id="email" name="email" placeholder="seuemail@exemplo.com" required>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label for="produtoInteresse" class="form-label">Produto de Interesse</label>
                                            <select id="produtoInteresse" name="produto_interesse" class="form-select">
                                                <option selected>Selecione um produto...</option>
                                                <option>Frasqueira</option>
                                                <option>Mochila com estojo</option>
                                                <option>Kit para estudantes</option>
                                                <option>Bolsinha para praia</option>
                                                <option>Necessaire Temática</option>
                                                <option>Outro (especificar na mensagem)</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Como nos conheceu?</label>
                                            <div class="dropdown">
                                                <button class="btn dropdown-toggle form-control text-start" type="button" id="dropdownComoConheceu" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Selecione uma opção...
                                                </button>
                                                <ul class="dropdown-menu" aria-labelledby="dropdownComoConheceu">
                                                    <li><a class="dropdown-item" href="#">Instagram</a></li>
                                                    <li><a class="dropdown-item" href="#">Indicação de amigos</a></li>
                                                    <li><a class="dropdown-item" href="#">Outro</a></li>
                                                </ul>
                                            </div>
                                            <input type="hidden" name="comoConheceu" id="comoConheceuInput">
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="mensagem" class="form-label">Sua Mensagem</label>
                                        <textarea class="form-control" id="mensagem" name="mensagem" rows="4" placeholder="Deixe os detalhes do seu pedido ou sua dúvida aqui..." required></textarea>
                                    </div>
                                    <div class="mb-3">
                                         <label class="form-label">Sua avaliação do Ateliê:</label>
                                         <div class="star-rating">
                                            <input type="radio" id="5-stars" name="rating" value="5" /><label for="5-stars" class="fa fa-star"></label>
                                            <input type="radio" id="4-stars" name="rating" value="4" /><label for="4-stars" class="fa fa-star"></label>
                                            <input type="radio" id="3-stars" name="rating" value="3" /><label for="3-stars" class="fa fa-star"></label>
                                            <input type="radio" id="2-stars" name="rating" value="2" /><label for="2-stars" class="fa fa-star"></label>
                                            <input type="radio" id="1-star" name="rating" value="1" /><label for="1-star" class="fa fa-star"></label>
                                         </div>
                                    </div>
                                    <div class="text-center mt-4">
                                        <button type="submit" id="submitContactForm" class="btn btn-primary-custom btn-md">Enviar Mensagem por E-mail</button>
                                    </div>
                                </form>
                            </div>
                            <div class="col-lg-5 direct-contact-pane">
                                <div class="text-center">
                                    <h3 class="form-section-title mb-4">Contato Direto</h3>
                                    <p class="lead mb-3">Prefere uma resposta imediata?</p>
                                    <p class="mb-4">Clique no botão abaixo para me chamar diretamente no WhatsApp! Você pode preencher os campos ao lado para adiantar seu atendimento.</p>
                                    <a href="https://wa.me/<?= WHATSAPP_NUMBER ?>" id="whatsappFormButton" class="btn btn-success btn-lg whatsapp-button" target="_blank">
                                        <i class="fab fa-whatsapp"></i> Falar no WhatsApp
                                    </a>
                                    <hr class="my-4">
                                    <p class="lead mb-3">Veja mais do meu trabalho!</p>
                                    <p class="mb-3">Siga-me no Instagram para novidades e inspirações.</p>
                                    <a href="<?= INSTAGRAM_URL ?>" class="btn btn-lg direct-contact-button instagram-button" target="_blank">
                                        <i class="fab fa-instagram"></i> Ver no Instagram
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</main>