"use client";

import dynamic from "next/dynamic";
import React, { useState, useCallback } from "react";

const Select = dynamic(() => import("react-select/async"), { ssr: false });

const AsycnReactSelect = ({ loadOptions, handleChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = useCallback((value) => {
    setInputValue(value);
    return value;
  }, []);

  return (
    <Select
      cacheOptions
      loadOptions={loadOptions} // Menggunakan loadOptions dari props
      onInputChange={handleInputChange} // Menangani perubahan input
      defaultOptions={[]}
      placeholder="Ketik untuk mencari..."
      onChange={handleChange}

    />
  );
};

export default AsycnReactSelect;
