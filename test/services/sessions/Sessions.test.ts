import nock from 'nock';

import { PlexSDK } from '../../../src';

import { SessionsService } from '../../../src/services/sessions/Sessions';

describe('test SessionsService object', () => {
  it('should be an object', () => {
    expect(typeof SessionsService).toBe('function');
  });
});

describe('test Sessions', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PlexSDK({});

    nock.cleanAll();
  });

  describe('test getSessions', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/status/sessions')
        .reply(200, { data: {} });
      return sdk.sessions.getSessions().then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getSessionHistory', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/status/sessions/history/all')
        .reply(200, { data: {} });
      return sdk.sessions
        .getSessionHistory()
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test getTranscodeSessions', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .get('/transcode/sessions')
        .reply(200, { data: {} });
      return sdk.sessions
        .getTranscodeSessions()
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });
  });

  describe('test stopTranscodeSession', () => {
    test('test api call', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .delete('/transcode/sessions/sint')
        .reply(200, { data: {} });
      return sdk.sessions
        .stopTranscodeSession('sint')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .delete('/transcode/sessions/aliquid')
        .reply(200, { data: {} });
      return expect(async () => await sdk.sessions.stopTranscodeSession()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('{protocol}://{ip}:{port}')
        .delete('/transcode/sessions/ex')
        .reply(404, { data: {} });
      return expect(async () => await sdk.sessions.stopTranscodeSession('ex')).rejects.toThrow();
    });
  });
});
