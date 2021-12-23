class Link < ApplicationRecord
  belongs_to :linkable, polymorphic: true

  has_and_belongs_to_many :tags
  has_and_belongs_to_many :link_groups
  has_and_belongs_to_many :links
end
