class CreateAnswerChoices < ActiveRecord::Migration[6.0]
  def change
    create_table :answer_choices do |t|
      t.integer :question_id, null:false
      t.string :choice_text, null:false
      t.timestamps
    end
  end
end
