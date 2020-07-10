//
import Application from './foundation/Application';
import ConfigServiceProvider from './config/ConfigServiceProvider';
import Command from "./command/Command";
import ServiceProvider from "./constracts/ServiceProvider";
import EventInterface from "./events/EventInterface";
import ListenerInterface from "./events/Listener";
import Model from "./models/Model";
import Collection from "./models/Collection";
import HttpAdapter from "./io/http/Adapter";
import Request from "./io/http/Request";
import Response  from './io/http/Response'

const app = Application.getInstance();
app.registerProvider(ConfigServiceProvider);
export {
    Command,
    ServiceProvider,
    EventInterface,
    ListenerInterface,
    Model,
    Collection,
    HttpAdapter,
    Response,
    Request,
    app
};

export default app;