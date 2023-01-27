import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import './App.css';
import AddPost from './components/AddPost';
import Navbar from './components/Navbar';
import Newsfeed from './components/Newsfeed';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
      <Box>
        <Navbar></Navbar>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar></Sidebar>
          <Newsfeed></Newsfeed>
          <Rightbar></Rightbar>
        </Stack>
        <AddPost></AddPost>
      </Box>
  );
}

export default App;
