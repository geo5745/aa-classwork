# == Schema Information
#
# Table name: nobels
#
#  yr          :integer
#  subject     :string
#  winner      :string

require_relative './sqlzoo.rb'

def physics_no_chemistry
  # In which years was the Physics prize awarded, but no Chemistry prize?
  execute(<<-SQL)
    
  --SELECT yr from nobels where subject = 'Physics'
  --EXCEPT
  --SELECT yr from nobels where subject = 'Chemistry'

  select yr 
  from nobels 
  where subject like 'Physics' and yr 
  not in(select yr from nobels where subject like 'Chemistry' group by yr)
  group by yr
  ------- -----

  SQL
end
