function Link({title, src} : {title: string, src: any}) {
  return (
    <>
      <div className="link-block">
        <img className="link-block__image" src={src} alt={title} />
        <div className="link-block__title">{title}</div>
      </div>
    </>
  );
}

export default Link;