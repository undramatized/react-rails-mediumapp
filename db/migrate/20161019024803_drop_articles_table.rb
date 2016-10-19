class DropArticlesTable < ActiveRecord::Migration[5.0]
  def up
    drop_table :articles
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
