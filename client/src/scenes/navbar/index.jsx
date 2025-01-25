import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import TuneSharpIcon from '@mui/icons-material/TuneSharp';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ThreePOutlinedIcon from '@mui/icons-material/ThreePOutlined';
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import FlexBetween from "components/FlexBetween";

const Navbar = () => {
  const { palette } = useTheme();
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  
  

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const fullName = `${user.firstName} ${user.lastName}`;

  

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          Gosh
        </Typography>
        {isNonMobileScreens && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="15px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="1.5rem">
          <ExploreOutlinedIcon sx={{ fontSize: "25px" }} />
          <LiveTvIcon sx={{ fontSize: "25px" }} />
          <Button
          sx={{
            color: palette.background.alt,
            backgroundColor: palette.primary.main,
            borderRadius: "3rem",
            fontWeight: "bold"
          }}
          >
            CRIAR
          </Button>
          <LoyaltyIcon sx={{ fontSize: "25px" }} />
          <Diversity3Icon sx={{ fontSize: "25px" }} />
          <CastForEducationIcon sx={{ fontSize: "25px" }} />
          <StorefrontIcon sx={{ fontSize: "25px" }} />
          <PaidOutlinedIcon sx={{ fontSize: "25px" }} />
          <FeedOutlinedIcon sx={{ fontSize: "25px" }} />
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <LightMode sx={{ fontSize: "25px" }} />
            ) : (
              <DarkModeOutlinedIcon sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          <NotificationsOutlinedIcon sx={{ fontSize: "25px" }} />
          <TuneSharpIcon sx={{ fontSize: "25px" }} />
          {/*<Help sx={{ fontSize: "25px" }} />*/}
          <ThreePOutlinedIcon sx={{ fontSize: "25px" }} />
          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName} /* trocar o fullname pelo @marcosgosh */
              sx={{
                backgroundColor: neutralLight,
                width: "150px",
                borderRadius: "15px",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName} {/*mudar para trocar de conta*/}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Sair</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <ExploreOutlinedIcon sx={{ fontSize: "25px" }} />
          <LiveTvIcon sx={{ fontSize: "25px" }} />
          <Button
          sx={{
            color: palette.background.alt,
            backgroundColor: palette.primary.main,
            borderRadius: "3rem",
            fontWeight: "bold"
          }}
          >
            CRIAR
          </Button>
          <LoyaltyIcon sx={{ fontSize: "25px" }} />
          <Diversity3Icon sx={{ fontSize: "25px" }} />
          <CastForEducationIcon sx={{ fontSize: "25px" }} />
          <StorefrontIcon sx={{ fontSize: "25px" }} />
          <PaidOutlinedIcon sx={{ fontSize: "25px" }} />
          <FeedOutlinedIcon sx={{ fontSize: "25px" }} />
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <LightMode sx={{ fontSize: "25px" }} />
            ) : (
              <DarkModeOutlinedIcon sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          <NotificationsOutlinedIcon sx={{ fontSize: "25px" }} />
          <TuneSharpIcon sx={{ fontSize: "25px" }} />
          {/*<Help sx={{ fontSize: "25px" }} />*/}
          <ThreePOutlinedIcon sx={{ fontSize: "25px" }} />
          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName} /* trocar o fullname pelo @marcosgosh */
              sx={{
                backgroundColor: neutralLight,
                width: "150px",
                borderRadius: "15px",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName} {/*mudar para trocar de conta*/}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Sair</MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;
