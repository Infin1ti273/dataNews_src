import json


class GenerateSeries:
    months = ["Apr-00", "May-00", "Jun-00", "Jul-00", "Aug-00", "Sep-00", "Oct-00", "Nov-00", "Dec-00", "Jan-01",
              "Feb-01", "Mar-01", "Apr-01", "May-01", "Jun-01", "Jul-01", "Aug-01", "Sep-01", "Oct-01", "Nov-01",
              "Dec-01", "Jan-02", "Feb-02", "Mar-02", "Apr-02", "May-02", "Jun-02", "Jul-02", "Aug-02", "Sep-02",
              "Oct-02", "Nov-02", "Dec-02", "Jan-03", "Feb-03", "Mar-03"]
    types = ["Animation", "Children's", "Comedy", "Adventure", "Fantasy", "Romance", "Drama", "Action", "Crime",
             "Thriller", "Horror", "Sci-Fi", "Documentary", "War", "Musical", "Mystery", "Film-Noir", "Western"]
    rating_list = []
    movie_list = []
    series = []
    query = 1

    def __init__(self):
        all_ratings = open('ratings2.csv', 'r')
        all_movies = open('movies.csv', 'r')
        self.rating_list = self.generate_rate_list(all_ratings)
        self.movie_list = self.generate_movie_list(all_movies)
        all_ratings.close()
        all_movies.close()

        for month in self.months:
            self.series.append([])
        for type in self.types:
            for i in range(0, len(self.months)):
                self.series[i].append([0, 0, [], type])
        self.merge()

    def merge(self):
        for rate in self.rating_list:
            movie_types = ""
            for movie in self.movie_list:
                if rate[1] == movie[0]:
                    movie_types = movie[2].split('|')
                    break
            print([self.query])
            # + rate + movie_types)
            self.query += 1
            for movie_type in movie_types:
                type_index = self.types.index(movie_type)
                aim_array = self.series[self.months.index(rate[3])][type_index]
                if not self.get_movie_name(rate[1]) in aim_array[2]:
                    aim_array[2].append(self.get_movie_name(rate[1]))
                aim_array[1] += int(rate[2])
                aim_array[0] += 1
        for type in self.types:
            for i in range(0, len(self.months)):
                self.series[i][self.types.index(type)][2] = len(self.series[i][self.types.index(type)][2])
                if not self.series[i][self.types.index(type)][0] == 0:
                    self.series[i][self.types.index(type)][1] = \
                        self.series[i][self.types.index(type)][1] / self.series[i][self.types.index(type)][0]
        fout = open('output.json', 'w')
        fout.write(str(json.dumps(self.series)))
        fout.close()

    def get_movie_name(self, num):
        for movie in self.movie_list:
            if num == movie[0]:
                return movie[1]

    @staticmethod
    def generate_rate_list(all_ratings):
        rating_list = []
        for line in all_ratings:
            rating_list.append(line.rstrip('\n').split(','))
        return rating_list

    @staticmethod
    def generate_movie_list(all_movies):
        movie_list = []
        for line in all_movies:
            movie_list.append(line.rstrip('\n').split('_'))
        return movie_list


GenerateSeries()
