import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createCartSlice } from './cart-slice';
import { immer } from 'zustand/middleware/immer';
import { createCountSlice } from './counter-slice';

export const useStore = create(
  persist(
    immer((set, get) => ({
      ...createCountSlice(set, get),
      ...createCartSlice(set, get),
    })),
    {
      name: 'store',
    },
  ),
);
