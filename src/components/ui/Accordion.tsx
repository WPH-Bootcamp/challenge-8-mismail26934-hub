import { useState } from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className='border-b border-border-muted'>
      <button
        type='button'
        onClick={onToggle}
        className='flex w-full items-start justify-between gap-3 py-0 text-left sm:items-center sm:gap-4 lg:py-5'
        aria-expanded={isOpen}
      >
        <span className='pr-4 text-body-lg-bold text-fg lg:text-display-xs lg:font-bold'>
          {question}
        </span>
        <span
          className='mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-fg sm:mt-0'
          aria-hidden='true'
        >
          {isOpen ? (
            <svg
              className='h-5 w-5 sm:h-6 sm:w-6'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M5 12h14'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          ) : (
            <svg
              className='h-5 w-5 sm:h-6 sm:w-6'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M12 5v14M5 12h14'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          )}
        </span>
      </button>
      {isOpen && answer ? (
        <div className='pt-4 pb-0 text-body-sm-medium text-muted lg:pb-5 lg:text-xl lg:font-medium lg:leading-8'>
          {answer}
        </div>
      ) : null}
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
  defaultOpenIndex?: number;
}

export function Accordion({ items, defaultOpenIndex = 0 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className='flex w-full flex-col gap-0 lg:w-full'>
      {items.map((item, index) => (
        <div
          key={item.question}
          className={index < items.length - 1 ? 'mb-7 lg:mb-0' : ''}
        >
          <AccordionItem
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() =>
              setOpenIndex((prev) => (prev === index ? -1 : index))
            }
          />
        </div>
      ))}
    </div>
  );
}
