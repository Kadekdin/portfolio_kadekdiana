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
  role: "Graphic Designer",
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
  headline: <>Hi, saya Kadek Diana Angelika Prasanti</>,
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
      seorang mahasiswi Sistem Informasi di Primakara University yang memiliki
      minat di bidang{" "}
      <Text as="span" size="xl" weight="strong">
        desain grafis, UI/UX, serta photography dan videography.{" "}
      </Text>
      Saya lahir di Tabanan, 03 November 2004 dan saat ini aktif mengembangkan
      kemampuan di bidang desain visual, pengelolaan media digital, serta
      organisasi untuk mendukung kreativitas dan profesionalisme dalam dunia
      kerja maupun akademik.
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
        Hallo semuanya✨
        <br />
        Kenalin, nama aku Kadek Diana Angelika Prasanti biasa dipanggil Kedin.
        Aku mahasiswi dari jurusan Sistem Informasi di Primakara University. Aku
        bercita-cita menjadi pengusaha yang sukses. Tapi, selain itu aku punya
        ketertarikan di dunia photography, videography dan juga desain visual.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Pengalaman",
    experiences: [
      {
        company: "Dewan Perwakilan Mahasiswa (DPM) 2026",
        timeframe: "Januari 2026 - Sekarang",
        role: "Staff II Komunikasi, Riset & Pendidikan",
        achievements: [
          <Fragment key="achievement-1">
            Membuat desain visual untuk kebutuhan media sosial dan publikasi
            organisasi guna meningkatkan penyampaian informasi kepada mahasiswa
            secara menarik dan informatif.
          </Fragment>,
          <Fragment key="achievement-2">
            Menyusun caption dan konten komunikasi yang sesuai dengan identitas
            organisasi untuk mendukung branding serta interaksi audiens di media
            sosial.
          </Fragment>,
          <Fragment key="achievement-3">
            Melakukan dokumentasi kegiatan organisasi dalam bentuk foto dan
            video sebagai bahan publikasi serta arsip kegiatan organisasi.
          </Fragment>,
          <Fragment key="achievement-4">
            Mendukung pengelolaan media publikasi organisasi melalui penyebaran
            informasi kegiatan, program kerja, dan edukasi mahasiswa secara
            efektif.
          </Fragment>,
          <Fragment key="achievement-5">
            Berkontribusi dalam pelaksanaan fungsi komunikasi, riset, dan
            pendidikan melalui pembuatan konten kreatif yang mendukung
            pengembangan wawasan mahasiswa.
          </Fragment>,
          <Fragment key="achievement-6">
            Berkolaborasi dengan anggota divisi dan pengurus organisasi dalam
            mendukung kelancaran kegiatan serta publikasi program kerja
            organisasi.
          </Fragment>,
        ],
        images: [],
      },
      {
        company: "Djoin",
        timeframe: "Januari 2026 - Mei 2026",
        role: "Creative Design & Videography Intern",
        achievements: [
          <Fragment key="achievement-1">
            Merancang dan mengembangkan desain visual untuk konten Instagram,
            TikTok, dan LinkedIn guna meningkatkan konsistensi branding serta
            engagement media sosial perusahaan.
          </Fragment>,
          <Fragment key="achievement-2">
            Mendesain berbagai media promosi seperti brosur dan materi publikasi
            lainnya untuk mendukung kebutuhan pemasaran dan komunikasi
            perusahaan.
          </Fragment>,
          <Fragment key="achievement-3">
            Melakukan proses pengambilan foto dan video untuk kebutuhan konten
            digital serta dokumentasi kegiatan perusahaan secara profesional.
          </Fragment>,
          <Fragment key="achievement-4">
            Mengedit video dan mengelola hasil produksi visual agar menghasilkan
            konten yang menarik, informatif, dan sesuai dengan identitas
            perusahaan.
          </Fragment>,
          <Fragment key="achievement-5">
            Berkolaborasi dengan tim dalam pengembangan konsep konten kreatif
            untuk meningkatkan kualitas publikasi dan daya tarik audiens di
            media digital.
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
    title: "Pendidikan",
    institutions: [
      {
        name: "Primakara University",
        description: (
          <>
            Saya merupakan mahasiswi{" "}
            <Text as="span" weight="strong">
              Program Studi Sistem Informasi{" "}
            </Text>
            di Primakara University yang memiliki ketertarikan pada bidang
            teknologi, desain digital, serta pengembangan media kreatif. Selama
            perkuliahan, saya aktif mengembangkan kemampuan dalam{" "}
            <Text as="span" weight="strong">
              desain UI/UX, graphic design, pengelolaan konten digital, dan
              dasar pemrograman untuk mendukung pengembangan solusi digital yang
              inovatif dan user-friendly.
            </Text>
            <br />
            <br />
            Selain aktif dalam bidang akademik, saya juga terlibat dalam
            kegiatan organisasi dan kepanitiaan yang membantu meningkatkan
            kemampuan komunikasi, kerja sama tim, manajemen administrasi, serta
            problem solving. Saya memiliki semangat belajar yang tinggi, mampu
            beradaptasi dengan lingkungan kerja yang dinamis, dan terbiasa
            bekerja secara kreatif maupun terstruktur dalam menyelesaikan
            berbagai proyek dan tanggung jawab.
          </>
        ),
      },
      {
        name: "SMA Kristen Harapan",
        description: (
          <>
            Saya merupakan lulusan jurusan{" "}
            <Text as="span" weight="strong">
              Ilmu Pengetahuan Alam (IPA) dari SMA Kristen Harapan{" "}
            </Text>
            yang memiliki minat dalam{" "}
            <Text as="span" weight="strong">
              bidang teknologi, kreativitas, dan pengembangan kemampuan akademik
              maupun organisasi.{" "}
            </Text>
            Selama menempuh pendidikan, saya aktif mengembangkan kemampuan
            berpikir analitis, pemecahan masalah, serta kerja sama tim melalui
            kegiatan akademik dan non-akademik.
            <br />
            <br />
            Selain fokus pada pembelajaran di bidang sains, saya juga memiliki
            ketertarikan pada desain digital dan teknologi yang menjadi dasar
            ketertarikan saya untuk melanjutkan pendidikan di bidang Sistem
            Informasi. Pengalaman selama masa sekolah membantu saya menjadi
            pribadi yang disiplin, adaptif, dan mampu bekerja secara bertanggung
            jawab dalam berbagai situasi maupun lingkungan kerja tim.
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
            Memiliki kemampuan dalam merancang visual untuk kebutuhan konten
            digital dan media promosi, termasuk pembuatan poster, feed media
            sosial, dan materi branding. Menguasai prinsip desain seperti
            layout, typography, color theory, dan visual hierarchy untuk
            menghasilkan desain yang komunikatif, menarik, dan sesuai dengan
            identitas brand.
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
            Memiliki kemampuan dalam merancang pengalaman pengguna (UX) dan
            antarmuka pengguna (UI) untuk aplikasi maupun website yang berfokus
            pada kemudahan penggunaan dan kenyamanan pengguna. Menguasai proses
            desain mulai dari user research, pembuatan user flow, wireframe,
            hingga high-fidelity design serta prototyping interaktif menggunakan
            tools desain.
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
            Memiliki kemampuan dalam pengambilan foto untuk kebutuhan
            dokumentasi, konten media sosial, maupun publikasi visual dengan
            memperhatikan komposisi, pencahayaan, dan sudut pengambilan gambar.
            Selain itu, mampu melakukan proses editing foto untuk meningkatkan
            kualitas visual, menyesuaikan warna, serta menghasilkan tampilan
            yang lebih menarik dan profesional sesuai kebutuhan konten digital.
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
          {
            src: "/images/projects/photo/KD-01.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/photo/KD-02.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/photo/KD-06.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Videography & Video Editing",
        description: (
          <>
            Memiliki kemampuan dalam proses produksi video mulai dari
            pengambilan gambar, pengaturan angle, pencahayaan, hingga penyusunan
            visual untuk kebutuhan konten digital dan dokumentasi kegiatan.
            Selain itu, mampu melakukan editing video dengan mengatur transisi,
            audio, color grading, serta penyusunan alur video agar menghasilkan
            konten yang menarik, informatif sesuai dengan identitas visual yang
            diinginkan.
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
          {
            src: "https://res.cloudinary.com/dz8qawncf/video/upload/v1780712103/VD-01_gvqfc1.mp4",
            alt: "Project image",
            width: 9,
            height: 16,
          },
          {
            src: "https://res.cloudinary.com/dz8qawncf/video/upload/v1780712305/VD-04_y6vsmp.mp4",
            alt: "Project image",
            width: 9,
            height: 16,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Hasil Desain, Photography dan Videography",
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
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750219/KD-01_atbydw.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750235/KD-04_wu2w8y.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750223/KD-02_mxfgs6.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750229/KD-03_eizg26.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750241/KD-05_vy5vxz.png",
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
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750340/WB-01_qv8jd9.png",
      alt: "image",
      orientation: "square",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750255/P-02_bke22z.png",
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
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750264/SD-02_knxroz.webp",
      alt: "image",
      orientation: "portrait",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750382/SD-03_sbdbeo.png",
      alt: "image",
      orientation: "portrait",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750273/SD-04_fdzpca.png",
      alt: "image",
      orientation: "portrait",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750283/SD-05_k3js1i.png",
      alt: "image",
      orientation: "portrait",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750248/KD-06_spnszk.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750303/SG-01_j7wtqr.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750315/SG-02_hyivuf.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750327/SG-03_h6mxxu.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750384/SD-06_efmzlp.png",
      alt: "image",
      orientation: "portrait",
    },
    {
      src: "https://res.cloudinary.com/dz8qawncf/image/upload/v1780750285/SD-07_dh370j.webp",
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
