using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MovieDatabase.Api.Controllers
{
    [Route("api/movies")]
    public class MoviesController : Controller
    {
        [HttpGet()]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }
    }
}
