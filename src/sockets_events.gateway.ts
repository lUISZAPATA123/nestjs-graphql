import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';

import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

// import {}  from ''

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class SocketsEventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger();
  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
    // this.handleMessage(client, 'este es un message to server');
    client.emit('fromApi', 'hola desde el server');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
  @SubscribeMessage('msgToClient')
  handleMessage(client: Socket, payload: string): void {
    // this.server.emit('fromApi', payload);
    // console.log(client.handshake.headers);
    client.join('add_order');
    this.logger.log('data =>' + payload);
    console.log(client.id);
  }
}
