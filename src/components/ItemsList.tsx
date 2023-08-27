'use client'

import { useInView } from 'react-intersection-observer'
import styles from '@/components/ItemsList.module.scss'

type Props = {
  children: React.ReactNode,
  className?: string
}

// Animated items list component
export default function ItemsList({ children, className }: Props) {
  const [ref, inView] = useInView()

  return (
    <div ref={ref} className={`${styles.itemsList} ${className} ${inView ? styles.show : ''}`}>
      {children}
    </div>
  )
}