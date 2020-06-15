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

# A note on subqueries: we can refer to values in the outer SELECT within the
# inner SELECT. We can name the tables so that we can tell the difference
# between the inner and outer versions.



def larger_than_russia
  # List each country name where the population is larger than 'Russia'.
  execute(<<-SQL)
    select 
      name
    from
      countries
    where
      population >
    (select 
      population
    from
      countries
    where
      name like 'Russia')
  SQL
end

def richer_than_england
  # Show the countries in Europe with a per capita GDP greater than
  # 'United Kingdom'.
  execute(<<-SQL)
  select
    name
  from
    countries
  where
    continent like 'Europe' and
    gdp / population >
  (select gdp / population
      from
    countries
      where
    name like 'United Kingdom')
  
  SQL
end








 

def population_constraint
  # Which country has a population that is more than Canada but less than
  # Poland? Show the name and the population.
  execute(<<-SQL)
    select name, population
    from countries
    where population > 
      (select population
    from countries
    where name like 'Canada') AND
    population < 
    (select population
    from countries
    where name like 'Poland')
  SQL
end

def sparse_continents
  # Find every country that belongs to a continent where each country's
  # population is less than 25,000,000. Show name, continent and
  # population.
  # Hint: Sometimes rewording the problem can help you see the solution.
  execute(<<-SQL)
  select name, continent, population 
  from countries 
  where continent 
  not in 
  (select continent from countries where population > 25000000 group by continent)
  
  
  SQL
end
