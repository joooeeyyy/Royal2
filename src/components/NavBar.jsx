import { useState, useContext } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { ServiceContext } from "../contexts/ServicesContext";
import { logoTekBridge, logoCar } from "../assets/index";
import { devices } from "../utils/responsive";

const { xs, lg, xl } = devices;

const NavBar = () => {
  const { isICT, setIsICT } = useContext(ServiceContext);

  const [toggle, setToggle] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownItemClick = (event) => {
    // Handle the click on dropdown items
    const clickedItem = event.target.textContent;
    console.log(`Clicked on ${clickedItem}`);
    if (clickedItem === "ICT SERVICES") {
      setIsICT(true);
    } else if (clickedItem === "PPE SERVICES") {
      setIsICT(!isICT);
    }
    // You can perform additional actions based on the clicked item
    // For example, close the dropdown, navigate to a different page, etc.
    setDropdownOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds a smooth scrolling effect
    });
    setToggle((prev) => !prev);
  };

  return (
    <Container>
      <Inner>
        <nav className="bg-transparent-800 p-0 flex items-center justify-center">
          <img src={logoCar} alt="hookbank" style={{ width: "160px" }} />
          <ul
            className={`list-none flex-1 sm:flex hidden [&_a]:block [&_a]:text-black-500 justify-end items-center [&_a:hover]:text-red-500`}
          >
            {/* Home */}
            <div className="spacing ">
              <Link
                to="/"
                key={"one"}
                onClick={scrollToTop}
                className={`font-poppins font-normal hover:bg-["#000"] cursor-pointer text-[16px] text-black `}
              >
                HOME
              </Link>
            </div>
            {/* Home */}

            {/* About */}
            <div className="spacing">
              <Link
                to="/about"
                key={"one"}
                onClick={scrollToTop}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-black `}
              >
                ABOUT
              </Link>
            </div>
            {/* About */}

            {/* Feature */}
            <div className="spacing">
              <Link
                to="/services"
                key={"two"}
                onClick={scrollToTop}
                onMouseEnter={() => setDropdownOpen(true)}
                // onMouseLeave={() => setDropdownOpen(false)}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-black`}
              >
                SERVICES
              </Link>
            </div>
            {/* Feature */}

            {/* Products */}
            <div className="spacing">
              <Link
                to="/product"
                key={"three"}
                onClick={scrollToTop}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-black`}
              >
                PRODUCTS
              </Link>
            </div>
            {/* Products */}

            {/* Partners */}
            <div className="spacing">
              <Link
                to={"/partners"}
                key={"four"}
                onClick={scrollToTop}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-black`}
              >
                PARTNERS
              </Link>
            </div>
            {/* Partners */}

            {/* Home */}
            <div className="spacing">
              <Link
                to={"/contact"}
                key={"one"}
                onClick={scrollToTop}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-black`}
              >
                CONTACT US
              </Link>
            </div>
            {/* Home */}
          </ul>

          {/* <ul
            className={`list-none sm:flex hidden focus-within:hover:bg-["#000"] justify-end items-center flex-1`}
          > */}

          {/*For Mobile Devices Toggle Menu Show*/}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            {/* For Menu Toggling*/}

            {toggle ? (
              <IoMdClose
                onClick={() => setToggle((prev) => !prev)}
                color="#000"
                size={"28px"}
              />
            ) : (
              <IoMdMenu
                onClick={() => setToggle((prev) => !prev)}
                color="#000"
                size={"28px"}
              />
            )}
            {/* For Menu Toggling*/}

            {/* For Menu List Items*/}
            <div
              className={`${
                toggle ? "flex" : "hidden"
              } p-6 bg-black-gradient absolute
        top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="list-none flex flex-col justify-end items-center flex-1">
                {/* Home */}
                <div className="spacingm">
                  <Link
                    to="/"
                    key={"one"}
                    onClick={scrollToTop}
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-10`}
                  >
                    Home
                  </Link>
                </div>

                {/* Home */}

                {/* About */}
                <div className="spacingm">
                  <Link
                    to="/about"
                    key={"one"}
                    onClick={scrollToTop}
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-10`}
                  >
                    About
                  </Link>
                </div>
                {/* About */}

                {/* Feature */}
                <div className="spacingm">
                  <Link
                    to="/services"
                    key={"two"}
                    onClick={scrollToTop}
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-10`}
                  >
                    Services
                  </Link>
                </div>
                {/* Feature */}

                {/* Products */}
                <div className="spacingm">
                  <Link
                    to="/product"
                    key={"three"}
                    onClick={scrollToTop}
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-10`}
                  >
                    Products
                  </Link>
                </div>
                {/* Products */}

                {/* Home */}
                <div className="spacingm">
                  <Link
                    to="/partners"
                    key={"one"}
                    onClick={scrollToTop}
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-10`}
                  >
                    Partners
                  </Link>
                </div>
                {/* Home */}

                {/* Home */}
                <div className="spacingm">
                  <Link
                    to="/contact"
                    key={"one"}
                    onClick={scrollToTop}
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-10`}
                  >
                    Contact Us
                  </Link>
                </div>
                {/* Home */}
              </ul>
            </div>
            {/* For Menu List Items*/}
          </div>
          {/*For Mobile Devices Toggle Menu Show*/}
        </nav>
      </Inner>
    </Container>
  );
};

export default NavBar;

const WrapperContainer = styled.div`
  background-color: blue;
  width: 100%;
`;

const Container = styled.div`
  position: fixed;
  display: flex;
  height: 70px;
  justify-content: center;
  background: #fff;
  width: 100%;
  z-index: 1000;
`;

const Inner = styled.div`
  width: 77rem;
  @media ${xs} {
    width: 100%;
    padding: 1rem;
  }
  @media ${lg} {
    padding: 2rem;
  }
  @media ${xl} {
    width: 77rem;
    padding: 0rem;
  }
`;
