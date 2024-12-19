
interface IChildren {
  menu: string;
  icon: string;
  redirectPath: string;
  permissions: string;
}

class Children implements IChildren {
  menu: string;
  icon: string;
  redirectPath: string;
  permissions: string;

  constructor(menu: string, icon: string, redirectPath: string, permissions: string = '') {
    this.menu = menu;
    this.icon = icon;
    this.redirectPath = redirectPath;
    this.permissions = permissions;
  }
}

interface IAppNavigation extends IChildren {
  children: IChildren[];
}

class AppNavigation implements IAppNavigation {
  menu: string;
  icon: string;
  redirectPath: string;
  permissions: string;
  children: IChildren[];

  constructor(menu: string, icon: string, redirectPath: string, permissions: string = '', children: IChildren[] = []) {
    this.menu = menu;
    this.icon = icon;
    this.redirectPath = redirectPath;
    this.permissions = permissions;
    this.children = children;
  }

  static getNavigationItems(): AppNavigation[] {
    return [
      new AppNavigation("Home", "speedometer2", "/dashboard"),
      new AppNavigation("Dashboard", "speedometer2", "/dashboard"),
      new AppNavigation("Prasad", "speedometer2", "/dashboard",""),
      new AppNavigation("order", "calendar3", "/profile", "",
        [new Children("Order Detail", "calendar3", "/profile", ""),
        new Children("Order Detail2", "calendar3", "/profile", "test")
        ]),


      new AppNavigation("Products", "border-style", "/settings", "view_settings"),
      new AppNavigation("Customers", "person-circle", "/settings", "view_settings"),
      new AppNavigation("new test", "person-circle", "/settings", "view_settings",
        [new Children("Text Child ", "calendar3", "/profile", "view_profile")])
    ];
  }
  static checkUserPermission(permissions: string): boolean {
    if (permissions === "") {
      return true;
    }
    let userPermissions = ["view_settings", "view_profile"];
    return userPermissions.includes(permissions);
  }
}

export default AppNavigation;