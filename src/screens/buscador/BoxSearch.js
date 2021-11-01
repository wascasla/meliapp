import React, { useEffect } from "react";

const BoxSearch = ({ setParamSearch }) => {
  useEffect(() => {
    setParamSearch("");
  }, [setParamSearch]);

  return <div></div>;
};

export default BoxSearch;
