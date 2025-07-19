import { Tabs, Tab, Box, Typography, AppBar } from "@mui/material";
import { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SettingsIcon from "@mui/icons-material/Settings";

const tabContent = [
    { label: "Dashboard", icon: <DashboardIcon />, content: "Dashboard Content" },
    { label: "Settings", icon: <SettingsIcon />, content: "Settings Content" },
    { label: "Users", icon: <PeopleAltIcon />, content: "Users Content" }
]

export default function TabsPro() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <Box sx={{ width: "100%", mt: 4 }}>
            <Tabs
                value={value}
                onChange={handleChange}
                centered
                TabIndicatorProps={{
                    style: {
                        height: 4,
                        backgroundColor: "#1976d2",
                    },
                }}
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
                                borderRadius: 2
                            },
                            "&:hover": {
                                backgroundColor: "#f0f0f0",
                            },
                            mx: 1,
                            px: 2,
                        }}
                    >
                    </Tab>
                ))}
            </Tabs>

            <Box sx={{ mt: 4, p: 3, border: "1px solid #ddd", borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom>
                    {tabContent[value].label}
                </Typography>
                <Typography>{tabContent[value].content}</Typography>
            </Box>
        </Box>
    )
}
