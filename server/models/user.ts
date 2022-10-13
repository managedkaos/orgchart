import { faker } from "@faker-js/faker";

const photoUrl = faker.image.avatar();
const rostrUrl = faker.image.people(250, 200, true);

type User = {
  email: string;
  full_name: string;
  has_reports: boolean;
  pernr: number;
  photo_url: string;
  rostr_url: string;
  title: string;
  url: string;
  work_phone: string;
}

const userFactory = (isSupervisor?: boolean) => {
  const user: User = {
    email: faker.internet.email(),
    full_name: faker.name.fullName(),
    has_reports: isSupervisor || false,
    pernr: faker.datatype.number({ min: 100, max: 999 }),
    photo_url: photoUrl,
    rostr_url: rostrUrl,
    title: faker.name.jobTitle(),
    url: faker.internet.url(),
    work_phone: faker.phone.number(),
  }
  return user
}

const createUsers = (amount?: number) => {
  const users: Array<User> = []

  for (let count=0; count < amount; count ++) {
    users.push(userFactory([true, false][Math.round(Math.random() * 2)]))
  }

  return users
}

export {
  User,
  createUsers,
  userFactory
}
