import { createSelector } from '@reduxjs/toolkit';
import { selectFilters } from '../filters/selectors';

export const selectCampers = state => state.campers.items;
export const selectPage = state => state.campers.page;
export const selectLimit = state => state.campers.limit;
export const selectTotal = state => state.campers.total;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilters],
  (campers, filters) => {
    return campers.filter(c => {
      if (
        filters.location &&
        !c.location.toLowerCase().includes(filters.location.toLowerCase())
      ) {
        return false;
      }

      if (filters.AC && !c.AC) return false;

      if (filters.transmission && c.transmission !== filters.transmission)
        return false;

      if (filters.kitchen && !c.kitchen) return false;

      if (filters.TV && !c.TV) return false;

      if (filters.bathroom && !c.bathroom) return false;

      if (filters.vehicleType && c.vehicleType !== filters.vehicleType)
        return false;

      return true;
    });
  }
);
