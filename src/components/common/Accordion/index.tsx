import React, { useState } from 'react';
import { Collapse } from 'antd';
import {
    CollapseWrap,
} from './styled'

const { Panel } = Collapse;

interface IAccordionItem {
    id: number;
    title: string;
    dropdownText: string;
}

type TProps = {
    items: IAccordionItem[];
    headingText?: string;
};

const Accordion = ({ items }: TProps): JSX.Element => {
    const [clicked, setClicked] = useState<number | null>(null);

    const onChange = (id: any) => {
        if (clicked === id) {
            return setClicked(null);
        }
        setClicked(id);
    };

    return (
        <CollapseWrap>
            <Collapse onChange={onChange}>
                {items.map((item: IAccordionItem) => {
                    return (
                        <Panel header={item.title} key={item.id}>
                            <p>{item.dropdownText}</p>
                        </Panel>
                    )
                })}
            </Collapse>
        </CollapseWrap>
    )
}

export default Accordion;