import dynamic from 'next/dynamic';
import React from 'react';
const Select = dynamic(() => import('react-select'), { ssr: false });

const ReactSelect = ({data,handleChange}) => {
  return <Select options={data} onChange={handleChange}/>;
}

export default ReactSelect