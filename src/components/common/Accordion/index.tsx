import React from 'react';
import { Collapse } from 'antd';
import {
    CollapseWrap,
} from './styled'

const { Panel } = Collapse;

const text = `
  text
`;

const Accordion = (): JSX.Element => {
    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    return (
        <CollapseWrap>
            <Collapse defaultActiveKey={['1']} onChange={onChange}>
                <Panel header="This is panel 1" key="1">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel 2" key="2">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel 3" key="3">
                    <p>{text}</p>
                </Panel>
            </Collapse>
        </CollapseWrap>
    )
}

export default Accordion;