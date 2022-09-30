import React from 'react'
import { MdOutlinePhone, MdOutlinePlace, MdAccessTime } from "react-icons/md";
import { GrFacebook, GrInstagram, GrLinkedin } from "react-icons/gr";
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Footer.css"

function Footer() {
    return (
      <section>
        <footer className="z-50 w-screen">
          <div className=" text-white w-screen grid grid-cols-3 grid-flow-col justify-around justify-items-center text-[17px] font-sans footer-bg">
            <div className="mt-8">
              <p className="ml-16 text-2xl">CONTACT US</p>
              <div>
                <div className="flex flex-col mt-4 mb-5">
                  <div className="flex flex-row mt-[15px]">
                    <div className="basis-1/7 text-[30px] mr-[15px]">
                      <MdOutlinePhone />
                    </div>
                    <div className="">
                      <a href="tel:1234567890">1234567890</a>
                    </div>
                  </div>
                  <div className="flex flex-row mt-[5px]">
                    <div className="basis-1/7 text-[30px] mr-[15px]">
                      <MdOutlinePlace />
                    </div>
                    <div className="">
                      <a href="http://maps.google.com/?q=123 Main Street, Uni 21, New York City">
                        123 Main Street, New York
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-row mt-[5px]">
                    <div className="basis-1/7 text-[30px] mr-[15px]">
                      <MdAccessTime />
                    </div>
                    <div className="">
                      <p>MON - FRI: 11:00 AM - 12:00 AM</p>
                      <p>SAT - SUN: 09:00 AM - 12:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div>
                <p className="text-2xl">PAGES</p>
              </div>
              <div>
                <Navbar>
                  <Nav className="flex flex-col mt-7">
                    <Nav.Link as={Link} to={"/"} className="mt-2">
                      Home
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/recipes"} className="mt-2">
                      Recipes
                    </Nav.Link>
                    <Nav.Link as={Link} to={"/contactus"} className="mt-2">
                      Contact Us
                    </Nav.Link>
                  </Nav>
                </Navbar>
              </div>
            </div>
            <div className="grid grid-rows-3 justify-around justify-items-center mt-8">
              <div>
                <p className="text-2xl">FOLLOW US</p>
              </div>
              <div>
                <p>Join us on social networks</p>
              </div>
              <div className="grid grid-cols-3 grid-flow-col mt-[-20px] ">
                <div className="m-4">
                  <GrFacebook />
                </div>
                <div className="m-4">
                  <GrInstagram />
                </div>
                <div className="m-4">
                  <GrLinkedin />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 font-sans text-center">
            <p>Copyright &copy; 2022 All About Food. All rights reserved</p>
          </div>
        </footer>
      </section>
    );
}

export default Footer
