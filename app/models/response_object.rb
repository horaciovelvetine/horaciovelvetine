class ResponseObject < ApplicationRecord
  attr_accessor :admin, :tags, :links

  def self.cache
    cache = ResponseObject.new(links: Link.all, tags: Tag.all)
    cache.id = rand(1..999)

    cache
  end

  def self.searchResults(query)
  
    results = Link.find_bookmarks(query)
    response = ResponseObject.new(links: results)
  end
end
