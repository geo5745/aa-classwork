class EditUsers2 < ActiveRecord::Migration[5.2]
  def change
    add_index :users, :user_name, unique:true
  end
end
