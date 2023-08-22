const Card = (group) => {
  return (
    <div>
      <div>
        <img src={group.principal_img} alt={group.name} />
      </div>
      <div>
        <h1>{group.name && group.name}</h1>
        <h2>{group.meaning && group.meaning}</h2>
        <h2>{group.release_date && group.release_date}</h2>
        <h2>{group.manager && group.manager}</h2>
        <h2>{group.status && group.status}</h2>
      </div>
    </div>
  );
};

export default Card;
