export interface NavigationItem {
  id: string;
  name: string;
  slug: string;
}

// limited to one level
export interface Navigation {
  id: string;
  name: string;
  slug: string;
  children: NavigationItem[];
}
