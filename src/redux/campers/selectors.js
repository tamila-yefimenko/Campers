import { createSelector } from '@reduxjs/toolkit';

export const selectItems = state => state.campers.items;
export const selectFiltered = state => state.campers.filtered;
export const selectPage = state => state.campers.page;
export const selectLimit = state => state.campers.limit;
export const selectIsLoading = state => state.campers.isLoading;
export const selectError = state => state.campers.error;

export const selectCampers = state => state.campers.items;
export const selectTotalCampers = state => state.campers.total;

export const selectPaginatedCampers = createSelector(
  [selectItems, selectFiltered, selectPage, selectLimit],
  (items, filtered, page, limit) => {
    const data = filtered.length > 0 ? filtered : items;
    const start = (page - 1) * limit;
    const end = page * limit;
    return data.slice(start, end);
  }
);

// Визначає кількість сторінок для пагінації
export const selectTotalPages = createSelector(
  [selectItems, selectFiltered, selectLimit],
  (items, filtered, limit) => {
    const data = filtered.length > 0 ? filtered : items;
    return Math.ceil(data.length / limit);
  }
);

export const selectHasMore = createSelector(
  [selectItems, selectFiltered, selectPage, selectLimit],
  (items, filtered, page, limit) => {
    const data = filtered.length > 0 ? filtered : items;
    return page * limit < data.length;
  }
);
