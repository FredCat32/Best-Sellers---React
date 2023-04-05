const Book = (props) => {
  const { image, author, title, number } = props;
  console.log(props);

  return (
    <article className="book">
      <img src={image} alt={title}></img>
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <span className="number">{`#${number + 1}`}</span>
    </article>
  );
};

export default Book;
