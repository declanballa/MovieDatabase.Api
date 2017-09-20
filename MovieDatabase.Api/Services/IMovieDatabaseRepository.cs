using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MovieDatabase.Api.Data;

namespace MovieDatabase.Api.Services
{
    public interface IMovieDatabaseRepository
    {
        IEnumerable<Movie> GetMovies();
        // City GetCity(int cityId, bool includePointsOfInterest);
        // IEnumerable<PointOfInterest> GetPointsOfInterestForCity(int cityId);
        // PointOfInterest GetPointOfInterestForCity(int cityId, int pointOfInterestId);
        // void AddPointOfInterestForCity(int cityId, PointOfInterest pointOfInterest);
        // void DeletePointOfInterest(PointOfInterest pointOfInterest);
        // bool Save();
    }
}
