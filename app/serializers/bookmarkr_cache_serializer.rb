class BookmarkrCacheSerializer < ActionController::Base
  include JSONAPI::Serializer
  set_type :cache
  set_id :id
  # attributes :tags, :links
  attribute :tags do |obj|
    tags = obj.tags.map { |tag| {id: tag.id, name: tag.name, links: only_ids(tag, "tags")}}
    binding.pry
  end

  attribute :links do |obj|
    links = obj.links.map{ |link| {id: link.id, name: link.name, href: link.href, tags: only_ids(link, "links") }}
    binding.pry
  end

  def self.only_ids(obj, str)
    ids = link.send(str).map { |o| {id: o.id}}
  end

end
