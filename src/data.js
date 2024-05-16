const data = [
  {
    id: 1,
    employeeId: "EMP 1",
    permissionName: "Admin",
    name: "Bhavani Aitipamula",
    contact: "44544949494",
    email: "prashant@analyticsquad4.com",
    isAvailable: false,
    dateOfSearch: "2024-04-23",
    reasearhTopic: "Discussing the impact of climate change on biodiversity and ecosystems",
    chat: [
      { mychat: true, chatcontent: "hi this is Bhavani" },
      { mychat: false, chatcontent: "hi how can i help you?" },
      {
        mychat: true,
        chatcontent: "Can you recommend any productivity tools?",
      },
      {
        mychat: false,
        chatcontent:
          "Sure! There are many productivity tools available, depending on your needs. Some popular options include task management apps like Todoist or Trello, note-taking apps like Evernote or Notion, and time tracking apps like Toggl or RescueTime. It's a matter of finding the tool that works best for your workflow and preferences.",
      },
      { mychat: true, chatcontent: "What's your favorite book?" },
      {
        mychat: false,
        chatcontent:
          "It's tough to choose just one! I enjoy a wide range of genres. Do you have any favorites?      ",
      },
      {
        mychat: true,
        chatcontent:
          "I'm feeling a bit stressed lately. Any tips for relaxation?      ",
      },
      {
        mychat: false,
        chatcontent:
          "Taking a walk, practicing deep breathing, or listening to calming music can help. Finding activities that you enjoy and that help you unwind can make a big difference.",
      },
      {
        mychat: true,
        chatcontent:
          " I'm thinking about starting a blog. Any advice for beginners?",
      },
      {
        mychat: false,
        chatcontent:
          "That's exciting! Consistency is key—try to post regularly. Also, find a niche you're passionate about and focus on providing value to your readers.      ",
      },
    ],
    researchChat: [{
      mychat: true,
      chatcontent: "Discussing the impact of climate change on biodiversity and ecosystems."
    },
    {
      mychat: false,
      chatcontent: "https://science.nasa.gov/climate-change/, https://www.ipcc.ch/, https://www.worldbank.org/en/topic/climatechange"
    },
  ],

  },
  {
    id: 36,
    employeeId: "EMP 2",
    name: "Bunny",
    permissionName: "Manager",
    contact: "9421398938",

    isAvailable: false,
    dateOfSearch: "2023-08-11",
    email: "Opsmanager@contact.com",
    reasearhTopic:
    "Exploring the ethical implications of AI in healthcare.",
    chat: [
      {
        mychat: true,
        chatcontent: "I'm planning a trip to Italy. Any recommendations?",
      },
      {
        mychat: false,
        chatcontent:
          "Absolutely! Italy is full of amazing places to visit. What are you interested in? History, art, food?      ",
      },
      {
        mychat: true,
        chatcontent:
          "I'm considering a career change. How do I know if it's the right decision?",
      },
      {
        mychat: false,
        chatcontent:
          "It's important to evaluate your reasons for wanting to change careers and assess whether your new career aligns with your values, interests, and skills. Research the new field, talk to professionals in that industry, and consider any potential challenges or risks before making a decision.",
      },
    ],
    researchChat: [{
      mychat: true,
      chatcontent: "Exploring the ethical implications of AI in healthcare."
    },
    {
      mychat: false,
      chatcontent: "https://openai.com/, https://deepmind.google/, https://www.csail.mit.edu/,"
    },
  ],
  },
  {
    id: 37,
    employeeId: "EMP 3",
    name: "Ken",
    permissionName: "Manager",
    contact: "83297592332",

    isAvailable: false,
    dateOfSearch: "2024-02-18",
    email: "opsmanager@nhstrust.com",
    reasearhTopic:
    "Considering the potential for human colonization of Mars.",
    chat: [
      {
        mychat: true,
        chatcontent: "I'm having trouble with my computer. It keeps freezing.",
      },
      {
        mychat: false,
        chatcontent:
          "That sounds frustrating. Have you tried restarting it? Sometimes that helps with freezing issues.      ",
      },
    ],
    researchChat: [{
      mychat: true,
      chatcontent: "Considering the potential for human colonization of Mars."
    },
    {
      mychat: false,
      chatcontent: "https://www.nasa.gov/, https://www.spacex.com/, https://www.esa.int/"
    },
  ],
  },
  {
    id: 38,
    employeeId: "EMP 4",
    name: "Charles Leclerc",
    permissionName: "Manager",
    contact: "1111111111",

    isAvailable: false,
    dateOfSearch: "2024-04-23",
    email: "bottlejob@gmail.com",
    reasearhTopic:
      "Investigating the potential of gene editing technologies in curing genetic diseases",
    chat: [
      { mychat: true, chatcontent: "What's your favorite book?" },
      {
        mychat: false,
        chatcontent:
          "It's tough to choose just one! I enjoy a wide range of genres. Do you have any favorites?      ",
      },
    ],
    researchChat: [{
      mychat: true,
      chatcontent: "Considering the potential for human colonization of Mars."
    },
    {
      mychat: false,
      chatcontent: "https://www.nasa.gov/, https://www.spacex.com/, https://www.esa.int/"
    },
  ],
  },
  {
    id: 39,
    employeeId: "EMP 5",
    name: "James",
    permissionName: "Manager",
    contact: "84225478688",
    isAvailable: false,
    dateOfSearch: "2024-04-23",
    email: "Opsmanager@oceanfresh.com",
    reasearhTopic: "Discussing the impact of social media on mental health.",
    chat: [
      {
        mychat: true,
        chatcontent:
          "I'm feeling a bit stressed lately. Any tips for relaxation?      ",
      },
      {
        mychat: false,
        chatcontent:
          "Taking a walk, practicing deep breathing, or listening to calming music can help. Finding activities that you enjoy and that help you unwind can make a big difference.",
      },
    ],
    researchChat: [{
      mychat: true,
      chatcontent: "Discussing the impact of social media on mental health."
    },
    {
      mychat: false,
      chatcontent: "https://www.apa.org/news/press/releases/2017/08/social-media, https://www.spacex.com/, https://www.esa.int/"
    },
  ],
  },
  {
    id: 40,
    employeeId: "EMP 6",
    name: "Andrew",
    permissionName: "Staff",
    contact: "83297592332",
    isAvailable: false,
    dateOfSearch: "2024-04-23",
    email: "picker1@nhstrust.com",
    reasearhTopic:
      "Assessing the impact of climate change on biodiversity hotspots",
    chat: [
      {
        mychat: true,
        chatcontent:
          " I'm thinking about starting a blog. Any advice for beginners?",
      },
      {
        mychat: false,
        chatcontent:
          "That's exciting! Consistency is key—try to post regularly. Also, find a niche you're passionate about and focus on providing value to your readers.      ",
      },
    ],
    researchChat: [{
      mychat: true,
      chatcontent: "Discussing the impact of social media on mental health."
    },
    {
      mychat: false,
      chatcontent: "https://www.apa.org/news/press/releases/2017/08/social-media, https://www.spacex.com/, https://www.esa.int/"
    },
  ],
  },
  {
    id: 41,
    employeeId: "EMP 7",
    name: "Garry",
    permissionName: "Staff",
    contact: "94213989389",
    isAvailable: false,
    dateOfSearch: "2024-04-23",
    email: "picker2@nhstrust.com",
    reasearhTopic: "Exploring emerging threats in IoT security",
    chat: [
      {
        mychat: true,
        chatcontent:
          "hDo you have any recommendations for learning a new language?",
      },
      {
        mychat: false,
        chatcontent:
          "There are many great resources available online, like language learning apps, online courses, and language exchange platforms. Immersion and practice are key, so try to use the language as much as possible.",
      },
    ],
    researchChat: [{
      mychat: true,
      chatcontent: "Discussing the impact of social media on mental health."
    },
    {
      mychat: false,
      chatcontent: "https://www.apa.org/news/press/releases/2017/08/social-media, https://www.spacex.com/, https://www.esa.int/"
    },
  ],
  },
  {
    id: 42,
    employeeId: "EMP 8",
    name: "Daniel",
    permissionName: "Staff",
    contact: "9426789389",
    isAvailable: false,
    dateOfSearch: "2024-04-23",
    email: "picker3@nhstrust.com",
    reasearhTopic:
      "Analyzing the portrayal of gender roles in contemporary media",
    chat: [
      {
        mychat: true,
        chatcontent:
          "I'm considering a career change. How do I know if it's the right decision?",
      },
      {
        mychat: false,
        chatcontent:
          "It's important to evaluate your reasons for wanting to change careers and assess whether your new career aligns with your values, interests, and skills. Research the new field, talk to professionals in that industry, and consider any potential challenges or risks before making a decision.",
      },
    ],
    researchChat: [{
      mychat: true,
      chatcontent: "Discussing the impact of social media on mental health."
    },
    {
      mychat: false,
      chatcontent: "https://www.apa.org/news/press/releases/2017/08/social-media, https://www.spacex.com/, https://www.esa.int/"
    },
  ],

  },
];

export default data;
