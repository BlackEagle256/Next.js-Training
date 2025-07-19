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
import Head from "next/head";

const tabContent = [
    { id: 1, label: "Dashboard", icon: <DashboardIcon />, content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime assumenda nesciunt corporis incidunt nulla tempora blanditiis! Temporibus aut minus molestias rerum perspiciatis ab at itaque aperiam cupiditate, autem, sit cumque." },
    { id: 2, label: "Settings", icon: <SettingsIcon />, content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate illo nemo facilis tempore iusto iure hic non accusamus culpa et, magni vel harum? Consequatur iste excepturi possimus nesciunt maxime id." },
    { id: 2, label: "Users", icon: <PeopleAltIcon />, content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis facere pariatur recusandae eaque perspiciatis, quia doloribus doloremque ducimus sunt culpa sint, consectetur fugit consequuntur itaque quae cum vel corporis quibusdam!" },
]

export default function MuiTabs() {
    const [value, setValue] = useState(0);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleChange = (_, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%", mt: 4, textAlign: "center" }}>
            <h1 style={{ margin: "auto", display: "inline-block" }}>
                Pro MUI Tabs
            </h1>

            <Tabs
                value={value}
                onChange={handleChange}
                variant={isMobile ? "scrollable" : "standard"}
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
        </Box >
    )
}
