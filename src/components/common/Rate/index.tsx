import React, { useState } from 'react';
import { Rate  } from 'antd';
import {
    RateWrap,
} from './styled'

type TProps = {
    rating: {
        rate: number,
        count: any
    };
}

const Rating = ({ rating }: TProps): JSX.Element => {
    const [value, setValue] = useState(rating.rate);

    return (
        <RateWrap>
            <span>
                <Rate tooltips={rating.count} onChange={setValue} value={value} />
                {value ? <span className='ant-rate-text'>
                    {rating.count}
                </span> : ''}
            </span>
        </RateWrap>
    );
};

export default Rating;