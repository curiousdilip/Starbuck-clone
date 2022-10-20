import { useState } from "react";
import {
  BsSpotify,
  BsInstagram,
  BsYoutube,
  BsTwitter,
  BsChevronDown,
} from "react-icons/bs";
import { FaPinterestP, FaFacebookF } from "react-icons/fa";
const Footer = () => {
  const [isOpenA, setisOpenA] = useState(false);
  const [isOpenB, setisOpenB] = useState(false);
  const [isOpenC, setisOpenC] = useState(false);
  const [isOpenD, setisOpenD] = useState(false);
  const [isOpenE, setisOpenE] = useState(false);

  const handleOpenA = () => {
    setisOpenA(!isOpenA);
  };
  const handleOpenB = () => {
    setisOpenB(!isOpenB);
  };
  const handleOpenC = () => {
    setisOpenC(!isOpenC);
  };
  const handleOpenD = () => {
    setisOpenD(!isOpenD);
  };
  const handleOpenE = () => {
    setisOpenE(!isOpenE);
  };
  return (
    <>
      <div className="footer">
        <p>
          *NO PURCHASE NECESSARY. Participating stores only. Ends 10/23/22. To
          enter and for Official Rules, visit{" "}
          <a href="www.starbucksstardays.com">starbucksstardays.com</a>
          <br /> <br />. Entrants can receive a maximum of 2 entries per day
          <br />
          <br />
          <br />
          <br />. **Excludes taxes and gratuities. At participating stores. Some
          restrictions apply. 150 Stars deposited after first qualifying
          Starbucks purchase. Flights purchased close to departure may not earn
          double Stars. Stars may not be earned on purchases of alcohol,
          Starbucks Cards and Starbucks Card reloads. For details, visit{" "}
          <a href="www.deltastarbucks.com/terms">deltastarbucks.com/terms</a>
        </p>
      </div>
      <div className="footer-nav">
        <div className="footer-column">
          <p className="">
            About Us{" "}
            <BsChevronDown
              className={`down-icon ${isOpenA ? "rotate" : ""}`}
              onClick={handleOpenA}
            />
          </p>
          <ul className={isOpenA ? "open-link" : "close-link"}>
            <li>Our Company</li>
            <li>Our Coffee</li>
            <li>Stories and News</li>
            <li>Starbucks Archive</li>
            <li>Investor Relations</li>
            <li>Customer Service</li>
          </ul>
        </div>
        <div className="footer-column">
          <p>
            Careers{" "}
            <BsChevronDown
              className={`down-icon ${isOpenB ? "rotate" : ""}`}
              onClick={handleOpenB}
            />
          </p>
          <ul className={isOpenB ? "open-link" : "close-link"}>
            <li>Culture and Values</li>
            <li>Inclusion, Diversity, and Equity</li>
            <li>College Achievement Plan</li>
            <li>Alumni Community</li>
            <li>U.S. Careers</li>
            <li>International Careers</li>
          </ul>
        </div>
        <div className="footer-column">
          <p>
            Social Impact
            <BsChevronDown
              className={`down-icon ${isOpenC ? "rotate" : ""}`}
              onClick={handleOpenC}
            />
          </p>
          <ul className={isOpenC ? "open-link" : "close-link"}>
            <li>People</li>
            <li>Planet</li>
            <li>Environmental and Social Impact Reporting</li>
          </ul>
        </div>
        <div className="footer-column">
          <p>
            For Business Partners
            <BsChevronDown
              className={`down-icon ${isOpenD ? "rotate" : ""}`}
              onClick={handleOpenD}
            />
          </p>
          <ul className={isOpenD ? "open-link" : "close-link"}>
            <li>Landlord Support Center</li>
            <li>Suppliers</li>
            <li>Corporate Gift Card Sales</li>
            <li>Office and Foodservice Coffee</li>
          </ul>
        </div>
        <div className="footer-column">
          <p>
            Order and Pickup
            <BsChevronDown
              className={`down-icon ${isOpenE ? "rotate" : ""}`}
              onClick={handleOpenE}
            />
          </p>
          <ul className={isOpenE ? "open-link" : "close-link"}>
            <li>Order on the App</li>
            <li>Order on the Web</li>
            <li>Delivery</li>
            <li>Order and Pickup Options</li>
            <li>Explore and Find Coffee for Home</li>
          </ul>
        </div>
      </div>
      <div className="social-section">
        <div className="social-icons">
          <div className="icon">
            <BsSpotify className="i" />
          </div>
          <div className="icon">
            <FaFacebookF className="i" />
          </div>
          <div className="icon">
            <FaPinterestP className="i" />{" "}
          </div>
          <div className="icon">
            <BsInstagram className="i" />
          </div>
          <div className="icon">
            <BsYoutube className="i" />{" "}
          </div>
          <div className="icon">
            <BsTwitter className="i" />
          </div>
        </div>
        <p>© 2021 Starbucks Coffee Company. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
