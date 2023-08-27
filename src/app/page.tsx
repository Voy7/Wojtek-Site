import Image from 'next/image'
import Navbar from '@/components/navbar/Navbar'
import SidebarSocials from '@/components/SidebarSocials'
import Canvas from '@/components/3DCanvas'
import Heading from '@/components/Heading'
import Project from '@/components/project/Project'
import IconText from '@/components/IconText'
import ContactCard from '@/components/ContactCard'
import styles from '@/app/Home.module.scss'

export default function Home() {
  return (
    <>
      <Navbar />
      <SidebarSocials />
      <Canvas />
      <main>
        <section id="about" className={styles.about}>
          <div className={styles.left}>
            <Image src="/profile.png" alt="profile" width={100} height={100} />
            <h1>Wojtek Kulak</h1>
            <Heading>FULL-STACK DEVELOPER</Heading>
          </div>
          <p className={styles.bio}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor quas totam consequuntur, quasi numquam amet soluta praesentium minus perferendis voluptate deserunt commodi itaque eius omnis, suscipit incidunt cum aut ratione non, corrupti dolores voluptatem ducimus at? Aliquid ab quam aliquam, obcaecati harum nobis itaque dolore, sit soluta libero corrupti in vero consectetur deleniti voluptates numquam incidunt cum similique consequatur!
          </p>
        </section>
        <section id="projects" className={styles.projects}>
          <Heading id="projects">MY PROJECTS</Heading>
          <Project
            name="codcsclub.com"
            description="codcsclub.com is the official website for the College of Dupage Computer Science Club. It provides an introduction about the club to new members and partners. The site also provides a place to catalog all of our projects and contributing team members."
            tags={['React', 'JavaScript', 'HTML', 'Sass', 'Next.js', 'Node.js']}
            images={['codcsclub-1.png', 'codcsclub-2.png', 'codcsclub-3.png', 'codcsclub-4.png']}
            linePos="down" lineContent="1"
            githubURL="https://github.com/cod-cs-club/codcsclub"
            visitURL="https://codcsclub.com"
          />
          <Project
            name="VPAC-Suite"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nisl nisl ultricies nisl, nec aliquam nisl nisl nec."
            tags={['EJS', 'JavaScript', 'HTML', 'CSS', 'Express.js', 'Lua']}
            images={['vpac-1.png', 'vpac-2.png', 'vpac-3.png', 'vpac-4.png']}
            linePos="up-down" lineContent="2"
            githubURL="https://github.com/Voy7/VPAC-Suite"
            isSwapped
          />
          <Project
            name="N.D.Q.E"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nisl nisl ultricies nisl, nec aliquam nisl nisl nec."
            tags={['React', 'TypeScript', 'HTML', 'Sass', 'Next.js', 'Node.js']}
            images={['ndqe-1.png', 'ndqe-2.png', 'ndqe-3.png']}
            linePos="up-down" lineContent="3"
          />
          <Project
            name="Project 4"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nisl nisl ultricies nisl, nec aliquam nisl nisl nec."
            tags={['React', 'TypeScript', 'HTML']}
            images={['codcsclub-1.png', 'codcsclub-2.png', 'codcsclub-3.png', 'codcsclub-4.png']}
            linePos="up" lineContent="4"
            isSwapped
          />
        </section>
        <section className={styles.skills}>
          <Heading id="skills">MY SKILLS</Heading>
          <div className={styles.columns}>
            <section>
              <h2>LANGUAGES</h2>
              <div className={styles.list}>
                <IconText tag="TypeScript" />
                <IconText tag="JavaScript" />
                <IconText tag="HTML" />
                <IconText tag="CSS" />
                <IconText tag="Python" />
                <IconText tag="Lua" />
              </div>
            </section>
            <section>
              <h2>LIBRARIES</h2>
              <div className={styles.list}>
                <IconText tag="React" />
                <IconText tag="Next.js" />
                <IconText tag="Express.js" />
                <IconText tag="Sass" />
                <IconText tag="EJS" />
                <IconText tag="Prisma" />
              </div>
            </section>
            <section>
              <h2>OTHER</h2>
              <div className={styles.list}>
                <IconText icon="arrow-right" text="SQL Databases" />
                <IconText icon="arrow-right" text="Linux Dev Ops" />
                <IconText icon="arrow-right" text="AWS" />
                <IconText icon="arrow-right" text="Git" />
              </div>
            </section>
          </div>
        </section>
        <section className={styles.contact}>
          <Heading id="contact">CONTACT ME</Heading>
          <p className="info">Interested in working with me? Send an email or leave a message!</p>
          <div className={styles.cards}>
            <ContactCard
              icon="mail"
              descriptionText={<>Email me:<br />wkulak3@gmail.com</>}
              buttonText="Send Email"
              href="mailto:wkulak3@gmail.com"
            />
            <ContactCard
              icon="linkedin-alt"
              descriptionText={<>Message me on<br />LinkedIn</>}
              buttonText="Open LinkedIn"
              href="https://www.linkedin.com/in/wojtek-kulak-6804b0235/"
            />
          </div>
        </section>
      </main>
    </>
  )
}
