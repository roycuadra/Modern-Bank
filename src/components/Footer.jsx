import styles from "../style";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { AiOutlineMail, AiFillPhone, AiOutlineWhatsApp } from "react-icons/ai";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10 ">
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72.14px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
              key={footerlink.title}
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2023 Sayed Hany.
        </p>

        <div className="flex flex-row md:mt-0 mt-6 text-white">
          <a
            href="https://www.linkedin.com/in/sayed-hany-b30946192/"
            target="_blank"
            className="text-[20px] mr-3 hover:scale-150 hover:rotate-45 hover:text-secondary"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://github.com/sayedhany"
            target="_blank"
            className="text-[20px] mr-3 hover:scale-150 hover:rotate-45 hover:text-secondary"
          >
            <FiGithub />
          </a>
          <a
            target="_blank"
            href="mailto:sayedhany975@gmail.com"
            className="text-[20px] mr-3 hover:scale-150 hover:rotate-45 hover:text-secondary"
          >
            <AiOutlineMail />
          </a>
          <a
            target="_blank"
            href="tel:0201201500975"
            className="text-[20px] mr-3 hover:scale-150 hover:rotate-45 hover:text-secondary"
          >
            <AiFillPhone />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=0201201500975"
            className="text-[20px] mr-3 hover:scale-150 hover:rotate-45 hover:text-secondary"
          >
            <AiOutlineWhatsApp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
