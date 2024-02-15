import { Link } from "react-router-dom";

import Image from "react-bootstrap/Image";

import { routerLinks } from "../../routerConfig.js";

import EcomLogo from "../../assets/EcomLogo.png";

function AddProductHeader() {
  return (
    <div className="text-center">
      <Link to={routerLinks.HOME.path}>
        <Image src={EcomLogo} alt="Ecommerce Logo" fluid />
      </Link>
    </div>
  );
}
export default AddProductHeader;
