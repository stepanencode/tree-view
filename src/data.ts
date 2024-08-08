export const elements = [
  {
    id: '1',
    isSelectable: true,
    name: 'src',
    children: [
      {
        id: '2',
        isSelectable: true,
        name: 'app.tsx',
      },
      {
        id: '3',
        isSelectable: true,
        name: 'components',
        children: [
          {
            id: '20',
            isSelectable: true,
            name: 'pages',
            children: [
              {
                id: '21',
                isSelectable: true,
                name: 'interface.ts',
              },
            ],
          },
        ],
      },
      {
        id: '6',
        isSelectable: true,
        name: 'ui',
        children: [
          {
            id: '7',
            isSelectable: true,
            name: 'carousel.tsx',
          },
        ],
      },
    ],
  },
  {
    id: '345',
    isSelectable: true,
    name: 'public',
  },
] as const;
