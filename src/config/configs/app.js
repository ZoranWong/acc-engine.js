import WorkerServiceProvider from '../../worker/WorkerServiceProvider';
import HttpServiceProvider from '../../io/http/HttpServiceProvider';
import CommandServiceProvider from '../../command/CommandServiceProvider';
import EventServiceProvider from '../../events/EventServiceProvider';
import ModelServiceProvider from '../../models/ModelServiceProvider';
import ValidationServiceProvider from "../../validation/ValidationServiceProvider";
import CacheServiceProvider from "../../cache/CacheServiceProvider";

export default {
    bootstrapProviders: [
        CacheServiceProvider,
        WorkerServiceProvider,
        HttpServiceProvider,
        CommandServiceProvider,
        EventServiceProvider,
        ModelServiceProvider,
        ValidationServiceProvider
    ],
    providers: []
}
