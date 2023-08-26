import Image from 'next/image'
import Icon, { IconNames } from '@/components/Icon'
import { projectTags, ProjectTagNames } from '@/components/project/ProjectTags'
import styles from '@/components/IconText.module.scss'

type Props = {
  icon?: IconNames
  text?: React.ReactNode
  tag?: ProjectTagNames[number]
}

// Icon-text component
export default function IconText({ icon, text, tag }: Props) {
    const tagData = tag ? projectTags.find(f => f.name === tag)! : null

  return (
    <div className={styles.iconText}>
      { icon && text && (
        <>
          <Icon name={icon} />
          {text}
        </>
      )}
      { tagData && (
        <>
          <Image src={`/icons/${tagData.image}`} alt={tagData.name} width={20} height={20} />
          {tagData.name}
        </>
      )}
    </div>
  )
}