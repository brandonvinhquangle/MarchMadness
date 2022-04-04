let mock = [{
    id: 1,
    name: "Gonzaga",
    record: "26-3",
    conference: "WCC",
    city: "Spokane",
    state: "WA",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Gonzaga_Bulldogs_logo.svg/1200px-Gonzaga_Bulldogs_logo.svg.png"
  },
  {
    id: 2,
    name: "Arizona",
    record: "31-3",
    conference: "PAC-12",
    city: "Tuscon",
    state: "AZ",
    image: "https://1000logos.net/wp-content/uploads/2017/07/University-of-Arizona-Emblem.jpg"
  },
  {
    id: 3,
    name: "Kansas",
    record: "28-6",
    conference: "Big 12",
    city: "Lawrence",
    state: "KS",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Kansas_Jayhawks_logo.svg/1200px-Kansas_Jayhawks_logo.svg.png"
  },
  {
    id: 4,
    name: "Baylor",
    record: "26-6",
    conference: "Big 12",
    city: "Waco",
    state: "TX",
    image: "data:image/png;base64,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"
  },
  {
    id: 5,
    name: "Auburn",
    record: "27-5",
    conference: "SEC",
    city: "Auburn",
    state: "AL",
    image: 'http://licensing.auburn.edu/wp-content/uploads/2020/01/Standard2.png'

  },
  {
    id: 6,
    name: "Kentucky",
    record: "26-7",
    conference: "SEC",
    city: "Lexington",
    state: "KY",
    image: "data:image/png;base64,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"
  },
  {
    id: 7,
    name: "Villanova",
    record: "26-7",
    conference: "Big East",
    city: "Villanova",
    state: "PA",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Villanova_Wildcats_logo.svg/2296px-Villanova_Wildcats_logo.svg.png'
  },
  {
    id: 8,
    name: "Duke",
    record: "28-6",
    conference: "ACC",
    city: "Durham",
    state: "NC",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Duke_Athletics_logo.svg/1200px-Duke_Athletics_logo.svg.png'
  },
  {
    id: 9,
    name: "Wisconsin",
    record: "24-7",
    conference: "Big Ten",
    city: "Madison",
    state: "WI",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Wisconsin_Badgers_logo.svg/1200px-Wisconsin_Badgers_logo.svg.png'

  },
  {
    id: 10,
    name: "Tennessee",
    record: "26-7",
    conference: "SEC",
    city: "Knoxville",
    state: "TN",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/UT_Knoxville_logo_2015.svg/2185px-UT_Knoxville_logo_2015.svg.png'
  },
  {
    id: 11,
    name: "Purdue",
    record: "27-7",
    conference: "Big Ten",
    city: "West Lafayette",
    state: "IN",
    image: "https://media-exp1.licdn.com/dms/image/C4E0BAQGUO9Kvy1lfEA/company-logo_200_200/0/1619705137869?e=2147483647&v=beta&t=SXIovXRMHAkXNpqxZWs_vVwh217DA7lOZuelbIXWtrU"
  },
  {
    id: 12,
    name: "Texas Tech",
    record: "25-9",
    conference: "Big 12",
    city: "Lubbock",
    state: "TX",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Texas_Tech_Athletics_logo.svg/875px-Texas_Tech_Athletics_logo.svg.png"
  }
]

export default mock;