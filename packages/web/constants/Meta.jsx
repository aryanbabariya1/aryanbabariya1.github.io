import React from 'react'
import Link from 'next/link'
import { META } from './metadata'

export const ELEMENTS = {
  mainText: (
    <>
      Essays <span className="amp">&</span> Writings
    </>
  ),
  about: (
    <>
      I’m a 20-year-old AI Engineer at Edutor, building a platform that personalizes the learning 
      experience through agentic AI, aiming to bridge the gap in the education industry.
      <br />
      <br />I’m deeply interested in how intelligent systems can transform how students learn and 
      teachers teach.
      <br />
      <br />Beyond work, I enjoy reading non-fiction, especially books on technology and business, 
      which help me think critically about innovation and impact.
      <br />
      <br />I’ve participated in{' '}
      <a href="https://x.com/two_platforms/status/1920236315989467558" target="_blank" rel="noopener noreferrer">
      Gujarat’s first residential camp
      </a>{' '}
      and am a proud member of the{' '}
      <a href="https://x.com/airr_club" target="_blank" rel="noopener noreferrer">
      AIRRE Club
      </a>{' '}
      a mission-driven acceleration firm nurturing future talent in AI, robotics, and 
      frontier technologies.
      <br />
      <br />
      <a href={`mailto:${META.email}`}>{META.email}</a>﹒{' '}
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a
        href={`https://twitter.com/${META.social.twitter}`}
        target="_blank"
        rel="noopener"
      >
        Twitter
      </a>
    </>
  ),
  belowArticle: ``,
}
