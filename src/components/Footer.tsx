
import AppBar from '@mui/material/AppBar/AppBar';
import theme from '../resources/theme/CustomTheme.d';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import MadeInGTIcon from '../resources/img/madeingt.png';
import { AnimateWhenVisible } from './animations/AnimateWhenVisible';
import Typography from '@mui/material/Typography/Typography';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import { useTranslation } from 'react-i18next';
import { SocialIconBox } from './SocialIconBox';

const bottomAppBar = {
    top: "auto",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: "10px"
};

export const Footer = ({showSocial}: {showSocial: boolean}) => {
    const { t } = useTranslation();
    
    return (
        <ThemeProvider theme={theme}>
            <AppBar color="secondary" position={window.location.pathname === "/contact" ? "fixed" : "relative"} style={bottomAppBar}>
                <AnimateWhenVisible animation="fadeTop">
                    <Toolbar sx={{ display: 'flex', width: "100%", padding: "10px", justifyContent: 'space-around' }} >
                        <img src={MadeInGTIcon} style={{height: "60px"}} alt="madeinguatemala"/>
                        <div style={{display: showSocial ? 'block' : 'none'}}> 
                            <SocialIconBox />
                        </div>
                        <MenuItem>
                            <Typography variant="body2">
                                { t("footer.copyright") }
                            </Typography>
                        </MenuItem>
                    </Toolbar>
                </AnimateWhenVisible>
            </AppBar>
        </ThemeProvider>
    );
}