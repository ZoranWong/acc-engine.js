import WorkerServiceProvider from '../../worker/WorkerServiceProvider';
import HttpServiceProvider from '../../io/http/HttpServiceProvider';
import CommandServiceProvider from '../../command/CommandServiceProvider';
import EventServiceProvider from '../../events/EventServiceProvider';
import ModelServiceProvider from '../../models/ModelServiceProvider';
export default {
    providers: [
        WorkerServiceProvider,
        HttpServiceProvider,
        CommandServiceProvider,
        EventServiceProvider,
        ModelServiceProvider
    ]
}
