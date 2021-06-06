// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

function points(games) {
  const processedGames = games.map((game) => {
    return game.replace(":", "").split("");
  });
  let score = 0;
  processedGames.forEach((match) =>
    match[0] > match[1]
      ? (score -= 3)
      : match[0] === match[1]
      ? (score -= 1)
      : score
  );
  return Math.abs(score);
}

points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]);
points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]);

points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]);

points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"]);

points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"]);
