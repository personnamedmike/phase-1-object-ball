function gameObject() {
  return (obj2 = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["black", "white"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["turqouise", "purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  });
}

// console.log(gameObject());

function numPointsScored(playerName) {
  const obj = gameObject();
  const homeTeamPlayer = obj.home.players[playerName];
  if (homeTeamPlayer) {
    return homeTeamPlayer.points;
  } else {
    return obj.away.players[playerName].points;
  }
}

console.log("numPointsScored:", numPointsScored("Alan Anderson"));

function showSize(playerName) {
  const obj = gameObject();
  const homeTeamPlayer = obj.home.players[playerName];
  if (homeTeamPlayer) {
    return homeTeamPlayer.shoe;
  } else {
    return obj.away.players[playerName].shoe;
  }
}

console.log("shoe size: ", showSize("Jason Terry"));

function findPlayer(playersName) {
  const object = gameObject();

  const homeTeamPlayer = object.home.players[playersName];
  if (homeTeamPlayer) {
    return homeTeamPlayer;
  } else {
    const awayTeamPlayer = object.away.players[playersName];
    return awayTeamPlayer;
  }
}

findPlayer("Jason Terry");

function teamColors(teamName) {
  const object = gameObject();
  if (object.home.teamName === teamName) {
    return object.home.colors;
  } else {
    return object.away.colors;
  }
}

console.log("teamColors", teamColors("Charlotte Hornetts"));

const teamNames = () => {
  const object = gameObject();
  const teamNamesArray = [];
  for (const team in object) {
    teamNamesArray.push(object[team].teamName);
  }
  return teamNamesArray;
};

console.log("teamNamesArray", teamNames());

function playerNumbers(teamName) {
  const numbersArray = [];
  if (teamName === "Brooklyn Nets") {
    for (let numbers in gameObject().home.players.number) {
      console.log(numbers);
      debugger;
      return numbersArray.push(numbers);
    }
  } else if (teamName === "Charlotte Hornets") {
    for (let numbers in gameObject().away.players.number) {
      console.log(numbers);
      debugger;
      return numbersArray.push(numbers);
    }
  }
}
