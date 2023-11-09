import React, { useState } from 'react';

const Tabs = ({tabprop}) => {
const [content, setContent] = useState('');

  return (
    <div>
        <ul>
            {tabprop.map((tab) =>{
                return <li onclick={()=>setContent(tab.content)}>{tab.title}</li>
            })}
        </ul>
        <p>{content} hi</p>
    </div>
  );
};

export default Tabs;