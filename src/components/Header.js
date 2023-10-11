function Header(params) {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="headerLeft d-flex align-center">
                <img height={40} width={40} src="/img/logo.png" />
                <div className="headerLeft__info">
                    <h3 className='text-uppercase'>React Sneackers</h3>
                    <p>Магазин топовых кроссовок</p>
                </div>
            </div>
            <div className="headerRight d-flex align-center">
                <div className="headerRight__price mr-30 align-center d-flex">
                    <img className="mr-10" height={18} width={18} src="/img/cart.svg" />
                    <span className="headerRight__price--value">1205 руб.</span>
                </div>
                <div className="headerRight__enter">
                    <img height={18} width={18} src="/img/user.svg" />
                </div>
            </div>
        </header>
    );

}

export default Header;