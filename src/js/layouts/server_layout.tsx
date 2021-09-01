// @ts-nocheck
import BaseLayout from "./base_layout.js";
import ServerSelect from "../components/server_select.js";
import ServerChannelSelect from "../components/server_channel_select.js";

export default class ServerLayout extends BaseLayout {
    render() {
        return (
            <div class="gui">
                <ServerSelect servers={[...this.client.cache.servers.values()]} dms={[]} />
                <ServerChannelSelect channels={[...this.client.cache.channels.values()]} categories={[]} />
            </div>
        )
    }
}
