import React, { useState } from 'react';
import { Tabs, Tab, TextField, Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const MyTabsComponent = () => {
  const [tabs, setTabs] = useState([
    { id: 1, label: 'Starters' },
    { id: 2, label: 'Main Dishes' },
    { id: 3, label: 'Deserts' },
    { id: 4, label: 'Drinks' },
  ]);
  const [editingTabId, setEditingTabId] = useState(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleAddTab = () => {
    const newTab = { id: Date.now(), label: 'New Tab' };
    setTabs([...tabs, newTab]);
    setEditingTabId(newTab.id);
  };

  const handleTabDoubleClick = (tabId, event) => {
    setEditingTabId(tabId);
  };

  const handleTabKeyPress = (event, tabId) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setEditingTabId(null);
    }
  };

  const handleTabNameChange = (event, tabId) => {
    const updatedTabs = tabs.map((tab) => {
      if (tab.id === tabId) {
        const newLabel = event.target.value.trim();
        return newLabel ? { ...tab, label: newLabel } : tab;
      }
      return tab;
    });

    setTabs(updatedTabs);
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width="60%"
      marginX="auto"
    >
      <Tabs
        scrollButtons="auto"
        variant="scrollable"
        scrollable
        value={scrollIndex}
        onChange={(_, newValue) => setScrollIndex(newValue)}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            label={
              editingTabId === tab.id ? (
                <TextField
                  value={tab.label}
                  autoFocus
                  onBlur={() => setEditingTabId(null)}
                  onChange={(e) => handleTabNameChange(e, tab.id)}
                  onKeyPress={(e) => handleTabKeyPress(e, tab.id)}
                />
              ) : (
                <div onDoubleClick={(e) => handleTabDoubleClick(tab.id, e)}>
                  {tab.label}
                </div>
              )
            }
          />
        ))}
      </Tabs>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleAddTab}
      >
        Add
      </Button>
    </Box>
  );
};

export default MyTabsComponent;
