using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using signalR.Models;

namespace signalR.HubConfig
{
    public class ChartHub : Hub
    {
        public async Task BroadcastChartData(List<ChartModel> data) => 
            await Clients.All.SendAsync("broadcastchartdata", data);
    }
}