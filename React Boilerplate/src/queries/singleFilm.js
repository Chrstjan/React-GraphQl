export const singleFilm = `query Films($filmId: ID) {
  film(id: $filmId) {
    title
    producers
    openingCrawl
  }
}`