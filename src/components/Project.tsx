'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ProjectTags, { ProjectTagNames } from '@/components/ProjectTags'
import ProjectImages from '@/components/ProjectImages'
import styles from '@/styles/Project.module.scss'

type Props = {
  name: string,
  description: string,
  githubURL?: string,
  demoURL?: string,
  tags: ProjectTagNames,
  images: string[],
  isSwapped?: boolean
}

// Project component
export default function Project({
  name,
  description,
  tags,
  images,
  isSwapped = false
}: Props) {
  const control = useAnimation()
const [ref, inView] = useInView()

useEffect(() => {
  if (inView) control.start("visible")
  else control.start("hidden")
}, [control, inView])

  return (
    <motion.div
      className={`${styles.project} ${isSwapped ? styles.swapped : ''}`}
      ref={ref}
      animate={control}
      initial="hidden"
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { x: isSwapped ? 500 : -500, opacity: 0 }
      }}
      transition={{ duration: 0.25, delay: 0.25 }}
    >
      <div className={styles.left}>
        <h2>{name}</h2>
        <p>{description}</p>
        <ProjectTags tags={tags} />
      </div>
      <ProjectImages images={images} />
    </motion.div>
  )
}