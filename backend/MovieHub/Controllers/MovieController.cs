using System.Linq;
using MovieHub.Data;
using MovieHub.Models;
using Microsoft.AspNetCore.Mvc;

namespace MovieHub.Controllers
{
  [ApiController]
  [Route("api/movie")]
  public class MovieController : ControllerBase
  {
    private readonly DataContext _context;

    public MovieController(DataContext context) => _context = context;

    [HttpPost]
    public IActionResult Create([FromBody] Movie movie)
    {
      _context.Movies.Add(movie);
      _context.SaveChanges();
      return Created("", movie);
    }

    [HttpGet]
    public IActionResult GetAll() => Ok(_context.Movies.ToList());
  }
}
