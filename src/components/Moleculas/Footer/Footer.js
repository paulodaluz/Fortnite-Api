import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
          <div>
            <footer className="footer_area p_120">
              <div className="container">
                <div className="row footer_inner">
                  <div className="col-lg-5 col-sm-6">
                    <aside className="f_widget ab_widget">
                      <div className="f_title">
                        <h3>Sobre mim</h3>
                      </div>
                      <p>
                        Fascinado por tecnologia, contato com a área de TI desde
                        os 15 anos, possuo agilidade, determinação e
                        produtividade.
                        <br /> Desenvolvedor, Cursando Ciências da Computação e
                        em busca de conhecimento/oportunidades nas diversas
                        linguagens/áreas de programação e TI.
                      </p>
                    </aside>
                  </div>

                  <div className="col-lg-5 col-sm-6">
                    <aside className="f_widget news_widget">
                      <div className="f_title">
                        <h3>Contato</h3>
                      </div>
                      <h4>Nome: Paulo Ricardo Da Luz Júnior</h4>
                      <p>
                        Email: 1116505@imed.edu.br
                      </p>
                      <div id="mc_embed_signup">
                            <div className="input-group d-flex flex-row">
                      
                        </div>
                        <div className="mt-10 info"></div>
                      </div>
                    </aside>
                  </div>

                  <div className="col-lg-2">
                    <aside className="f_widget social_widget">
                      <div className="f_title">
                        <h3>Me siga nas rede sociais</h3>
                      </div>
                      <p>Redes Sociais</p>
                      <ul className="list">
                        <li>
                          <a href="https://www.facebook.com/PauloDaLuzz">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/Paulo_Luzz">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/paulo-ricardo-da-luz-j%C3%BAnior-5a3953164/">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/paulodaluz">
                            <i className="fa fa-github"></i>
                          </a>
                        </li>
                      </ul>
                    </aside>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        );
    }
}
