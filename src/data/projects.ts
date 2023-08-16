type Project = {
  name: string,
  description: string,
  githubURL?: string,
  demoURL?: string,
  tags: string[],
  images: string[]
}

const projects: Project[] = [
  {
    name: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc. Donec euismod, nisl eget ultricies ultrices, nunc nunc aliquet nunc, vitae aliquam nunc nunc vitae nunc.',
    githubURL: 'https://github.com',
    demoURL: 'https://github.com',
    tags: ['React', 'TypeScript', 'TailwindCSS'],
    images: ['https://via.placeholder.com/500x300', 'https://via.placeholder.com/500x300']
  }
]