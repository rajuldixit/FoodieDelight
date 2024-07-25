import { APP_NAME, FOOTER_TEXT } from "../../utils/constants";
const Footer = () => {
  return (
    <div className="flex items-center justify-center p-2">
      <h6>
        {APP_NAME} &copy;{FOOTER_TEXT}
      </h6>
      <h6>languages</h6>
    </div>
  );
};

export default Footer;
