import Image from 'next/image'
import styles from '@/components/project/Project.module.scss'

export const projectTags  = [
  { name: 'React', image: 'react.png' },
  { name: 'TypeScript', image: 'typescript.png' },
  { name: 'JavaScript', image: 'javascript.png' },
  { name: 'HTML', image: 'html.png' },
  { name: 'CSS', image: 'css.png' },
  { name: 'Sass', image: 'sass.png' },
  { name: 'Tailwind CSS', image: 'tailwind.png' },
  { name: 'EJS', image: 'ejs.png' },
  { name: 'Next.js', image: 'nextjs.png' },
  { name: 'Node.js', image: 'node.png' },
  { name: 'Express.js', image: 'express.png' },
  { name: 'Python', image: 'python.png' },
  { name: 'Lua', image: 'lua.png' },
  { name: 'Prisma', image: 'prisma.png' }
] as const

export type ProjectTagNames = typeof projectTags[number]['name'][]

type Props = {
  tags: ProjectTagNames
}

// Project tags component
export default function ProjectTags({ tags }: Props) {
  return (
    <div className={styles.projectTags}>
      { tags.map(tagName => {
        const tag = projectTags.find(tag => tag.name === tagName)!

        return (
          <div key={tag.name} className={styles.tag}>
            <Image src={`/icons/${tag.image}`} alt={tag.name} width={20} height={20} />
            <span>{tag.name}</span>
          </div>
        )
      })}
    </div>
  )
}