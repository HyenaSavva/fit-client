import { useRef, useState } from "react";
import { SplitButton } from "primereact/splitbutton";
import { MenuItem } from "primereact/menuitem";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom";

export const CustomButton = () => {
  const router = useNavigate();
  const toast = useRef<Toast>();
  const items: MenuItem[] = [
    {
      label: "Update",
      icon: "pi pi-refresh",
      command: () => {
        toast.current.show({
          severity: "success",
          summary: "Updated",
          detail: "Data Updated",
        });
      },
    },
    {
      label: "Delete",
      icon: "pi pi-times",
      command: () => {
        toast.current.show({
          severity: "warn",
          summary: "Delete",
          detail: "Data Deleted",
        });
      },
    },
    {
      label: "React Website",
      icon: "pi pi-external-link",
      command: () => {
        window.location.href = "https://reactjs.org/";
      },
    },
    {
      label: "Upload",
      icon: "pi pi-upload",
      command: () => {
        router("/fileupload");
      },
    },
  ];

  const [loading, setLoading] = useState<boolean>(false);

  const save = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Data Saved",
      });
    }, 2000);
  };

  return (
    <div className="card flex justify-content-center">
      <Toast ref={toast}></Toast>
      <SplitButton
        label="Save"
        icon="pi pi-plus"
        onClick={save}
        model={items}
        loading={loading}
      />
    </div>
  );
};
