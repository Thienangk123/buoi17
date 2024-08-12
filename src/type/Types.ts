export interface MenuItem {
    key: string;
    label: string;
    // icon?: any;
    icon?: React.ReactNode;
    children?: MenuItem[];
    href: string;
  }