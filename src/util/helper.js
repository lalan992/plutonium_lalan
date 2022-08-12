player=[
  {
  "name": "manish",
  "dob": "1/1/1995",
  "gender": "male",
  "city": "jalandhar",
  "sports": [
      "swimming"
    ]
  },
  {
      "name": "gopal",
      "dob": "1/09/1995",
      "gender": "male",
      "city": "delhi",
      "sports": [
          "soccer"
      ]
  },
  {
      "name": "lokesh",
      "dob": "1/1/1990",
      "gender": "male",
      "city": "mumbai",
      "sports": [
          "soccer"
      ]
  }

  ];

bookings=[{
    "bookingNumber": 1,
    "sportId": "",
    "centerId": "",
    "type": "private",
    "slot": 16286598000000,
    "bookedOn": "31/08/2021",
    "bookedFor": "01/09/2021"
   }
   ];
voters=[
    {
        "name":"rohan",
        "age":15,
        "votingStatus":false
    },
    {
        "name":"Nadeem",
        "age":25,
        "votingStatus":true
    },
    {
        "name":"Abhay",
        "age":45,
        "votingStatus":true
    },
    {
        "name":"Shyam",
        "age":55,
        "votingStatus":true
    }
]
module.exports.player=player;
module.exports.bookings=bookings;
module.exports.voters=voters;