import { Box } from "@mui/material";
import JokesContainer from "@/components/JokesContainer";
import SortsContainer from "@/components/SortsContainer";

export default async function Home() {
  return (
    <Box p={4}>
      <SortsContainer/>
      <JokesContainer/>
    </Box>
  );
}
