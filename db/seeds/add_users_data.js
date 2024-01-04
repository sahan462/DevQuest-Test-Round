import bcrypt from "bcrypt";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("hobbies").del();
  await knex("skills").del();

  await knex("users").insert([
    {
      id: 1,
      email: "mscott@office.com",
      password: bcrypt.hashSync("Scott@123", 10),
      gender: "Male",
      firstname: "Michael",
      lastname: "Scott",
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png",
    },
    {
      id: 2,
      email: "jhalpert@office.com",
      password: bcrypt.hashSync("Halpert@123", 10),
      gender: "Male",
      firstname: "Jim",
      lastname: "Halpert",
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/7/7e/Jim-halpert.jpg",
    },
    {
      id: 3,
      email: "pbeesly@office.com",
      password: bcrypt.hashSync("Beesly@123", 10),
      gender: "Female",
      firstname: "Pam",
      lastname: "Beesly",
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/6/67/Pam_Beesley.jpg",
    },
    {
      id: 4,
      email: "dschrute@office.com",
      password: bcrypt.hashSync("Dwight1234", 10),
      gender: "Male",
      firstname: "Dwight",
      lastname: "Schrute",
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg",
    },
    {
      id: 5,
      email: "ehannon@office.com",
      password: bcrypt.hashSync("Erin@123", 10),
      gender: "Female",
      firstname: "Erin",
      lastname: "Hannon",
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/9/93/Erin_Hannon.jpg",
    },
    {
      id: 6,
      email: "rhoward@office.com",
      password: bcrypt.hashSync("Ryan@1234", 10),
      gender: "Male",
      firstname: "Ryan",
      lastname: "Howard",
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/9/91/Ryan_Howard_%28The_Office%29.jpg",
    },
  ]);

  const hobbies = [
    { id: 1, userId: 1, name: "Soccer", rate: 5 },
    { id: 2, userId: 1, name: "Gym", rate: 4 },
    { id: 3, userId: 1, name: "Sports", rate: 3 },
    { id: 4, userId: 2, name: "Soccer", rate: 5 },
    { id: 5, userId: 2, name: "Music", rate: 1 },
    { id: 6, userId: 2, name: "Video Games", rate: 2 },
    { id: 7, userId: 3, name: "Music", rate: 5 },
    { id: 8, userId: 4, name: "Video Games", rate: 5 },
    { id: 9, userId: 4, name: "Gym", rate: 5 },
    { id: 10, userId: 4, name: "Sports", rate: 3 },
    { id: 11, userId: 4, name: "Rap", rate: 2 },
    { id: 12, userId: 5, name: "Video Games", rate: 1 },
    { id: 13, userId: 5, name: "Gym", rate: 5 },
    { id: 14, userId: 5, name: "Rap", rate: 5 },
    { id: 15, userId: 6, name: "Soccer", rate: 4 },
    { id: 16, userId: 6, name: "Coding", rate: 5 },
    { id: 17, userId: 6, name: "Music", rate: 3 },
  ];

  const skills = [
    { id: 1, userId: 1, name: "Java", rate: 5 },
    { id: 2, userId: 1, name: "C++", rate: 4 },
    { id: 3, userId: 1, name: "Python", rate: 3 },
    { id: 4, userId: 2, name: "Javascript", rate: 5 },
    { id: 5, userId: 2, name: "Photography", rate: 4 },
    { id: 6, userId: 3, name: "Java", rate: 2 },
    { id: 7, userId: 4, name: "Singing", rate: 5 },
    { id: 8, userId: 4, name: "Ruby", rate: 4 },
    { id: 9, userId: 5, name: "Dancing", rate: 3 },
    { id: 10, userId: 5, name: "Docker", rate: 5 },
    { id: 11, userId: 6, name: "Javascript", rate: 4 },
    { id: 12, userId: 6, name: "Photography", rate: 3 },
    { id: 13, userId: 6, name: "Java", rate: 3 },
  ];

  await knex("hobbies").insert(hobbies);
  await knex("skills").insert(skills);
}