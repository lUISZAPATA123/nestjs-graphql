import { Test, TestingModule } from '@nestjs/testing';
import { SocketsEventsGateway } from './sockets_events.gateway';

describe('SocketsEventsGateway', () => {
  let gateway: SocketsEventsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocketsEventsGateway],
    }).compile();

    gateway = module.get<SocketsEventsGateway>(SocketsEventsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
