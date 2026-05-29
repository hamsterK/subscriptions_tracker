export const mockState = {
  authState: {
    isAuthenticated: false,
    token: 'mock-token',
  },
  user: {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
  subscriptions: [
    {
      id: '1',
      category: 'Entertainment',
      title: 'Netflix',
      subscriptionLogo:
        'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
      price: 15.99,
      expiryDate: '2026-06-01',
      nextPaymentDate: '2026-06-01',
      status: 'active',
    },
    {
      id: '2',
      category: 'Music',
      title: 'Spotify',
      subscriptionLogo:
        'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
      price: 9.99,
      expiryDate: '2026-05-15',
      nextPaymentDate: '2026-05-15',
      status: 'inactive',
    },
  ],
};
