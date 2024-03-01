'use client'

import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'
import Icon from '@/components/Icon'
import styles from './ImagesViewer.module.scss'

type Props = {
  isOpen: boolean,
  setClose: () => void,
  images: string[]
}

// Images viewer carousel component
export default function ImagesViewer({ isOpen, setClose, images }: Props) {
  const [show, setShow] = useState<boolean>(isOpen)
  const [image, setImage] = useState<number>(0)

  // Sync 'show' state with isOpen and animation delay
  useEffect(() => {
    if (isOpen) {
      setShow(true)
      return
    }

    setTimeout(() => {
      setShow(false)
    }, 350) // Animation duration
  }, [isOpen])

  // Escape key press logic
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!show) return

      if (event.key === 'Escape') {
        event.preventDefault()
        setClose()
      }

      // Use left/right arrow keys to cycle through images
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        previousImage()
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        nextImage()
      }
    }
    
    document.addEventListener('keydown', handleKeyDown)
    return () => { document.removeEventListener('keydown', handleKeyDown) }
  }, [show, image])

  function nextImage(event?: React.MouseEvent) {
    event?.stopPropagation()
    if (image < images.length - 1) setImage(image + 1)
    else setImage(0)
  }

  function previousImage(event?: React.MouseEvent) {
    event?.stopPropagation()
    if (image > 0) setImage(image - 1)
    else setImage(images.length - 1)
  }

  if (!show) return null

  return createPortal(
    <div className={isOpen ? `${styles.backdrop} ${styles.show}` : styles.backdrop} onClick={setClose}>
      <div className={isOpen ? `${styles.container} ${styles.show2}` : styles.container}>
        <div className={styles.topBar}>
          <p onClick={(event) => event.stopPropagation()}>{image + 1}/{images.length} Images</p>
          <button title="Close Image Gallery" onClick={setClose}>
            <Icon name="close" />
          </button>
        </div>
        <button className={styles.cycle} onClick={previousImage}>&lt;</button>
        <div className={styles.images}>
          { images.map((img, index) => (
            <img
              key={index}
              src={`/projects/${img}`}
              alt="Project image"
              className={index === image ? styles.show : ''}
              onClick={(event) => event.stopPropagation()}
            />
          ))}
        </div>
        <button className={styles.cycle} onClick={nextImage}>&gt;</button>
      </div>
    </div>,
    document.body
  )
}