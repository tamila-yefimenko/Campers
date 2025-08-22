export const selectFavorites = state => state.favorites.items;
export const selectIsFavorite = (state, camperId) =>
  state.favorites.items.includes(camperId);
