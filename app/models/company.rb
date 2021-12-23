class Company < ApplicationRecord
  belongs_to :contact_info

  has_many :jobs
  has_many :notes
  has_many :links
  
end
