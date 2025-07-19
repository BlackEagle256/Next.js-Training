import { Button, Typography, Box, AppBar, Tabs, Tab } from "@mui/material";
import { useState } from "react";

export default function Index() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      gap={2}
    >
      <Typography variant="h4" color="primary">Test MUI</Typography>
      <Button variant="contained" color="primary">Primary Button</Button>
      <Button variant="outlined" color="secondary">outlined Button</Button>

      {/* TABS Section */}

      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="Basic Tab Example"
      >
        <Tab
          label="داشبورد"
          sx={{
            '&.Mui-selected': {
              color: 'primary.main',
              fontWeight: 'bold',
              borderBottom: '2px solid',
            },
            '&:hover': {
              color: 'secondary.main',
            },
          }}
        />
        <Tab label="Settings" />
        <Tab label="Reports" />
      </Tabs>

      <Box sx={{ p: 2 }}>
        {value === 0 && <div>Content Dashboard</div>}
        {value === 1 && <div>Content Settings</div>}
        {value === 2 && <div>Content Reports</div>}
      </Box>
    </Box >
  )
}
