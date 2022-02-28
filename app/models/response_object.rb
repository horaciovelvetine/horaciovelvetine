class ResponseObject < ApplicationRecord
  attr_accessor :admin, :tags, :links, :resultsIds, :tagsIds

  def self.cache
    cache = ResponseObject.new(admin: Admin.all.first, tags: Tag.all, links: Link.all)
  end

  def self.searchResults(query)
    links = Link.find_bookmarks(query).map{ |bmrk| bmrk }
    if links.empty?
      attributes = {resultsIds: "none"}
    else
      tags = [] 
      links.each do |link|
        link.tags.each do |tag|
          tags.include?(tag) ? next : tags << tag
        end
      end
      attributes = {resultsIds: links.map { |link| {id: link.id, name: link.name}}, tagsIds: tags.map { |tag| {id: tag.id, name: tag.name}}}
    end

    results = ResponseObject.new(attributes)
  end
end
