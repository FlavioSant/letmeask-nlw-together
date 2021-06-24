import { useRef } from "react";
import { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useState } from "react";

import { IconBaseProps } from "react-icons/lib";
import { Container, ModalButtons, ModalContainer } from "./styles";

export interface ModalHandles {
  openModal: () => Promise<boolean>;
}

interface ModalProps {
  title: string;
  description: string;
  confirmMessage?: string;
  icon: React.ComponentType<IconBaseProps>;
}

interface ModalRef extends HTMLAttributes<HTMLDivElement> {
  resolve: (ok: boolean) => void;
  reject: () => void;
}

const Modal: React.ForwardRefRenderFunction<ModalHandles, ModalProps> = (
  { title, description, confirmMessage, icon: Icon },
  ref
) => {
  const modalRef = useRef<ModalRef>();

  const [visible, setVisible] = useState(false);

  const openModal = useCallback(() => {
    setVisible(true);
    return new Promise<boolean>((resolve, reject) => {
      modalRef.current = { resolve, reject };
    });
  }, []);

  const handleCancel = useCallback(() => {
    if (modalRef.current) {
      modalRef.current.resolve(false);
    }

    setVisible(false);
  }, []);

  const handleConfirm = useCallback(() => {
    if (modalRef.current) {
      modalRef.current.resolve(true);
    }
    setVisible(false);
  }, []);

  useImperativeHandle(ref, () => ({ openModal }));

  if (!visible) {
    return null;
  }

  return (
    <Container>
      <ModalContainer>
        <Icon size={52} />
        <h1>{title}</h1>
        <p>{description}</p>
        <ModalButtons>
          <button type="button" onClick={handleCancel}>
            Cancelar
          </button>
          <button type="button" onClick={handleConfirm}>
            {confirmMessage ? `Sim, ${confirmMessage}` : "Sim"}
          </button>
        </ModalButtons>
      </ModalContainer>
    </Container>
  );
};

export default forwardRef(Modal);
