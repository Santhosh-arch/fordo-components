export type ProductSummary = {
  adId: bigint
  thumbnailUrl: string,
  title: string,
  price: number,
  unit: string,
  location: string,
  postedOn: string,
};

export const mockProducts: ProductSummary[] = [
  {
    adId: 1001n,
    thumbnailUrl: 'https://cdn.britannica.com/05/75905-050-C7AE0733/Mangoes-tree.jpg',
    title: 'Fresh Alphonso Mangoes',
    price: 150,
    unit: 'per dozen',
    location: 'Ratnagiri, Maharashtra',
    postedOn: '25 Apr',
  },
  {
    adId: 1002n,
    thumbnailUrl: 'https://th.bing.com/th/id/OIP.3I6FbcMMyJ32MzvnK9051QHaE8?rs=1&pid=ImgDetMain',
    title: 'Organic Tomatoes',
    price: 40,
    unit: 'per kg',
    location: 'Nashik, Maharashtra',
    postedOn: 'Today',
  },
  {
    adId: 1004n,
    thumbnailUrl: 'https://th.bing.com/th/id/OIP.jTkc6xEIGnK7gZ3xGs1sAgHaLH?rs=1&pid=ImgDetMain',
    title: 'Sweet Bananas',
    price: 60,
    unit: 'per dozen',
    location: 'Salem, Tamil Nadu',
    postedOn: 'Yesterday',
  },
  {
    adId: 1005n,
    thumbnailUrl: 'https://thumbs.dreamstime.com/b/carrot-ground-fresh-carrots-growing-field-vegetable-grows-garden-soil-organic-farm-harvest-agricultural-product-nature-269269423.jpg',
    title: 'Red Carrots',
    price: 35,
    unit: 'per kg',
    location: 'Shimla, Himachal Pradesh',
    postedOn: '1 May',
  },
];
