﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MovieDatabase.Api.Data;
using MovieDatabase.Api.Services;

namespace MovieDatabase.Api
{
    public class Startup
    {
        public static IConfiguration Configuration { get; private set; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // This is called at runtime. Used to ad services to the container:
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddCors();

            var connectionString = Startup.Configuration["connectionStrings:movieDatabaseDBConnectionString"];
            services.AddDbContext<MovieDbContext>(o => o.UseSqlServer(connectionString));

            services.AddScoped<IMovieDatabaseRepository, MovieDatabaseRepository>();
        }

        // This is called at runtime. Used to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, MovieDbContext movieDbContext)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStatusCodePages();

            AutoMapper.Mapper.Initialize(config => {
                config.CreateMap<Data.Movie, Models.MovieDto>().ReverseMap();
            });

            app.UseCors(
                options => options.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader()
            );

            app.UseMvc();
        }
    }
}
