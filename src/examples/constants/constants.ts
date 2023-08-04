export const menuItems = [
  { label: "Dashboard", icon: "pi pi-fw pi-box", url: "/dashboard" },
  { label: "Calendar", icon: "pi pi-fw pi-calendar", url: "/calendar" },
  { label: "Edit", icon: "pi pi-fw pi-pencil", url: "/edit" },
  { label: "Cards", icon: "pi pi-credit-card", url: "/cards" },
];

export const PassThroughCutomMenuAttributes = {
  menuitem: {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "1rem",
    },
  },
  root: { style: { width: "100%" } },
  icon: { style: { margin: 0, fontSize: "1.2rem" } },
  headerAction: { style: { padding: "0.75rem 0.75rem" } },
  end: { style: { height: "100%" } },
};
