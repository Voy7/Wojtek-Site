import Image from 'next/image'
import Header from '@/components/Header'
import SidebarSocials from '@/components/SidebarSocials'
import Canvas from '@/components/3DCanvas'
import Heading from '@/components/Heading'
import Project from '@/components/Project'
import Icon from '@/components/Icon'
import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Header />
      <SidebarSocials />
      <Canvas />
      <main>
        <section id="about" className={styles.about}>
          <Image src="/profile.png" alt="profile" width={100} height={100} />
          <h1>Wojtek Kulak</h1>
          <p className={styles.role}>Full-Stack Web Developer</p>
          <p className={styles.bio}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor quas totam consequuntur, quasi numquam amet soluta praesentium minus perferendis voluptate deserunt commodi itaque eius omnis, suscipit incidunt cum aut ratione non, corrupti dolores voluptatem ducimus at? Aliquid ab quam aliquam, obcaecati harum nobis itaque dolore, sit soluta libero corrupti in vero consectetur deleniti voluptates numquam incidunt cum similique consequatur!
          </p>
          <hr />
        </section>
        <Heading>Projects</Heading>
        <section id="projects" className={styles.projects}>
          <Project
            name="Project 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nisl nisl ultricies nisl, nec aliquam nisl nisl nec."
            tags={['React', 'JavaScript', 'HTML', 'Sass', 'Next.js', 'Node.js']}
            images={['codcsclub-1.png', 'codcsclub-2.png', 'codcsclub-3.png', 'codcsclub-4.png']}
          />
          <Project
            name="Project 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nisl nisl ultricies nisl, nec aliquam nisl nisl nec."
            tags={['React', 'TypeScript', 'HTML']}
            images={['codcsclub-1.png', 'codcsclub-2.png', 'codcsclub-3.png', 'codcsclub-4.png']}
            isSwapped
          />
          <Project
            name="Project 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nisl nisl ultricies nisl, nec aliquam nisl nisl nec."
            tags={['React', 'TypeScript', 'HTML']}
            images={['codcsclub-1.png', 'codcsclub-2.png', 'codcsclub-3.png', 'codcsclub-4.png']}
          />
          <Project
            name="Project 4"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nisl nisl ultricies nisl, nec aliquam nisl nisl nec."
            tags={['React', 'TypeScript', 'HTML']}
            images={['codcsclub-1.png', 'codcsclub-2.png', 'codcsclub-3.png', 'codcsclub-4.png']}
            isSwapped
          />
        </section>
        <section id="contact" className={styles.contact}>
          <Heading>Contact</Heading>
          <p className="info">Interested in working with me? Send an email or leave a voice message!</p>
          <div className={styles.cards}>
            <div className={styles.card}>
              <Icon name="mail" />
              <p>wkulak3@gmail.com</p>
              <a href="mailto:wkulak3@gmail.com">Send Email</a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
