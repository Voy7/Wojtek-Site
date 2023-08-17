import Icon, { IconNames } from '@/components/Icon'
import styles from '@/styles/ContactCard.module.scss'

type Props = {
  icon: IconNames,
  descriptionText: React.ReactNode,
  buttonText: string,
  href: string
}

// Contact card component
export default function ContactCard({
  icon,
  descriptionText,
  buttonText,
  href
}: Props) {
  return (
    <div className={styles.contactCard}>
      <Icon name={icon} />
      <p>{descriptionText}</p>
      <a href={href}>{buttonText}</a>
    </div>
  )
}