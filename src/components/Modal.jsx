import { useImperativeHandle } from 'react';
import { useState } from 'react';
import { forwardRef } from 'react';

const Modal = forwardRef((props, refs) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  useImperativeHandle(refs, () => {
    return { toggle };
  });

  return (
    <div className="flex">
      <button onClick={toggle} className={props.className}>
        {props.buttonLabel}
      </button>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-zinc-800 md:rounded w-full md:w-1/3 p-4 text-sm">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-zinc-100">{props.h2}</h2>
              <button onClick={toggle} className="text-zinc-700 hover:text-gray-100 text-3xl">
                {'\u00D7'}
              </button>
            </div>
            <div>{props.children}</div>
          </div>
        </div>
      )}
    </div>
  );
});

export default Modal;
