import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './CategoriesBar.css';
import Button from './Button.jsx';
import { useState } from 'react';

// function samePageLinkNavigation(event) {
//   if (
//     event.defaultPrevented ||
//     event.button !== 0 || // ignore everything but left-click
//     event.metaKey ||
//     event.ctrlKey ||
//     event.altKey ||
//     event.shiftKey
//   ) {
//     return false;
//   }
//   return true;
// }

function LinkTab(props) {
  return (
    // <StyledEngineProvider injectFirst>
    <Tab component="a" {...props} />
    // </StyledEngineProvider>
  );
}

export default function NavTabs() {
  const [value, setValue] = useState(0);
  const [tabs, setTabs] = useState([
    { label: 'count is', href: '#' },
    { label: 'Page Two', href: '#' },
  ]);
  const [newTabText, setNewTabText] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleAddTab = () => {
    setTabs([...tabs, { label: newTabText, href: '#' }]);
    setValue(tabs.length);
    setNewTabText('');
    // להסתיר את הinput לאחר הוספת הטאב
    setShowInput(false);
  };

  return (
    <Box
      sx={{
        width: '55%',
        display: 'flex',
        position: 'relative',
        left: '25vw',
      }}
    >
      <Tabs
        sx={{ width: '99%' }}
        TabIndicatorProps={{
          sx: { backgroundColor: '#646cff' },
        }}
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
        className="cbar"
        variant="scrollable"
        scrollButtons="auto"
      >
        {tabs.map((tab, index) => (
          <LinkTab key={index} label={tab.label} href={tab.href} />
        ))}
      </Tabs>
      <div style={{ width: '100px' }}></div>
      <Button
        style={{ position: 'absolute', right: '0' }}
        text={'+ add'}
        onClick={() => setShowInput(true)}
      ></Button>
      {/* טופס להוספת טאב חדש */}
      {showInput && (
        <div>
          <input
            type="text"
            value={newTabText}
            onChange={(e) => setNewTabText(e.target.value)}
          />
          <Button onClick={handleAddTab} text={'Add Tab'}></Button>
        </div>
      )}
    </Box>
  );
}
