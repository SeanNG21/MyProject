import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import bgimg from "../../Assets/Images/bg.jpg";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import GroupsIcon from "@mui/icons-material/Groups";
import "../../Assets/Styles/Landing/Landing.css";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import LogoutIcon from "@mui/icons-material/Logout";

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function BackToTop(props) {
  const match = useMediaQuery("(max-width:800px)");
  const navigate = useNavigate();
  const signOut = useSignOut();

  const [pkgId, setPkgId] = React.useState("");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const handleContinue = () => {
    setAnchorEl(null);
    navigate("/menu");
  };




  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar
          sx={{ justifyContent: "space-between", background: "#f1f2ec" }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", color: "#003e29" }}
            >
              <i>Task Management</i>
            </Typography>
          </Link>
          
            <div>
              <Button
                id="button"
                variant="contained"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleContinue}
              >
              <AccountCircleIcon />
              </Button>
            </div>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Box>
        <Box
          sx={{
            backgroundImage: `url(${bgimg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <div
            style={{
              textAlign: "center",
              backgroundColor: "transparent",
              marginTop: "-25px",
            }}
          >
            <Typography
              sx={{
                fontSize: "100px",
                color: "#f1f2ec",
                padding: "0",
              }}
            >
              Task Management
            </Typography>
            <i style={{ fontSize: "20px", padding: "0", color: "#f1f2ec" }}>
              Fast & Reliable
            </i>
          </div>
        </Box>
        {/* <Box
          sx={{
            minHeight: "30vh",
            background: "#faf6ed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              width: "100%",
              padding: 2,
              background: "transparent",
              mt: 1,
              boxShadow: "none",
            }}
          >          
          </Paper>
        </Box> */}
        <Box id="thirdPanel">
          <Paper
            sx={{
              width: "80%",
              minHeight: "40vh",
              boxShadow: "none",
              backgroundColor: "transparent",
            }}
          >
            <Stack
              direction={`${match ? "column" : "row"}`}
              spacing={4}
              sx={{ mb: 4, alignItems: "center", mt: 2 }}
            >
              <LocalShippingIcon id="icon" />
              <Paper id="content">
                <Typography>
                  MagicPost là một công ty chuyển phát hàng hóa hàng đầu, mang
                  đến cho khách hàng một dịch vụ vận chuyển nhanh chóng, tin cậy
                  và tiện lợi. Với sứ mệnh làm cho việc gửi và nhận hàng trở nên
                  đơn giản và dễ dàng, chúng tôi cam kết cung cấp cho khách hàng
                  trải nghiệm vận chuyển tốt nhất.
                </Typography>
              </Paper>
              <Paper id="content">
                <Typography align="right">
                  Với mạng lưới vận chuyển rộng khắp và đội ngũ nhân viên giàu
                  kinh nghiệm, MagicPost đảm bảo sự chuyên nghiệp và hiệu quả
                  trong việc vận chuyển hàng hóa của bạn. Chúng tôi hiểu rằng
                  thời gian là quan trọng, vì vậy chúng tôi luôn nỗ lực để đảm
                  bảo hàng hóa của bạn được giao đúng hẹn và với tốc độ nhanh
                  nhất có thể.
                </Typography>
              </Paper>
              <SupportAgentIcon id="icon" />
            </Stack>
            <Stack
              direction={`${match ? "column" : "row"}`}
              spacing={4}
              sx={{ mb: 10, alignItems: "center" }}
            >
              <DeveloperBoardIcon id="icon" />
              <Paper id="content">
                <Typography>
                  Điều hướng thông minh và công nghệ tiên tiến là những yếu tố
                  quan trọng trong phương pháp làm việc của chúng tôi. Chúng tôi
                  sử dụng hệ thống theo dõi hàng hóa tiên tiến để giúp bạn theo
                  dõi mọi bước di chuyển của gói hàng của mình. Bằng cách sử
                  dụng công nghệ tiên tiến, chúng tôi đảm bảo rằng thông tin vận
                  chuyển của bạn luôn được bảo mật và an toàn.
                </Typography>
              </Paper>
              <Paper id="content">
                <Typography align="right">
                  Sự hài lòng của khách hàng là ưu tiên hàng đầu của chúng tôi.
                  Chúng tôi xem mỗi gói hàng là một cam kết để mang đến sự hài
                  lòng và sự tin tưởng cho khách hàng. Với dịch vụ chuyển phát
                  hàng hoá đa dạng và linh hoạt, MagicPost là đối tác tin cậy
                  cho các doanh nghiệp và cá nhân có nhu cầu vận chuyển hàng hóa
                  trên toàn quốc.
                </Typography>
              </Paper>
              <GroupsIcon id="icon" />
            </Stack>
            <Typography id="quote">
              <i>
                Hãy để MagicPost đồng hành cùng bạn trong việc chuyển phát hàng
                hóa một cách đáng tin cậy và thuận tiện.
              </i>
            </Typography>
          </Paper>
        </Box>
      </Box>
      <Box
        sx={{
          minHeight: "15vh",
          background: "#003e29",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FormHelperText sx={{ color: "white", ml: 5 }}>
            Copyright ©2023
          </FormHelperText>
          <Divider
            orientation="vertical"
            sx={{
              height: "10vh",
              borderColor: "white",
              mr: `${match ? "80px" : "220px"}`,
              ml: `${match ? "80px" : "220px"}`,
            }}
          />
          <FormHelperText sx={{ color: "white", mr: 5 }}>
            Designed by Webruh
          </FormHelperText>
        </Stack>
      </Box>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
