import Icon from '@/components/Icon'
import styles from '@/components/SidebarSocials.module.scss'

// Sidebar socials component
export default function SidebarSocials() {
  return (
    <div className={styles.sidebarSocials}>
      <a href="https://www.linkedin.com/in/wojtek-kulak-6804b0235/" target="_blank" rel="noopener noreferrer" data-tooltip-right="My LinkedIn">
        <Icon name="linkedin" />
      </a>
      <a href="https://github.com/Voy7" target="_blank" rel="noopener noreferrer" data-tooltip-right="My GitHub">
        <Icon name="github" />
      </a>
      <a href="mailto:wkulak3@gmail.com" data-tooltip-right="wkulak3@gmail.com">
        <Icon name="mail" />
      </a>
    </div>
  )
}