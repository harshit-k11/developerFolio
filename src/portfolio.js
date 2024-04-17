/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "harshit-k11",
  title: "Hi all, I'm Harshit or HK",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/10bajyr3KO4u8AvsZBYvVQi0-D0uMCYgu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/harshit-k11",
  linkedin: "https://www.linkedin.com/in/harshit-khatri11",
  gmail: "harshitkhatri75@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Tech Stack",
  subTitle: "Proficient in Building Scalable Web Applications",
  skills: [
    emoji(
      "⚡ Experienced in designing, developing, and deploying scalable web applications using microservices architecture"
    ),
    emoji(
      "⚡ Expertise in leveraging cloud services (AWS, Azure) to build robust and efficient systems"
    ),
    emoji(
      "⚡ Proficient in agile methodologies to translate business requirements into technical solutions"
    )
  ],
  softwareSkills: [
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Express",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fas fa-tools"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure Functions",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "DynamoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Limerick",
      logo: require("./assets/images/Image-University_of_Limerick-Emblem.png"),
      subHeader: "Master of Science in Software Engineering",
      duration: "September 2023 - August 2024",
      desc: "Pursuing an MSc in Software Engineering at the University of Limerick, with a focus on software analysis and management. Developing advanced skills in designing, developing, and deploying scalable software systems.",
      descBullets: [
        "Concentration in Software Analysis and Management",
        "Maintaining a strong GPA of 3.28/4.00 (current)",
        "Relevant coursework includes Software Architecture, Project Management, and Requirement Engineering"
      ]
    },
    {
      schoolName: "Ragiv Gandhi Institute of Technology",
      logo: require("./assets/images/Removal-568.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "July 2018 - June 2022",
      desc: "Completed my undergraduate studies in Computer Science from RGPV Indore, with a concentration in Software Engineering. The program provided a solid foundation in software design principles, data structures, and quality assurance.",
      descBullets: [
        "Specialized in the Software Engineering track during my BTech program",
        "Graduated with a commendable GPA of 3.26/4.00",
        "Relevant coursework included Object-Oriented Programming, Software Architecture, and Statistical Applications"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Associate - Full Stack Developer",
      company: "Ignatiuz Software",
      companylogo: require("./assets/images/ignatiuz_logo.jpg"),
      date: "November 2021 – July 2023",
      desc: "As a Senior Associate at Ignatiuz Software, I played a key role in designing and developing scalable web applications using a microservices architecture and cloud technologies. I focused on optimizing system performance, enhancing security, and improving user experience.",
      descBullets: [
        "Orchestrated a 30% improvement in system scalability through microservices and cloud services integration",
        "Optimized data retrieval in DynamoDB, reducing query time ",
        "Implemented secure user authentication via AWS Cognito, reducing onboarding time ",
        "Transformed a Tax Management application using Angular and Material UI"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Amstech Technologies",
      companylogo: require("./assets/images/download.jpg"),
      date: "September 2019 - December 2019",
      desc: "During my internship at Amstech Technologies, I gained valuable experience in developing high-performing applications using cutting-edge technologies. I focused on improving system scalability, responsiveness, and overall efficiency.",
      descBullets: [
        "Implemented strategic automation, resulting in a 15% improvement in system responsiveness",
        "Optimized system scalability by 10% through configuration and integration of multiple services",
        "Achieved remarkable response times through systematic codebase optimization, reducing page load time by 15%"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Academic Projects",
  subtitle: "",
  projects: [
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Curio Mind - E-Learning Platform",
      projectDesc: "Implemented a robust online learning platform utilizing Node.js and Express.js, structured around a microservices architecture for enhanced scalability. Leveraging design patterns such as Factory Method, Decorator, and Command, the system dynamically extends functionality and offers a flexible discount system. Enjoy independent service development and fault isolation, ensuring optimal scalability and user experience within a modular framework.",
      footerLink: [
        {
          name: "Checkout the repo!",
          url: "https://github.com/harshit-k11/ecommerce-app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      //image: require("./assets/images/nextuLogo.webp"),
      projectName: "Stock Market Price Prediction",
      projectDesc: "Developed and implemented a cutting-edge Django framework and machine learning for advanced stock analysis and prediction, resulting in improved accuracy rates of 88% for next-day price predictions. Performed a thorough analysis of daily stock prices from Yahoo Finance to create a robust dataset optimized for predictive modeling and problem-solving through regression analysis, significantly enhancing the reliability and resilience of the framework. Utilized LSTM and RNN models to train time-series data with object-oriented design, resulting in visually informative visualizations that accurately display next-day stock prices.",
      footerLink: [
        {
          name: "Checkout the repo!",
          url: "https://github.com/harshit-k11/Stock-Market-Price-Prediction"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",
  achievementsCards: [
    {
      title: "AWS Academy Cloud Foundations",
      subtitle: "Graduated from the AWS Academy Cloud Foundations course",
      image: require("./assets/images/awsLogo.png"),
      imageAlt: "AWS Academy Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.credly.com/badges/90490b5c-acda-4133-aa4c-11df9a8be62d/public_url"
        }
      ]
    },
    {
      title: "Python Data Structures",
      subtitle:
        "Completed the Python Data Structures course by the University of Michigan",
      image: require("./assets/images/pythonLogo.png"),
      imageAlt: "Python Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.coursera.org/account/accomplishments/verify/SKSBXNKQFXJR"
        }
      ]
    },
    {
      title: "Linux Training",
      subtitle:
        "Completed the Linux Training by Spoken Tutorial Project at IIT Bombay",
      image: require("./assets/images/linuxLogo.png"),
      imageAlt: "Linux Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1D_32sVp2NuElF6sDaqsU-HM9tb1mKlgu/view"
        }
      ]
    },
    {
      title: "Barclays LifeSkills Programme",
      subtitle: "Completed the Barclays LifeSkills Programme by GTT Foundation",
      image: require("./assets/images/barclaysLogo.png"),
      imageAlt: "Barclays LifeSkills Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1I7MUReyXY9Mdr0waXslAKbX8FP1Y3prn/view"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+353-899528083",
  email_address: "harshitkhatri75@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
