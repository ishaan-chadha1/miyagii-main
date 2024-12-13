import React from 'react';
import PropTypes from 'prop-types';

const VideoBackground = ({ src, children }) => {
  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      height: '150vh', // Adjust to fit your desired background height
      overflow: 'hidden',
    },
    video: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      minWidth: '100%',
      minHeight: '100%',
      width: 'auto',
      height: 'auto',
      zIndex: 1,
      objectFit: 'cover', // Ensures the video covers the entire container
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={styles.video}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={styles.overlay}>
        {children}
      </div>
    </div>
  );
};

VideoBackground.propTypes = {
  src: PropTypes.string.isRequired, // Path to the video file
  children: PropTypes.node, // Elements to render over the video
};

export default VideoBackground;
