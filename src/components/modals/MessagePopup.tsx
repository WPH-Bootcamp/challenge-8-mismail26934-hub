import { useEffect } from 'react';

type MessageReceivedPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  onBackHome: () => void;
  imageSrc: string;
};
export function MessageReceivedPopup({
  isOpen,
  onClose,
  onBackHome,
  imageSrc,
}: MessageReceivedPopupProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return (
    <div
      className='message-popup-overlay'
      onClick={onClose}
      role='presentation'
    >
      <div
        className='message-popup'
        onClick={(e) => e.stopPropagation()}
        role='dialog'
        aria-modal='true'
        aria-labelledby='message-received-title'
      >
        <div className='message-popup__image-area'>
          <img
            src={imageSrc}
            alt='Message received'
            className='message-popup__image'
          />
        </div>

        <div className='message-popup__content'>
          <div className='message-popup__text-group'>
            <h2 id='message-received-title' className='message-popup__title'>
              Message Received!
            </h2>
            <p className='message-popup__description'>
              Thanks for reaching out - we'll get back to you as soon as
              possible.
            </p>
          </div>

          <button
            type='button'
            onClick={onBackHome}
            className='message-popup__button'
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
