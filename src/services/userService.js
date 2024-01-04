import httpStatus from "../enums/httpStatus.js";
import userRepository from "../repositories/userRepository.js";
import dbConnection from "../../sqlite.js";

function initializeApp() {
  dbConnection
    .getDbConnection()
    .then((db) => {
      userRepository.init(db);
    })
    .catch((err) => {
      process.exit(1);
    });
}

async function getUser(id) {
  const response = await userRepository.getUser(id);
  console.log(response.firstname);  
  console.log(response.lastname);
  if (response === "User not found!" || response === undefined) {
    return { status: httpStatus.NOT_FOUND };
  } else {
    console.log(response);
    return { response: response, status: httpStatus.OK };
  }
}

initializeApp();

export default { getUser };
