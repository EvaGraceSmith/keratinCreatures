
//These are the large cards that were displayed on the home page. I removed them, as they were redundant with the small cards.
{data.map((item) => (
    <article>
      <img key={item._id} src={item.image_url} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <Likes />

    </article>
  ))}