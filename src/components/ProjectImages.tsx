'use client'

import { useRef, useEffect } from 'react'
import styles from '@/styles/Project.module.scss'

type Props = {
  // images: React.ReactNode[]
  images: string[]
}

// Project images gallery component
export default function ProjectImages({ images }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let currentImage = 0
    const elements = containerRef.current!.querySelectorAll('img')

    function nextImage() {
      elements.forEach(element => element.classList.remove(styles.show))
      
      setTimeout(() => {
        elements[currentImage].classList.add(styles.show)
      }, 300) // Transition delay
      
      if (currentImage < elements.length - 1) currentImage++
      else currentImage = 0
    }

    // Switch image every 5 seconds
    const imageInterval = setInterval(nextImage, 5000)
    nextImage()

    return () => {
      clearInterval(imageInterval)
    }
  }, [])

  return (
    <div ref={containerRef} className={styles.projectImages}>
      { images.map((image, index) => {
        return <img key={index} src={`/projects/${image}`} alt="Project image" />
      })}
    </div>
  )
}