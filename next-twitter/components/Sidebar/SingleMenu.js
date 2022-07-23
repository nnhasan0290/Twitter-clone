const SingleMenu = ({text, Icon}) =>{
    return (
        <div className="flex items-center my-1 cursor-pointer hover-effect">
            <Icon className='w-7 h-8 text-white'/>
            <h1 className="ml-5 text-xl font-medium text-white">{text}</h1>
        </div>
    )
}
export default SingleMenu;