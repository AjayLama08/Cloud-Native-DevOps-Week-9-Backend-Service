import { app } from '@azure/functions';
import type { HttpResponseInit } from '@azure/functions';

// Liveness only: this does not check dependencies
const healthLiveHandler = (): HttpResponseInit => ({
  status: 200,
  jsonBody: { status: 'live' },
});

app.http('healthLiveHttp', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'health/live',
  handler: healthLiveHandler,
});
