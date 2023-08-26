import Image from 'next/image'
import NavbarLinks from '@/components/navbar/NavbarLinks'
import styles from '@/components/navbar/Navbar.module.scss'

// Main navbar header component
export default function Navbar() {
  return (
    <header id="navbar" className={styles.navbar}>
      <div id={styles.left}>
        <Image src="/avatar.png" alt="logo" width={30} height={30} />
        <span>Wojtek Kulak</span>
      </div>
      <NavbarLinks />
    </header>
  )
}