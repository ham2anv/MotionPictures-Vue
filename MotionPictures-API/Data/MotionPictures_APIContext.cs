using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MotionPictures_API.Models;

namespace MotionPictures_API.Data
{
    public class MotionPictures_APIContext : DbContext
    {
        public MotionPictures_APIContext (DbContextOptions<MotionPictures_APIContext> options)
            : base(options)
        {
        }

        public DbSet<MotionPictures_API.Models.MotionPicture> MotionPicture { get; set; } = default!;
    }
}
