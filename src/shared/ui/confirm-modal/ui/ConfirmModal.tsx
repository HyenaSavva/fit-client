import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { FC, ReactNode } from "react";

interface ConfirmModalProps {
  buttonComponent: ReactNode; // bad approach ?
  handleAccept?: Function; //
  handleReject?: Function; // `\_(-_-)_/` can use <Toast/> as an example
  message?: string;
}

export const ConfirmModal: FC<ConfirmModalProps> = ({
  buttonComponent,
  handleAccept,
  handleReject,
  message,
}) => {
  const accept = handleAccept ? () => handleAccept() : undefined;
  const reject = handleReject ? () => handleReject() : undefined;
  const confirm = () => {
    confirmDialog({
      message: message,
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept,
      reject,
    });
  };

  return (
    <>
      <ConfirmDialog />
      <div onClick={confirm}>{buttonComponent}</div>
    </>
  );
};
