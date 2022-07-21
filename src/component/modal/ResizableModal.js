import React, { forwardRef, useCallback, useMemo, useState } from "react";
import ReactModal from "react-modal-resizable-draggable";
import "./ResizableModal.css";

const ResizableModal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(null);
  const [contents, setContents] = useState(null);

  const open = useCallback(({ title, contents }) => {
    setTitle(title);
    setContents(contents);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setContents(null);
    setTitle(null);
  }, []);

  ref.current = useMemo(() => ({ open, close }), [open, close]);

  return (
      <ReactModal
          initWidth={1024}
          initHeight={600}
          className={"modal-custom-class"}
          onRequestClose={close}
          isOpen={isOpen}
      >
        {contents}
        <div className='modal__header'>
          <p className='modal__title'>
            {title}
          </p>
          <a className='modal__close_button' onClick={close}>
            x
          </a>
        </div>
      </ReactModal>
  );
});

export default ResizableModal;
