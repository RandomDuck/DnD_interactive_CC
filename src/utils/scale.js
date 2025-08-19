export function checkSize(size, multiplier = 1) {
  if (typeof size != 'string') {
    size = "";
  }

  switch (size.toLowerCase()) {
    case 's':
    case 'small':
      return 10 * multiplier;
    case 'am':
    case 'almost_medium':
      return 15 * multiplier;
    case 'm':
    case 'medium':
      return 20 * multiplier;
    case 'al':
    case 'almost_large':
      return 25 * multiplier;
    case 'l':
    case 'large':
      return 40 * multiplier;
    case 'extra_large':
    case 'xl':
      return 60 * multiplier;
    case 'extra_extra_large':
    case 'xxl':
      return 90 * multiplier;
    default:
      return 20 * multiplier;
  }
}
