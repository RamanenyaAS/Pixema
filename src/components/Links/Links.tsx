import "./Links.css"

function Links({title, src, isDisabled} : {title: string, src: string, isDisabled:boolean}) {
  return (
    <>
      <div className="link-block">
        <img className="link-block__image" src={src} alt={title} />
        <div className="link-block__title">{title}</div>
      </div>
    </>
  );
}

export default Links;