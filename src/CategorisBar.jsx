import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './CategoriesBar.css';
import Button from './Button.jsx';

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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        sx={{ width: '100%' }}
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
        <LinkTab label="count is" href="#" />
        <LinkTab label="Page Two" href="#" />
        <LinkTab label="Page 3" href="#" />
        <LinkTab label="Page 4" href="#" />
        <LinkTab label="Page 5" href="#" />
        <LinkTab label="Page 6" href="#" />
        <LinkTab label="Page 7" href="#" />
        <LinkTab label="Page 11" href="#" />
        <LinkTab label="Page 10" href="#" />
        <LinkTab label="Page 9" href="#" />
        <LinkTab label="Page 8" href="#" />
        <LinkTab label="count is" href="#" />
        <LinkTab label="Page Two" href="#" />
        <LinkTab label="Page 3" href="#" />
        <LinkTab label="Page 4" href="#" />
        <LinkTab label="Page 5" href="#" />
        <LinkTab label="Page 6" href="#" />
        <LinkTab label="Page 7" href="#" />
        <LinkTab label="Page 11" href="#" />
        <LinkTab label="Page 10" href="#" />
        <LinkTab label="Page 9" href="#" />
        <LinkTab label="Page 8" href="#" />
        <LinkTab label="count is" href="#" />
        <LinkTab label="Page Two" href="#" />
        <LinkTab label="Page 3" href="#" />
        <LinkTab label="Page 4" href="#" />
        <LinkTab label="Page 5" href="#" />
        <LinkTab label="Page 6" href="#" />
        <LinkTab label="Page 7" href="#" />
        <LinkTab label="Page 11" href="#" />
        <LinkTab label="Page 10" href="#" />
        <LinkTab label="Page 9" href="#" />
        <LinkTab label="Page 8" href="#" />
        <LinkTab label="count is" href="#" />
        <LinkTab label="Page Two" href="#" />
        <LinkTab label="Page 3" href="#" />
        <LinkTab label="Page 4" href="#" />
        <LinkTab label="Page 5" href="#" />
        <LinkTab label="Page 6" href="#" />
        <LinkTab label="Page 7" href="#" />
        <LinkTab label="Page 11" href="#" />
        <LinkTab label="Page 10" href="#" />
        <LinkTab label="Page 9" href="#" />
        <LinkTab label="Page 8" href="#" />
      </Tabs>
      <div style={{ width: '100px' }}></div>
      <Button
        style={{ position: 'absolute', right: '0' }}
        text={'+ add'}
        onClick={() => {
          /**/
        }}
      ></Button>
    </Box>
  );
}
