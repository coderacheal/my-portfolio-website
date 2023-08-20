import everestprojectImage from '../../../../assets/cat_selected.png';
import everestSummaryImage from '../../../../assets/everest-mobile.png';
import everest1 from '../../../../assets/signup-everest.png';
import everest2 from '../../../../assets/category_added.png';
import everest3 from '../../../../assets/Expense-created.png';
import everestHero from '../../../../assets/bubbles.png';

// import sageHero from '../../../../assets/sageHero.png';
import sageSummaryImage from '../../../../assets/sage-mobile.png';
import sage2 from '../../../../assets/sage2.png';
import sage3 from '../../../../assets/sage3.png';
import sage4 from '../../../../assets/sage4.png';
import sageHero from '../../../../assets/honeycomb.jpg';

// import schoolxProjectImage from '../../../../assets/gradient.jpg';
import schoolxHero from '../../../../assets/schoolxHero.jpg';
import schoolx1 from '../../../../assets/schoolxWorkspace.png';
import schoolx2 from '../../../../assets/schoolxSummary.png';
import schoolx3 from '../../../../assets/studentDetails.png';

const PageTransition = {
  initial: { y: '100%' },
  animate: { y: 0 },
  exit: { y: '100%' },
  transition: { duration: 2 },
};

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
    projectWebsite: 'https://everest-app-xhv2.onrender.com',
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
    route: '/sage',
    techStack: ['RAILS', 'POSTGRES', 'TAILWIND', 'DEVISE'],
    color: 'black',
    summaryImage: everestSummaryImage,
    projectCardImage: everest2,
    summaryImageHeight: '50vh',
    summaryImageWidth: '20vw',
    role: 'FULL-STACK DEVELOPER',
    viewProjectbackgroundColor: 'rgba(216, 132, 226, 0.3)',
    viewProjectTextColor: '',
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
    projectWebsite: 'https://sage-zodq.onrender.com',
    miniIntro: 'Sage is a simple clean web app that fetches real time crypto data from an API. It is built with react and uses redux for state management',
    projectSummaryOne: 'Introducing Sage, your gateway to real-time insights into cryptocurrency markets. Stay in the know with up-to-the-minute data on cryptocurrency prices and market metrics. Sage\'s, intuitive interface is designed to provide a comprehensive overview of each coin\'s performance, allowing you to visualize trends and patterns with ease.',
    projectSummaryTwo: 'Sage is built with React for seamless interactivity, the Coingecko API for accurate market data, Redux for efficient state management, and ChartJS for visually stunning data representations.',
    builtFor: 'Read the markets on your phone',
    backgroundImage: sageHero,
    firstCarouselImage: sage3,
    secondCarouselImage: sage4,
    thirdCarouselImage: sage2,
    nextProjectName: 'Project SchoolX',
    backgroundColor: 'rgb(255, 103, 2)',
    viewProject: 'View Next Project',
    route: '/schoolx',
    techStack: ['REACT', 'REDUX'],
    color: 'white',
    summaryImage: sageSummaryImage,
    projectCardImage: sage2,
    summaryImageHeight: '75vh',
    summaryImageWidth: '25vw',
    role: 'FRONT-END DEVELOPER',
    viewProjectbackgroundColor: 'rgb(0, 0, 0, 0.9)',
    viewProjectTextColor: 'white',
  },
  {
    id: 3,
    urlExtension: 'schoolx',
    title: 'SCHOOLX',
    projectName: 'Project SchoolX',
    projectDescription: 'A database management system for junior high schools',
    projectImage: schoolx2,
    projectYear: 2021,
    projectGitHub: 'https://github.com/coderacheal/schoolx',
    projectWebsite: 'https://github.com/coderacheal/schoolx',
    miniIntro: 'Built to help local schools in my home district, SchoolX is a desktop application that helps schools to track their income and revenue and visualize their data.',
    projectSummaryOne: 'SchoolX is a project that enables junior high schools in poor districts that cannot afford their own management sytems a way to manage a bulk of their administrative task in student registration, fees logging, staffing and expenditure tracking. It is light weight desktop application, that makes school management seamless',
    projectSummaryTwo: ' Tools include Python, SQL, and KivyMD for material design',
    builtFor: 'A management app for schools',
    backgroundImage: schoolxHero,
    firstCarouselImage: schoolx1,
    secondCarouselImage: schoolx2,
    thirdCarouselImage: schoolx3,
    nextProjectName: 'Project Everest',
    backgroundColor: 'black',
    viewProject: 'View Next Project',
    route: '/everest',
    techStack: ['JAVASCRIPT', 'PYTHON', 'TensorFlow.js', 'Pytorch'],
    color: 'white',
    summaryImage: schoolx2,
    projectCardImage: schoolx2,
    summaryImageHeight: '50vh',
    summaryImageWidth: '35vw',
    viewProjectbackgroundColor: 'rgb(223, 182, 255)',
    viewProjectTextColor: '',
  },

  // {
  //   id: 4,
  //   urlExtension: 'sunday',
  //   title: 'SUNDAY',
  //   projectName: 'Project Sunday',
  //   projectDescription: 'A chat app embedded with a Deep
  //  Learning model to predict sentiment of your text',
  //   projectImage: everestprojectImage,
  //   projectYear: 2023,
  //   projectGitHub: 'https://github.com/coderacheal/everest',
  //   projectWebsite: 'https://github.com/coderacheal/everest',
  //   miniIntro: 'We you say matters. Sunday is a chat app embedded with an NLP model
  // to predict the sentiment of your text before you shoot yourself in the foot. Again',
  //   projectSummaryOne: ' Everest is built with security and Lorem ipsum,dolor sit
  //  amet consectetur adipisicing elit. Voluptate numquam repellendus quas',
  //   projectSummaryTwo: ' Everest is built with security and Lorem ipsum, dolor sit',
  //   builtFor: 'For all the the machine learning lovers',
  //   backgroundImage: everestHero,
  //   firstCarouselImage: everest1,
  //   secondCarouselImage: everest2,
  //   thirdCarouselImage: everest3,
  //   nextProjectName: 'Project Sage',
  //   backgroundColor: 'green',
  //   viewProject: 'View Next Project',
  //   route: '/sage',
  //   techStack: ['RAILS', 'POSTGRES', 'TAILWIND', 'DEVISE'],
  //   color: 'black',
  //   summaryImage: everestSummaryImage,
  //   projectCardImage: everest2,
  //   summaryImageHeight: '50vh',
  //   summaryImageWidth: '20vw',
  //   viewProjectbackgroundColor: 'rgba(216, 132, 226, 0.3)',
  // viewProjectTextColor: ''
  // },

];

export default projectData;

export { PageTransition };
