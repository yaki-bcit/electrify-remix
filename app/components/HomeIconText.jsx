

export default function HomeIconText({ text, icon, href, menuClick }) {

    return (
     <a href={href}> <div className="flex gap-x-4 bg-white rounded-lg p-5 mb-5" onClick={menuClick} >
        {icon}
        <p className="text-2xl  leading-loose ">{text}</p>
      </div>
        </a>
    );
  }