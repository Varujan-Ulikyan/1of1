import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../main";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import LoginForm from "./Auth/LoginModal";

const Navbar = () => {
  const { store } = useContext(Context)
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [LoginFormActive, setLoginFormActive] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

      if(localStorage.getItem('token')){
        store.checkAuth()
      }
    
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




      if(!store.isAuth){
        return (
          <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive(false);
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            1 of 1 &nbsp;
            <span className='sm:block hidden'> |  Guitars</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          <li 
          className={`text-secondary
          hover:text-white text-[18px] font-medium cursor-pointer
          `}
          
          ><a>About</a></li>
          <li  className={`text-secondary
          hover:text-white text-[18px] font-medium cursor-pointer
          `}><a>Work</a></li>
          <li  className={`text-secondary
          hover:text-white text-[18px] font-medium cursor-pointer
          `}><a>Craft</a></li>
          <li onClick={() => setLoginFormActive(true)}  className={`text-secondary
          hover:text-white text-[18px] font-medium cursor-pointer
          `}><a>Login</a></li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                <li
                  className={`font-poppins font-medium cursor-pointer text-[16px] 
                      "text-secondary"`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("about");
                  }}
                >
                  <a>About</a>

                </li>
                <li
                  className={`font-poppins font-medium cursor-pointer text-[16px] 
                      "text-secondary"`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("works");
                  }}
                >
                  <a>Works</a>
                </li>


                <li
                  className={`font-poppins font-medium cursor-pointer text-[16px] 
                      "text-secondary"`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("Craft");
                  }}
                >
                  <a>Craft</a>
                </li>

                <li
                  className={`font-poppins font-medium cursor-pointer text-[16px] 
                      "text-secondary"`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("Login");
                  }}
                >
                  <a>Login</a>
                </li>
            </ul>
          </div>
        </div>
      </div>
      <LoginForm active={LoginFormActive} setActive={setLoginFormActive}/>
    </nav>
        )
      }
  
  return (
    <>
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive(false);
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Adrian &nbsp;
            <span className='sm:block hidden'> | JavaScript Mastery</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          <li 
          className={`text-secondary
          hover:text-white text-[18px] font-medium cursor-pointer
          `}
          
          ><a>About</a></li>
          <li  className={`text-secondary
          hover:text-white text-[18px] font-medium cursor-pointer
          `}><a>Work</a></li>
          <li  className={`text-secondary
          hover:text-white text-[18px] font-medium cursor-pointer
          `}><a>Craft</a></li>
          <li onClick={() => store.logout()}  className={`text-secondary
          hover:text-white text-[18px] font-medium cursor-pointer
          `}><a>Logout</a></li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                <li
                  className={`font-poppins font-medium cursor-pointer text-[16px] 
                      "text-secondary"`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("about");
                  }}
                >
                  <a>About</a>

                </li>
                <li
                  className={`font-poppins font-medium cursor-pointer text-[16px] 
                      "text-secondary"`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("works");
                  }}
                >
                  <a>Works</a>
                </li>


                <li
                  className={`font-poppins font-medium cursor-pointer text-[16px] 
                      "text-secondary"`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("Craft");
                  }}
                >
                  <a>Craft</a>
                </li>

                <li
                  className={`font-poppins font-medium cursor-pointer text-[16px] 
                      "text-secondary"`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("Login");
                  }}
                >
                  <a>Login</a>
                </li>
            </ul>
          </div>
        </div>
      </div>
      <LoginForm active={LoginFormActive} setActive={setLoginFormActive}/>
    </nav>
    </>
  );
};

export default Navbar;
