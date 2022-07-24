const SingleMenu = ({text, Icon, active}) =>{
    return (
        <div className="flex items-center my-1 cursor-pointer hover-effect">
            <Icon className='w-7 h-8 text-white'/>
            <h1 className={`text-xl font-medium text-white ${active && "font-bold"} ml-5`}>{text}</h1>
        </div>
    )
}
export default SingleMenu;