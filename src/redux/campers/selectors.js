import { createSelector } from '@reduxjs/toolkit';

export const selectItems = state => state.campers.items;
export const selectFiltered = state => state.campers.filtered;
export const selectPage = state => state.campers.page;
export const selectLimit = state => state.campers.limit;
export const selectIsLoading = state => state.campers.isLoading;
export const selectError = state => state.campers.error;
export const selectCurrentCamper = state => state.campers.currentCamper;
export const selectCampers = state => state.campers.items;
export const selectTotalCampers = state => state.campers.total;

export const selectPaginatedCampers = createSelector(
  [selectFiltered, selectPage, selectLimit],
  (filtered, page, limit) => {
    const end = page * limit;
    return filtered.slice(0, end);
  }
);

export const selectTotalPages = createSelector(
  [selectFiltered, selectLimit],
  (filtered, limit) => Math.ceil(filtered.length / limit)
);
