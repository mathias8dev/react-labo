import './App.css'
import MedikaSubmenuComponent from "./components/MedikaSubmenuComponent.tsx";
import {Box, ListItem, ListItemButton, ListItemText} from "@mui/material";
import React from "react";

function App() {

    return (
        <>
            <div>
                <h3>Medika SubmenuComponent</h3>
                <MedikaSubmenuComponent title={"Medika Menu"}>
                    <Box>
                        <ListItem>
                            <ListItemButton>
                                <ListItemText primary="Home"/>
                            </ListItemButton>
                        </ListItem>
                    </Box>
                </MedikaSubmenuComponent>
            </div>
        </>
    )
}

export default App
