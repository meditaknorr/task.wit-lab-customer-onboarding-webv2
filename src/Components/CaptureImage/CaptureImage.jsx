import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { CaptureImageScreen } from './Style';
import closeIcon from '../../Assets/Images/icons/ic_close_white.svg';

/**
 * Returns a React Component to capture an image.
 * @param title  { a String that helps the user to understand the context in the page}
 * @param type {a String that defines what is the type of the photo that is about to be taken}
 * @param footer {a String that helps the user to position the frame}
 * @param overlayMode {a Number containing key that indicates either the
 * frame is rounded or squared - 1 for rounded and 0 for squared}
 * @param setPhoto {a FUNCTION to inform the parent component that the photo was captured}
 * @param closeCamera {a FUNCTION to close de camera and return to the previous route}
 * @param storeProperty {an Object used to define whats the name of the store property
 * that is going to hold the photo object}
 * @returns {JSX.Element}
 * @constructor
 */
const CaptureImage = ({
  title,
  type,
  footer,
  overlayMode,
  setPhoto,
  closeCamera,
  storeProperty,
}) => {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const overlayRef = useRef();
  let video;

  const getVideo = () => {
    navigator.mediaDevices.getUserMedia({
      video: {
        width: window.screen.height,
        height: window.screen.width,
        facingMode: overlayMode === 0 ? { exact: 'environment' } : 'user',
      },

    })
      .then((stream) => {
        video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getVideo();
    return function cleanup() {
      const stream = video.srcObject;
      const camera = stream.getTracks();

      camera.forEach((track) => {
        track.stop();
      });

      video.srcObject = null;
    };
  }, [videoRef, window.screen.height, window.screen.width]);

  const takePhoto = () => {
    const width = 290;
    const height = 290;

    // eslint-disable-next-line no-shadow
    const video = videoRef.current;
    const photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    const image = overlayRef.current.getBoundingClientRect();

    const ctx = photo.getContext('2d');
    ctx.drawImage(video, image.x, image.y, image.width, image.height, 0, 0, width, height);
    const takenImg = photoRef.current.toDataURL('image/jpeg', 1.0);
    setPhoto({ [storeProperty.storePropertyName]: takenImg });
  };

  return (
    <>
      <CaptureImageScreen overlayMode={overlayMode} backgroundHeight={window.screen.height}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video className="video-background" ref={videoRef} />
        <div className="video-background-wrapper">
          <div className="video-container">
            <div className="camera" ref={overlayRef}>
              {/* eslint-disable-next-line max-len */}
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
              <img onClick={closeCamera} className="camera--close-icon" src={closeIcon} alt="Close Icon" />
              <span className="camera__title">{title}</span>

              <span className="camera__photo-type">{type}</span>

              <span className="camera__footer-note">{footer}</span>

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button type="button" onClick={takePhoto} className="camera__shoot-button" />
              <canvas className="photo" ref={photoRef} />
            </div>
          </div>
        </div>
      </CaptureImageScreen>
    </>
  );
};

CaptureImage.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  overlayMode: PropTypes.number.isRequired,
  setPhoto: PropTypes.func.isRequired,
  closeCamera: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  storeProperty: PropTypes.object.isRequired,
};

export default CaptureImage;