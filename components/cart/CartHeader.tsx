import React from "react";
import { Link } from "react-router-dom";

import { routerLinks } from "../../routerConfig.js";

import Image from "react-bootstrap/Image";

import EcomLogo from "../../assets/EcomLogo.png";

export const CartHeader = () => (
  <div className="text-center bg-white">
    <Link to={routerLinks.HOME.path}>
      <Image src={EcomLogo} alt="Ecommerce Logo" />
    </Link>
  </div>
);