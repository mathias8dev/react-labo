import {Box, ButtonBase, IconButton, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import React from "react";


export interface MedikaSubmenuComponentProps {
    title: string;
    children?: React.ReactNode;
}


const MedikaSubmenuComponent: React.FC<MedikaSubmenuComponentProps> = ({title, children}) => {

    const [expanded, setExpanded] = React.useState(false)

    return (
        <>
            <div>
                <ButtonBase onClick={() => setExpanded(!expanded)} style={{display: "flex", width: "100%", justifyContent: "flex-start"}}>
                    <Box
                        sx={{display: "flex", justifyContent: "space-between", alignItems: "center", height: 50, paddingLeft: "15px", width: "100%"}}>
                        <Typography>{title}</Typography>
                        <IconButton onClick={() => setExpanded(!expanded)}>
                            {!expanded && <ExpandMoreIcon/>}
                            {expanded && <ExpandLessIcon/>}
                        </IconButton>
                    </Box>
                </ButtonBase>

                {expanded && children}

            </div>
        </>
    )
}


export default MedikaSubmenuComponent