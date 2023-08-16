'use client'

import { useState, useEffect } from 'react'
import styles from '@/styles/Header.module.scss'

const sections = [
  { name: 'About Me', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' }
] as const

// Navbar for header component
export default function HeaderNavbar() {
  const [section, setSection] = useState<string>('about')

  function moveToSection(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault()
    const id = (e.target as HTMLAnchorElement).href.split('#')[1]
    const element = document.querySelector(`#${id}`) as HTMLElement | null
    if (!element) return

    const headerHeight = (document.querySelector('#header') as HTMLElement).offsetHeight

    window.scrollTo({ top: element.offsetTop - headerHeight - 10, behavior: 'smooth' })
  }

  // Change active section based on which section is closest to the middle of the screen
  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = document.querySelector(`#${section.id}`) as HTMLElement | null
        if (!element) continue

        const elementTop = element.offsetTop
        const elementBottom = elementTop + element.offsetHeight

        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          setSection(section.id)
          break
        }
      }
    }

    // Run on scroll or viewport resize
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  // Move underline element to the active section
  useEffect(() => {
    const underline = document.querySelector('#underline') as HTMLElement
    const activeLink = document.querySelector(`a[href="#${section}"]`) as HTMLElement | null
    if (!activeLink) return

    // Element starts invisible, so remove opacity
    underline.style.opacity = '1'
    setTimeout(() => underline.style.transition = '300ms ease-in-out', 100)

    const offset = (activeLink.offsetWidth - underline.offsetWidth) / 2
    underline.style.left = `${activeLink.offsetLeft + offset}px`
  }, [section])

  return (
    <nav id={styles.navbar}>
      <div id="underline" className={styles.underline}></div>
      { sections.map(sec => {
        return (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            onClick={moveToSection}
            className={section === sec.id ? styles.active : ''}
          >{sec.name}</a>
        )
      })}
    </nav>
  )
}