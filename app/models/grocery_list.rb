class GroceryList < ApplicationRecord
  belongs_to :to_do

  has_many :recipes
  has_many :ingredients
end
