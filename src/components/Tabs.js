import React, { useState } from 'react';

const Tabs = ({ tabprop }) => {
  const [content, setContent] = useState('');

  return (
    <div>
      <ul>
        {tabprop.map((tab) => (
          <li key={tab.title} onClick={() => setContent(tab)}>
            {tab.title}
          </li>
        ))}
      </ul>
      <p>This is the content for {content.title}</p>
    </div>
  );
};

export default Tabs;
