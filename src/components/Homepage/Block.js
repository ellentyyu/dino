import React from 'react';

function Block() {
    return (
        <section className='block'>
            <div className='container'>
                <div className='d-flex-between'>
                    <div className='w-sm'>
                        <div className='block__card bg-beige'>
                            <h1>birmingham museums</h1>
                        </div>
                    </div>
                    <div className='w-md'>
                        <div className='block__card book bg-olive'>
                            <div className='d-flex-between'>
                                <div className='book__body'>
                                    <div className='block__category'>READING</div>
                                    <h2 className='block__title'>The Chaos Machine</h2>
                                    <p>這是一本不是鬼故事但讀起來很恐怖的書。一對青梅竹馬，步入中年後相遇於巴黎，一個多話無眠，一個長年失語睡醒總是流結束了嗎?」</p>
                                </div>
                                <img className='book__img w-sm' src='https://cdn.kobo.com/book-images/e0691070-e2a2-4bc3-a865-60e6ea9074ae/353/569/90/False/greenlights-1.jpg'></img>
                            </div>
                            <div className='d-flex-between'>
                                <div className='w-50'>
                                    <span>一邊在看</span>
                                    <h3>52 赫茲的鯨魚們</h3>
                                </div>
                                <div className='w-50'>
                                    <span>接下來想看</span>
                                    <h3>女二</h3>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex-between'>
                            <div className='block__card bg-beige'>
                                <h1>birmingham museums</h1>
                            </div>
                            <div className='block__card bg-beige'>
                                <h1>birmingham museums</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Block;
