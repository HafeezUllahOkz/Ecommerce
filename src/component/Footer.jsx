import {
  EmailOutlined,
  Facebook,
  Instagram,
  LocalPhoneOutlined,
  LocationOnOutlined,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import React from "react";

function Footer() {
  const iconStyle = "m-3 rounded-full cursor-pointer p-2 text-white";
  return (
    <div className="flex items-center justify-around p-2 mobile: flex-col mobile:items-start">
      <div className="flex-1 flex flex-col flex-wrap p-2 justify-start">
        {/* store information */}
        <h1 className="text-[25px]">ZainKeepsCode</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
          asperiores beatae consectetur aliquam aliquid? Delectus quam unde
          facere velit nobis totam maiores earum suscipit eos expedita eaque,
          atque labore culpa!
        </p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={iconStyle + " bg-blue-700"}>
            <Facebook />
          </div>
          <div className={iconStyle + " bg-orange-500"}>
            <Instagram />
          </div>
          <div className={iconStyle + " bg-sky-400"}>
            <Twitter />
          </div>
          <div className={iconStyle + " bg-red-600"}>
            <Pinterest />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-2 justify-start">
        <div className="flex m-3">
          <LocationOnOutlined />
          <p className="pl-3">Stat of California</p>
        </div>

        <div className="flex m-3">
          <LocalPhoneOutlined />
          <p className="pl-3">+92 333 9609766</p>
        </div>

        <div className="flex m-3">
          <EmailOutlined />
          <p className="pl-3">Hafeezkhan110011@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
