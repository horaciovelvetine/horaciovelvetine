class Company < ApplicationRecord
  belongs_to :contact_info

  has_many :jobs
  has_many :links
  has_many :links
  has_many :experiences

end
