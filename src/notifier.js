
import { Notifier } from '@airbrake/browser';

const airbrake = new Notifier({
  projectId: 1, // any number will do
  projectKey: '{REPLACE_PROJECT_KEY}',
  environment: 'production',
  host: 'https://abdullahsheik312.github.io/cloneflix/',
  remoteConfig: false,
  performanceStats: false,
  queryStats: false,
  queueStats: false,
});
