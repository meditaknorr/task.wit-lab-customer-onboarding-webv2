import React from 'react';
import { BaseStatusScreen } from './Style';
import Button from '../../Components/Button/Button';

/**
 * Returns a React Component to display the status of a given submission process.
 * @param submissionStatus  { an Object that defines the description of the photo that is ging to be displayed }
 * @returns {JSX.Element}
 * @constructor
 */
const BaseStatusSubmission = ({ submissionStatus }) => {

  return (
    <>
      <BaseStatusScreen>
        <div className='submission-status-validating'>
          <div className='submission-status__image-wrapper'>
            <img src={submissionStatus.image} alt={submissionStatus.alt} />
          </div>

          {submissionStatus.title &&
            <div className='submission-status__title'>
              <span>{submissionStatus.title}</span>
            </div>
          }

          <div className='submission-status__description'>
            <span>
              {submissionStatus.description.description1}
              {submissionStatus.description.description2 && `<br/>${submissionStatus.description.description2}`}
            </span>
          </div>

          {submissionStatus.action &&
            <div className='submission-status__button'>
              <Button action={submissionStatus.action} text={submissionStatus.buttonText} mode='normal' />
            </div>
          }
        </div>
      </BaseStatusScreen>
    </>
  )
};

export default BaseStatusSubmission;
