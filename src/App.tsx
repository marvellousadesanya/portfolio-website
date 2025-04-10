import {
  DesignFocus,
  Header,
  Profile,
  ProjectGallery,
  LegalBuddyProject,
  GoMail,
  UniTalk,
  Footer,
} from "./components";
import "./App.css";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <Box sx={{ overflow: "hidden" }}>
        <Header />
        <Profile />
        <DesignFocus />
        <ProjectGallery />
        <LegalBuddyProject />
        <GoMail />
        <UniTalk />
        <Footer />
      </Box>
    </>
  );
}

export default App;
