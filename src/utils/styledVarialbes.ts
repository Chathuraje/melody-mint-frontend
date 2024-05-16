export const human_deadline = (date: number | undefined) => {
  let deadline;

  if (date === undefined) {
    deadline = new Date(1 * 1000);
  } else {
    deadline = new Date(date * 1000);
  }

  return deadline.toLocaleDateString();
};

export const eth_value = (amount: number | undefined) => {
  if (amount === undefined) {
    return 0;
  }

  return amount / 1000000000000000000;
};

export const wei_value = (amount: number | undefined) => {
  if (amount === undefined) {
    return 0;
  }

  return amount * 1000000000000000000;
};

export const raised_percentage = (
  amount: number | undefined,
  goal: number | undefined
) => {
  if (amount === undefined || goal === undefined) {
    return 0;
  }

  return (amount / goal) * 100;
};
