import { Box, Typography } from "@mui/material"

const Card = (group) => {
  const { id, name, meaning,release_date,acronym,manager  } = group;
  return (
    <Box>
      <Box key={id && id}>
        <Box>
          <Typography variant="h2">{acronym && acronym}</Typography>
        </Box>
        <Box>
          <Typography>{name && name}</Typography>
          <Typography>{meaning && meaning}</Typography>
          <Typography>{release_date && release_date}</Typography>
          <Typography>{release_date && release_date}</Typography>
          <Typography>{manager && manager}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
