class LinkGroup < ApplicationRecord
  belongs_to :admin
  has_and_belongs_to_many :links
end
