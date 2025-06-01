import fs from "fs";
import path from "path";

// Get absolute path relative to project root, not __dirname
const dataPath = path.resolve(process.cwd(), "data/data.json");

export const handler = async () => {
  try {
    const data = fs.readFileSync(dataPath, "utf-8");
    return {
      statusCode: 200,
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    console.error("Error reading data.json:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to read data" }),
    };
  }
};
