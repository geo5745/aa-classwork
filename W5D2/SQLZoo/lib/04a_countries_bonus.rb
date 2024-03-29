# == Schema Information
#
# Table name: countries
#
#  name        :string       not null, primary key
#  continent   :string
#  area        :integer
#  population  :integer
#  gdp         :integer

require_relative './sqlzoo.rb'

def highest_gdp
  # Which countries have a GDP greater than every country in Europe? (Give the
  # name only. Some countries may have NULL gdp values)
  execute(<<-SQL)
    select name
    from countries
    where gdp is not null and
    gdp > (select max(gdp) from countries where continent like 'Europe')
  SQL
end

def largest_in_continent
  # Find the largest country (by area) in each continent. Show the continent,
  # name, and area.
  # execute(<<-SQL)
  #   select continent, name, area 
  #   from countries 
  #   where area in(
  #   select max(area) from countries group by continent);
  # SQL

  execute(<<-SQL)
    select
      a.continent, a.name, a.area
    from
      countries a
    inner join 
    (select continent, max(area) as maxx from countries group by continent) b
    on a.continent = b.continent
    where
      a.continent = b.continent AND
      a.area = maxx;
  SQL
end

def large_neighbors
  # Some countries have populations more than three times that of any of their
  # neighbors (in the same continent). Give the countries and continents.
  execute(<<-SQL)
  SQL
end
