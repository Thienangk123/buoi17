export interface MenuItem {
    key: string;
    label: string;
    // icon?: any;
    icon?: React.ReactNode;
    children?: MenuItem[];
    href: string;
  }
  export interface CurrentUser {
    username?: string;
    password?: string;
    remember?: string;
  }
  // export interface Menu {
  //   icon?: string;
  //   text: string;
  //   counter?: number;
  //   dropdown?: boolean;
  //   href: string;
  // }
  export interface Props {}
  
  export interface State {
    username: string;
    password: string;
    isLoggedIn: boolean;
    collapsed: boolean;
  }