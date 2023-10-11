function Card() {
    return (
        <div className='card'>
            <div className='card__like'>
                <img width={32} height={32} src='/img/dislike.svg' alt='dislike' />
            </div>
            <img width={133} height={112} src='/img/sneackers/sneackers1.jpg' alt='SneackersPic' />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>
                <button className='button'>
                    <img width={11} height={11} src='/img/plus.svg' />
                </button>
            </div>
        </div>
    );
}

export default Card;