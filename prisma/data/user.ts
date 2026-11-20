
import { Prisma } from "@/lib/db/generated/prisma/client";

export const users: Prisma.UserCreateInput[] = [
  {
    id: "user-1",
    name: "Alex Morgan",
    username: "alexmorgan",
    email: "alex.morgan@example.com",
    password: "hashed-password",
    image: {
      create: {
        id: "user-1-image",
        alt: "Alex Morgan profile picture",
        key: "user-1-avatar",
        url: "https://i.pravatar.cc/300?img=12",
      },
    },
  },
  {
    id: "user-2",
    name: "Sophia Bennett",
    username: "sophiabennett",
    email: "sophia.bennett@example.com",
    password: "hashed-password",
    image: {
      create: {
        id: "user-2-image",
        alt: "Sophia Bennett profile picture",
        key: "user-2-avatar",
        url: "https://i.pravatar.cc/300?img=47",
      },
    },
  },
  {
    id: "user-3",
    name: "James Wilson",
    username: "jameswilson",
    email: "james.wilson@example.com",
    password: "hashed-password",
    image: {
      create: {
        id: "user-3-image",
        alt: "James Wilson profile picture",
        key: "user-3-avatar",
        url: "https://i.pravatar.cc/300?img=13",
      },
    },
  },
  {
    id: "user-4",
    name: "Olivia Parker",
    username: "oliviaparker",
    email: "olivia.parker@example.com",
    password: "hashed-password",
    image: {
      create: {
        id: "user-4-image",
        alt: "Olivia Parker profile picture",
        key: "user-4-avatar",
        url: "https://i.pravatar.cc/300?img=44",
      },
    },
  },
  {
    id: "user-5",
    name: "Ethan Brooks",
    username: "ethanbrooks",
    email: "ethan.brooks@example.com",
    password: "hashed-password",
    image: {
      create: {
        id: "user-5-image",
        alt: "Ethan Brooks profile picture",
        key: "user-5-avatar",
        url: "https://i.pravatar.cc/300?img=14",
      },
    },
  },
  {
    id: "user-6",
    name: "Isabella Carter",
    username: "isabellacarter",
    email: "isabella.carter@example.com",
    password: "hashed-password",
    image: {
      create: {
        id: "user-6-image",
        alt: "Isabella Carter profile picture",
        key: "user-6-avatar",
        url: "https://i.pravatar.cc/300?img=45",
      },
    },
  },
  {
    id: "user-7",
    name: "Noah Mitchell",
    username: "noahmitchell",
    email: "noah.mitchell@example.com",
    password: "hashed-password",
    image: {
      create: {
        id: "user-7-image",
        alt: "Noah Mitchell profile picture",
        key: "user-7-avatar",
        url: "https://i.pravatar.cc/300?img=15",
      },
    },
  },
  {
    id: "user-8",
    name: "Ava Thompson",
    username: "avathompson",
    email: "ava.thompson@example.com",
    password: "hashed-password",
    image: {
      create: {
        id: "user-8-image",
        alt: "Ava Thompson profile picture",
        key: "user-8-avatar",
        url: "https://i.pravatar.cc/300?img=48",
      },
    },
  },
  {
    id: "user-9",
    name: "Lucas Anderson",
    username: "lucasanderson",
    email: "lucas.anderson@example.com",
    password: "hashed-password",
    image: {
      create: {
        id: "user-9-image",
        alt: "Lucas Anderson profile picture",
        key: "user-9-avatar",
        url: "https://i.pravatar.cc/300?img=16",
      },
    },
  },
  {
    id: "user-10",
    name: "Mia Roberts",
    username: "miaroberts",
    email: "mia.roberts@example.com",
    password: "hashed-password",
    image: {
      create: {
        id: "user-10-image",
        alt: "Mia Roberts profile picture",
        key: "user-10-avatar",
        url: "https://i.pravatar.cc/300?img=49",
      },
    },
  },
  {
    id: "user-11",
    name: "Daniel Foster",
    username: "danielfoster",
    email: "daniel.foster@example.com",
    password: "hashed-password",
    image: {
      create: {
        id: "user-11-image",
        alt: "Daniel Foster profile picture",
        key: "user-11-avatar",
        url: "https://i.pravatar.cc/300?img=17",
      },
    },
  },
  {
    id: "user-12",
    name: "Emily Collins",
    username: "emilycollins",
    email: "emily.collins@example.com",
    password: "hashed-password",
    image: {
      create: {
        id: "user-12-image",
        alt: "Emily Collins profile picture",
        key: "user-12-avatar",
        url: "https://i.pravatar.cc/300?img=50",
      },
    },
  },
  {
    id: "user-13",
    name: "Benjamin Scott",
    username: "benjaminscott",
    email: "benjamin.scott@example.com",
    password: "hashed-password",
    image: {
      create: {
        id: "user-13-image",
        alt: "Benjamin Scott profile picture",
        key: "user-13-avatar",
        url: "https://i.pravatar.cc/300?img=18",
      },
    },
  },
  {
    id: "user-14",
    name: "Charlotte Evans",
    username: "charlotteevans",
    email: "charlotte.evans@example.com",
    password: "hashed-password",
    image: {
      create: {
        id: "user-14-image",
        alt: "Charlotte Evans profile picture",
        key: "user-14-avatar",
        url: "https://i.pravatar.cc/300?img=51",
      },
    },
  },
  {
    id: "user-15",
    name: "Henry Adams",
    username: "henryadams",
    email: "henry.adams@example.com",
    password: "hashed-password",
    image: {
      create: {
        id: "user-15-image",
        alt: "Henry Adams profile picture",
        key: "user-15-avatar",
        url: "https://i.pravatar.cc/300?img=19",
      },
    },
  },
  {
    id: "user-16",
    name: "Amelia Rivera",
    username: "ameliarivera",
    email: "amelia.rivera@example.com",
    password: "hashed-password",
    image: {
      create: {
        id: "user-16-image",
        alt: "Amelia Rivera profile picture",
        key: "user-16-avatar",
        url: "https://i.pravatar.cc/300?img=52",
      },
    },
  },
  {
    id: "user-17",
    name: "William Turner",
    username: "williamturner",
    email: "william.turner@example.com",
    password: "hashed-password",
    image: {
      create: {
        id: "user-17-image",
        alt: "William Turner profile picture",
        key: "user-17-avatar",
        url: "https://i.pravatar.cc/300?img=20",
      },
    },
  },
  {
    id: "user-18",
    name: "Grace Phillips",
    username: "gracephillips",
    email: "grace.phillips@example.com",
    password: "hashed-password",
    image: {
      create: {
        id: "user-18-image",
        alt: "Grace Phillips profile picture",
        key: "user-18-avatar",
        url: "https://i.pravatar.cc/300?img=53",
      },
    },
  },
  {
    id: "user-19",
    name: "Samuel Cooper",
    username: "samuelcooper",
    email: "samuel.cooper@example.com",
    password: "hashed-password",
    image: {
      create: {
        id: "user-19-image",
        alt: "Samuel Cooper profile picture",
        key: "user-19-avatar",
        url: "https://i.pravatar.cc/300?img=21",
      },
    },
  },
  {
    id: "user-20",
    name: "Lily Richardson",
    username: "lilyrichardson",
    email: "lily.richardson@example.com",
    password: "hashed-password",
    image: {
      create: {
        id: "user-20-image",
        alt: "Lily Richardson profile picture",
        key: "user-20-avatar",
        url: "https://i.pravatar.cc/300?img=54",
      },
    },
  },
];
