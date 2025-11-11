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
      I’m a 20-year-old AI Engineer at{' '} <a href="https://edutorapp.com" target="_blank" rel="noopener noreferrer">
      Edutor App </a>{', '}
      building a platform that personalizes the learning experience through agentic AI, aiming to bridge the gap in the education industry.
      I’m deeply interested in how intelligent systems can transform how students learn and teachers teach.

      <br /><br />

      Beyond work, I enjoy reading non-fiction, especially books on technology and business, which help me think critically about innovation and impact.

      <br /><br />

      I’ve participated in{' '} <a href="https://x.com/two_platforms/status/1920236315989467558" target="_blank" rel="noopener noreferrer">
      Gujarat’s first residential camp </a>{' '}and am a proud member of the{' '} <a href="https://x.com/airr_club" target="_blank" rel="noopener noreferrer">
      AIRRE Club </a>{', '}
      a mission-driven acceleration firm nurturing future talent in AI, robotics, and frontier technologies.

      <br /><br />

      Here’s a glimpse into my journey so far:

      <br />

      2020 — Uploaded my first YouTube video, marking the beginning of my digital journey.<br />
      2021 — Started and operated an e-commerce business.<br />
      2022 — Wrote my first lines of JavaScript, stepping into programming.<br />
      2023 — Built my own social media platform from scratch.<br />
      2024 — Became the runner-up in a regional-level book review competition.<br />
      2025 — Participated in a 3-day AI camp & hackathon in Palanpur.<br />
      May — Joined AIRRE Club and began working on a Voice AI model.<br />
      November — Joined Edutor, expanding my practical experience in applied AI.<br />
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
