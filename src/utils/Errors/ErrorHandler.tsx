// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleError = (error: any) => {
  console.log(error);

  // if (axios.isAxiosError(error)) {
  //   const err = error.response;
  //   if (Array.isArray(err?.data.errors)) {
  //     for (const val of err.data.errors) {
  //       console.log(val.description);
  //       toast.error(val.description);
  // }
  //   } else if (typeof err?.data.errors === "object") {
  //     for (const e in err?.data.errors) {
  //       console.log(err.data.errors[e][0]);
  //     }
  //   } else if (err?.data) {
  //     console.log(err.data);
  //   } else if (err?.status === 401) {
  //     console.log("Unauthorized: Please Sign using the wallet");
  //     window.history.pushState({}, "Login Page", "/login");
  //   } else if (err) {
  //     {
  //       err?.data && console.log("err.data");
  //     }
  // }
  // }
};
