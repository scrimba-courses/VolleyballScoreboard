const homeTeam = document.getElementById("home-score");
const guestTeam = document.getElementById("guest-score");

const getHomeScore = () => parseInt(homeTeam.textContent);
const getGuestScore = () => parseInt(guestTeam.textContent);

const addPoints = (team, points) => {
    const currentScore = team === homeTeam ? getHomeScore() : getGuestScore();
    team.textContent = currentScore + points;
}

const resetScore = () => {
    homeTeam.textContent = 0;
    guestTeam.textContent = 0;
}
const homeAddOne = () => addPoints(homeTeam, 1);
const homeAddTwo = () => addPoints(homeTeam, 2);
const homeAddThree = () => addPoints(homeTeam, 3);
const guestAddOne = () => addPoints(guestTeam, 1);
const guestAddTwo = () => addPoints(guestTeam, 2);
const guestAddThree = () => addPoints(guestTeam, 3);

