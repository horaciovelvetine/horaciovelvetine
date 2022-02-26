class Link < ApplicationRecord
  include PgSearch::Model
  belongs_to :linkable, polymorphic: true, optional: true

  has_and_belongs_to_many :tags
  has_and_belongs_to_many :link_groups
  has_and_belongs_to_many :contexts

  pg_search_scope :find_bookmarks, against: {name: 'A', href:'B'}, using: { tsearch: {prefix: true }}
end
