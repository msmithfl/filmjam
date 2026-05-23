using Microsoft.EntityFrameworkCore;
using Filmjam.Api.Data;
using Filmjam.Api.Endpoints;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

// Add AppDbContext
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

// Run migrations on startup
await app.MigrateDbAsync();

// Map webhook endpoints
app.MapWebhookEndpoints();

app.Run();