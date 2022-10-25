export function checkSize(size) {
  if (typeof size != 'string') {
    size = "";
  }

  switch (size.toLowerCase()) {
    case 's':
    case 'small':
      return 10;
    case 'am':
    case 'almost_medium':
      return 15;
    case 'm':
    case 'medium':
      return 20;
    case 'al':
    case 'almost_large':
      return 25;
    case 'l':
    case 'large':
      return 40;
    case 'extra_large':
    case 'xl':
      return 60;
    default:
      return 20;
  }
}
