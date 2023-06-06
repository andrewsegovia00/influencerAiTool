const SidebarItem = (props) => {
  return (
    <li>
      <a
        href={props.href}
        className="flex items-stretch p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {props.icon}
        <span className="ml-3">{props.text}</span>
      </a>
    </li>
  );
};

export default SidebarItem;
