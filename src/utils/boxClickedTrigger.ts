export const handleBoxClick = (id: string) => {
  const input = document.getElementById(id);
  if (input) {
    input.click();
  }
};
