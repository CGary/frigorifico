// import { sqlExec } from "../tools";
import fs from "fs";
import path from "path";

// const flagLogSQL = process.env.LOG_SQL === "true";
const flagLogLocal = process.env.LOG_LOCAL === "true";

// const logSQL = async (file, type, text) => {
//   let str;
//   try {
//     str = JSON.stringify(text);
//   } catch (err) {
//     str = JSON.stringify({
//       keys: Object.keys(text),
//       ...err,
//     });
//     // console.log("err", text);
//   }
//   try {
//     const p = ["log", file, type, str];
//     await sqlExec("sp_common", p);
//   } catch (err) {
//     flagLogLocal && logLocal(file, type, text);
//   }
// };

const logLocal = async (file, type, text) => {
  const hoy = new Date();
  const head = {
    date: hoy.toISOString(),
    file,
    type,
  };
  let str;
  try {
    str = JSON.stringify(
      {
        ...head,
        text,
      },
      null,
      2
    );
  } catch (err) {
    str = JSON.stringify(
      {
        ...head,
        text: { keys: Object.keys(text), ...err },
      },
      null,
      2
    );
  }

  const prefix = `${hoy.getFullYear()}-${hoy.getMonth() + 1}-${hoy.getDay()}`;
  try {
    fs.appendFile(
      path.resolve(__dirname, "../../log/" + prefix + "-log.txt"),
      str + ",\n",
      () => null
    );
  } catch (error) {
    console.log("fdasfdafasd", error);
  }
};

global.log = async (file, type, text) => {
  // if (flagLogSQL) logSQL(file, type, text);
  // else {
  flagLogLocal && logLocal(file, type, text);
  // }
};
