class Context < ApplicationRecord
	belongs_to :admin

	has_and_belongs_to_many :links
	has_and_belongs_to_many :notes
	has_and_belongs_to_many :date_utils

	has_and_belongs_to_many :recipes

	validates :name, uniqueness: true

end