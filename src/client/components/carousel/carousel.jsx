import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import CarouselSlide from './carouselslide';
import SimpleArrow from './simplearrow';
import DotIndicator from './dotindicator';
import Flashcard from '../flashcard/flashcard';

import { IconButton } from '@material-ui/core';

import ArrowBack from '@material-ui/icons/ArrowBackIos';
import ArrowForward from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
    root: {
        // a must if you want to set arrows, indicator as absolute
        position: 'relative',
        height: '100%'
    },
    slide: {
        perspective: 1000,
        // create perspective
        overflow: 'hidden',
        // relative is a must if you want to create overlapping layers in children
        position: 'relative',
        height: '75%',
        paddingTop: spacing(8),
        [breakpoints.up('sm')]: {
            paddingTop: spacing(10),
        },
        [breakpoints.up('md')]: {
            paddingTop: spacing(14),
        },
    },
    imageContainer: {
        display: 'block',
        position: 'relative',
        zIndex: 2,
        paddingBottom: '56.25%',
    },
    image: {
        display: 'block',
        position: 'absolute',
        zIndex: 10,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        marginLeft: '12%',
        [breakpoints.up('sm')]: {
            marginLeft: '4%',
        },
    },
    arrow: {
        display: 'none',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        [breakpoints.up('sm')]: {
            display: 'inline-flex',
        },
    },
    arrowLeft: {
        left: 0,
        [breakpoints.up('lg')]: {
        left: -64,
      },
    },
    arrowRight: {
      right: 0,
      [breakpoints.up('lg')]: {
        right: -64,
      },
    },
    text: {
      // shared style for text-top and text-bottom
      fontFamily: 'Poppins, san-serif',
      fontWeight: 900,
      position: 'absolute',
      color: palette.common.white,
      padding: '0 8px',
      transform: 'rotateY(45deg)',
      lineHeight: 1.2,
      [breakpoints.up('sm')]: {
        padding: '0 16px',
      },
      [breakpoints.up('md')]: {
        padding: '0 24px',
      },
    },
    title: {
      top: 20,
      left: '20%',
      height: '40%',
      fontSize: 40,
      zIndex: 1,
      background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, #9c9c9c 100%)',
      [breakpoints.up('sm')]: {
        top: 40,
        fontSize: 72,
      },
      [breakpoints.up('md')]: {
        top: 52,
        fontSize: 72,
      },
    },
    subtitle: {
      top: 60,
      left: '0%',
      height: '52%',
      fontSize: 56,
      zIndex: 2,
      background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, #888888 100%)',
      [breakpoints.up('sm')]: {
        top: 112,
        left: '6%',
        fontSize: 96,
      },
      [breakpoints.up('md')]: {
        top: 128,
        fontSize: 104,
      },
    },
    indicatorContainer: {
      textAlign: 'center',
    },
}));

const Carousel = ({ data }) => {
    const classes = useStyles();
    const createStyle = (slideIndex, fineIndex) => {
        const diff = slideIndex - fineIndex;
        if (Math.abs(diff) > 1) return {};
        return {
            transform: `rotateY(${(-diff + 1) * 45}deg)`,
        };
    };
        // eslint-disable-next-line react/prop-types
    const renderElements = ({ index, onChangeIndex }) => (
        <Fragment>
            <IconButton
                className={cx(classes.arrow, classes.arrowLeft)}
                disabled={index === 0}
                onClick={() => onChangeIndex(index - 1)}
            >
                <ArrowBack  />
            </IconButton>
            <IconButton
                className={cx(classes.arrow, classes.arrowRight)}
                disabled={index === data.length - 1}
                onClick={() => onChangeIndex(index + 1)}
            >
                <ArrowForward  />
            </IconButton>
            <div className={classes.indicatorContainer}>
              {data.map(({ id }, i) => (
                <DotIndicator
                  key={id}
                  active={i === index}
                  onClick={() => onChangeIndex(i)}
                />
              ))}
            </div>
        </Fragment>
    );
    const renderChildren = ({ injectStyle, fineIndex }) =>
            data.map(({ id, front, back }, i) => (
                <Flashcard contentFront={front} contentBack={back} key={id} />
            ));

    return (
        <div className={classes.root}>
            <CarouselSlide className="h-75" renderElements={renderElements}>
                {renderChildren}
            </CarouselSlide>
        </div>
    );
};

Carousel.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            title: PropTypes.string,
            subtitle: PropTypes.string,
            image: PropTypes.string,
        }),
    ),
};

Carousel.defaultProps = {
    data: [],
};

export default Carousel;