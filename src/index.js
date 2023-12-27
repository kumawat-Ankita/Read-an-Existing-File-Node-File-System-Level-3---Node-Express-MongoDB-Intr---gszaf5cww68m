const fs = require("fs/promises");
const fileName = "myfile.txt";

const reader = async (filename) => {
  try {
    const content = await fs.readFile(filename, "utf-8");
    return content.trim(); // trim() removes any leading or trailing whitespace
  } catch (error) {
    throw new Error(`Error reading file: ${error.message}`);
  }
};

module.exports = reader;
