import { Link } from "react-router-dom";

import { routerLinks } from "../../routerConfig.js";

import Image from "react-bootstrap/Image";

import EcomLogo from "../../assets/EcomLogo.png";

export const AddProductHeader = () => {
  return (
    <div className="text-center">
      <Link to={routerLinks.HOME.path}>
        <Image src={EcomLogo} alt="Ecommerce Logo" fluid />
      </Link>
    </div>
  );
};
