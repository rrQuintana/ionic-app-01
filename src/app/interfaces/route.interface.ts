export interface routeComponent {
  route: string;
  name: string;
  color: string;
  icon: string;
}

export interface UserExample {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  image: string;
  company: {
    name: string;
    location: string;
  };
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}