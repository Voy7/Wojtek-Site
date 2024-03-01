'use client'

import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
import Heading from '@/components/Heading'
import Icon from '@/components/Icon'
import styles from './AboutSection.module.scss'
import { useState } from 'react'

// About section component
export default function AboutSection() {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false)
  
  return (
    <section id="about" className={styles.about}>
      <div className={styles.left}>
        <Image
          src="/profile.png" alt="profile"
          width={100} height={100}
          className={imageLoaded ? undefined : styles.hidden}
          onLoad={() => setImageLoaded(true)}
        />
        <h1>Wojtek Kulak</h1>
        <Heading>FULL-STACK DEVELOPER</Heading>
      </div>
      <div className={styles.right}>
        <p className={styles.bio}>Passionate for both <span>front-end & back-end</span> web development. I love to learn new technologies and create the best possible user experience for all my <span>websites & web apps</span>.</p>
        <div className={styles.typingText}>
          <Icon name="arrow-right" />
          <TypeAnimation
            sequence={[
              'Using TypeScript', 3000,
              'Using React', 3000,
              'Using Next.js', 3000,
              'Using Python', 3000,
              'Using Rust', 3000,
            ]}
            repeat={Infinity}
          />
        </div>
      </div>
    </section>
  )
}