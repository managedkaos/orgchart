import { faker } from "@faker-js/faker";

const generateExampleEmail = (sample?: string): string => {
    const regex = /@([a-zA-Z]+)./
    const email = sample || faker.internet.email()

    return email.replace(regex, "@$1.example.")
}

export { generateExampleEmail }
