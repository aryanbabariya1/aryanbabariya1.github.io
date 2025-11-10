import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Gallery } from 'react-grid-gallery'

import Layout from '../components/Layout'
import { ELEMENTS } from '../constants/Meta'
import { META } from '../constants/metadata'

const images = [
  {
    src: '/images/hack.jpeg',
    width: 901,
    height: 871,
    caption: 'It\'s a me!',
  },
  {
    src: '/images/edu-minister.jpeg',
    width: 1201,
    height: 871,
    caption: 'Meeting with the Education Minister of Gujarat',
  },
  {
    src: '/images/me.jpeg',
    width: 3242,
    height: 3024,
    caption: 'Giving speech at the event',
  },
  {
    src: '/images/cutie-pie.jpeg',
    width: 901,
    height: 891,
    caption: 'Hmmm'
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
            <br /> <br />
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
