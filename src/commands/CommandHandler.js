export class CommandHandler {
  constructor(coo) {
    this.coo = coo;
    this.commands = {
      '/start': this.handleStart.bind(this),
      '/status': this.handleStatus.bind(this),
      '/help': this.handleHelp.bind(this)
    };
  }

  async execute(input) {
    const [command, ...args] = input.split(' ');
    if (this.commands[command]) {
      return await this.commands[command](args);
    }
    return await this.coo.handleInput(input);
  }

  async handleStart() {
    return "Welcome to Silent Engine. What is your focus today?";
  }

  async handleStatus() {
    const state = this.coo.memoryClient.getAllState();
    return `Current Anxiety: ${state.anxietyLevel}, Tasks: ${state.tasks.length}`;
  }

  async handleHelp() {
    return "Available commands: /start, /status, /help";
  }
}
