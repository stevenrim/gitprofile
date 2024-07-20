// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'stevenrim', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: '',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['', ''], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Steven | 9purp0s3',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Greetings, cyber adventurers!',
          description:
            "Thank you for taking the time to visit my portfolio as I chronicle my journey into InfoSec. Here, you'll find my ethical hands-on projects from school, online courses, and YouTube tutorials made by amazing people in this industry. This journey isn't just about me—it's also about inspiring you. Whether you're an enthusiast, a budding cyberwarrior, or a future employer, know that every keystroke, every byte, and every analysis tells a story. Mine is just beginning and I hope what I share here adds a spark to your own adventure. -Steven aka 9purp0s3",
          imageUrl: '',
          link: '',
        },
        {
          title: 'Active Directory Home Lab w/VirtualBox',
          description:
            "For this project, my main goal was to create 1000 users on Active Directory, log in on the client machine, and access the Internet via a private network. I successfully downloaded, installed, and configured two virtual machines and created the users using an automated PowerShell script. I then I successfully logged on as a user and was able to access the internet. Here are the steps I took to complete my project.",
          imageUrl: 'https://i.imgur.com/VoM3rrX.jpeg', 
          link: 'https://medium.com/@stevenrim/active-directory-home-lab-w-virtualbox-e07932251a9f',
        },
        {
          title: 'Cloud Honeynet + SOC in Azure',
          description:
            "Constructed a honeynet on Azure to ingest logs from resources into a Log Analytics workspace. Used Kusto Query Language to query logs. Utilized Microsoft Sentinel to build attack maps, trigger alerts, and create incidents. Measured the insecure environment, applied security controls, measured the secure environment, and analyzed results.",
          imageUrl: 'https://swimburger.net/media/0zcpmk1b/azure.jpg',
          link: 'https://medium.com/@stevenrim/building-a-cloud-honeynet-soc-in-azure-980f84fb5147',
        },
        {
          title: 'Vulnerability Assessment w/Nessus',
          description:
            "Installed and configured Nessus Essentials to perform credentialed vulnerability scans. Created a vulnerable Windows 10 VM on VirtualBox with outdated software and disabled Firewall. Performed unauthenticated and credentialed scans using Nessus against vulnerable Windows 10 VM with outdated software. Analyzed results, identified vulnerabilities, remediated vulnerabilities, and verified successful remediation through subsequent scans.",
          imageUrl: 'https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/5c5a52bf-7df5-4ea3-98ef-6d51f8d80c6d.png',
          link: '',
        },
         {
          title: 'Exploiting Web Application Vulnerabilities w/OWASP Juice Shop',
          description:
            "Used Docker to access OWASP Juice Shop 10.2 for ARM64/Raspberry Pi. Here, I exploit a series of OWASP Top 10 vulnerabilities with varying levels of difficulty. This particular post will continually be updated until I complete all challenges on this version. So check back often.",
          imageUrl: 'https://i.pinimg.com/474x/5a/83/34/5a83347d6e372a472b1a72b3223da55f.jpg',
          link: 'https://medium.com/@stevenrim/owasp-juice-shop-10-2-for-arm64-raspberry-pi-5-68c28c046ccd',
        },
      ],
    },
  },
  
  seo: {
    title: '',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'stevenrim',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', 
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'stevenrim',
    dev: '',
    stackoverflow: '', 
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  experiences: [
    {
      company: '',
      position: '',
      from: '',
      to: '',
      companyLink: '',
    },
    {
      company: '',
      position: '',
      from: '',
      to: '',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Google Cybersecurity Certificate',
      body: '',
      year: 'Completed 2024',
      link: 'https://www.credly.com/badges/c5dc51ac-beae-45ef-b27b-a060075191e3/',
    },
    {
      name: 'Cybersecurity Masterclass: SOC Analyst',
      body: '',
      year: 'Completed 2024',
      link: 'https://app.kajabi.com/certificates/72ada0d2',
    },
     {
      name: 'CompTIA Security +',
      body: '',
      year: 'Expected 2024',
      link: '',
    },
     {
      name: 'HTB Certified Defensive Security Analyst',
      body: '',
      year: 'Expected 2024',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Kennesaw State University',
      degree: 'MS-Cybersecurity',
      from:'2023',
      to: '2025',
    },
    {
      institution: 'University of Illinois Urbana Champaign',
      degree: 'MBA-Strategic Leadership',
      from:'2020',
      to: '2023',
    },
    {
      institution: 'University of Cincinnati',
      degree: 'BBA-Entrepreneurship',
      from:'2004',
      to: '2010',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'stevenrim', // to hide blog section, keep it empty
    limit: 10, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
    ],

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
}}

export default CONFIG;
