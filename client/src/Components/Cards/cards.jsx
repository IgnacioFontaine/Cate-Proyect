import Card from "../Card/card";

const Cards = ({ groups }) => {
  const listGroups = groups;
  return (
    <div>
      {listGroups &&
        listGroups.map((group) => <Card group={group} key={group.id} />)}
    </div>
  );
};

export default Cards;
