import React, { useState } from 'react';
import { Rate  } from 'antd';
import {
    RateWrap,
} from './styled'

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Rating = (): JSX.Element => {
    const [value, setValue] = useState(3);

    return (
        <RateWrap>
            <Rate tooltips={desc} onChange={setValue} value={value} />
            {value ? <span className="ant-rate-text">{desc[value - 1]}
            </span> : ''}
        </RateWrap>
    );
};

export default Rating;