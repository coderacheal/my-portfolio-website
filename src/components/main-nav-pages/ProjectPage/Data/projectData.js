import everestprojectImage from '../../../../assets/cat_selected.png';
import everestSummaryImage from '../../../../assets/everest-mobile.png';
import everest1 from '../../../../assets/signup-everest.png';
import everest2 from '../../../../assets/category_added.png';
import everest3 from '../../../../assets/Expense-created.png';
import everestHero from '../../../../assets/bubbles.png';

// import sageHero from '../../../../assets/sageHero.png';
import sageSummaryImage from '../../../../assets/sageSummary.png';
import sage2 from '../../../../assets/sage2.png';
import sage3 from '../../../../assets/sage3.png';
import sage4 from '../../../../assets/sage4.png';

import schoolxSummary from '../../../../assets/schoolxWelcome.png';
import schoolx1 from '../../../../assets/schoolxWorkspace.png';
import schoolx2 from '../../../../assets/schoolxWelcome.png';
// import schoolx3 from '../../../../assets/schoolx3.png';

// import appImage from '../../../../assets/budget.png';

const projectData = [
  {
    id: 1,
    urlExtension: 'everest',
    title: 'EVEREST',
    projectName: 'Project Everest',
    projectDescription: 'A rails app for managing your finances',
    projectImage: everestprojectImage,
    projectYear: 2023,
    projectGitHub: 'https://github.com/coderacheal/everest',
    projectWebsite: 'https://github.com/coderacheal/everest',
    miniIntro: 'Want to budget in a fun and interactive app and stay on top of the dollar? Everest allows you to track your expenses by setting limit for various categories',
    projectSummaryOne: ' Everest is built with security and user experience in mind. It has a clean fun interface the aims to make budgeting fun. Complete with user authentication, it helps you stay on top of the dollar',
    projectSummaryTwo: ' The app enables you to track your expenses based on the type of categories you define. Tools used include Rails, PostgreSQL and Devise for authentication.',
    builtFor: 'For all the personal finance lovers',
    backgroundImage: everestHero,
    firstCarouselImage: everest1,
    secondCarouselImage: everest2,
    thirdCarouselImage: everest3,
    nextProjectName: 'Project Sage',
    backgroundColor: 'green',
    viewProject: 'View Next Project',
    route: '/work/sage',
    techStack: ['RAILS', 'POSTGRES', 'TAILWIND', 'DEVISE'],
    color: 'black',
    summaryImage: everestSummaryImage,
    projectCardImage: everest2,
  },
  {
    id: 2,
    urlExtension: 'sage',
    title: 'SAGE',
    projectName: 'Project Sage',
    projectDescription: 'A crypto app that delivers realtime crypto prices',
    projectImage: sage2,
    projectYear: 2023,
    projectGitHub: 'https://github.com/coderacheal/sage',
    projectWebsite: 'https://github.com/coderacheal/everest',
    miniIntro: 'Sage is a simple clean web app that fetches real time crypto data from an API. It is built with react and used redux for state management',
    projectSummaryOne: ' Welcome to Sage, a real-time platform providing the latest data on cryptocurrency prices and market metrics. With Sage, you can stay up-to-date with the ever-changing crypto landscape and visualize the trends for each coin effortlessly.',
    projectSummaryTwo: ' Tools include React, the coingecko API, Redux for state management, and ChartJS for visualizations',
    builtFor: 'Read the markets on your phone',
    backgroundImage: '',
    firstCarouselImage: sage3,
    secondCarouselImage: sage4,
    thirdCarouselImage: sage2,
    nextProjectName: 'Project SchoolX',
    backgroundColor: 'rgb(255, 103, 2)',
    viewProject: 'View Next Project',
    route: '/work/schoolx',
    techStack: ['REACT', 'REDUX'],
    color: 'black',
    summaryImage: sageSummaryImage,
    projectCardImage: sage2,
  },
  {
    id: 3,
    urlExtension: 'schoolx',
    title: 'SCHOOLX',
    projectName: 'Project SchoolX',
    projectDescription: 'A database management system for junior high schools',
    projectImage: schoolxSummary,
    projectYear: 2020,
    projectGitHub: 'https://github.com/coderacheal/schoolx',
    projectWebsite: 'https://github.com/coderacheal/everest',
    miniIntro: 'Built to help local schools in my home district, SchoolX is a desktop application that helps schools to track their income and revenue and visualize their data.',
    projectSummaryOne: ' Everest is built with security and user experience in mind. It has a clean fun interface the aims to make bidgeting fun A finance app that enables you to track your expenses based on the type of expenses you define. Complete with authentication, it helps you stay on top of the dollar.',
    projectSummaryTwo: ' Tools include Rails, Postgres and Devise for authentication.',
    builtFor: 'For all the personal finance lovers',
    backgroundImage: '',
    firstCarouselImage: schoolx1,
    secondCarouselImage: schoolx2,
    thirdCarouselImage: schoolxSummary,
    nextProjectName: 'Project Everest',
    backgroundColor: 'green',
    viewProject: 'View Next Project',
    route: '/work/everest',
    techStack: ['JAVASCRIPT', 'PYTHON', 'TensorFlow.js', 'Pytorch'],
    color: 'black',
    summaryImage: schoolxSummary,
    projectCardImage: schoolxSummary,
  },

  // {
  //   id: 4,
  //   urlExtension: 'sunday',
  //   title: 'SUNDAY',
  //   projectName: 'Project Sunday',
  //   projectDescription: 'A chat app embedded with a Deep Learning model to predict sentiment
  // of your text',
  //   projectImage: everestprojectImage,
  //   projectYear: 2023,
  //   projectGitHub: 'https://github.com/coderacheal/everest',
  //   projectWebsite: 'https://github.com/coderacheal/everest',
  //   miniIntro: 'We you say matters. Sunday is a chat app embedded with an NLP model to
  //  predict the sentiment of your text before you shoot yourself in the foot. Again',
  //   projectSummaryOne: ' Everest is built with security and Lorem ipsum,dolor sit amet
  // consectetur adipisicing elit. Voluptate numquam repellendus quas',
  //   projectSummaryTwo: ' Everest is built with security and Lorem ipsum, dolor sit',
  //   builtFor: 'For all the personal finance lovers',
  //   backgroundImage: '',
  //   firstCarouselImage: appImage,
  //   secondCarouselImage: appImage,
  //   thirdCarouselImage: appImage,
  //   nextProjectName: 'Project Everest',
  //   backgroundColor: 'green',
  //   viewProject: 'View Next Project',
  //   route: '/work/everest',
  //   techStack: ['JAVASCRIPT', 'PYTHON', 'TensorFlow.js', 'Pytorch'],
  //   color: 'black',
  //   summaryImage: everestSummaryImage,
  //   projectCardImage: ''
  // },

];

export default projectData;
