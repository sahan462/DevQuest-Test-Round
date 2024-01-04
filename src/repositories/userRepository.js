import knex_db from "../../db/db-config.js";

let _db;
function init(db) {
  _db = db;
}

async function getUser(id) {
  return new Promise((resolve, reject) => {
    knex_db
      .raw(
        `
        SELECT
          ut.id,
          ut.email,
          ut.gender,
          ut.image_url,
          uht.name AS hobbyName,
          uht.rate AS hobbyRate,
          ust.name AS skillName,
          ust.rate AS skillRate
        FROM users ut
        LEFT JOIN hobbies uht ON ut.id = uht.userId
        LEFT JOIN skills ust ON ut.id = ust.userId
        WHERE ut.id = ?
        `,
        [id]
      )
      .then((result) => {
        const rows = result;
        let hobbyExist, skillExist;

        if (rows.length === 0) {
          resolve("User not found!");
          return;
        }

        const user = {
          id: rows[0].id,
          email: rows[0].email,
          gender: rows[0].gender,
          image_url: rows[0].image_url,
          hobbies: [],
          skills: [],
        };

        rows.forEach((row) => {
          hobbyExist = false;
          if (row.hobbyName && row.hobbyRate) {
            user.hobbies.map((hobby) => {
              if (hobby.name === row.hobbyName) {
                hobbyExist = true;
              }
            });
            if (!hobbyExist) {
              user.hobbies.push({
                name: row.hobbyName,
                rate: row.hobbyRate,
              });
            }
          }

          hobbyExist = false;
          if (row.skillName && row.skillRate) {
            user.skills.map((skill) => {
              if (skill.name === row.skillName) {
                skillExist = true;
              }
            });
            if (!skillExist) {
              user.skills.push({
                name: row.skillName,
                rate: row.skillRate,
              });
            }
          }
        });

        resolve(user);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
}

export default {
  init,
  getUser,
};
