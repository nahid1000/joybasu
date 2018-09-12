import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';


class Landingpage extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.touretteroma.it/images/tourette/avatar-male.png"
              alt="avatar"
              className="avatar-img"
              />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr/>
              <p>HTML/CSS | Bootstrop | JavaScript | React | NodeJS | Express | MongoDB</p>
              <div className="social-links">

                {/* LinkedIn */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Freecodecamp */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>

                {/* Youtube */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>

                {/* Youtube */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                    {/* Youtube */}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                      <i className="fa fa-twitter-square" aria-hidden="true" />
                    </a>
                </a>

              </div>
            </div>

          </Cell>
        </Grid>

      </div>
    )
  }
}

export default Landingpage;
