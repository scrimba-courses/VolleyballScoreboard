const homeTeamScore = document.getElementById("home-score");
const guestTeamScore = document.getElementById("guest-score");
const homeTeamSetScore = document.getElementById("home-set-score");
const guestTeamSetScore = document.getElementById("guest-set-score");

const getHomeScore = () => parseInt(homeTeamScore .textContent);
const getGuestScore = () => parseInt(guestTeamScore.textContent);
const getHomeTeamSetScore = () => parseInt(homeTeamSetScore.textContent);
const getGuestTeamSetScore = () => parseInt(guestTeamSetScore.textContent);

const addPoints = (team, points) => {
    const currentScore = team === homeTeamScore ? getHomeScore() : getGuestScore();
    team.textContent = currentScore + points;
    increaseSetPoints(); // Call dynamically after adding points
}

const resetScore = () => {
    homeTeamScore.textContent = 0;
    guestTeamScore.textContent = 0;
}

const homeAddOne = () => addPoints(homeTeamScore, 1);
const homeAddTwo = () => addPoints(homeTeamScore, 2);
const homeAddThree = () => addPoints(homeTeamScore, 3);
const guestAddOne = () => addPoints(guestTeamScore, 1);
const guestAddTwo = () => addPoints(guestTeamScore, 2);
const guestAddThree = () => addPoints(guestTeamScore, 3);

// Volleyball specific functions

// Check if we're on the volleyball page
const isVolleyballPage = () => {
    return document.getElementById("home-set-score") !== null;
}

// Add points for volleyball
const homeAddOneVolleyball = () => addVolleyballPoints(homeTeamScore, 1);
const guestAddOneVolleyball = () => addVolleyballPoints(guestTeamScore, 1);

// Add sets points
const increaseSetPoints = () => {
  let currentSetScore;
  if (getHomeScore() >= 25 && getHomeScore() - getGuestScore() >= 2) {
    currentSetScore = Math.min(getHomeTeamSetScore() + 1, 3); // Max set score is 3
    homeTeamSetScore.textContent = currentSetScore;
    resetScore(); // Reset scoreboard points to zero
  } else if (getGuestScore() >= 25 && getGuestScore() - getHomeScore() >= 2) {
    currentSetScore = Math.min(getGuestTeamSetScore() + 1, 3); // Max set score is 3
    guestTeamSetScore.textContent = currentSetScore;
    resetScore(); // Reset scoreboard points to zero
  } else if (getHomeScore() >= 24 && getGuestScore() >= 24) {
    if (getHomeScore() - getGuestScore() >= 2) {
      currentSetScore = Math.min(getHomeTeamSetScore() + 1, 3); // Max set score is 3
      homeTeamSetScore.textContent = currentSetScore;
      resetScore(); // Reset scoreboard points to zero
    } else if (getGuestScore() - getHomeScore() >= 2) {
      currentSetScore = Math.min(getGuestTeamSetScore() + 1, 3); // Max set score is 3
      guestTeamSetScore.textContent = currentSetScore;
      resetScore(); // Reset scoreboard points to zero
    }
  }

  // Reset set scores to zero if any team wins 3 sets
  if (getHomeTeamSetScore() === 3 || getGuestTeamSetScore() === 3) {
    homeTeamSetScore.textContent = 0;
    guestTeamSetScore.textContent = 0;
    console.log("Game Over: Set scores reset to zero.");
  }
  return currentSetScore;
}