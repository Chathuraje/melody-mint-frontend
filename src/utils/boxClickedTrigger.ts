export const handleBoxClick = (id: string): void => {
  const input = document.getElementById(id);
  if (input) {
    input.click();
  }
};
