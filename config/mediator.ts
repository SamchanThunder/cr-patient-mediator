// Mediator Config
export const mediatorConfig = {
  urn: 'urn:mediator:cr-mediator',
  version: '1.0.0',
  name: 'OpenMRS to Client Registry Mediator',
  description: 'Updates OpenMRS patient on Client Registry',
  defaultChannelConfig: [
    {
      name: 'Mediator',
      urlPattern: '^/mediator/.*$',
      routes: [
        {
          name: 'CR Patient Mediator',
          host: 'mediator',
          pathTransform: 's/\\/mediator/',
          port: 6010,
          primary: true,
          type: 'http',
        },
      ],
      allow: ['interop'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      type: 'http',
    },
  ],
  endpoints: [
    {
      name: 'CR Patient Mediator',
      host: 'mediator',
      path: '/',
      port: '6010',
      primary: true,
      type: 'http',
    },
  ],
};
