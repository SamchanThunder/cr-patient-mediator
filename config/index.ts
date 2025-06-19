export const mediatorConfig = {
  urn: 'urn:mediator:mrs-patient-mediator',
  version: '1.0.0',
  name: 'OpenMRS Patient Mediator',
  description: 'Automatically Posts Patient Information to OpenHIM FHIR Server',
  defaultChannelConfig: [
    {
      name: 'Mediator',
      urlPattern: '^/mediator/.*$',
      routes: [
        {
          name: 'MRS Patient Mediator',
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
      name: 'MRS Patient Mediator',
      host: 'mediator',
      path: '/',
      port: '6010',
      primary: true,
      type: 'http',
    },
  ],
};
