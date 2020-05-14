//
import Application from './foundation/Application';
import ConfigServiceProvider from './config/ConfigServiceProvider';
let app = Application.getInstance();
app.providers = [
    ConfigServiceProvider
];
export default Application;
