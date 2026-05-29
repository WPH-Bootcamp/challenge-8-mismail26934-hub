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
        className='box-border absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex h-[374px] w-[353px] flex-col items-start overflow-hidden rounded-2xl border border-[#252B37] md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:h-[479px] md:w-[518px] md:bg-[#0A0D12]'
        onClick={(e) => e.stopPropagation()}
        role='dialog'
        aria-modal='true'
        aria-labelledby='message-received-title'
      >
        <div className='flex h-[160px] w-full items-center justify-center gap-2 bg-[#0A0D12] p-2 md:h-[225px] md:bg-transparent md:p-0'>
          <img
            src={imageSrc}
            alt='Message received'
            className='h-[144px] w-[144px] object-contain md:h-[228px] md:w-[228px]'
          />
        </div>

        <div className='flex h-[214px] w-full flex-col items-center gap-4 rounded-b-2xl rounded-t-none bg-black px-6 pb-10 pt-6 md:h-[254px] md:gap-8 md:px-8 md:pt-8'>
          <div className='flex h-[90px] w-[305px] flex-col items-center gap-0.5 p-0 md:h-[102px] md:w-[454px] md:gap-2'>
            <h2
              id='message-received-title'
              className='text-center text-base font-medium leading-6 text-white'
            >
              Message Received!
            </h2>
            <p className='w-[305px] text-center text-base font-medium leading-6 text-white/75 md:h-[60px] md:w-[454px]'>
              Thanks for reaching out - we'll get back to you as soon as
              possible.
            </p>
          </div>

          <button
            type='button'
            onClick={onBackHome}
            className='inline-flex h-11 w-[305px] items-center justify-center gap-1 rounded-full bg-[#FF623E] p-2 text-sm font-semibold text-white shadow-[inset_4px_4px_4px_rgba(255,255,255,0.25)] transition hover:bg-[#ff5a36] focus:outline-none focus:ring-2 focus:ring-[#FF623E] focus:ring-offset-2 focus:ring-offset-black md:h-12 md:w-[361px] md:px-4 md:shadow-none'
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
