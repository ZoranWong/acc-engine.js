import WorkerServiceProvider from '../../worker/WorkerServiceProvider';
import HttpServiceProvider from '../../io/http/HttpServiceProvider';
import SocketServiceProvider from '../../io/socket/SocketServiceProvider';
import LogsServiceProvider from '../../logs/LogsServiceProvider';
import CommandServiceProvider from '../../command/CommandServiceProvider';
export default {
    providers: [
        WorkerServiceProvider,
        HttpServiceProvider,
        CommandServiceProvider
    ]
}
