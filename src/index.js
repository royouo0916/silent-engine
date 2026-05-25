import { SharedMemory } from './memory/SharedMemory.js';
import { MemoryClient } from './memory/MemoryClient.js';
import { COO } from './agents/COO.js';
import { Slicer } from './agents/Slicer.js';
import { Empath } from './agents/Empath.js';
import { Tactician } from './agents/Tactician.js';
import { CommandHandler } from './commands/CommandHandler.js';

async function main() {
  // Initialize Shared Memory and Client
  const sharedMemory = new SharedMemory();
  const memoryClient = new MemoryClient(sharedMemory);

  // Initialize Specialists
  const slicer = new Slicer(memoryClient);
  const empath = new Empath(memoryClient);
  const tactician = new Tactician(memoryClient);

  // Initialize COO and register specialists
  const coo = new COO(memoryClient);
  coo.registerSpecialists({ slicer, empath, tactician });

  // Initialize Command Handler
  const commandHandler = new CommandHandler(coo);

  console.log('--- Silent Engine Booted ---');
  
  // Example interaction
  const response = await commandHandler.execute('/start');
  console.log(response);

  const taskResponse = await commandHandler.execute('我要準備作業系統期末考，範圍是第三章指標。');
  console.log('COO Response:', JSON.stringify(taskResponse, null, 2));
}

main().catch(console.error);
