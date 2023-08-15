const Concepts = ({ concepts }) => {
  console.log("concepts", concepts);
  return (
    <ul id="concepts">
      {concepts.map((it) => (
        <li className="concept">
          <img src={it.image} alt="TODO: TITLE" />
          <h2>{it.title}</h2>
          <p>{it.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default Concepts;
