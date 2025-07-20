import { useState } from "react";
import { Box, CssBaseline, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";

const drawerWidth = 240;

const menuItems = [
    { text: "Dashboard", href: "/dashboard" },
    { text: "Reports", href: "/reports" },
    { text: "Settings", href: "/settings" },
]

export default function DashboardLayout({ children }) {
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Dashboard Mohammad Hosein
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: "auto" }}>
                    <List>
                        {menuItems.map(({ text, href }) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton component={Link} href={href}>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}
