export const MODAL_TYPES = {
  RESIZABLE_MODAL: 'resizable_modal',
}

// singleton
export const modals = {};

export const installModals = ({
  [MODAL_TYPES.RESIZABLE_MODAL]: resizableModal,
}) => {
  modals[MODAL_TYPES.RESIZABLE_MODAL] = resizableModal;
};

export const openModal = ({ modalType, modalContents }) => {
  modals[modalType].current.open(modalContents);
};
