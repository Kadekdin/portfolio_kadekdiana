import type {
  About,
  Blog,
  Gallery,
  Home,
  // Newsletter,
  Person,
  Social,
  // Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";
import { Fragment } from "react";

const person: Person = {
  firstName: "Kadek Diana Angelika",
  lastName: "Prasanti",
  name: `Kadek Diana Angelika Prasanti`,
  role: "Graphic Designer | UI/UX Designer",
  avatar: "/images/avt.JPG",
  email: "dianaprasnti@gmail.com",
  location: "Asia/Makassar", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

// const newsletter: Newsletter = {
//   display: true,
//   title: <>Subscribe to {person.firstName}'s Newsletter</>,
//   description: <>My weekly newsletter about creativity and engineering</>,
// };

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/kadekdin",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kadekdiana-apr-515a7235b/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/kiddenprast_/",
    essential: true,
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  //   essential: true,
  // },
  {
    name: "Email",
    icon: "email",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=dianaprasnti@gmail.com&subject=Portfolio Inquiry&body=Halo Kadek Diana Angelika Prasanti,",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi, I'm Kadek Diana Angelika Prasanti</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      an Information Systems student at Primakara University who is passionate
      about design, technology, and creative media.{" "}
      <Text as="span" size="xl" weight="strong">
        With experience in Graphic Design, UI/UX Design, Photography, and
        Videography,{" "}
      </Text>
      I have contributed to a variety of organizational, academic, and
      professional projects. I am driven by creativity and enjoy turning ideas
      into impactful visual experiences that combine aesthetics with effective
      communication.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hello everyone✨
        <br />
        My name is Kadek Diana Angelika Prasanti, commonly known as Kedin. I am
        currently pursuing a degree in Information Systems at Primakara
        University. I aspire to become a successful entrepreneur while also
        pursuing my passion for photography, videography, and visual design.
        Through these creative fields, I enjoy expressing ideas, telling
        stories, and creating meaningful visual experiences.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiences",
    experiences: [
      {
        company: "Dewan Perwakilan Mahasiswa (DPM) 2026",
        timeframe: "January 2026 - Present",
        role: "Staff II Komunikasi, Riset & Pendidikan",
        achievements: [
          <Fragment key="achievement-1">
            Created visual designs for social media content and organizational
            publications to enhance the delivery of information to students in
            an engaging and informative manner.
          </Fragment>,
          <Fragment key="achievement-2">
            Developed captions and communication content aligned with the
            organization's identity to support branding efforts and enhance
            audience engagement across social media platforms.
          </Fragment>,
          <Fragment key="achievement-3">
            Documented organizational activities through photography and
            videography for publication purposes and organizational archives.
          </Fragment>,
          <Fragment key="achievement-4">
            Supported the management of the organization's publication media by
            effectively disseminating information about activities, work
            programs, and student educational content.
          </Fragment>,
          <Fragment key="achievement-5">
            Contributed to communication, research, and educational initiatives
            through the creation of creative content that supported the
            development of students' knowledge and perspectives.
          </Fragment>,
          <Fragment key="achievement-6">
            Collaborated with division members and organizational executives to
            support the smooth implementation of activities and the publication
            of organizational programs.
          </Fragment>,
        ],
        images: [],
      },
      {
        company: "Djoin",
        timeframe: "January 2026 - May 2026",
        role: "Creative Design & Videography Intern",
        achievements: [
          <Fragment key="achievement-1">
            Created visual designs for Instagram, TikTok, and LinkedIn content
            to enhance branding consistency and social media engagement.
          </Fragment>,
          <Fragment key="achievement-2">
            Designed promotional materials, including brochures and other
            publication media, to support the company's marketing and
            communication needs.
          </Fragment>,
          <Fragment key="achievement-3">
            Conducted photo and video shoots for digital content creation and
            professional documentation of company activities.
          </Fragment>,
          <Fragment key="achievement-4">
            Edited videos and managed visual production assets to create
            engaging, informative content that aligned with the company's brand
            identity.
          </Fragment>,
          <Fragment key="achievement-5">
            Collaborated with team members to develop creative content concepts
            aimed at improving the quality of publications and increasing
            audience engagement across digital media platforms.
          </Fragment>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Primakara University",
        description: (
          <>
            I am an{" "}
            <Text as="span" weight="strong">
              Information Systems student{" "}
            </Text>
            at Primakara University with a strong interest in technology,
            digital design, and creative media development. Throughout my
            academic journey, I have actively developed skills in{" "}
            <Text as="span" weight="strong">
              UI/UX design, graphic design, digital content management, and
              programming fundamentals to support the creation of innovative and
              user-friendly digital solutions.
            </Text>
            <br />
            <br />
            In addition to my academic activities, I have been actively involved
            in various organizational and committee activities, which have
            helped me strengthen my communication, teamwork, administrative
            management, and problem-solving skills. I am a highly motivated
            learner who adapts well to dynamic work environments and is capable
            of working both creatively and systematically to accomplish projects
            and responsibilities effectively.
          </>
        ),
      },
      {
        name: "Harapan Christian Senior High School",
        description: (
          <>
            I am a graduate of the{" "}
            <Text as="span" weight="strong">
              Natural Sciences (Science) program at Harapan Christian Senior
              High School{" "}
            </Text>
            with a strong interest in{" "}
            <Text as="span" weight="strong">
              technology, creativity, and the development of both academic and
              organizational skills.{" "}
            </Text>
            Throughout my studies, I actively developed analytical thinking,
            problem-solving, and teamwork abilities through various academic and
            extracurricular activities.
            <br />
            <br />
            In addition to focusing on science-related subjects, I developed a
            strong interest in digital design and technology, which inspired me
            to pursue higher education in the field of Information Systems. My
            experiences during high school helped shape me into a disciplined,
            adaptable, and responsible individual who can work effectively in
            diverse situations and collaborative environments.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Hard skills",
    skills: [
      {
        title: "Graphic Design",
        description: (
          <>
            Experienced in designing visual assets for digital content,
            marketing campaigns, and brand communication, including posters,
            social media graphics, and branding materials. Strong understanding
            of design fundamentals such as layout composition, typography, color
            theory, and visual hierarchy, enabling the creation of engaging,
            impactful, and strategically aligned visual solutions.
          </>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
          {
            name: "Adobe Illustrator",
            // icon: "adobe-illustrator",
          },
          {
            name: "Adobe Photoshop",
            // icon: "adobe-photoshop",
          },
          {
            name: "Canva",
            // icon: "canva",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          //ubah gambar
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "UI/UX Designer",
        description: (
          <>
            Skilled in designing user experiences (UX) and user interfaces (UI)
            for web and mobile applications with a focus on usability and user
            satisfaction. Proficient in the end-to-end design process, including
            user research, user flow creation, wireframing, high-fidelity
            design, and interactive prototyping using design tools.
          </>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          //ubah gambar
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Photography & Photo Editing",
        description: (
          <>
            Skilled in photography for documentation, social media content, and
            visual publications, with a strong understanding of composition,
            lighting, and camera angles. Capable of performing photo editing to
            enhance image quality, adjust colors, and create visually appealing
            and professional results tailored to digital content needs.
          </>
        ),
        tags: [
          {
            name: "Adobe LightRoom",
            // icon: "lightroom.png",
          },
          {
            name: "Adobe Photoshop",
            icon: "photoshop",
          },
          // { --> kalo mau tambahin bisa diisi di sini
          //   name: "Supabase",
          //   icon: "supabase",
          // },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780747235/KD-01_ddjag6.png",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780747266/KD-08_msuo6l.png",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780747249/KD-06_jbfwyo.png",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Videography & Video Editing",
        description: (
          <>
            Skilled in video production, including filming, shot composition,
            camera angle selection, lighting setup, and visual arrangement for
            digital content and event documentation. Proficient in video
            editing, including transition management, audio enhancement, color
            grading, and video sequencing to create engaging, informative, and
            visually consistent content.
          </>
        ),
        tags: [
          {
            name: "CapCut",
            // icon: "lightroom.png",
          },
          // { --> kalo mau tambahin bisa diisi di sini
          //   name: "Supabase",
          //   icon: "supabase",
          // },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "https://res.cloudinary.com/dz8qawncf/video/upload/v1780712103/VD-01_gvqfc1.mp4",
          //   alt: "Project image",
          //   width: 9,
          //   height: 16,
          // },
          // {
          //   src: "https://res.cloudinary.com/dz8qawncf/video/upload/v1780712305/VD-04_y6vsmp.mp4",
          //   alt: "Project image",
          //   width: 9,
          //   height: 16,
          // },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Design, Photography, and Videography Portfolio",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

// const work: Work = {
//   path: "/work",
//   label: "Work",
//   title: `Projects – ${person.name}`,
//   description: `Design and dev projects by ${person.name}`,
//   // Create new project pages by adding a new .mdx file to app/blog/posts
//   // All projects will be listed on the /home and /work routes
// };

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750217/D-01_cu3h1y.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1781526525/KD-01_girmno.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750235/KD-04_wu2w8y.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1781526520/KD-02_dtevde.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1781526525/KD-03_coaem6.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1781526529/KD-05_lrtsu7.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750354/MU-01_hhtxcp.png",
      alt: "image",
      orientation: "portrait",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750410/P-01_kwwn4g.png",
      alt: "image",
      orientation: "square",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1781524465/WB-01_vqrvog.png",
      alt: "image",
      orientation: "square",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1781524465/P-02_bq3hlh.png",
      alt: "image",
      orientation: "portrait",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750444/SD-01_ddxo3z.png",
      alt: "image",
      orientation: "portrait",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750357/P-03_szmz5r.png",
      alt: "image",
      orientation: "square",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750477/WB-02_annroq.png",
      alt: "image",
      orientation: "square",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1781524485/SD-02_hvhyit.png",
      alt: "image",
      orientation: "portrait",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750382/SD-03_sbdbeo.png",
      alt: "image",
      orientation: "portrait",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1781524465/SD-04_uq4s63.png",
      alt: "image",
      orientation: "portrait",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750283/SD-05_k3js1i.png",
      alt: "image",
      orientation: "portrait",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1781526526/KD-06_dqiwgt.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1781526510/SG-01_gmk70q.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1781524485/SG-02_gzpndz.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1781524488/SG-03_wi5mby.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750384/SD-06_efmzlp.png",
      alt: "image",
      orientation: "portrait",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1781524487/SD-07_nxdwx2.png",
      alt: "image",
      orientation: "portrait",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750407/SG-04_wrfko4.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750441/TN-01_idyxyt.png",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, home, about, blog, gallery };
