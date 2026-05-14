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
      name: 'Netflix',
      status: 'active',
    },
    {
      id: '2',
      name: 'Spotify',
      status: 'inactive',
    },
  ],
};
