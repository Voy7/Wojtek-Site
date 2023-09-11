'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ProjectTags, { ProjectTagNames } from '@/components/project/ProjectTags'
import ProjectImages from '@/components/project/ProjectImages'
import ProjectLine, { ProjectLinePos } from '@/components/project/ProjectLine'
import Icon from '@/components/Icon'
import styles from '@/components/project/Project.module.scss'

type Props = {
  name: string,
  description: string,
  tags: ProjectTagNames,
  images: string[],
  linePos: ProjectLinePos,
  lineContent: string,
  githubURL?: string,
  visitURL?: string,
  isSwapped?: boolean
}

// Project component
export default function Project({
  name,
  description,
  tags,
  images,
  linePos,
  lineContent,
  githubURL,
  visitURL,
  isSwapped = false
}: Props) {
  const control = useAnimation()
const [ref, inView] = useInView({ threshold: 0.3 })

useEffect(() => {
  if (inView) control.start("visible")
  else control.start("hidden")
}, [control, inView])

  return (
    <div className={styles.project}>
      <motion.div
        className={`${styles.content} ${isSwapped ? styles.swapped : ''}`}
        ref={ref}
        animate={control}
        initial="hidden"
        variants={{
          visible: { x: 0, opacity: 1 },
          hidden: { x: isSwapped ? 100 : -100, opacity: 0 }
        }}
        transition={{ duration: 0.25, delay: 0.25 }}
      >
        <div className={styles.left}>
          <header>
            <h2>{name}</h2>
            <div className={styles.links}>
              { githubURL && (
                <a href={githubURL} target="_blank" rel="noopener noreferrer" data-tooltip="View Repository">
                  <Icon name="github" />
                </a>
              )}
              { visitURL && (
                <a href={visitURL} target="_blank" rel="noopener noreferrer" data-tooltip="Visit Site">
                  <Icon name="visit" />
                </a>
              )}
            </div>
          </header>
          <p>{description}</p>
          <ProjectTags tags={tags} />
        </div>
        <ProjectImages images={images} />
      </motion.div>
      <ProjectLine linePos={linePos} lineContent={lineContent} />
    </div>
  )
}