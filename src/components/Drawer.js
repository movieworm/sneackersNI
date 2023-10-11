function Drawer() {
    return (

        <div className='overlay'>
            <div className='drawer'>
                <h2 className='d-flex justify-between'>Корзина<img className='cu-p' src='/img/remove.svg' /></h2>


                <div className='drawer__items'>
                    <div className='cartItem d-flex align-center mb-20'>
                        <img className='mr-20 align-center' width={70} height={70} src='/img/sneackers/sneackers1.jpg' alt='sneackers_pix' />
                        <div className='mr-20 align-center'>
                            <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className='removeBtn' src='/img/remove.svg' alt='remove_btn' />
                    </div>
                    <div className='cartItem d-flex align-center mb-20'>
                        <img className='mr-20 align-center' width={70} height={70} src='/img/sneackers/sneackers6.jpg' alt='sneackers_pix' />
                        <div className='mr-20 align-center'>
                            <p className='mb-5'>Мужские Кроссовки Nike Kyrie 7</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className='removeBtn' src='/img/remove.svg' alt='remove_btn' />
                    </div>
                </div>

                <ul className='priceTax mb-25'>
                    <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>21 498 руб.</b>
                    </li>
                    <li>
                        <span>Чаевые:</span>
                        <div></div>
                        <b>1074 руб.</b>
                    </li>
                </ul>
                <button className='drawer__btn greenButton'>Оформить заказ</button>
            </div>
        </div>
    );

}

export default Drawer;