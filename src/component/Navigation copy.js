
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faFacebook, faTwitter, faWhatsapp, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import DarkModeSwitcher from '@/components/shared/DarkModeSwitcher';
// import IndexDropdown from '@/components/Dropdowns/IndexDropdown';
// import ActionButton from '@/components/shared/ActionButton';
// import Drop from '@/components/shared/DropdownLanguage';

// export default function IndexNavbar() {
//   const [navbarOpen, setNavbarOpen] = useState(false);

//   return (
//     <>
//       <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow bg-white dark:bg-site-gray-1">
//         <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
//           <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
//             <Link to="/">
//               <a className="text-site-gray-1 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase dark:text-site-green-5">
//                 E-Holdings
//               </a>
//             </Link>
//             <button
//               className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
//               type="button"
//               onClick={() => setNavbarOpen(!navbarOpen)}
//             >
//               <FontAwesomeIcon icon={faBars} className="text-site-gray-1 text-2xl dark:text-site-yellow-3" />
//             </button>
//           </div>
//           <div className={`lg:flex flex-grow items-center flex-row ${navbarOpen ? 'block' : 'hidden'}`} id="example-navbar-warning">
//             <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
//               <li className="flex justify-center items-end">
//                 <IndexDropdown />
//               </li>

//               <div className="mt-4 flex justify-between items-center">
//                 <li className="flex">
//                   <a
//                     className="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
//                     href=""
//                     target="_blank"
//                   >
//                     <FontAwesomeIcon icon={faFacebook} className="text-site-gray-1 text-2xl dark:text-site-yellow-5" />
//                     <span className="lg:hidden inline-block ml-2 dark:text-site-yellow-5">Share</span>
//                   </a>
//                 </li>

//                 <li className="flex items-center">
//                   <a
//                     className="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
//                     href=""
//                     target="_blank"
//                   >
//                     <FontAwesomeIcon icon={faTwitter} className="text-site-gray-1 text-2xl dark:text-site-yellow-5" />
//                     <span className="lg:hidden inline-block ml-2 dark:text-site-yellow-5">Tweet</span>
//                   </a>
//                 </li>

//                 <li className="flex items-center">
//                   <a
//                     className="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
//                     href=""
//                     target="_blank"
//                   >
//                     <FontAwesomeIcon icon={faWhatsapp} className="text-site-gray-1 text-2xl dark:text-site-yellow"/>
