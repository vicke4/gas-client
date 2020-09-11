const promisify = (functionName: string) => (
  (...args: unknown[]) => new Promise((resolve, reject) => {
    google.script.run
      .withSuccessHandler(resolve)
      .withFailureHandler(reject)[functionName](...args);
  })
);

export { promisify };
