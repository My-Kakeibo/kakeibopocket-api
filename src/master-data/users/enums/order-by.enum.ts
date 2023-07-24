export const OrderBy = {
  FULLNAME: 'fullname',
  EMAIL: 'email',
  CREATEDAT: 'createdAt',
  UPDATEDAT: 'updatedAt',
};

export type OrderBy = (typeof OrderBy)[keyof typeof OrderBy];
