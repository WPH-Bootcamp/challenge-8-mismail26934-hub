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
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4'
      onClick={onClose}
      role='presentation'
    >
      <div
        className='box-border absolute left-[calc(50%-259px)] flex h-[479px] w-[518px] flex-col items-start overflow-hidden rounded-2xl border border-[#252B37] bg-[#0A0D12] p-0'
        onClick={(e) => e.stopPropagation()}
        role='dialog'
        aria-modal='true'
        aria-labelledby='message-received-title'
      >
        <div className='flex h-[225px] w-full items-center justify-center'>
          <img
            src={imageSrc}
            alt='Message received'
            className='h-[228px] w-[228px] object-contain'
          />
        </div>

        <div className='flex h-[254px] w-full flex-col items-center gap-8 rounded-b-2xl rounded-t-none bg-black px-8 pb-10 pt-8'>
          <div className='flex h-[102px] w-[454px] flex-col items-center gap-2 p-0'>
            <h2
              id='message-received-title'
              className='text-center text-base font-medium leading-6 text-white'
            >
              Message Received!
            </h2>
            <p className='h-[60px] w-[454px] text-center text-base font-medium leading-6 text-white/75'>
              Thanks for reaching out - we&apos;ll get back to you as soon as
              possible.
            </p>
          </div>

          <button
            type='button'
            onClick={onBackHome}
            className='inline-flex h-[48px] w-[361px] items-center justify-center rounded-full bg-[#FF623E] px-4 text-sm font-semibold text-white transition hover:bg-[#ff5a36] focus:outline-none focus:ring-2 focus:ring-[#FF623E] focus:ring-offset-2 focus:ring-offset-black'
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
