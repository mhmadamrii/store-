export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  quantity: number;
}

export const allProducts: Product[] = [
  {
    id: 1,
    name: 'Minimalist Desk Lamp',
    price: 79.99,
    category: 'Lighting',
    quantity: 1,
    image:
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 2,
    name: 'Ergonomic Office Chair',
    price: 249.99,
    category: 'Furniture',
    quantity: 1,
    image:
      'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 3,
    name: 'Modern Coffee Table',
    price: 199.99,
    category: 'Furniture',
    quantity: 1,
    image:
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 4,
    name: 'Artistic Wall Clock',
    price: 89.99,
    category: 'Decor',
    quantity: 1,
    image:
      'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 5,
    name: 'Cozy Throw Blanket',
    price: 49.99,
    category: 'Textiles',
    quantity: 1,
    image:
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 6,
    name: 'Sleek Desk Organizer',
    price: 34.99,
    category: 'Office',
    quantity: 1,
    image:
      'https://plus.unsplash.com/premium_photo-1681412205470-77848a519359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];
