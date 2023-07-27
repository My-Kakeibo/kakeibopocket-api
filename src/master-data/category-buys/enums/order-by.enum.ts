export const OrderBy = {
  NAME: 'name',
  DESCRIPTION: 'description',
  CREATEDAT: 'createdAt',
  UPDATEDAT: 'updatedAt',
};

export type OrderBy = (typeof OrderBy)[keyof typeof OrderBy];
