class LinkGroup < ApplicationRecord
  belongs_to :admin
  has_many :links
end
