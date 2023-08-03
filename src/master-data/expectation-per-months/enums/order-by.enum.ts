export const OrderBy = {
  INCOME: 'income',
  CREATEDAT: 'createdAt',
  UPDATEDAT: 'updatedAt',
};

export type OrderBy = (typeof OrderBy)[keyof typeof OrderBy];
