'use client'

import { useInView } from 'react-intersection-observer'
import styles from '@/components/Heading.module.scss'

// Be able to pass in all default props for h1
type Props = {
  children?: React.ReactNode,
  id?: string
}

// Heading text component
export default function Heading({ children, ...props }: Props) {
  const [ref, inView] = useInView({ threshold: 0.5 })

  return (
    <h2
      className={`${styles.heading} ${inView ? styles.show : ''}`}
      ref={ref}
      {...props}
    >{children}</h2>
  )
}