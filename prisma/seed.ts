import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    login: "jhriverasa",
    avatar_url: "https://avatars.githubusercontent.com/u/26237878?v=4",
    followers: 1,
    html_url: "https://github.com/jhriverasa",
    name: "Jhonatan Rivera Saumeth",
    public_gists: 0,
    public_repos: 25,
    bio: "Computer and Systems Engineer",
    location: "Colombia"

  }

]

async function main() {
  console.log(`Start seeding ...`)
  console.log(`Creating Users...`)
  for (const curUser of userData) {
    const user = await prisma.user.create({
      data: curUser,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

// starts the process
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
