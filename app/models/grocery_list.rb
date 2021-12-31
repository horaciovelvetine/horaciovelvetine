class GroceryList < ApplicationRecord
  belongs_to :task

  has_many :recipes
  has_many :ingredients
end
