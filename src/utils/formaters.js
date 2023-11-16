export default {
  formatRating: (voteAverage) => {
    return voteAverage.toString().slice(0, 3);
  },
  formatBudget: (budget) => {
    return budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  },
  formatDate: (date) => {
    return date.toString().slice(0, 4);
  },
  formatCountries: (countries) => {
    return countries.map((country, i) => `${country.name}${i < countries.length - 1 ? " • " : ""}`);
  },
};
