import Icon from '@/components/Icon'
import styles from '@/styles/SidebarSocials.module.scss'

// Sidebar socials component
export default function SidebarSocials() {
  return (
    <div className={styles.sidebarSocials}>
      <a href="https://www.linkedin.com/in/andrew-lee-9a7a4a1b1/" target="_blank" rel="noopener noreferrer">
        <Icon name="linkedin" />
      </a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <Icon name="github" />
      </a>
    </div>
  )
}