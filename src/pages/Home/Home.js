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
                            {/* <Button className="banner_btn" variant="light">
                              Enviar um Email
                            </Button> */}
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
                              to="/pessoas"
                              className="navbar-brand logo_h"
                              style={{ color: "white" }}
                            >
                              Pessoas
                            </Link>
                          </div>
                          <div className="home_item">
                            <Link
                              to="/filmes"
                              className="navbar-brand logo_h"
                              style={{ color: "white" }}
                            >
                              Filmes
                            </Link>
                          </div>
                          <div className="home_item">
                            <Link
                              to="/planetas"
                              className="navbar-brand logo_h"
                              style={{ color: "white" }}
                            >
                              Planetas
                            </Link>
                          </div>
                          <div className="home_item">
                            <Link
                              to="/species"
                              className="navbar-brand logo_h"
                              style={{ color: "white" }}
                            >
                              Espécies
                            </Link>
                          </div>
                          <div className="home_item">
                            <Link
                              to="/starships"
                              className="navbar-brand logo_h"
                              style={{ color: "white" }}
                            >
                              Naves
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
