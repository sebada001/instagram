const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
];

function returnFileSize(number) {
  if (number < 1024) {
    return number + "bytes";
  } else if (number >= 1024 && number < 1048576) {
    return (number / 1024).toFixed(1) + "KB";
  } else if (number >= 1048576) {
    return (number / 1048576).toFixed(1) + "MB";
  }
}

function validFileType(file) {
  return fileTypes.includes(file.type);
}

function validFileSize(file) {
  let size = returnFileSize(file.size);
  if (size.includes("KB")) {
    return true;
  }
  if (size.includes("MB") && size.split("M")[0] < 3) {
    return true;
  }
  return false;
}

export { validFileSize, validFileType };
