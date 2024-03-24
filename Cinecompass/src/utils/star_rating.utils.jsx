export const getStarsFromRating = (avg) => {
  if (avg < 2 && avg > 0) {
    return "★";
  } else if (avg < 4 && avg >= 2) {
    return "★★";
  } else if (avg < 6 && avg >= 4) {
    return "★★★";
  } else if (avg < 8 && avg >= 6) {
    return "★★★★";
  } else if (avg <= 10 && avg >= 8) {
    return "★★★★★";
  }
  return "";
};
