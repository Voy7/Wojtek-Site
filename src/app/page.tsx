import Image from 'next/image'
import Navbar from '@/components/navbar/Navbar'
import SidebarSocials from '@/components/SidebarSocials'
import Canvas from '@/components/3DCanvas'
import Heading from '@/components/Heading'
import Project from '@/components/project/Project'
import ItemsList from '@/components/ItemsList'
import IconText from '@/components/IconText'
import Icon from '@/components/Icon'
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
            Passionate for both <span>front-end & back-end</span> web development. I love to learn new technologies and create the best possible user experience for all my <span>websites & web apps</span>.
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
            description="A full-stack application for the game DCS World that provides a web interface complete with dynamic moving maps, mission imports, statistics, and so much more!"
            tags={['EJS', 'JavaScript', 'HTML', 'CSS', 'Express.js', 'Lua']}
            images={['vpac-1.png', 'vpac-2.png', 'vpac-3.png', 'vpac-4.png']}
            linePos="up-down" lineContent="2"
            githubURL="https://github.com/Voy7/VPAC-Suite"
            isSwapped
          />
          <Project
            name="Stock AI Alca"
            description="A site able to predict future stock prices using an AI model with TensorFlow. This project was in collaboration with the CS club at College of Dupage."
            tags={['React', 'JavaScript', 'HTML', 'CSS', 'Python']}
            images={['alca-1.png', 'alca-2.png', 'alca-3.png']}
            linePos="up-down" lineContent="3"
            githubURL="https://github.com/cod-cs-club/almightycandle"
            visitURL="https://almightycandle.com/"
            />
          <Project
            name="N.D.Q.E"
            description="A browser extension + website that allows you to find the correct answer in practice/open-note quizes. This saves you time by displaying answers directly on the page without having to copy and paste."
            tags={['React', 'TypeScript', 'HTML', 'Sass', 'Next.js', 'Node.js']}
            images={['ndqe-1.png', 'ndqe-2.png', 'ndqe-3.png']}
            linePos="up" lineContent="4"
            isSwapped
          />
        </section>
        <section className={styles.skills}>
          <Heading id="skills">MY SKILLS</Heading>
          <ItemsList className={styles.columns}>
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
          </ItemsList>
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
        <footer className={styles.footer}>
          Also, this website is&nbsp;<u>not</u>&nbsp;a template,&nbsp;
          <a href="https://github.com/Voy7/Wojtek-Site" target="_blank" rel="noopener noreferrer">check out the source code</a>!
          <Icon name="github" />
        </footer>
      </main>
    </>
  )
}
