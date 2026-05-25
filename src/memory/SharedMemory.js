export class SharedMemory {
  constructor() {
    this.state = {
      tasks: [],
      userStatus: 'idle',
      anxietyLevel: 0,
      rewards: {
        points: 0,
        units: [],
        shop: []
      },
      currentSession: null
    };
    this.logs = [];
  }

  update(key, value) {
    this.state[key] = value;
    this.logs.push({ timestamp: new Date(), key, value });
  }

  getState() {
    return this.state;
  }
}
