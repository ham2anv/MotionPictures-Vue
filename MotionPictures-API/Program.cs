using Microsoft.EntityFrameworkCore;
using MotionPictures_API.Data;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<MotionPictures_APIContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("MotionPictures_APIContext") ?? throw new InvalidOperationException("Connection string 'MotionPictures_APIContext' not found.")));

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("VueCorsPolicy", builder =>
    {
        builder
        .AllowAnyHeader()
        .AllowAnyMethod()
        .WithOrigins("https://localhost:5002");
    });
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors("VueCorsPolicy");

app.MapControllers();

app.Run();
