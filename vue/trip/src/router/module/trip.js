const tripRoutes = [
  {
    path: '/trip',
    name: 'Trip',
    component: () => import('@/views/trip/trip'),
    meta: {
      title: '旅行'
    }
  }
]