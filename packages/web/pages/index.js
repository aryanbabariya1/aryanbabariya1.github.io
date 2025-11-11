import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Gallery } from 'react-grid-gallery'

import Layout from '../components/Layout'
import { ELEMENTS } from '../constants/Meta'
import { META } from '../constants/metadata'

const images = [
  {
    src: '/images/me.jpeg',
    width: 1080,
    height: 1080,
    caption: 'It\'s me',
  },
  {
    src: '/images/edu-minister.jpeg',
    width: 801,
    height: 571,
    caption: 'With the Education Minister of Gujarat',
  },
  {
    src: '/images/hack.jpeg',
    width: 901,
    height: 871,
    caption: 'At AIRRE Club Hackathon',
  },
  {
    src: '/images/cutie pie.jpeg',
    width: 1080,
    height: 1080,
    caption: 'Me',
  }
]

function About() {
  return (
    <>
      <Layout secondaryPage>
        <div
          style={{ marginTop: 50, paddingLeft: '15px', paddingRight: '15px' }}
        >
          <h1 className="about-h1">
            {' '}
            {META.fname} {META.lname} {/* <TextTransitionAnimation /> */}{' '}
          </h1>{' '}
          <div className="about-intro">
            <Row>
              <Col md={12}> {ELEMENTS.about} </Col>{' '}
            </Row>{' '}
          </div>{' '}
          <div className="journey-section">
            <Row>
              <Col md={12}> {ELEMENTS.journey} </Col>
            </Row>
          </div>
          <div style={{ marginTop: '60px' }}>
            <h2> Moments📸 </h2>{' '}
            <center>
              <Gallery
                images={images}
                enableImageSelection={false}
                rowHeight={350}
              />{' '}
            </center>{' '}
          </div>{' '}
        </div>{' '}
      </Layout>{' '}
    </>
  )
}

export default About
