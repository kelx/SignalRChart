using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using signalR.DataStorage;
using signalR.HubConfig;
using signalR.TimerFeatues;

namespace signalR.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ChartController : ControllerBase
    {
        private readonly IHubContext<ChartHub> _hub;

        public ChartController(IHubContext<ChartHub> hub)
        {
            _hub = hub;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var timerManager = new TimerManager(() => _hub.Clients.All.SendAsync
                                    ("transferchartdata", DataManager.GetData()));
            return Ok(new {Message = "Request Completed"});
        }
    }
}