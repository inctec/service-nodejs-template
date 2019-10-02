import assert from 'assert';
import config from 'config';
import { DEVICES_REGISTERED } from 'idn-sdk/lib/devices/types';
import { ServiceBroker } from 'moleculer';
import { v4 } from 'uuid';

const broker = new ServiceBroker({
  nodeID: 'app',
  transporter: config.get('transporter'),
  logger: false,
});

/*
TESTS
*/

describe('device service test', () => {
  before(() => broker.start());
  after(() => broker.stop());

  describe('Test "devices.register" action', () => {

    it('should return with a registered device', async () => {
      const deviceId = v4();
      const businessId = v4();
      // We use here the type `Record<string, any>` as generic type for an object structure
      // The exact type of the call response should be used if known
      const expected: Record<string, any> = { deviceId, businessId, type: 'dummy' };
      const response = await broker.call<DEVICES_REGISTERED>('devices.register', {
        body: expected,
      });
      Object.keys(expected).forEach((e) => {
        assert.strictEqual(expected[e], response[e]);
      });
    });

  });

});
