using MovieHub.Models;
using Microsoft.EntityFrameworkCore;

namespace MovieHub.Data
{
  public class DataContext : DbContext
  {
    public DataContext(DbContextOptions<DataContext> options) : base(options) { }

    public DbSet<Movie> Movies { get; set; }
  }
}
