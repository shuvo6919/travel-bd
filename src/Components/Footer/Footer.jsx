import "./footer.css";
import { IoIosArrowForward } from "react-icons/io";
import { MdFacebook } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoLogoTwitter } from "react-icons/io5";

import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="about">
        <h3>TRavel Guru</h3>
        <p>
          "Embark on unforgettable adventures with Travel Guru. From serene
          beaches to bustling cities, let us guide you to your dream
          destinations. Start exploring today!"
        </p>
        <div>
          <Link>
            <MdFacebook className="social-icon" />
          </Link>
          <Link>
            <IoLogoTwitter className="social-icon" />
          </Link>
          <Link>
            <RiInstagramFill className="social-icon" />
          </Link>
        </div>
      </div>
      <div>
        <h4>Our Agency</h4>
        <ul>
          <li>
            <IoIosArrowForward />
            Services
          </li>
          <li>
            <IoIosArrowForward />
            Insurance
          </li>
          <li>
            <IoIosArrowForward />
            Agency
          </li>
          <li>
            <IoIosArrowForward />
            Payment
          </li>
          <li>
            <IoIosArrowForward />
            Tourism
          </li>
        </ul>
      </div>
      <div>
        <h4>Our Agency</h4>
        <ul>
          <li>
            <IoIosArrowForward />
            Services
          </li>
          <li>
            <IoIosArrowForward />
            Insurance
          </li>
          <li>
            <IoIosArrowForward />
            Agency
          </li>
          <li>
            <IoIosArrowForward />
            Payment
          </li>
          <li>
            <IoIosArrowForward />
            Tourism
          </li>
        </ul>
      </div>
      <div>
        <h4>Our Agency</h4>
        <ul>
          <li>
            <IoIosArrowForward />
            Services
          </li>
          <li>
            <IoIosArrowForward />
            Insurance
          </li>
          <li>
            <IoIosArrowForward />
            Agency
          </li>
          <li>
            <IoIosArrowForward />
            Payment
          </li>
          <li>
            <IoIosArrowForward />
            Tourism
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
