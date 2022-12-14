import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { styled } from "@mui/material/styles";

// In-line styling
const styles = {
  navigation: {
    marginTop: 0
  }
};

// Custom styling for MUI tabs
const StyledTab = styled(Tab)({
  "&.MuiTouchRipple-root": {
    color: "#D3D3D3"
  },
  "&.MuiButtonBase-root.MuiTab-root": {
    fontSize: "15px",
    fontWeight: 700,
    paddingLeft: 0,
    paddingRight: 0
  },
  "&.Mui-selected": {
    color: "#D3D3D3",
    fontSize: "15px"
  },
})

function Navigation({ handlePageChange }) {
  // State info for tracking current page
  const [value, setValue] = React.useState('about');

  // What to do when tab is changed
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', }} style={styles.navigation}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        textColor="inherit"
        sx={{
          '& .MuiTabs-indicator': { backgroundColor: "#D3D3D3" }
        }}
        aria-label="navigation tabs"
      >
        {/* Individual tabs for pages */}
        <StyledTab 
          value="about" 
          label="About"
          href="#about"
          onClick={() => handlePageChange('About')}
        />
        <StyledTab 
          value="portfolio" 
          label="Portfolio"
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
        />
        <StyledTab 
          value="contact" 
          label="Contact"
          href="#contact"
          onClick={() => handlePageChange('Contact')}
        />
        <StyledTab 
          value="resume" 
          label="Resume"
          href="#resume"
          onClick={() => handlePageChange('Resume')}
        />
      </Tabs>
    </Box>
  );
}

export default Navigation;
