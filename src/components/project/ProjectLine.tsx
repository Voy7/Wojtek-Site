import Image from 'next/image'
import styles from '@/components/project/Project.module.scss'

export type ProjectLinePos  =
  | 'none'
  | 'up-down'
  | 'up'
  | 'down'

type Props = {
  linePos: ProjectLinePos,
  lineContent: string
}

// Project tags component
export default function ProjectLine({ linePos, lineContent }: Props) {
  return (
    <div className={styles.projectLineContainer}>
      <div className={linePos == 'up-down' || linePos == 'up' ? styles.line : styles.lineInvisible}></div>
      <div className={styles.bubble}>{lineContent}</div>
      <div className={linePos == 'up-down' || linePos == 'down' ? styles.line : styles.lineInvisible}></div>
    </div>
  )
}