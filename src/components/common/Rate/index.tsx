import React, { useState } from 'react';
import { Rate  } from 'antd';
import {
    RateWrap,
} from './styled'

type TProps = {
    rating: any;
}

const Rating = ({ rating }: TProps): JSX.Element => {
    const [value, setValue] = useState(rating);

    return (
        <RateWrap>
            <span>
                <Rate tooltips={rating} onChange={setValue} value={value} />
                {value ? <span className='ant-rate-text'>
                    {rating}
                </span> : ''}
            </span>
        </RateWrap>
    );
};

export default Rating;