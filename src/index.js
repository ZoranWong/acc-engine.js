//
import Application from './foundation/Application';
import ConfigServiceProvider from './config/ConfigServiceProvider';
import command from "./command/Command";
import serviceProvider from "./constracts/ServiceProvider";
import event from "./events/EventInterface";
import listener from "./events/Listener";
import model from "./models/Model";
import collection from "./models/Collection";
import httpAdapter from "./io/http/Adapter";
import request from "./io/http/Request";
import response  from './io/http/Response'

const app = Application.getInstance();
app.registerProvider(ConfigServiceProvider);
export const Command = command;
export const EventInterface = event;
export const ServiceProvider = serviceProvider;
export const ListenerInterface = listener;
export const Model = model;
export const Collection = collection;
export const HttpAdapter = httpAdapter;
export const Request = request;
export const Response = response;
export default app;