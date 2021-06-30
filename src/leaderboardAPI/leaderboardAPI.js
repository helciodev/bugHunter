const endpoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameId = 'S2ZnwSrKFprFfVvKDuzc';

export default class Leaderboard {
  constructor() {
    this.endpoint = endpoint;
    this.gameId = gameId;
  }

  getScores() {
    const url = `${this.endpoint}games/${this.gameId}/scores/`;
    const response = fetch(
      url,
      { method: 'GET' },
    ).then(response => response.json());

    return response;
  }

  setScore(data) {
    const url = `${this.endpoint}games/${this.gameId}/scores/`;
    const response = fetch(
      url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    ).then(response => response.json());

    return response;
  }
}
