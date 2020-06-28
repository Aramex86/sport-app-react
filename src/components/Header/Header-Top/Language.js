import React from "react";
// import eng from "../../../assets/usa.png";
// import spa from "../../../assets/spain.png";
// import rus from "../../../assets/russia.png";
// import Icons from "../../common/Icons";
import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/scss/react-flags-select.scss";

const Language = (props) => {
  return (
    <div className="lang-wrapp">
      <ReactFlagsSelect
        defaultCountry="GB"
        countries={["ES", "GB", "RU"]}
      />
    </div>
  );
};

export default Language;
