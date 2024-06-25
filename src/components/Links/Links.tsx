import "./Links.css"
import { IconType } from 'react-icons';

function Links({ title, Icon }: { title: string, Icon: IconType | string }) {
  return (
    <>
      <div className="link-block">
        {typeof Icon == "string" ?
          <img className="link-block__image" src={Icon} alt={title} />
          :
          <Icon className="link-block__icon" />
        }
        <div className="link-block__title">{title}</div>
      </div>
    </>
  );
}

export default Links;