function Header({ setShowSideBarMobile }) {
    const handleBurgerOnClick = () => {
        setShowSideBarMobile(true)
    }

    return (
        <div className='w-full'>
            <img onClick={handleBurgerOnClick} className='xs:w-5 w-6 hover:cursor-pointer' src='/burger.png' />
        </div>
    )
}

export default Header