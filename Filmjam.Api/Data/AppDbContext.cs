using Microsoft.EntityFrameworkCore;
using Filmjam.Api.Models;


namespace Filmjam.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<User> Users => Set<User>();
}