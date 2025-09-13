export const selectItems = state => state.campers.items;
export const selectLocations = state => state.campers.locations;
export const selectFiltered = state => state.campers.filtered;
export const selectPage = state => state.campers.page;
export const selectLimit = state => state.campers.limit;
export const selectIsLoading = state => state.campers.isLoading;
export const selectError = state => state.campers.error;
export const selectCurrentCamper = state => state.campers.currentCamper;
export const selectCampers = state => state.campers.items;
export const selectTotalCampers = state => state.campers.total;
export const selectFilters = state => state.campers.filters;

export const selectPaginatedCampers = state => state.campers.filtered;

export const selectTotalPages = state => {
  const total = selectTotalCampers(state);
  const limit = selectLimit(state);
  return Math.ceil(total / limit);
};
