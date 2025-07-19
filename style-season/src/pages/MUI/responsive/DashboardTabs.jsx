import {
  Tabs,
  Tab,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SettingsIcon from "@mui/icons-material/Settings";

const tabContent = [
  { label: "داشبورد", icon: <DashboardIcon />, content: "محتوای داشبورد" },
  { label: "کاربران", icon: <PeopleAltIcon />, content: "لیست کاربران" },
  { label: "تنظیمات", icon: <SettingsIcon />, content: "صفحه تنظیمات" },
];

export default function DashboardTabs() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // sm = 600px

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant={isMobile ? "scrollable" : "standard"} // Responsive
        scrollButtons="auto"
        TabIndicatorProps={{
          style: {
            height: 4,
            backgroundColor: "#1976d2",
          },
        }}
        centered={!isMobile}
      >
        {tabContent.map((tab, index) => (
          <Tab
            key={index}
            icon={tab.icon}
            iconPosition="start"
            label={tab.label}
            sx={{
              fontWeight: "bold",
              color: "#444",
              "&.Mui-selected": {
                color: "#1976d2",
                backgroundColor: "#e3f2fd",
                borderRadius: 2,
              },
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
              mx: 1,
              px: 2,
              minWidth: 100,
            }}
          />
        ))}
      </Tabs>

      <Box
        sx={{
          mt: 4,
          p: 3,
          border: "1px solid #ddd",
          borderRadius: 2,
          backgroundColor: "#fafafa",
        }}
      >
        <Typography variant="h6" gutterBottom>
          {tabContent[value].label}
        </Typography>
        <Typography>{tabContent[value].content}</Typography>
      </Box>
    </Box>
  );
}
