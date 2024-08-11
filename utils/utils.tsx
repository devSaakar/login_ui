export function getIconName(inputField: string): string {
  return `${inputField}Icon`;
}

export function capitalizeFirstLetter(string: string) {
  return string?.charAt(0).toUpperCase() + string?.slice(1);
}
