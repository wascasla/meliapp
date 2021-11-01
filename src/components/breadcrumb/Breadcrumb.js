import React from "react";
import "./Breadcrumb.scss";

const Breadcrumb = ({ categories }) => {
  const getBreadcrumb = () => {
    let item = "";
    categories.forEach((element) => {
      item = item + element;
      if (categories[categories.length - 1] !== element) {
        item = item + " >";
      }
    });
    return item;
  };

  return <div className="container-breadcrumb">{categories && getBreadcrumb()}</div>;
};

export default Breadcrumb;
