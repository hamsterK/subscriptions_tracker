export type Subscription = {
  id: string;
  category: string;
  title: string;
  subscriptionLogo: string;
  price: number;
  expiryDate: string;
  nextPaymentDate: string;
  status: 'active' | 'inactive' | 'cancelled';
};