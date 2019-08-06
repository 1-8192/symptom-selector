class CreateDiagnoses < ActiveRecord::Migration[5.2]
  def change
    create_table :diagnoses do |t|
      t.string :name
      t.integer :frequency
      t.references :symptom, foreign_key: true

      t.timestamps
    end
  end
end
