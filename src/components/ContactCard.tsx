import Icon, { IconNames } from '@/components/Icon'
import styles from '@/components/ContactCard.module.scss'

type Props = {
  icon: IconNames,
  title: string,
  description: string,
  buttonText: string,
  href: string
}

// Contact card component
export default function ContactCard({
  icon,
  title,
  description,
  buttonText,
  href
}: Props) {
  return (
    <div className={styles.contactCard}>
      <Icon name={icon} className={styles.icon} />
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={href}>
          {buttonText} <Icon name="visit" />
        </a>
      </div>
    </div>
  )
}