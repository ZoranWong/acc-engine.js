//
import Application from './foundation/Application';
import ConfigServiceProvider from './config/ConfigServiceProvider';
const app = Application.getInstance();
app.registerProvider(ConfigServiceProvider);
export default app;
