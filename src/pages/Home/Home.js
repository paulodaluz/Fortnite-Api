import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
          <div>
            <div>
              <section className="home_banner_area">
                <div className="banner_inner">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="banner_content">
                          <h2>Seja Bem Vindo</h2>
                          <h3>Ao maior site de Fortnite Brasileiro</h3>
                          <p></p>
                          <Link to="/">
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div
                          style={{
                            "text-transform": "uppercase",
                            "font-family": "Heebo, sans-serif"
                          }}
                          className="home_right_box"
                        >
                          <div className="home_item">
                            <Link
                              to="/register"
                              className="navbar-brand logo_h"
                              style={{ color: "white" }}
                            >
                              Registrar-se
                            </Link>
                          </div>
                          <div className="home_item">
                            <Link
                              to="/login"
                              className="navbar-brand logo_h"
                              style={{ color: "white" }}
                            >
                              Login
                            </Link>
                          </div>
                          <div className="home_item">
                            <Link
                              to="/errands"
                              className="navbar-brand logo_h"
                              style={{ color: "white" }}
                            >
                              Recados
                            </Link>
                          </div>
                          <div className="home_item">
                            <Link
                              to="/contact"
                              className="navbar-brand logo_h"
                              style={{ color: "white" }}
                            >
                              Contato
                            </Link>
                          </div>
                          <div className="home_item">
                            <Link
                              to="/charcacterList"
                              className="navbar-brand logo_h"
                              style={{ color: "white" }}
                            >
                              Personagens
                            </Link>
                          </div>
                          <div className="home_item">
                            <Link
                              to="/acessDenied"
                              className="navbar-brand logo_h"
                              style={{ color: "white" }}
                            >
                              Enem Page
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );
    }
}
