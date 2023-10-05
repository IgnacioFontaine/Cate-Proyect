import { Box, Typography, Card, CardContent } from "@mui/material"

const MuiCard = ({group}) => {
  const { id,name,meaning,release_date,manager,acronym } = group;
  return (
    <Box height={"150px"}>
      <Card key={id && id}>
        <CardContent>
          <Box>
            <Typography>{name && name}</Typography>
          
        </Box>
        <Box >
          <Typography >{acronym && acronym}</Typography>
          <Typography >{meaning && meaning}</Typography>
          <Typography>{release_date && release_date}</Typography>
          <Typography>{manager && manager}</Typography>
        </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MuiCard;
