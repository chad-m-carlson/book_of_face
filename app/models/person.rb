class Person < ApplicationRecord

  has_many :friends, dependent: :destroy
  has_many :users, through: :friends
  has_many :comments, through: :friends


  def self.show_new_people(user_id)
    Person.find_by_sql("
    with a as (select person_id
      from friends),
      b as (
      select person_id
      from friends
      where user_id = #{user_id}),
      c as (select * 
      from a 
      except 
      select *
      from b),
      d as
      (select p.*
      from c
      left join people as p
      on p.id = c.person_id),
      e as (
      select p.*
      from people as p
      left join friends as f
      on p.id = f.person_id
      where f.user_id is null),
      f as (
      select *
      from d
      union
      select *
      from e),
      g as (select count (friends) as friends_count, person_id
from friends
group by person_id)
      select *
      from f
      left join g
      on g.person_id = f.id
    
    "
      )
    end
  end
  
  # "with a as (select person_id
  # from friends),
  # b as (
  # select person_id
  # from friends
  # where user_id = #{user_id}),
  # c as (select * 
  # from a 
  # except 
  # select *
  # from b),
  # d as
  # (select p.*
  # from c
  # left join people as p
  # on p.id = c.person_id),
  # e as (
  # select p.*
  # from people as p
  # left join friends as f
  # on p.id = f.person_id
  # where f.user_id is null)
  # select *
  # from d
  # union
  # select *
  # from e"