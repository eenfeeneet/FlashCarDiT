
import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

const calculateMargin = (selfIndex, slideIndex, speed = 50) => {
    const diff = selfIndex - slideIndex;
    if (Math.abs(diff) > 1) return 0;
    return `${diff * speed}%`;
};

const CarouselSlide = ({ transition, children, renderElements, ...props }) => {
    const [index, setIndex] = useState(0);
    const [fineIndex, setFineIndex] = useState(index);

    const onChangeIndex = i => {
        setIndex(i);
        setFineIndex(i);
    };

    return (
        <Fragment>
            <SwipeableViews
                resistance
                springConfig={{
                    duration: '0.6s',
                    easeFunction: '',
                    delay: '0s',
                }}
                enableMouseEvents
                {...props}
                index={index}
                onChangeIndex={onChangeIndex}
                onSwitching={i => {
                    setFineIndex(i);
                }}
                containerStyle={{height: '100%'}}
            >
                {children({
                    fineIndex,
                    injectStyle: (slideIndex, speed) => ({
                        marginLeft: calculateMargin(slideIndex, fineIndex, speed),
                        transition: fineIndex === index ? transition : 'none',
                    }),
                })}
            </SwipeableViews>
            {renderElements({ index, onChangeIndex })}
        </Fragment>
    );
};

CarouselSlide.propTypes = {
    transition: PropTypes.string,
    children: PropTypes.func.isRequired,
    renderElements: PropTypes.func,
};

CarouselSlide.defaultProps = {
    transition: '0.8s',
    renderElements: () => {},
};

export default CarouselSlide;