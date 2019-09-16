import assert from 'assert';
import config from 'config';
import { Errors, ServiceBroker } from 'moleculer';

import greeterService from '../services/greeter.service';

const broker = new ServiceBroker({
  nodeID: 'test',
  transporter: config.get('transporter'),
  logger: false,
});

broker.createService(greeterService);

/*
TESTS
*/

describe('greet service test', () => {
  before(() => broker.start());
  after(() => broker.stop());

  describe('Test "greeter.hello" action', () => {

    it('should return with "Hello Moleculer"', async () => {
      const response = await broker.call<string>('greeter.hello');
      assert(response === 'Hello Moleculer');
    });

  });

  describe('Test "greeter.welcome" action', () => {

    it('should return with "Welcome"', async () => {
      const response = await broker.call<string>('greeter.welcome', { name: 'Adam' });
      assert(response === 'Welcome, Adam');
    });

    it('should reject an ValidationError', async () => {
      (broker.call<string>('greeter.welcome') as Promise<string>)
        .then((res) => {
          assert(res === 'Welcome, Adam');
        }).catch((error) => {
          assert(error instanceof Errors.ValidationError);
        });
    });

  });
});
