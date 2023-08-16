import Image from 'next/image'
import HeaderNavbar from '@/components/HeaderNavbar'
import styles from '@/styles/Header.module.scss'

// Main header component
export default function Navbar() {
  return (
    <header id="header" className={styles.header}>
      <div id={styles.left}>
        <Image src="/avatar.png" alt="logo" width={30} height={30} />
        <span>Wojtek Kulak</span>
      </div>
      <HeaderNavbar />
    </header>
  )
}