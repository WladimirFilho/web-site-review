import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
  return (
    <div>
      <footer className="footer bottom-0 h-20 w-full bg-yellow-400 flex flex-row justify-between items-center">
        <h1 className="ml-12">Develope By Wladimir and Rafael</h1>
        <div className="flex">
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} className=" mr-4" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} className=" mr-4" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} className=" mr-12" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
