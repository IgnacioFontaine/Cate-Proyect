import Card from "../Card/card";
import { Box } from "@mui/material"

const Cards = ({ groups }) => {
  const listGroups = groups;
  return (
    <Box>
      {listGroups &&
        listGroups.map((group) => <Card group={group} key={group.id} />)}
    </Box>
  );
};

export default Cards;
