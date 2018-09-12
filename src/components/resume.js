import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';



class Resume extends Component {
  render() {
    return(
      <div>
      <Grid>
        <Cell col={4}>
          <div style={{textAlign: 'center'}}>
            <img
              src="https://www.touretteroma.it/images/tourette/avatar-male.png"
              alt="avatar"
              style={{height: '200px'}}
              />

          </div>
          <h2 style={{paddingTop: '2em'}}>Joy Basu</h2>
          <h4 style={{color: 'gray'}}>Programmer</h4>
          <hr style={{borderTop: '3px solid #833fb2',width: '50%'}}/>

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
          <hr style={{borderTop: '3px solid #833fb2',width: '50%'}}/>
          <h5>Address</h5>
          <p>7700 Rajbari,Dhaka </p>
          <h5>Phone</h5>
          <p>+88 01710016802</p>
          <h5>Email</h5>
          <p>joybuso2645@gmail.com</p>
          <h5>Web</h5>
          <p>www.joybuso.com</p>
          <hr style={{borderTop: '3px solid #833fb2',width: '50%'}}/>
      </Cell>
        <Cell className="resume-right-col" col={8}>
          <h2>Education</h2>

          <Education
            startYear={2010}
            endYear={2014}
            schoolName="Rajbari Gov't Collage"
            schoolDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classica"
            />

            <Education
              startYear={2007}
              endYear={2009}
              schoolName="Rajbari Gov't Collage"
              schoolDescription="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classica"
              />
            <hr
              style={{borderTop:'3px solid #e22947'}}
              />

            <h2>Experience</h2>

            <Experience
              startYear={2010}
              endYear={2013}
              jobName="First Job"
              jobDescription="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
              />

              <Experience
                startYear={2013}
                endYear={2016}
                jobName="Second Job"
                jobDescription="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                />
                <hr
                  style={{borderTop:'3px solid #e22947'}}
                  />
                <h2>Skills</h2>
                    <Skills
                      skill="Javascript"
                      progress={100}
                      />

                      <Skills
                        skill="HTML/CSS"
                        progress={100}
                        />
                        <Skills
                          skill="React"
                          progress={90}
                          />
                          <Skills
                            skill="NodeJS"
                            progress={75}
                            />
                            <Skills
                              skill="Python"
                              progress={60}
                              />
                        <Skills
                          skill="PHP"
                          progress={50}
                              />
        </Cell>
      </Grid>
      </div>
    )
  }
}

export default Resume;
