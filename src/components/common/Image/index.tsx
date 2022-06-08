import React, { useState } from 'react';
import { Image } from 'antd';
import {
    ImagesWrap,
} from './styled'

type TProps = {
    images: any;
}

const Images = ({ images }: TProps): JSX.Element => {
    const [visible, setVisible] = useState(false);

   const handleImage = () => {
       setVisible(true);
   };

    return (
        <ImagesWrap>
            <Image
                preview={{ visible: false }}
                src={images[0]}
                onClick={handleImage}
            />
            <div style={{ display: 'none' }}>
                <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                    {images.map((item: any, index: number) => {
                        return <Image key={index} src={item} />
                    })}
                </Image.PreviewGroup>
            </div>
        </ImagesWrap>
    );
};

export default Images;