import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './CategoriesBar.css';

function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

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
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== 'click' ||
      (event.type === 'click' && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };

  return (
    <Box className="cbar" sx={{ width: '100%' }}>
      <Tabs
        // TabIndicatorProps={{ sx: { backgroundColor: '#646cff' } }}
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
        className="cbar"
      >
        <LinkTab label="Page One" href="#" />
        <LinkTab label="Page Two" href="#" />
        <LinkTab label="Page Three" href="#" />
      </Tabs>
    </Box>
  );
}
