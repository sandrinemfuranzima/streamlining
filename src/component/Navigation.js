import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <Navbar className='bg-purple-50 p-2' expand="lg">
      <Container fluid className='p-4 mx-5'>
        <Navbar.Brand href="#">Streamlining</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto  my-2 my-lg-0 font-bold text-lg"
            style={{ maxHeight: '100px' }}
          >
            <div>
              <NavLink to="/" className="mx-6">Home</NavLink>
            <NavLink to="/contact" className="mx-3">Contact</NavLink>
            <NavLink to="/about" className="mx-3">About</NavLink>
            </div>

             <div className='flex ml-3 mr-3'>

                  <div class="flex h-10 mx-2 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl">
                  <FaFacebook class="text-site-gray-1  text-2xl" />

                </div>
                 <div class="flex mx-2 h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl">
                  <FaWhatsapp class="text-site-gray-1 text-2xl" />

                </div>
                 <div class="flex h-10 mx-2 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl">
                  <FaTwitter class="text-site-gray-1 text-2xl" />

                </div>

             </div>

            <NavLink to="/authenticate">
              <button class="inline-flex text-white text-center justify-center border px-2 py-1 focus:outline-none  hover:bg-blue-600 rounded-lg text-sm mr-3 bg-slate-400">Sign In</button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <nav class="top-0 fixed z-50  mt:w-0 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow bg-site-gray-5 dark:bg-site-gray-1">
    //   <div class="container px-12 mx-24 flex flex-wrap items-center justify-between">
    //     <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
    //       <router-link to="/">
    //         <a class="text-site-gray-1 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase dark:text-site-green-5">
    //           Streamlining
    //         </a>
    //       </router-link>
    //       <button
    //         class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
    //         type="button"
    //         Onclick="setNavbarOpen"
    //       >
    //         <FaFacebook class="text-site-gray-1 text-2xl dark:text-site-yellow-3" />
    //       </button>
    //     </div>

    //     <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
    //       <li class="flex justify-center items-end">
    //         <index-dropdown />
    //       </li>

    //       <div class="mt-4 flex justify-between items-center">
    //         <div>
    //           <NavLink to="/" className="mx-6">
    //             Home
    //           </NavLink>
    //           <NavLink to="/Services" className="mx-3">
    //             Contact
    //           </NavLink>
    //           <NavLink to="/help" className="mx-3">
    //             About
    //           </NavLink>
    //         </div>

    //         <li class="flex">
    //           <a
    //             class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
    //             href=""
    //             target="_blank"
    //           >
    //             <FaFacebook class="text-site-gray-1 text-2xl dark:text-site-yellow-5 border-red" />
    //             <span class="lg:hidden inline-block ml-2 dark:text-site-yellow-5">
    //               Share
    //             </span>
    //           </a>
    //         </li>

    //         <li class="flex items-center">
    //           <a
    //             class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
    //             href=""
    //             target="_blank"
    //           >
    //             <FaTwitter class="text-site-gray-1 text-2xl dark:text-site-yellow-5" />
    //             <span class="lg:hidden inline-block ml-2 dark:text-site-yellow-5">
    //               Tweet
    //             </span>
    //           </a>
    //         </li>

    //         <li class="flex items-center">
    //           <a
    //             class="hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
    //             href=""
    //             target="_blank"
    //           >
    //             <FaWhatsapp class="text-site-gray-1 text-2xl dark:text-site-yellow-5" />
    //             <span class="lg:hidden inline-block ml-2 dark:text-site-yellow-5">
    //               Chat
    //             </span>
    //           </a>
    //         </li>

    //         <li class="flex items-center">
    //           <dark-mode-switcher />
    //         </li>

    //         <li class="flex items-center" v-if="isAuthenticated">
    //           <router-link to="`/${$i18n.locale}/logout`">
    //             <action-button
    //               type="secondary"
    //               size="sm"
    //               text="btn.signOut"
    //               class="dark:bg-site-gray-2"
    //             />
    //           </router-link>
    //           <router-link to="`/${$i18n.locale}/admin`">
    //             <fa icon="right-from-bracket" class="mx-2" />
    //           </router-link>
    //         </li>
    //         <li class="flex items-center" v-else>
    //           <router-link to="`/${$i18n.locale}/login`">
    //             <action-button
    //               type="secondary"
    //               size="sm"
    //               text="btn.signIn"
    //               class="dark:bg-site-gray-2"
    //             />
    //           </router-link>
    //         </li>
    //         <li class="flex justify-center items-end">
    //           <drop></drop>
    //         </li>
    //       </div>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default Navigation;
