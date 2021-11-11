import { io, Socket } from 'socket.io-client';

export class SocketConnection {
  ws: any;

  constructor() {
    this.init();
  }

  async init() {
    this.ws = io('', { extraHeaders: { Authorization: await this.getAuth() } });
  }

  async getAuth() {
    return '';
  }
}
