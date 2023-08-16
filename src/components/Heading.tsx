'use client'

import { useInView } from 'react-intersection-observer'
import styles from '@/styles/Heading.module.scss'

type Props = {
  children: React.ReactNode,
  props?: React.HTMLAttributes<HTMLHeadingElement>
}

// Heading text component
export default function Heading({ children, ...props }: Props) {
  const [ref, inView] = useInView()

  return (
    <h2
      className={`${styles.heading} ${inView ? styles.show : ''}`}
      ref={ref}
      {...props}
    >{children}</h2>
  )
}