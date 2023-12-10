import React from 'react';

function Block() {
    return (
        <section className='block'>
            <div className='container'>
                <p>hhhheeeyyyyyy</p>
                <div className='d-flex-between'>
                    <div className='w-sm'>
                        <div className='block__card bg-beige'>
                            <h1>birmingham museums</h1>
                        </div>
                    </div>
                    <div className='w-md'>
                        <div className='block__card bg-olive'>
                            <div className='block__category'>READING</div>
                            <h2 className='block__title'>52 赫茲的鯨魚們</h2>
                            <p>這是一本不是鬼故事但讀起來很恐怖的書</p>
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
