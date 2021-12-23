class Link < ApplicationRecord
  belongs_to :context
  belongs_to :linkable, polymorphic: true

  has_and_belongs_to_many :tags
  has_and_belongs_to_many :link_groups
end
