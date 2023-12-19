export function getBadge(place) {
  switch (place) {
    case 1:
      return "🥇";
    case 2:
      return "🥈";
    case 3:
      return "🥉";
    default:
      return place;
  }
}