import React from 'react';
import { Carousel } from 'antd';
import {
    SliderWrap,
    StyledImgWrap,
} from './styled';
import  ImgSlide1 from '../../../assets/img/slide1.png';
import  ImgSlide2 from '../../../assets/img/slide2.jpg';
import  ImgSlide3 from '../../../assets/img/slide3.jpg';
import  ImgSlide4 from '../../../assets/img/slide4.jpg';

const contentStyle: React.CSSProperties = {
    width: '100%',
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
};

const Slider = (): JSX.Element => {

    return (
        <SliderWrap>
            <Carousel autoplay>
                <StyledImgWrap>
                    <img src={ImgSlide1} alt="photo" style={contentStyle}/>
                </StyledImgWrap>
                <StyledImgWrap>
                    <img src={ImgSlide2} alt="photo" style={contentStyle}/>
                </StyledImgWrap>
                <StyledImgWrap>
                    <img src={ImgSlide3} alt="photo" style={contentStyle}/>
                </StyledImgWrap>
                <StyledImgWrap>
                    <img src={ImgSlide4} alt="photo" style={contentStyle}/>
                </StyledImgWrap>
            </Carousel>
        </SliderWrap>
    );
};

export default Slider;