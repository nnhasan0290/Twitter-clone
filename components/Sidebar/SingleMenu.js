const SingleMenu = ({ text, Icon, active }) => {
  return (
    <div className="flex">
      <div className="flex items-center px-3 py-2 cursor-pointer hover-effect">
        <Icon className="h-8 text-white w-7" />
        <h1
          className={`text-xl font-normal leading-9 text-white mr-2 ${
            active && "font-bold"
          } ml-5`}
        >
          {text}
        </h1>
      </div>
    </div>
  );
};
export default SingleMenu;
