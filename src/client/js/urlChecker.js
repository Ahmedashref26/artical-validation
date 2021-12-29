const urlChecker = (input_url) => {
  let url;
  try {
    url = new URL(input_url);
  } catch (err) {
    console.error(err);
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
};

export default urlChecker;
