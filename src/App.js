import logo from "./logo.svg";
import "./App.css";
import Demo from "./Demo";
import Demo1 from "./Demo1";
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import {styled} from "@mui/system";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
const BlueButton = styled(Button)({
  backgroundColor: "green",
  color: "black",
});
function App() {
  return (
    <Box>
      <Stack spacing={0} direction="column" justifyContent="space-between">
        <Navbar />
        <Sidebar />
        <Feed />

        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
