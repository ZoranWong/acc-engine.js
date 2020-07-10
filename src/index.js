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
export default app;
exports.Command = Command;
exports.ServiceProvider = ServiceProvider;
exports.EventInterface = EventInterface;
exports.ListenerInterface = ListenerInterface;
exports.Model = Model;
exports.Collection = Collection;
exports.HttpAdapter = HttpAdapter;
exports.Request = Request;
exports.Response = Response;