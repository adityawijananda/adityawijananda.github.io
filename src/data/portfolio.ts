export const profile = {
  name: 'PUTU SURYA ADITYA WIJANANDA',
  title: 'Fullstack Developer',
  location: 'Denpasar, Bali',
  phone: '+62 813-5956-3247',
  email: 'suryaaditya000@gmail.com',
  summary:
    'Highly motivated Fullstack Developer with a double degree in Information Technology and Computer Science. Proven experience in building responsive web applications using Laravel, Angular, and Node.js. Expertise in optimizing site performance, implementing RESTful APIs, and technical mentoring. Passionate about clean code, scalable architecture, and delivering high-performance user experiences.',
};

export const skillCategories = [
  {
    title: 'Languages',
    items: [
      { name: 'PHP', icon: 'php' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'SQL', icon: 'mysql' },
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css3' },
      { name: 'Sass', icon: 'sass' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
    ],
  },
  {
    title: 'Front-end',
    items: [
      { name: 'Angular', icon: 'angular' },
      { name: 'React', icon: 'react' },
      { name: 'Vue.js', icon: 'vuedotjs' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      { name: 'Responsive Design', icon: 'mdnwebdocs' },
      { name: 'UI/UX', icon: 'figma' },
    ],
  },
  {
    title: 'Back-end',
    items: [
      { name: 'Laravel', icon: 'laravel' },
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'Express', icon: 'express' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'REST APIs', icon: 'swagger' },
    ],
  },
  {
    title: 'Tools & DevOps',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Webpack', icon: 'webpack' },
      { name: 'npm', icon: 'npm' },
      { name: 'Yarn', icon: 'yarn' },
      { name: 'Postman', icon: 'postman' },
      { name: 'WordPress', icon: 'wordpress' },
      { name: 'Elementor', icon: 'elementor' },
    ],
  },
  {
    title: 'Soft Skills',
    items: [
      { name: 'Technical Mentoring', icon: 'googleclassroom' },
      { name: 'Agile', icon: 'jira' },
      { name: 'Problem Solving', icon: 'leetcode' },
    ],
  },
];

export const experience = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Bali Web Design',
    period: 'June 2022 – June 2023',
    highlights: [
      'Designed and developed responsive websites using HTML, CSS, and JavaScript, ensuring seamless experiences across all devices.',
      'Implemented RESTful APIs and integrated third-party services to enhance platform functionality.',
      'Optimized website performance through asset minification, image lazy loading, and efficient code refactoring—significantly faster loads and improved Core Web Vitals.',
      'Collaborated with senior developers to debug complex issues and maintain high-quality code standards.',
    ],
  },
  {
    role: 'Full-Time Coding Instructor',
    company: 'Kode Kiddo',
    period: 'June 2022 – September 2025',
    highlights: [
      'Mentored 100+ students in Web Development and Software Engineering, coaching for international coding competitions.',
      'Designed curriculum for advanced web tracks focusing on JavaScript frameworks and modern web technologies.',
      'Hosted technical webinars on AI and emerging web trends for 200+ participants.',
    ],
  },
];

export const education = [
  {
    school: 'HELP University, Kuala Lumpur',
    degree: 'Bachelor of Information Technology (BIT)',
    years: '2018 – 2023',
  },
  {
    school: 'ITB STIKOM Bali, Denpasar',
    degree: 'Sarjana Komputer (S.Kom)',
    years: '2018 – 2023',
  },
];

/** Unique tech items for hero marquee / grids (deduped by name). */
export function getUniqueTechItems() {
  const seen = new Set<string>();
  const out: { name: string; icon: string }[] = [];
  for (const cat of skillCategories) {
    for (const item of cat.items) {
      if (!seen.has(item.name)) {
        seen.add(item.name);
        out.push(item);
      }
    }
  }
  return out;
}

export const leadership = {
  role: 'Committee Member',
  org: 'Ritech Expo (Kemenristekdikti)',
  year: '2019',
  highlights: [
    'Coordinated logistics and event flow for a national-scale technology exhibition with 40,000+ visitors and hundreds of exhibitors.',
    'Collaborated with Ministry of Research & Technology representatives on execution and technical setup.',
  ],
};
