using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TanCuong.Controllers
{
    [Route("api/[Controller]")]
    public class HomeController : Controller
    {
    // GET: /<controller>/

        [HttpGet]
        public IActionResult Greetings()
        {
          return Ok("Hello from ASP.NET Core Web API.");
        }
     }
}
