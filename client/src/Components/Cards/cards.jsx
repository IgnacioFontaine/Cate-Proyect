import Card from "../Card/card";

const Cards = () => {
  const grupo = {
    name: "GRUPO",
    meaning: "Significado Del Grupo",
    release_date: "1999-01-01",
    manager: ["Dele 1-Dele2"],
    principal_img: "",
    status: "Cate",
  };
  return (
    <div>
      <Card group={grupo}></Card>
    </div>
  );
};

export default Cards;
